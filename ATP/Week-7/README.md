# Week 7 – Full Stack Blog Application

## Overview

A full-stack Blog Application built with React (frontend) and Node.js + Express + MongoDB (backend). Supports three roles — **User**, **Author**, and **Admin** — each with different permissions and protected routes.

---

## Folder Structure

```
Week-7/
├── blogAppBackend/        # Node.js + Express + MongoDB REST API
│   ├── apis/              # Route handlers per role
│   ├── models/            # Mongoose schemas
│   ├── middlewares/       # JWT auth middleware
│   ├── config/            # Cloudinary & Multer config
│   └── server.js          # Entry point
├── blogAppFrontend/       # React + Vite UI
│   └── src/
│       ├── components/    # 18 React components
│       ├── store/         # Zustand auth store
│       └── styles/        # CSS styles
└── README.md
```

---

## Concepts Covered

- **Role-Based Access Control** — User, Author, Admin roles
- **JWT Authentication** — login, token stored in HTTP-only cookies
- **Protected Routes** — middleware on backend, `ProtectedRoute` on frontend
- **React Router** — multi-page navigation with nested layouts
- **Zustand** — global auth state management
- **Mongoose** — MongoDB schemas for Users and Articles
- **Cloudinary** — image upload for profile pictures
- **CORS & Cookie Parser** — cross-origin requests with credentials
- **Error Handling** — ValidationError, CastError, duplicate key handling

---

## How to Run

**Backend:**
```bash
cd blogAppBackend
npm install
node server.js
```

**Frontend:**
```bash
cd blogAppFrontend
npm install
npm run dev
```


**Deployment :**
```bash
Frontend: Vercel
https://blog-app-frontend-three-beta.vercel.app

Backend: Render
https://blog-app-backend-3iko.onrender.com
```