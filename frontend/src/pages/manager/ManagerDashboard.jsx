import ManagerNavbar from "./components/ManagerNavbar";
import ManagerStats from "./components/ManagerStats";
import RestaurantCardsSection from "./components/RestaurantCardsSection";
import ManagerViews from "./components/ManagerViews";
import ReservationOverview from "./components/ReservationOverview";
import ManagerFooter from "./components/ManagerFooter";

export default function ManagerDashboard() {
  return (
    <div className="min-h-screen text-white 
                    bg-gradient-to-b from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]">

      {/* Navbar */}
      <ManagerNavbar />

      <div className="px-8 py-10 max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-semibold mb-4">Manager Dashboard</h1>

        <p className="text-gray-300 mb-10">
          Manage restaurants, review performance stats, monitor reservations, 
          and explore system-wide insights.
        </p>

        {/* Stats */}
        <ManagerStats />

        {/* Restaurants Section */}
        <div className="mt-10">
          <RestaurantCardsSection />
        </div>

        {/* Views Section */}
        <div className="mt-12">
          <ManagerViews />
        </div>

        {/* Reservation Overview */}
        <div className="mt-12">
          <ReservationOverview />
        </div>
      </div>

      {/* Footer */}
      <ManagerFooter />
    </div>
  );
}
