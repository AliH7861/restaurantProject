export default function RestaurantCardsSection() {
  const restaurants = [
    { name: "Bella Roma", cuisine: "Italian" },
    { name: "Saffron Palace", cuisine: "Indian" },
    { name: "Zen Sushi", cuisine: "Japanese" },
  ];

  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f] shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-white">Your Restaurants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {restaurants.map((rest, i) => (
          <div
            key={i}
            className="p-5 bg-[#1b1411] rounded-xl border border-[#2c251f]
                       hover:border-[#C6A667] hover:bg-[#221a15]
                       shadow-sm transition cursor-pointer"
          >
            <h3 className="text-lg font-medium text-white">{rest.name}</h3>
            <p className="text-gray-400 text-sm mt-1">{rest.cuisine}</p>
          </div>
        ))}

        {/* Add Restaurant */}
        <button
          className="flex flex-col items-center justify-center p-6 rounded-xl
                     border border-[#2c251f] bg-[#1a1410] text-gray-300
                     hover:border-[#C6A667] hover:text-[#C6A667]
                     hover:shadow-[0_0_12px_rgba(198,166,103,0.15)]
                     transition"
        >
          <div className="text-3xl">+</div>
          <span className="mt-1 text-sm">Add Restaurant</span>
        </button>
      </div>
    </div>
  );
}
