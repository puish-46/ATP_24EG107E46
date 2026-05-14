# Product Listing – React App

## Overview

A React app that renders a list of products using components and props. Built with Vite and styled using Tailwind CSS classes. Product data is stored in a separate data file for clean modularity.

## Project Structure

```
src/
├── App.jsx              # Root component — renders product grid
├── data/
│   └── products.js      # Product data array (separated from UI)
├── components/
│   └── Product.jsx      # Single product card component
└── main.jsx             # Entry point
```

## Concepts Covered

- **React Components** — functional components
- **Props** — passing product data to `Product` component
- **Array Mapping** — rendering list of products with `.map()`
- **Data Separation** — product data in `data/products.js`, not in components
- **JSX** — writing HTML inside JavaScript
- **Vite** — React project setup

## How to Run

```bash
npm install
npm run dev
```
