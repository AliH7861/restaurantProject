import { useState } from "react";

export default function RestaurantTableManager() {
  const rows = 12;
  const cols = 12;

  // 0 = empty tile, 1 = table
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(0))
  );

  const toggleCell = (r, c) => {
    const newGrid = structuredClone(grid);
    newGrid[r][c] = grid[r][c] === 1 ? 0 : 1;
    setGrid(newGrid);
  };

  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f] mt-6">
      <h2 className="text-xl text-white font-medium mb-4">Edit Table Layout</h2>

      <div className="grid grid-cols-12 gap-1">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              onClick={() => toggleCell(r, c)}
              className={`w-7 h-7 rounded-sm cursor-pointer
                ${
                  cell === 1
                    ? "bg-[#C6A667] border border-[#e0cfac]"
                    : "bg-[#2c251f] border border-[#3b2f28]"
                }
                hover:brightness-110 transition`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}
