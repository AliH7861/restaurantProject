import { useState, useEffect } from "react";
import SearchBar from '../../../components/SearchBar'

export default function ReservationsList() {
  const [reservations, setReservations] = useState([]);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (query) params.append("search", query);
        if (date) params.append("date", date);

        const response = await fetch(`http://localhost:3000/views/all-reservations?${params.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to load reservations");
        }

        const data = await response.json();
        setReservations(data || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [query, date]);

  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f] shadow-sm mt-10">
      <h2 className="text-xl font-semibold mb-4 text-white">Your Reservations</h2>

      <SearchBar 
        query={query}
        onQueryChange={setQuery}
        date={date}
        onDateChange={setDate}
        enableDate={true}
      />

      {error && (
        <p className="text-red-400 mb-2 text-sm">{error}</p>
      )}
      {loading && !error && (
        <p className="text-gray-400 mb-2 text-sm">Loading reservations...</p>
      )}

      <table className="w-full text-left text-gray-200">
        <thead>
          <tr className="border-b border-[#2c251f] text-gray-400">
            <th className="py-3">Restaurant</th>
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
              <td className="py-3 font-medium text-white">{res.restaurant_name}</td>
              <td className="text-gray-300">{res.reservation_date}</td>
              <td className="text-gray-300">{res.start_time}</td>
              <td className="text-gray-300">{res.num_people}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
