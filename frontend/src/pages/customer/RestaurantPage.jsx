import RestaurantNavbar from "./RestaurantPage/RestaurantNavbar.jsx";
import RestaurantHome from "./RestaurantPage/RestaurantHome.jsx";
import RestaurantMenu from "./RestaurantPage/RestaurantMenu.jsx";
import RestaurantTable from "./RestaurantPage/RestaurantTable.jsx";
import RestaurantWeather from "./RestaurantPage/RestaurantWeather.jsx";
import RestaurantResev from "./RestaurantPage/RestaurantResev.jsx";
import RestaurantFooter from "./RestaurantPage/RestaurantFooter.jsx";

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <div className="sticky top-0 z-40">
        <RestaurantNavbar />
      </div>

      {/* Hero / Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <RestaurantHome />

        <div className="mt-10 h-[1px] bg-[#2c251f]/60"></div>
      </section>

      {/* Weather + Quick Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Today's Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Weather widget */}
          <div
            className="bg-[#181310] p-6 rounded-xl border border-[#2c251f]
                       shadow-sm hover:border-[#C6A667]
                       transition-all duration-300"
          >
            <RestaurantWeather />
          </div>

          {/* Quick reservation preview */}
          <div
            className="bg-[#181310] p-6 rounded-xl border border-[#2c251f]
                       shadow-sm hover:border-[#C6A667]
                       transition-all duration-300"
          >
            <RestaurantResev />
          </div>
        </div>

        <div className="mt-16 h-[1px] bg-[#2c251f]/60"></div>
      </section>

      {/* Menu */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Menu Highlights
        </h2>

        <div
          className="bg-[#181310] p-8 rounded-xl border border-[#2c251f]
                     shadow-sm hover:border-[#C6A667]
                     transition-all duration-300"
        >
          <RestaurantMenu />
        </div>

        <div className="mt-16 h-[1px] bg-[#2c251f]/60"></div>
      </section>

      {/* Tables */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Table Availability
        </h2>

        <div
          className="bg-[#181310] p-8 rounded-xl border border-[#2c251f]
                     shadow-sm hover:border-[#C6A667]
                     transition-all duration-300"
        >
          <RestaurantTable />
        </div>
      </section>

      {/* Footer */}
      <RestaurantFooter />

    </div>
  );
}
