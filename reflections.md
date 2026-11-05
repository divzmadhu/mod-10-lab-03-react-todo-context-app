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
