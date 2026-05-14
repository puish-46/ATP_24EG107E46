# Week 3 - REST API with MongoDB & Authentication

## Overview

A full-featured REST API backend built with **Node.js**, **Express**, and **MongoDB** (via Mongoose). Includes user and product management with authentication using JWT tokens and password hashing.

---

## Project Structure

```
USERS_and_PRODUCT_APIs_Backend_with_DB/
├── APIs/
│   ├── UserAPIs.js        # User CRUD + Auth routes
│   └── ProductAPIs.js     # Product CRUD routes
├── middlewares/
│   └── verifytoken.js     # JWT auth middleware
├── models/
│   ├── UserModel.js       # Mongoose User schema
│   └── ProductModel.js    # Mongoose Product schema
├── server.js              # Express server entry point
├── req.http               # Sample API requests
└── .env                   # Environment variables
```

---

## Concepts Covered

- **Mongoose ODM** — Connect and interact with MongoDB
- **Schema & Models** — Define data structure for Users and Products
- **CRUD Operations** — Create, Read, Update, Delete via REST API
- **Password Hashing** — Using `bcryptjs`
- **JWT Authentication** — Login and receive a token
- **Middleware** — Protect routes using token verification
- **Error Handling** — Centralized error handling middleware

---

## Authentication Flow

```
Login (POST /users/login)
  └── Submit credentials → receive JWT token

Public routes  → accessible by anyone
Protected routes → req → verifytoken middleware → route handler
```

---

## Product Schema

| Field | Type | Rules |
|-------|------|-------|
| `productId` | Number | Required |
| `productName` | String | Required |
| `price` | Number | Required, min: 10000, max: 50000 |
| `brand` | String | Required |

---

> Make sure MongoDB is running and `.env` has your `MONGO_URL` and `JWT_SECRET`.
