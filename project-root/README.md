# Country, State & City Management (React)

## Overview
A simple React app to manage countries, states, and cities in a hierarchical structure with full CRUD and confirmation dialogs. Built with React functional components and hooks, no UI libraries or external state tools.

## Tech
- React 18, functional components
- Hooks: useState
- Plain JavaScript (ES6)
- Dev server: Vite
- No external UI libraries, no backend

## Features
- Countries: add, edit (confirm), delete (confirm, cascades)
- States: add under a country, edit (confirm), delete (confirm, cascades)
- Cities: add under a state, delete (confirm)
- Uses prompt() for input and confirm() for confirmations
- Single source of truth in App.js

## Data shape
```js
[
  {
    id: 1,
    name: "India",
    states: [
      { id: 1, name: "Karnataka", cities: ["Bangalore", "Mysore"] }
    ]
  }
]
