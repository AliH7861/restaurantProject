export default function ManagerViews() {
  const views = [
    "Average Party Size",
    "Reservations per Day",
    "Late Night Restaurants",
    "Cuisine Breakdown",
    "Customer Visit Frequency",
    "Peak Reservation Times",
    "Popular Cities",
    "Restaurant Rating Summary",
    "Most Booked Restaurants",
    "Customer Reservation History"
  ];

  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f] shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-white">Restaurant Insights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {views.map((v, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-[#1b1411] border border-[#2c251f]
                       hover:border-[#C6A667] hover:bg-[#221a15]
                       hover:shadow-[0_0_12px_rgba(198,166,103,0.15)]
                       text-gray-200 cursor-pointer transition"
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}
