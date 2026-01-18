// server/server.js
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Job Tracker Backend is Running!');
});

// GET ALL JOBS
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await prisma.jobApplication.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

// CREATE A JOB
app.post('/api/jobs', async (req, res) => {
  const { company, position, status } = req.body;
  try {
    const newJob = await prisma.jobApplication.create({
      data: { company, position, status }
    });
    res.json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Error creating job' });
  }
});

// UPDATE A JOB
app.put('/api/jobs/:id', async (req, res) => {
  const { id } = req.params;
  const { status, company, position } = req.body;
  try {
    const updatedJob = await prisma.jobApplication.update({
      where: { id: parseInt(id) },
      data: { status, company, position }
    });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: 'Error updating job' });
  }
});

// DELETE A JOB
app.delete('/api/jobs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.jobApplication.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});