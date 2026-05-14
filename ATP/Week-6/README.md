# Week 6 – React State Management & MERN Stack

This week focuses on **React Context API**, **state management patterns**, and building a **full-stack MERN application** with a RESTful backend and a React frontend.

---

## Folder Structure

```
Week-6/
├── userCountReact/                    # Fetch users from API with Context
├── counterStateSyncContextStore/      # Synchronized counter using shared Context
├── contextCounter/                    # Combined counters, form, and user count
├── userFormWithDynamicTable/          # React form with dynamic table rendering
├── mernMiniEmployeeApp/               # Full-stack MERN CRUD app
│   ├── backend/                       # Express + MongoDB API
│   └── frontend/                      # React + Vite UI
└── README.md
```

---

## Projects Overview

| # | Project | Description |
|---|---------|-------------|
| 1 | `userCountReact/` | Fetch users from an API and track selection count using React Context |
| 2 | `counterStateSyncContextStore/` | Synchronized counter across 4 components using a shared Context store |
| 3 | `contextCounter/` | Combined app with counters, a user form with dynamic table, and user count |
| 4 | `userFormWithDynamicTable/` | React form with dynamic table rendering using components |
| 5 | `mernMiniEmployeeApp/` | Full-stack MERN app with CRUD operations on employee records |

---

## Concepts Covered

- **React Context API** – Creating and consuming shared state across components
- **`useContext` Hook** – Accessing context values deep in the component tree
- **`useEffect` Hook** – Side effects like data fetching and lifecycle management
- **`useState` Hook** – Managing local component state
- **React Router v7** – Client-side routing with nested layouts
- **React Hook Form** – Efficient form state management and validation
- **Zustand** – Lightweight global state management
- **RESTful API Design** – Express Router with full CRUD endpoints
- **Mongoose ODM** – MongoDB schema definition and database operations
- **CORS & Middleware** – Express CORS and body-parser setup

---

## Week Summary

Week 6 builds on React fundamentals by introducing **state-sharing patterns** via the Context API and explores how to structure a **real-world full-stack application** using the MERN stack with proper routing, form handling, and database integration.
