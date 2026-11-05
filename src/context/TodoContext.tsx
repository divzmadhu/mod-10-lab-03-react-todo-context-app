import { createContext, useState } from "react";


//1. Define what TodoContext wiil contain
interface TodoContextType {
    todos: Todo[],
    addTodo: (text: string) => void;
}


//2. Creating context 
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {

    // State
    const [todos, setTodos] = useState<ToDo[]>([]);

    //Functions 
    function addTodo(text: string) {

        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        }

        const newTodos = [...todos, newTodo];

        setTodos(newTodos);

    }

    return (
        <TodoContext.Provider value={null}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext;

