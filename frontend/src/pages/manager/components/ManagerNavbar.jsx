export default function ManagerNavbar() {
  return (
    <nav className="w-full bg-[#181310] border-b border-[#2c251f] px-10 py-5 
                    flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full border border-[#C6A667] flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-[#C6A667]"></div>
        </div>
        <h1 className="text-lg font-medium text-white tracking-wide">
          PremiumDine
        </h1>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10 text-sm">
        <a className="text-gray-300 hover:text-[#C6A667] transition">Dashboard</a>
        <a className="text-gray-300 hover:text-[#C6A667] transition">Restaurants</a>
        <a className="text-gray-300 hover:text-[#C6A667] transition">Insights</a>
        <a className="text-gray-300 hover:text-[#C6A667] transition">Reservations</a>
      </div>

      {/* Logout */}
      <button className="text-gray-300 hover:text-[#C6A667] transition text-sm">
        Log out →
      </button>
    </nav>
  );
}
