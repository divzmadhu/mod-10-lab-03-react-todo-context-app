import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

export default function FilterButtons() {

    // Access FilterContext
    const context = useContext(FilterContext);

    // Check whether Context is available
    if (!context) {
        throw new Error("FilterButtons must be used inside FilterProvider");
    }

    // Extract filter and setFilter
    const { filter, setFilter } = context;

    return (
        <div>
            <button
                onClick={() => setFilter("all")}
                disabled={filter === "all"}
            >
                All
            </button>

            <button
                onClick={() => setFilter("active")}
                disabled={filter === "active"}
            >
                Active
            </button>

            <button
                onClick={() => setFilter("completed")}
                disabled={filter === "completed"}
            >
                Completed
            </button>
        </div>
    );
}