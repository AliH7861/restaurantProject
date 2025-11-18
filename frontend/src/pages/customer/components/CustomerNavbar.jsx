export default function CustomerNavbar() {
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

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-10 text-sm">
        <a href="#" className="text-gray-300 hover:text-[#C6A667] transition">
          Restaurants
        </a>
        <a href="#" className="text-gray-300 hover:text-[#C6A667] transition">
          Cuisines
        </a>
        <a href="#" className="text-gray-300 hover:text-[#C6A667] transition">
          Profile
        </a>
        <a href="#" className="text-gray-300 hover:text-[#C6A667] transition">
          Contact
        </a>
      </div>

      {/* Logout Button */}
      <div>
        <button className="text-gray-300 hover:text-[#C6A667] text-sm transition">
          Log out →
        </button>
      </div>
      
    </nav>
  );
}
