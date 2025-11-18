export default function ReservationOverview() {
  const reservations = [
    { customer: "Ali H.", restaurant: "Bella Roma", date: "2025-01-12", time: "7:00 PM", people: 2 },
    { customer: "Sarah A.", restaurant: "Zen Sushi", date: "2025-01-20", time: "6:30 PM", people: 4 },
    { customer: "Imran K.", restaurant: "Saffron Palace", date: "2025-02-01", time: "8:00 PM", people: 3 },
  ];

  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f] shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-white">Reservation Overview</h2>

      <table className="w-full text-left text-gray-200">
        <thead>
          <tr className="border-b border-[#2c251f] text-gray-400">
            <th className="py-3">Customer</th>
            <th>Restaurant</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
          </tr>
        </thead>

        <tbody>
          {reservations.map((res, i) => (
            <tr
              key={i}
              className="border-b border-[#2c251f] hover:bg-[#2a221d] transition 
                         hover:shadow-[0_0_8px_rgba(198,166,103,0.15)]"
            >
              <td className="py-3 font-medium text-white">{res.customer}</td>
              <td className="text-gray-300">{res.restaurant}</td>
              <td className="text-gray-300">{res.date}</td>
              <td className="text-gray-300">{res.time}</td>
              <td className="text-gray-300">{res.people}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
