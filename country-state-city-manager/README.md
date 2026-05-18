# Country, State & City Management Application

## Project Overview
This is a ReactJS application built to manage geographic data hierarchically (Country → State → City). It provides full CRUD (Create, Read, Update, Delete) functionality for countries, states, and cities with cascading deletion. The application is built entirely using React Functional Components, Hooks (`useState`), and plain JavaScript, adhering to strict constraints of using zero external libraries or npm packages for functionality.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   ```

2. **Navigate into the project directory:**
   ```bash
   cd country-state-city-manager
   ```

3. **Install dependencies:**
   *(Note: No third-party UI/State libraries are used. `npm install` just installs Vite and standard React dependencies)*
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   Visit `http://localhost:5173` (or the port specified in your terminal).

## Features Implemented

* **Hierarchical Data Management:** Data is logically structured into Countries, States, and Cities.
* **Full CRUD Functionality:** Ability to Add, Edit, and Delete any entity in the hierarchy.
* **Cascading Deletions:**
  * Deleting a Country automatically deletes its dependent States and Cities.
  * Deleting a State automatically deletes its dependent Cities.
* **Safe Interactions:**
  * Employs native `window.prompt()` for naming and renaming entities.
  * Employs native `window.confirm()` for confirming modifications and preventing accidental deletions.
* **Clean UI State Flow:** Centralized single source of truth in `App.jsx` using `useState`, with data and functions passed down as props.
* **No External Libraries:** Strictly uses vanilla CSS and React's built-in hooks.

## Known Limitations

* **Data Persistence:** The application stores data in local state (`useState`). Refreshing the browser will reset the data to its initial state.
* **Native Dialogs:** Since third-party UI libraries were not used, the application relies on native browser `prompt()` and `confirm()` dialogs, which block the main thread and whose appearance cannot be styled.
