export default function RestaurantTable() {
  const tables = Array.from({ length: 12 }, (_, row) =>
    Array.from({ length: 12 }, (_, col) => ({ row, col }))
  );

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Table Layout</h3>

      <div className="grid grid-cols-12 gap-2">
        {tables.flat().map((table, index) => (
          <div
            key={index}
            className="h-10 bg-[#181310] border border-[#2c251f] rounded-md 
                       hover:border-[#C6A667] hover:bg-[#201914] transition flex items-center justify-center text-gray-400 text-xs"
          >
            T{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
