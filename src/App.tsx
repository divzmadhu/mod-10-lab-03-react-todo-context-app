import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import "./App.css";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("App must be used inside ThemeProvider");
  }

  const { theme } = context;

  return (
    <div className={`todo-container ${theme}`}>
      <h1>Planora - Simplify Your Day </h1>
      <ThemeToggleButton />

      <TodoInput />
      <TodoList />
    </div>
  )
}