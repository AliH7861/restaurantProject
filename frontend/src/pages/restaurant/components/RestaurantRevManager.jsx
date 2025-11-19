import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RestaurantRevManager() {
  const navigate = useNavigate();

  const [reservations] = useState([
    {
      id: 1,
      customer: "John Doe",
      partySize: 4,
      date: "2025-11-20",
      time: "6:30 PM",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Sarah Ahmed",
      partySize: 2,
      date: "2025-11-21",
      time: "7:00 PM",
      status: "Confirmed",
    },
    {
      id: 3,
      customer: "Michael Lee",
      partySize: 6,
      date: "2025-11-21",
      time: "8:15 PM",
      status: "Cancelled",
    },
    {
      id: 4,
      customer: "Ayesha Khan",
      partySize: 3,
      date: "2025-11-22",
      time: "5:45 PM",
      status: "Pending",
    },
  ]);

  const statusColor = {
    Pending: "text-yellow-300 border-yellow-400",
    Confirmed: "text-green-300 border-green-400",
    Cancelled: "text-red-300 border-red-400",
    Completed: "text-blue-300 border-blue-400",
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reservations.map((res) => (
          <button
            key={res.id}
            onClick={() => navigate(`/reservation/${res.id}`)}
            className="
              w-full text-left p-6 rounded-xl 
              bg-[#1e1814] border border-[#2c251f]
              hover:border-[#C6A667] hover:bg-[#2a221d]
              transition-all duration-300 shadow-sm
            "
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">
                {res.customer}
              </h3>

              <span
                className={`px-3 py-1 text-xs border rounded-full ${statusColor[res.status]}`}
              >
                {res.status}
              </span>
            </div>

            <p className="text-gray-300 text-sm">
              Party Size: <span className="text-white">{res.partySize}</span>
            </p>
            <p className="text-gray-300 text-sm">
              Date: <span className="text-white">{res.date}</span>
            </p>
            <p className="text-gray-300 text-sm">
              Time: <span className="text-white">{res.time}</span>
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
