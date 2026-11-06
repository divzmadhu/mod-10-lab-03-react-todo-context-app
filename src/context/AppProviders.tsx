import { TodoProvider } from "./TodoContext";
import { FilterProvider } from "./FilterContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <TodoProvider>
            <FilterProvider>
                {children}
            </FilterProvider>
        </TodoProvider>
    );
}