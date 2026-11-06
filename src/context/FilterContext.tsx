import { createContext, useState } from "react";

// 1. Define the allowed filter options
export type FilterType = "all" | "active" | "completed";

// 2. Define the Context interface
interface FilterContextType {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

// 3. Create the Context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// 4. Create the Provider
export function FilterProvider({ children }: { children: React.ReactNode }) {

    // 5. Create filter state
    const [filter, setFilter] = useState<FilterType>("all");

    // 6. Provide the state and function to child components
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterContext;