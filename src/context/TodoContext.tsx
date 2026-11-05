import { createContext, useState } from "react";
import type { Todo } from "../types";


//1. Define what TodoContext wiil contain
interface TodoContextType {
    todos: Todo[],
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    clearCompleted: () => void;
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
    function toggleTodo(id: number) {

        const updatedTodos = todos.map(singleTodo => {

            if (singleTodo.id === id) {
                return {
                    ...singleTodo,
                    completed: !singleTodo.completed
                };
            }
            else {
                return singleTodo;
            }
        });

        setTodos(updatedTodos);
    }

    //3. Function to deleteTodo , If the user clicks the Delete button for task ID 2., then that todo should be deleted
    function deleteTodo(id: number) {

        const updatedTodos = todos.filter(singleTodo => singleTodo.id !== id);
        setTodos(updatedTodos);
    }

    //4. Function to editTodo , If the user clicks the Edit button for task ID 2., then that todo should be available for edit
    function editTodo(id: number, newText: string) {

        const updatedTodos = todos.map(singleTodo => {

            if (singleTodo.id === id) {
                return {
                    ...singleTodo,
                    text: newText
                };
            }
            else {
                return singleTodo;
            }
        });

        setTodos(updatedTodos);
    }

    //5. Function to clearCompleted , If the user clicks the Clear Completed Button, clearCompleted function should deleted those tasks from the todo list   
    
    function clearCompleted(){
    const updatedTodos = todos.filter(singleTodos => !singleTodos.completed);
       
        setTodos(updatedTodos);
    }

    
            
        return (
            <TodoContext.Provider value={undefined}>
                {children}
            </TodoContext.Provider>
        )
    }

    export default TodoContext;