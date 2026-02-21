# Delivery Intelligence SaaS

A web-based platform for software houses to manage projects, resources, budgets, and timelines with intelligent insights and analytics.

---

## 🚀 Features

### 1. **User & Role Management**
- Multi-role support:
  - **Admin** – manage users, clients, projects
  - **Project Manager (PM)** – create projects, milestones, assign tasks
  - **Developer** – update task status, log work hours
  - **Finance** – track budgets, margins, profits
  - **Client** – submit project requests, track progress
- Role-based access control using middleware (Golang backend)

### 2. **Project Lifecycle**
- **Pre-Sales / Lead Stage**
  - Client submits request
  - Admin/PM logs lead & estimates scope, budget, and hours
  - Project created upon approval
- **Project Setup**
  - Milestones & Sprints creation
  - Task breakdown and developer assignment
- **Task & Time Tracking**
  - Developers log time and update task status
  - Automated cost and budget tracking

### 3. **Intelligence & Analytics**
- **Overbudget / Underbudget detection**
- **Profit margin and burn rate calculation**
- **Developer workload monitoring**
- **Delay risk alerts**
- Dashboards for Owner & Finance roles with detailed metrics

### 4. **Client Features**
- View project status and progress
- Approve / reject change requests
- Track milestones and deadlines

### 5. **Authentication**
- Secure registration & login
- JWT-based auth stored in client-side state (Zustand)
- Role-based middleware for access control

---

## Technology Stack

**Frontend**
- [Next.js App Router](https://nextjs.org/)
- [Shadcn UI Components](https://shadcn-ui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) State management
- [TanStack Query](https://tanstack.com/query/latest) API fetching

**Backend**
- [Golang](https://gin-gonic.com/en/)
- [Neon](https://neon.com/) Postgresql's Cloud
- [Postgresql](https://www.postgresql.org/) Database

**DevOps / Tools**
- GitHub / GitLab for source control
- Environment variables stored in `.env` (never push to repo)

---
