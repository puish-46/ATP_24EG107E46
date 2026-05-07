#  MERN Mini Employee App

A full-stack **MERN** (MongoDB, Express, React, Node.js) application that demonstrates complete **CRUD operations** on employee records. The backend exposes a REST API and the React frontend consumes it with client-side routing, form handling, and Zustand-based state management.

---

##  Project Structure

```
mern-mini-employee-app/
├── backend/        # Node.js + Express REST API
│   ├── APIs/
│   │   └── EmployeeAPIs.js   # CRUD route handlers
│   ├── models/
│   │   └── EmployeeModel.js  # Mongoose schema & model
│   ├── server.js             # Entry point
│   └── .env                  # DB_URL & PORT
└── frontend/       # React + Vite SPA
    └── src/
        ├── components/
        │   ├── RootLayout.jsx
        │   ├── Home.jsx
        │   ├── CreateEmp.jsx
        │   ├── ListOfEmps.jsx
        │   ├── Employee.jsx
        │   └── EditEmployee.jsx
        └── App.jsx            # React Router setup
```

---

##  Features

-  **Create** a new employee record via a form
-  **List** all employees fetched from MongoDB
-  **View** a single employee's details
-  **Edit** an existing employee's information
-  **Delete** an employee record
-  CORS-protected API (allows `http://localhost:5173`)
-  Global error handling middleware (Validation & Cast errors)

---

