# Blog App – Backend

## Overview

A Node.js + Express REST API backend for the Blog App. Connects to MongoDB via Mongoose and supports role-based routes for Users, Authors, and Admins. Includes JWT authentication, Cloudinary image uploads, and comprehensive error handling.

---

## Project Structure

```
blogAppBackend/
├── apis/
│   ├── commonApi.js         # Login, Register, Logout, Auth check
│   ├── userApi.js           # User routes (read articles, add comments)
│   ├── authorApi.js         # Author routes (write, edit, delete articles)
│   └── adminApi.js          # Admin routes (manage users & authors)
├── middlewares/
│   └── verifyToken.js       # JWT auth middleware (role-based)
├── models/
│   ├── userModel.js         # Mongoose User schema
│   └── articleModel.js      # Mongoose Article schema (with comments)
├── config/
│   ├── cloudinary.js        # Cloudinary SDK config
│   ├── cloudinaryUpload.js  # Upload helper function
│   └── multer.js            # Multer memory storage config
├── server.js                # Express server entry point
├── .env                     # Environment variables
├── user-req.http            # Sample user API requests
├── author-req.http          # Sample author API requests
└── admin-req.http           # Sample admin API requests
```

---

## API Routes

| Base Path | Who Can Access | Purpose |
|-----------|---------------|---------|
| `/auth/users` | Public | Register new user/author |
| `/auth/login` | Public | Login (returns JWT cookie) |
| `/auth/logout` | Public | Logout (clears cookie) |
| `/auth/check-auth` | All roles | Verify auth status on refresh |
| `/user-api/articles` | Users | Read articles, add comments |
| `/author-api/article` | Authors | Write, edit, soft-delete articles |
| `/author-api/articles` | Authors | Read own articles |
| `/admin-api/users` | Admins | List all users |
| `/admin-api/authors` | Admins | List all authors |
| `/admin-api/user` | Admins | Block/activate users |

---

## Environment Variables

```env
PORT=5000
DB_URL=mongodb://localhost:27017/blogapp
SECRET_KEY=your_jwt_secret
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Concepts Covered

- **Express Router** — separate route files per role
- **JWT + Cookie Parser** — token stored in HTTP-only cookie
- **bcryptjs** — password hashing with salt rounds
- **CORS** — allowing frontend origin with credentials
- **Mongoose Models** — User and Article schemas with validation
- **Cloudinary + Multer** — profile image upload pipeline
- **Error Handling Middleware** — ValidationError, CastError, duplicate key (11000)
- **Role-Based Access** — `verifyToken` middleware with role whitelisting

---

## How to Run

```bash
npm install
node server.js
```

Server runs at `http://localhost:5000`
