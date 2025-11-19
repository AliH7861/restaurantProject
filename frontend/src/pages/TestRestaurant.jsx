import { useLocation } from "react-router-dom";

export default function TestRestaurant() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const cuisine = params.get("cuisine");

  // Fake restaurant info (dummy content)
  const restaurant = {
    name: `${cuisine} Palace`,
    address: "123 Flavor Street, Toronto, Canada",
    rating: "4.8",
    reviews: 241,
    banner:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200",
    description:
      "Experience the finest " +
      cuisine +
      " cuisine crafted with authentic flavors, premium ingredients, and a modern dining atmosphere.",
    menu: [
      { name: "Signature Dish", price: "$22" },
      { name: "Chef's Special", price: "$28" },
      { name: "Classic Delight", price: "$18" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0d0a09] text-white">
      {/* Banner Image */}
      <div className="w-full h-[300px] overflow-hidden">
        <img
          src={restaurant.banner}
          alt={restaurant.name}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* RESTAURANT HEADER */}
        <div>
          <h1 className="text-4xl font-semibold">{restaurant.name}</h1>
          <p className="text-gray-400 mt-2">{restaurant.address}</p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-[#C6A667] text-xl">★ {restaurant.rating}</span>
            <span className="text-gray-400 text-sm">{restaurant.reviews} reviews</span>
          </div>

          <p className="text-gray-300 mt-6 leading-relaxed max-w-xl">
            {restaurant.description}
          </p>
        </div>

        {/* MENU PREVIEW */}
        <section className="bg-[#181310] border border-[#2c251f] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Popular Menu Items
          </h2>

          <div className="space-y-4">
            {restaurant.menu.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-[#2c251f] pb-3"
              >
                <span className="text-gray-200">{item.name}</span>
                <span className="text-[#C6A667] font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAKE TABLE LAYOUT */}
        <section className="bg-[#181310] border border-[#2c251f] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Table Layout Preview</h2>
          <div className="grid grid-cols-6 gap-2 mt-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className={`h-10 rounded-md border ${
                  i % 3 === 0
                    ? "bg-[#C6A667] border-[#F0D9A5]"
                    : "bg-[#2c251f] border-[#3b2f28]"
                }`}
              ></div>
            ))}
          </div>
        </section>

        {/* FAKE WEATHER */}
        <section className="bg-[#181310] border border-[#2c251f] p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Today’s Weather</h2>

          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-[#2c251f] flex items-center justify-center">
              <span className="text-3xl">🌤️</span>
            </div>
            <div>
              <p className="text-gray-300">Toronto · Mostly Sunny</p>
              <p className="text-white text-xl font-semibold">3°C</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
