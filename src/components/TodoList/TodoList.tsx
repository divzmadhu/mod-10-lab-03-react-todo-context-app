// 1. Imports

import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import FilterContext from "../../context/FilterContext";
import FilterButtons from "../FilterButtons/FilterButtons";


// 2. Create TodoList component
export default function TodoList() {

    // 3. Access TodoContext
    const context = useContext(TodoContext);
    const filterContext = useContext(FilterContext);

    // 4. Check whether Context is available
    if (!context) {
        throw new Error("TodoList must be used in inside TodoProvider");
    }

    if (!filterContext) {
        throw new Error("TodoList must be used inside FilterProvider");
    }

    // 5. Extract todos array
    const { todos, clearCompleted } = context;
    const { filter } = filterContext;

    const filteredTodos = todos.filter((singleTodo) => {

        if (filter === "active") {
            return !singleTodo.completed;
        }

        if (filter === "completed") {
            return singleTodo.completed;
        }

        return true;
    });

    // 6. Return the UI
    return (
        <div>
            <FilterButtons />
            {
                filteredTodos.map((singleTodo) => {
                    return (
                        <TodoItem
                            key={singleTodo.id}
                            todo={singleTodo}
                        />
                    );
                })

            }

            <button onClick={clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
}