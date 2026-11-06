// 1. Imports

import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";


// 2. Create TodoList component
export default function TodoList() {

    // 3. Access TodoContext
    const context = useContext(TodoContext);

    // 4. Check whether Context is available
    if (!context) {
        throw new Error("TodoList must be used in inside TodoProvider");
    }


    // 5. Extract todos array
    const { todos } = context;

    // 6. Return the UI
    return (
        <div>
            {
                todos.map((singleTodo) => {
                    return (
                        <TodoItem
                            key={singleTodo.id}
                            todo={singleTodo}
                        />
                    );
                })

            }


        </div>
    );
}