import TodoContext from "../../context/TodoContext";
import { useState, useContext } from "react";

export default function TodoInput() {

    // Store the text entered by the user in the input box
    const [text, setText] = useState("");

    // Access the shared data and functions from TodoContext
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("TodoInput must be used inside TodoProvider");
    }

    const { addTodo } = context;

    function handleSubmit() {
        if (text.trim() == "") {
            return;
        }
        addTodo(text);
        //Resets the input after the task is added
        setText("");
    }

    return (
        <div>
            <label htmlFor="todo-input">New task:</label>
            <input
                id = "todo-input"
                type ="text"
                placeholder = "Enter a task ..."
                value = {text}
                onChange = {(event) => setText(event.target.value)}
            />

            <button onClick = {handleSubmit}>
                Submit
            </button>

        </div>

    );
}