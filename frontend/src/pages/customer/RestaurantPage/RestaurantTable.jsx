import { useState } from "react";

export default function RestaurantTable() {
  const GRID_SIZE = 12;
  const totalBlocks = GRID_SIZE * GRID_SIZE;

  // Tracks which blocks belong to which table
  const [tables, setTables] = useState([]);

  // Temporary selected blocks for new table
  const [selected, setSelected] = useState([]);

  const toggleBlock = (index) => {
    // If block already saved as table, ignore clicks
    const isAlreadyAssigned = tables.some((t) => t.blocks.includes(index));
    if (isAlreadyAssigned) return;

    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const createTable = () => {
    if (selected.length === 0) return;

    const newTable = {
      tableNumber: tables.length + 1,
      blocks: [...selected],
    };

    setTables((prev) => [...prev, newTable]);
    setSelected([]);
  };

  const clearSelection = () => setSelected([]);

  // Determine state of each block
  const getBlockState = (index) => {
    for (const table of tables) {
      if (table.blocks.includes(index)) {
        return { assigned: true, tableNumber: table.tableNumber };
      }
    }
    return { assigned: false, tableNumber: null };
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-6">Table Designer</h3>

      {/* GRID */}
      <div className="grid grid-cols-12 gap-2 mb-6">
        {Array.from({ length: totalBlocks }).map((_, index) => {
          const block = getBlockState(index);
          const isTempSelected = selected.includes(index);

          // FINAL assigned table block (permanent white)
          if (block.assigned) {
            return (
              <div
                key={index}
                className="h-10 bg-white border border-white rounded-md flex items-center justify-center text-black font-bold text-xs"
              >
                {block.tableNumber}
              </div>
            );
          }

          // TEMPORARY selection (before saving)
          return (
            <div
              key={index}
              onClick={() => toggleBlock(index)}
              className={`h-10 rounded-md border transition cursor-pointer flex items-center justify-center
                ${
                  isTempSelected
                    ? "bg-white border-white text-black"
                    : "bg-[#181310] border-[#2c251f] hover:border-[#C6A667]"
                }
              `}
            />
          );
        })}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={createTable}
          className="px-5 py-2 bg-[#C6A667] text-black rounded-lg font-semibold hover:bg-[#d1b57c] transition"
        >
          Create Table
        </button>

        <button
          onClick={clearSelection}
          className="px-5 py-2 bg-[#1e1713] text-gray-300 border border-[#3a2f29] rounded-lg hover:bg-[#2a221d] transition"
        >
          Clear Selection
        </button>
      </div>

      {/* CONFIGURED TABLES LIST */}
      <h3 className="text-xl font-semibold mb-4">Configured Tables</h3>

      {tables.length === 0 ? (
        <p className="text-gray-400">No tables created yet.</p>
      ) : (
        <div className="space-y-4">
          {tables.map((table, index) => (
            <div
              key={index}
              className="p-4 bg-[#181310] border border-[#2c251f] rounded-lg"
            >
              <p className="text-white font-semibold">
                Table #{table.tableNumber}
              </p>
              <p className="text-gray-400 text-sm">
                Blocks: {table.blocks.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
