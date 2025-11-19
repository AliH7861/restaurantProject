import React from "react";

function SearchBar ({
    query,
    onQueryChange,
    date,
    onDateChange,
    enableDate = false,       // toggle date input on/off
    placeholder = "Find a reservation...",
}) {
    return (
        <div className="flex gap-5">
            <input 
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-lg 
                    bg-[#0f0c0a] border border-[#3a2f29] 
                    text-gray-200 placeholder-gray-500 
                    focus:outline-none focus:border-[#C6A667] transition"
            />

            {/* Optional Date filtering for reservations */}
            {enableDate && (
                <input
                type="date"
                value={date || ""}
                onChange={(e) => onDateChange(e.target.value)}
                className="mb-4 px-4 py-2 rounded-lg 
                           bg-[#0f0c0a] border border-[#3a2f29] 
                           text-gray-200 placeholder-gray-500 
                           focus:outline-none focus:border-[#C6A667] transition
                           h-[44px]"
              />
            )}
        </div>
    );
}

export default SearchBar;