import { createContext, useState } from "react";

// 1. Define the allowed theme options
export type ThemeType = "light" | "dark";

// 2. Define the Context interface
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

// 3. Create the Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 4. Create the Provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {

    // 5. Create theme state
    const [theme, setTheme] = useState<ThemeType>("light");

    // 6. Toggle between light and dark themes
    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    }

    // 7. Provide theme and toggleTheme to child components
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;