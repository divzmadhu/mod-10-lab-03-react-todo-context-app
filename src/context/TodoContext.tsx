import { createContext, useState } from "react";
import type { Todo } from "../types";


//1. Define what TodoContext wiil contain
interface TodoContextType {
    todos: Todo[],
    addTodo: (text: string) => void;
    toggleTodo: (id:number) => void;
}


//2. Creating context 
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {

    // State
    const [todos, setTodos] = useState<Todo[]>([]);

    //Functions 

    //1. Function to add a new task to the todo list
    function addTodo(text: string) {

        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        }

        const newTodos = [...todos, newTodo];

        setTodos(newTodos);

    }

    //2. Function to toggleTodo , If the user clicks the checkbox for any todo , say Read a book, we want: completed: true
    function toggleTodo(id:number){
        
        const updatedTodos = todos.map(todo => {

            if(todo.id === id)
            {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            else
            {
                return todo;
            }
        });

        setTodos(updatedTodos);
    }

    return (
        <TodoContext.Provider value={null}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext;

