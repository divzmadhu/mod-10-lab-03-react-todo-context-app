import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function ThemeToggleButton() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeToggleButton must be used inside ThemeProvider");
    }

    const { theme, toggleTheme } = context;

    return (
       <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    );
}