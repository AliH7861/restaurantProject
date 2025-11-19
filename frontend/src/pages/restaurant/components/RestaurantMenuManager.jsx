import { useState } from "react";

export default function RestaurantMenuManager() {
  const [menu, setMenu] = useState([
    { id: 1, name: "Grilled Salmon", price: "28" },
    { id: 2, name: "Premium Steak", price: "45" },
    { id: 3, name: "Creamy Alfredo Pasta", price: "22" },
  ]);

  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  // Add Item
  const addItem = () => {
    if (!newItem.name || !newItem.price) return;

    setMenu([
      ...menu,
      { id: Date.now(), name: newItem.name, price: newItem.price },
    ]);

    setNewItem({ name: "", price: "" });
  };

  // Delete Item
  const deleteItem = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  // Edit Item
  const saveEdit = (id, updated) => {
    setMenu(
      menu.map((item) =>
        item.id === id ? { ...item, ...updated } : item
      )
    );
    setEditingId(null);
  };

  return (
    <div className="p-6 bg-[#181310] border border-[#2c251f] rounded-xl shadow-sm">

      <h2 className="text-3xl font-semibold mb-6">Manage Menu</h2>

      {/* Existing Menu Items */}
      <div className="space-y-4">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#201914] 
                       p-4 rounded-lg border border-[#2c251f]
                       hover:border-[#C6A667] transition"
          >
            {/* If editing */}
            {editingId === item.id ? (
              <div className="flex gap-4">
                <input
                  className="px-2 py-1 rounded bg-[#0a0a0a] text-white border border-[#2c251f]"
                  defaultValue={item.name}
                  onChange={(e) =>
                    (item.name = e.target.value)
                  }
                />
                <input
                  className="px-2 py-1 rounded bg-[#0a0a0a] text-white border border-[#2c251f]"
                  defaultValue={item.price}
                  onChange={(e) =>
                    (item.price = e.target.value)
                  }
                />
                <button
                  className="text-[#C6A667] hover:underline"
                  onClick={() =>
                    saveEdit(item.id, {
                      name: item.name,
                      price: item.price,
                    })
                  }
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-[#C6A667]">${item.price}</p>
                </div>

                <div className="flex gap-4">
                  <button
                    className="text-gray-300 hover:text-[#C6A667] transition"
                    onClick={() => setEditingId(item.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="text-red-400 hover:text-red-300 transition"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add New Item */}
      <div className="mt-10 bg-[#201914] p-4 rounded-xl border border-[#2c251f]">
        <h3 className="text-xl font-medium mb-4">Add New Item</h3>

        <div className="flex gap-4">
          <input
            placeholder="Item name"
            className="px-3 py-2 w-full bg-[#0a0a0a] rounded text-white 
                       border border-[#2c251f]"
            value={newItem.name}
            onChange={(e) =>
              setNewItem({ ...newItem, name: e.target.value })
            }
          />

          <input
            placeholder="Price"
            className="px-3 py-2 w-24 bg-[#0a0a0a] rounded text-white 
                       border border-[#2c251f]"
            value={newItem.price}
            onChange={(e) =>
              setNewItem({ ...newItem, price: e.target.value })
            }
          />

          <button
            className="px-5 py-2 bg-[#C6A667] text-black rounded 
                       hover:bg-[#d1b57c] transition"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>

    </div>
  );
}
