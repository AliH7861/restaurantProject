import RestaurantNavbar from "./components/RestaurantNavbar";
import RestaurantStats from "./components/RestaurantStats";
import RestaurantTableManager from "./components/RestaurantTableManager";
import RestaurantMenuManager from "./components/RestaurantMenuManager";
import RestaurantRevManager from "./components/RestaurantRevManager";  // NEW

export default function RestaurantOwnerDashboard() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]">

      {/* Navbar */}
      <RestaurantNavbar />

      <div className="px-8 py-10 max-w-6xl mx-auto">

        {/* Stats */}
        <section>
          <h1 className="text-4xl font-semibold tracking-wide mb-10">
            Restaurant Dashboard
          </h1>

          <RestaurantStats />

          <div className="mt-10 h-[1px] w-full bg-[#2c251f]/40"></div>
        </section>

        {/* Menu Management */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Menu Management</h2>
          <p className="text-gray-400 mb-6">
            Add, edit, or remove menu items for your restaurant.
          </p>

          <div className="bg-[#181310] p-8 rounded-xl border border-[#2c251f]
                          shadow-sm hover:border-[#C6A667] transition-all duration-300">

            <RestaurantMenuManager />
          </div>
        </section>

        <div className="mt-12 h-[1px] w-full bg-[#2c251f]/40"></div>

        {/* Table Management */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Table Management</h2>
          <p className="text-gray-400 mb-6">
            Modify table availability, capacity, and daily seating.
          </p>

          <div className="bg-[#181310] p-8 rounded-xl border border-[#2c251f]
                          shadow-sm hover:border-[#C6A667] transition-all duration-300">

            <RestaurantTableManager />
          </div>
        </section>

        <div className="mt-12 h-[1px] w-full bg-[#2c251f]/40"></div>

        {/* Reservation Management */}
        <section className="mt-12 pb-10">
          <h2 className="text-3xl font-semibold mb-4">Reservation Orders</h2>
          <p className="text-gray-400 mb-6">
            View and access all reservation requests for your restaurant.
          </p>

          <div className="bg-[#181310] p-8 rounded-xl border border-[#2c251f]
                          shadow-sm hover:border-[#C6A667] transition-all duration-300">

            <RestaurantRevManager />  
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} PremiumDine — Restaurant Dashboard
      </footer>
    </div>
  );
}
