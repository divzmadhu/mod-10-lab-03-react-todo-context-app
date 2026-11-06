import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

export default function App() {
  return (
    <div className ="todo-container">
      <h1>Planora - Simplify Your Day </h1>
      <TodoInput />
      <TodoList/>
    </div>
  )
}