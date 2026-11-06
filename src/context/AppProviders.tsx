import { TodoProvider } from "./TodoContext";
import { FilterProvider } from "./FilterContext";
import { ThemeProvider } from "./ThemeContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <TodoProvider>
            <FilterProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </FilterProvider>
        </TodoProvider>
    );
}