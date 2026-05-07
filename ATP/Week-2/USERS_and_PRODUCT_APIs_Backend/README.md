# Users & Product APIs Backend

## Overview

A simple REST API backend built with Node.js and Express. Supports full CRUD operations for Users and Products.

## Files

| File | Description |
|------|-------------|
| `server.js` | Express server with all API routes |
| `req.http` | Sample HTTP requests to test the API |
| `package.json` | Project config and dependencies |

## API Endpoints

**Users**
- `GET /users` — Get all users
- `GET /users/:id` — Get user by ID
- `POST /users` — Create a new user
- `PUT /users` — Update a user
- `DELETE /users/:id` — Delete a user

**Products**
- `GET /product` — Get all products
- `GET /product/:productId` — Get product by ID
- `POST /product` — Create a new product
- `PUT /product` — Update a product
- `DELETE /product/:productId` — Delete a product

## How to Run

```bash
npm install
node server.js
```

Server runs at `http://localhost:3000`
