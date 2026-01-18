// server/server.js
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;
const SECRET_KEY = "super-secret-key-change-this-later"; // In production, use .env

app.use(cors());
app.use(express.json());

// --- MIDDLEWARE: Protect Routes ---
// This checks if the user sent a valid Token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.sendStatus(401); // No token? Get out.

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token? Forbidden.
    req.user = user; // Attach user info to the request
    next();
  });
};

// --- AUTH ROUTES ---

// 1. REGISTER
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body;
  
  try {
    // 1. Check if user exists BEFORE trying to create
    const existingUser = await prisma.user.findUnique({ 
      where: { email } 
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // 2. If no user, proceed to create
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name }
    });
    
    res.json({ message: "User created successfully" });

  } catch (error) {
    console.error("Registration Error:", error); // Log the REAL error to console
    res.status(500).json({ error: "Something went wrong during registration" });
  }
});

// 2. LOGIN
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "Invalid password" });

    // Generate Token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// --- JOB ROUTES (Now Protected) ---

// GET MY JOBS
app.get('/api/jobs', authenticateToken, async (req, res) => {
  try {
    const jobs = await prisma.jobApplication.findMany({
      where: { userId: req.user.id }, // Only get jobs for THIS user
      orderBy: { createdAt: 'desc' }
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

// CREATE JOB
app.post('/api/jobs', authenticateToken, async (req, res) => {
  const { company, position, status } = req.body;
  try {
    const newJob = await prisma.jobApplication.create({
      data: { 
        company, 
        position, 
        status,
        userId: req.user.id // Link to the logged-in user
      }
    });
    res.json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Error creating job' });
  }
});

// UPDATE JOB
app.put('/api/jobs/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { status, company, position } = req.body;
  try {
    // Ensure user owns the job before updating
    const count = await prisma.jobApplication.count({
      where: { id: parseInt(id), userId: req.user.id }
    });

    if (count === 0) return res.status(403).json({ error: "Unauthorized" });

    const updatedJob = await prisma.jobApplication.update({
      where: { id: parseInt(id) },
      data: { status, company, position }
    });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: 'Error updating job' });
  }
});

// DELETE JOB
app.delete('/api/jobs/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const count = await prisma.jobApplication.count({
      where: { id: parseInt(id), userId: req.user.id }
    });

    if (count === 0) return res.status(403).json({ error: "Unauthorized" });

    await prisma.jobApplication.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});