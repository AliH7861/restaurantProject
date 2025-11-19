import { Plus } from "lucide-react";

export default function FavoritesList() {
  const favorites = [
    { name: "Saffron Palace", cuisine: "Indian" },
    { name: "Bella Roma", cuisine: "Italian" },
    { name: "Zen Sushi", cuisine: "Japanese" },
  ];

  // Limit display to max 6
  const displayItems = favorites.slice(0, 6);

  // Switch to 2-column layout if more than 3 items
  const isTwoCols = displayItems.length > 3;

  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f] shadow-sm h-full">
      <h2 className="text-xl font-semibold mb-4 text-white">Your Favorites</h2>

      <div
        className={`grid gap-4 ${
          isTwoCols ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {/* Render favorites */}
        {displayItems.map((fav, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-[#1e1713] border border-[#30251f] 
                       hover:bg-[#2a221d] transition shadow-sm"
          >
            <h3 className="text-lg font-semibold text-white">{fav.name}</h3>
            <p className="text-sm text-gray-300">{fav.cuisine}</p>
          </div>
        ))}

        {/* Placeholder Card (only if less than 6 items) */}
        {displayItems.length < 6 && (
          <button
            className="p-4 rounded-lg bg-[#1a1411] border border-[#30251f] 
                       flex flex-col items-center justify-center gap-2
                       hover:bg-[#2a221d] hover:border-[#C6A667]
                       hover:shadow-[0_0_10px_rgba(198,166,103,0.2)]
                       transition text-gray-300"
          >
            <Plus className="h-6 w-6 text-[#C6A667]" />
            <span className="text-sm">Add Favorite</span>
          </button>
        )}
      </div>
    </div>
  );
}
