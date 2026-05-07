#  Context Counter – Combined React App

A comprehensive React application that combines **synchronized counters**, a **user form with dynamic table**, and a **user count tracker** — all managed through the **React Context API**.

---

##  Project Structure

```
context-counter/
└── src/
    ├── components/
    │   ├── EditCounter1.jsx   # Counter card #1 (shared context)
    │   ├── EditCounter2.jsx   # Counter card #2 (shared context)
    │   ├── EditCounter3.jsx   # Counter card #3 (shared context)
    │   ├── EditCounter4.jsx   # Counter card #4 (shared context)
    │   ├── UserForm.jsx       # Form with dynamic table rendering
    │   ├── UserCount.jsx      # Displays current selected user count
    │   └── Users.jsx          # Fetches & displays users from API
    ├── contexts/
    │   └── ContextProvider.jsx  # Shared context store
    ├── App.jsx
    └── main.jsx
```

---

##  Features

###  App Counters (Section 1)
- 4 counter cards laid out in a **2-column grid**
- All counters are **synchronized** — incrementing/decrementing one updates all
- Powered by a single shared Context store

###  User Form with Dynamic Table (Section 2)
- Input form to collect user data
- Submitted entries are rendered in a **live table** below the form
- No page reload — purely React state-driven

###  User Count (Section 3)
- Fetches users from the **JSONPlaceholder API** (`/users`)
- Displays user cards in a responsive grid
- Each card has an **"Add User"** button that increments a shared count
- `UserCount` component displays the running total via Context

---
