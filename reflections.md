### Learning notes
# Context API 
allows us to share data between multiple components without passing props through every intermediate component (Prop Drilling). 
# Implementation
- In this Todo application, I am using separate contexts (TodoContext, FilterContext, and ThemeContext) to manage todos, visibility filters, and theme settings so that different components can access the shared information they need.

```text
                     AppProviders
                   |
          ---------------------
          |         |         |
      TodoContext FilterContext ThemeContext
          |         |         |
       TodoInput FilterButtons ThemeToggleButton
          |
       TodoList
          |
       TodoItem
```

# Planora – Simplify Your Day

Planora is a simple and user-friendly Todo application built with React and TypeScript. It helps users organize their daily tasks, track their progress, and manage completed activities.

The application uses React Context API for state management and localStorage to preserve tasks and theme preferences across browser refreshes.

## Features

### Task Management

* Add new tasks.
* Mark tasks as completed or active.
* Edit existing tasks.
* Delete individual tasks.
* Clear all completed tasks.

### Task Filtering

* **All:** View all tasks.
* **Active:** View tasks that are not completed.
* **Completed:** View completed tasks.

### Theme Customization

* Switch between Light Mode and Dark Mode.
* Theme selection is saved in localStorage.
* Previously selected theme is restored when the application reloads.

### Data Persistence

* Todo tasks are saved in browser localStorage.
* Tasks remain available after refreshing the browser.
* Updated task information and completion status are preserved.


## State Management

Planora uses React Context API to manage application-wide state.

Three contexts are used:

* **TodoContext:** Manages tasks and provides functions to add, edit, delete, toggle, and clear completed tasks.
* **FilterContext:** Manages the currently selected task filter.
* **ThemeContext:** Manages the selected application theme.

The `AppProviders` component combines these providers so their values are accessible to the relevant child components.

## Data Persistence

The application uses browser localStorage to preserve data.

* `JSON.stringify()` converts Todo data into a string before saving.
* `JSON.parse()` converts the saved string back into JavaScript data when the application loads.
* `useEffect()` saves updated Todo data and theme preferences whenever their respective state values change.

This allows tasks and theme preferences to persist across browser refreshes.


## Learning Outcomes

Through this project, I practiced:

* Building reusable React components.
* Using TypeScript interfaces and types.
* Managing shared state with React Context API.
* Implementing cus

