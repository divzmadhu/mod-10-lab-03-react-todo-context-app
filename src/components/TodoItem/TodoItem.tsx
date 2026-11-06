// 1. Import Todo type
import { useContext, useState } from "react";
import type { Todo } from "../../types";
import TodoContext from "../../context/TodoContext";



// 2. Define props interface
interface TodoItemProps {
    todo: Todo;
}


// 3. Create TodoItem component
export default function TodoItem({ todo }: TodoItemProps) {

    // 4. Access TodoContext

    const context = useContext(TodoContext)


    // 5. Check whether Context is available
     if (!context) {
        throw new Error("TodoItem must be used inside TodoProvider");
    }

    // 6. Extract required Context functions
    const {toggleTodo, editTodo, deleteTodo  } = context;

     // Store the edited text
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

     // Handle editing
    function handleEdit() {
        if (editedText.trim() === "") {
            return;
        }

        editTodo(todo.id, editedText);
        setIsEditing(false);
    }


    // 7. Return the UI
     return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(event) => setEditedText(event.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => {
                        setEditedText(todo.text);
                        setIsEditing(false);
                    }}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <span
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none"
                        }}
                    >
                        {todo.text}
                    </span>

                    <button onClick={() => toggleTodo(todo.id)}>
                        {todo.completed ? "Undo" : "Complete"}
                    </button>

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>

                    <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}
