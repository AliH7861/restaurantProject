import { useState } from "react";

export default function CuisineSearch() {
  const [query, setQuery] = useState("");
  const cuisines = ["Italian", "Indian", "Chinese", "Mexican", "Halal", "Korean"];

  const filtered =
    query.trim() === ""
      ? []
      : cuisines.filter((c) =>
          c.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="relative bg-[#181310] p-6 rounded-xl border border-[#2c251f] shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-white">Search Cuisines</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for sushi, pizza, halal..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-lg 
                   bg-[#0f0c0a] border border-[#3a2f29] 
                   text-gray-200 placeholder-gray-500 
                   focus:outline-none focus:border-[#C6A667] transition"
      />

      {/* Dropdown Suggestions */}
      {filtered.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-[#1b1512] 
                        border border-[#342a24] rounded-lg shadow-lg z-40
                        animate-fadeIn">
          {filtered.map((item) => (
            <div
              key={item}
              className="px-4 py-2 text-gray-200 hover:bg-[#2a221d] 
                         cursor-pointer transition"
              onClick={() => setQuery(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Cuisine Tags */}
      <div className="flex flex-wrap gap-3 mt-1">
        {cuisines.map((tag) => (
          <button
            key={tag}
            onClick={() => setQuery(tag)}
            className="px-4 py-2 rounded-full text-sm 
                       bg-[#1e1713] text-gray-200 border border-[#2f261f]
                       hover:bg-[#2a221d] hover:text-white
                       hover:shadow-[0_0_10px_rgba(198,166,103,0.15)]
                       transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}  
