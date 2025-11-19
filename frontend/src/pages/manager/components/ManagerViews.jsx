import { AllReservations, OverAverage, MaxReservations, AveragePartySize, ReservationsPerDay, FrequentCustomers, AvailableTablesSummary, LateRestaurants, FullReservationDetails, AllContactEmails } from '../../viewsFunctions/ViewsFunctions';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function ManagerViews() {
  const [activeView, setActiveView] = useState(null);

  const views = [
    { name: "All Reservations", component: <AllReservations /> },
    { name: "Over Average", component: <OverAverage /> },
    { name: "Max Reservations", component: <MaxReservations /> },
    { name: "Average Party Size", component: <AveragePartySize />},
    { name: "Today's Reservations", component: <ReservationsPerDay /> },
    { name: "Frequent Customers", component: <FrequentCustomers /> },
    { name: "Available Tables", component: <AvailableTablesSummary /> },
    { name: "Late Restaurants", component: <LateRestaurants />},
    { name: "Full Reservation Details", component: <FullReservationDetails /> },
    { name: "All Emails", component: <AllContactEmails /> },
  ];

  return (
    <div>
      <h2>Restaurant Insights</h2>

      <div className="grid grid-cols-3 gap-5">
        {views.map((v, index) => (
          <div
            key={index}
            onClick={() => setActiveView(v.name)}
            className="p-4 cursor-pointer"
          >
            {v.name}
          </div>
        ))}
      </div>

      <div className="mt-6">
        {views.find((v) => v.name === activeView)?.component}
      </div>
    </div>
  );
}
