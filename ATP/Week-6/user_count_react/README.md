# User Count React

A React application that fetches a list of users from the **JSONPlaceholder API** and lets users track how many they've selected using the **React Context API** to share count state across components.

---

##  Project Structure

```
user_count_react/
└── src/
    ├── components/
    │   ├── UserCount.jsx   # Displays the current selected count
    │   └── Users.jsx       # Fetches & displays user cards from API
    ├── context/
    │   └── UserContext.jsx  # Context provider for user count state
    ├── App.jsx
    └── main.jsx
```

---

##  Features

-  **Fetches users** from `https://jsonplaceholder.typicode.com/users` on mount
-  Displays each user in a **card grid** (4 columns) with name and email
-  Each card has an **"Add User"** button to increment the shared count
-  **`UserCount`** component reads and displays the live total from Context
-  Shows a **loading** state while fetching
-  Shows an **error** message if the fetch fails

---