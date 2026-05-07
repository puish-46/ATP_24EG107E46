# Counter State with Sync Context Store

A React application demonstrating **shared state synchronization** across multiple independent counter components using the **React Context API**.

---

##  Project Structure

```
counter-state-with-sync-context-store/
└── src/
    ├── components/
    │   ├── EditCounter1.jsx   # Counter card #1
    │   ├── EditCounter2.jsx   # Counter card #2
    │   ├── EditCounter3.jsx   # Counter card #3
    │   └── EditCounter4.jsx   # Counter card #4
    ├── contexts/
    │   └── ContextProvider.jsx  # Shared counter context
    ├── App.jsx
    └── main.jsx
```

---

##  Features

-  **Synchronized counter** – All 4 counter cards share the same value via Context
-  **Increment** and ➖ **Decrement** buttons on every card
-  **Independent components** – Each card is isolated but reads from the same store
-  Any update in one card is instantly reflected in all other cards
