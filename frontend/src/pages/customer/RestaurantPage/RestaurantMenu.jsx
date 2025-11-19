import { useState } from "react";

export default function RestaurantMenu() {
  const [menu, setMenu] = useState([
    { name: "Grilled Salmon", price: "$28" },
    { name: "Premium Steak", price: "$45" },
    { name: "Creamy Alfredo Pasta", price: "$22" },
  ]);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Menu Items</h3>

      <div className="space-y-4">
        {menu.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-[#181310] p-4 rounded-lg 
                       border border-[#2c251f] hover:border-[#C6A667] transition"
          >
            <span className="text-white">{item.name}</span>
            <span className="text-[#C6A667]">{item.price}</span>
          </div>
        ))}
      </div>

      {/* Placeholder CRUD actions */}
      <button className="mt-6 px-5 py-2 bg-[#C6A667] text-black rounded-lg hover:bg-[#d1b57c] transition">
        Add New Item
      </button>
    </div>
  );
}
