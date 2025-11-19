import CustomerNavbar from "./components/CustomerNavbar";
import CuisineSearch from "./components/CuisineSearch";
import DashboardStats from "./components/DashboardStats";
import FavoritesList from "./components/FavoritesList"; 
import ReservationsList from "./components/ReservationsList";
import CreateReservation from "../../components/CreateReservation";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen text-white 
                    bg-gradient-to-b from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]">
      {/* Navbar */}
      <CustomerNavbar />

      <div className="px-8 py-10 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-semibold mb-4">Customer Dashboard</h1>

        <p className="text-gray-300 mb-10">
          Welcome to your dashboard. Browse restaurants, manage reservations, 
          discover cuisines, and explore your dining history.
        </p>

        {/* Stats Section */}
        <DashboardStats />

        {/* Search + Favorites Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cuisine Search (Large) */}
          <div className="lg:col-span-2">
            <CuisineSearch />
          </div>

          {/* Favorites */}
          <FavoritesList />
        </div>

      <CreateReservation />

        {/* Reservations Section */}
        <div className="mt-10">
          <ReservationsList />
        </div>
      </div>
    </div>
  );
}
