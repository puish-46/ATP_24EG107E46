# Blog App – Frontend

## Overview

A React + Vite frontend for the Blog App. Supports three user roles (User, Author, Admin) with protected routes, global auth state managed using Zustand, and full CRUD article management.

---

## Project Structure

```
src/
├── App.jsx                    # Routes and layout setup
├── store/
│   └── authStore.js           # Zustand global auth state
├── components/
│   ├── Login.jsx              # Login page
│   ├── Register.jsx           # Register page with image upload
│   ├── Header.jsx             # Navigation header (role-aware)
│   ├── Footer.jsx             # Footer
│   ├── Home.jsx               # Home / landing page
│   ├── Articles.jsx           # All articles listing
│   ├── ArticleByID.jsx        # Single article view with comments
│   ├── WriteArticles.jsx      # Author — write new article
│   ├── EditArticle.jsx        # Author — edit existing article
│   ├── AuthorArticles.jsx     # Author — view own articles
│   ├── AuthorProfile.jsx      # Author profile page
│   ├── AuthorList.jsx         # Admin — list of authors
│   ├── UserList.jsx           # Admin — list of users
│   ├── UserProfile.jsx        # User profile page
│   ├── AdminProfile.jsx       # Admin profile page
│   ├── ProtectedRoute.jsx     # Restricts routes by role
│   ├── RootLayout.jsx         # Common layout (Header + Outlet + Footer)
│   └── Unauthorized.jsx       # Access denied page
├── styles/
│   └── common.js              # Shared CSS-in-JS styles
└── main.jsx                   # App entry point
```

---

## Pages & Roles

| Page | Accessible By | Description |
|------|--------------|-------------|
| Login / Register | Public | Authentication pages |
| Home | All | Landing page |
| Articles | User | Browse all published articles |
| Article Detail | User | Read article + add comments |
| Write Article | Author | Create new article |
| Edit Article | Author | Modify own article |
| My Articles | Author | View/manage own articles |
| User List | Admin | View and block/activate users |
| Author List | Admin | View and manage authors |
| Profile | All roles | Role-specific profile page |

---

## Concepts Covered

- **React Router v7** — multi-page navigation with nested routes
- **Zustand** — global state for auth (login/logout/user info/token refresh)
- **Protected Routes** — role-based access (User / Author / Admin)
- **JWT via Cookies** — credentials sent with each request (`withCredentials: true`)
- **Axios** — API calls to backend
- **React Hook Form** — form state management
- **Component Composition** — shared Header, Footer, RootLayout wrapper
- **Cloudinary** — profile image upload on registration

---

## How to Run

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`
