<div align="center">

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5Z3Z5Z3Z5Z3Z5Z3Z5Z3Z5Z3Z5Z3Z5Z3Z5Z3Z5/3o7TKSjRrfIPjeiVyM/giphy.gif" width="100" alt="Career Growth Animation">

  <h1 style="font-size: 3rem; font-weight: 900; color: #2563EB; margin-bottom: -10px;">
    The Ultimate Job Tracker
  </h1>
  
  <p style="font-size: 1.2rem; font-style: italic; color: #666;">
    "A Full-Stack SaaS Architecture for the Modern Career Hunter."
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Prisma_ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
    <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  </p>

  <a href="https://github.com/chamikathereal/job-application-tracker/issues">
    <img src="https://img.shields.io/badge/🐞_Report_Bug-F44336?style=for-the-badge" alt="Report Bug">
  </a>
  <a href="https://github.com/chamikathereal/job-application-tracker/issues">
    <img src="https://img.shields.io/badge/✨_Request_Feature-FF9800?style=for-the-badge" alt="Request Feature">
  </a>

</div>

<br />

---

## 🔮 The Vision

This project represents the bridge between **Frontend Beauty** and **Backend Logic**. It is a fully functional **SaaS (Software as a Service)** prototype designed to solve a real-world problem: the chaos of job hunting.

Instead of a static UI, this application implements a **Secure Full-Stack Architecture**. It features a decoupled client-server model where a React frontend communicates with a robust Node.js API, proving complete mastery of the web development lifecycle.

### 💎 The "Wow" Factors

| Feature | Description |
| :--- | :--- |
| **🔐 Iron-Clad Security** | Implements **JWT (JSON Web Tokens)** authentication and **Bcrypt** password hashing. Your data is locked behind a digital vault. |
| **👥 Multi-User Isolation** | A true SaaS architecture. Multiple users can register and login, but the database strictly isolates data—**User A never sees User B's jobs.** |
| **⚡ Instant CRUD** | Create, Read, Update, and Delete operations happen instantly. The UI reflects backend changes in real-time without friction. |
| **🧠 Smart Interceptors** | Powered by **Axios Interceptors**, the frontend automatically injects security tokens into every request, ensuring seamless and secure communication. |

---

## 🛠️ The Arsenal (Tech Stack)

<div align="center">

| Domain | Tech | Why? |
| :--- | :---: | :--- |
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | App Router & Server Actions. |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Scalable REST API runtime. |
| **Database** | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) | Type-safe ORM & Modeling. |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Rapid utility-first design. |
| **Auth** | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) | Stateless session management. |
| **Icons** | ![Lucide](https://img.shields.io/badge/Lucide-F75C7E?style=flat&logo=lucide&logoColor=white) | Clean, modern iconography. |

</div>

---

## 🏗️ Project Architecture

A Monorepo structure separating the "Brain" (Server) from the "Face" (Client).

```bash
JOB-APPLICATION-TRACKER/
├── 📂 client/                  # 🎨 The Frontend (Next.js)
│   ├── 📂 src/app/
│   │   ├── 📂 login/           # Auth Pages
│   │   ├── 📂 register/
│   │   └── page.tsx            # Protected Dashboard
│   ├── 📂 components/          # 🧩 Reusable UI
│   │   ├── JobCard.tsx
│   │   ├── JobForm.tsx
│   │   └── Navbar.tsx
│   ├── 📂 lib/                 # 🔌 API Connectors
│   │   └── axios.ts            # The "Security Guard" (Interceptors)
│   └── 📂 types/               # TypeScript Definitions
│
├── 📂 server/                  # 🧠 The Backend (Node.js)
│   ├── 📂 prisma/              # 🗄️ Database Engine
│   │   ├── dev.db              # SQLite Database
│   │   └── schema.prisma       # Data Models (User + Job)
│   └── server.js               # API Routes & Auth Logic
│
└── .gitignore                  # Security Rules
```

## 🧠 Leveling Up: Learning Outcomes

Building this project demonstrated advanced Full-Stack competencies:

- [x] **Authentication Flow:** Implementing secure Login/Register systems from scratch using Bcrypt and JWT.
- [x] **Relational Data Modeling:** Using Prisma to link Users to their specific Job Applications (One-to-Many Relationships).
- [x] **API Protection:** Writing Express Middleware (`authenticateToken`) to reject unauthorized access to private routes.
- [x] **State Management:** Handling complex React state for editing, deleting, and updating UI lists dynamically.

## 🚀 Getting Started

Since this is a Full-Stack app, you need to run the **Backend** and **Frontend** simultaneously.

### 1. Clone the Repository

```bash
git clone https://github.com/chamikathereal/job-application-tracker.git
cd job-application-tracker
```

### 2. Setup the Backend (The Brain)
Open a terminal and run:

```bash
cd server
npm install                 # Install dependencies
npx prisma migrate dev      # Create the Database
npx nodemon server.js       # Start the API
```
Server will run on http://localhost:5000

### 3. Setup the Frontend (The Face)
Open a **new** terminal tab and run:

```bash
cd client
npm install                 # Install dependencies
npm run dev                 # Start Next.js
```
App will run on http://localhost:3000

## 🧑‍💻 Author

<div align="center">

  <img src="https://github.com/chamikathereal.png" width="120px" style="border-radius: 50%; border: 4px solid #2563EB; box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);" alt="Chamika Gayashan">

  ### **Chamika Gayashan**
  *Software Engineer | Sri Lanka*
  
  > *"Code is poetry, and I'm just trying to make it rhyme."* 🚀

  <p>
    <a href="https://www.linkedin.com/in/chamikathereal">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
    </a>
    <a href="https://github.com/chamikathereal">
      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
    <a href="https://medium.com/@chamikathereal">
      <img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium">
    </a>
  </p>
  <p>
    <a href="https://www.instagram.com/chamikathereal/">
      <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
    </a>
    <a href="https://www.facebook.com/chamikathereaI">
      <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook">
    </a>
  </p>

  <br />

  <code>Last Updated: Sunday, January 18, 2026</code>

</div>

---

<p align="center">
  <sub>Built with ❤️ and ☕ by Chamika Gayashan. Star this repo if you found it useful! ⭐</sub>
</p>
