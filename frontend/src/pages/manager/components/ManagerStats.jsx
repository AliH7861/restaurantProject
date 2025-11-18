export default function ManagerStats() {
  const stats = [
    { label: "Total Restaurants", value: 3 },
    { label: "Monthly Reservations", value: 128 },
    { label: "Customers Served", value: 541 },
    { label: "Cities Operating", value: 2 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="relative bg-[#181310] p-6 rounded-xl
                     border border-[#2c251f]
                     shadow-sm
                     before:absolute before:inset-0 before:rounded-xl
                     before:bg-gradient-to-b before:from-[#201914]/40 before:to-transparent
                     before:pointer-events-none

                     hover:border-[#C6A667]
                     hover:shadow-[0_0_12px_rgba(198,166,103,0.15)]
                     hover:-translate-y-1
                     transition-all duration-300"
        >
          <h3 className="text-gray-400 text-sm">{item.label}</h3>
          <p className="text-3xl font-semibold mt-2 text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
