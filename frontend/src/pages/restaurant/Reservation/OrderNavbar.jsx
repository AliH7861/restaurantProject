import { Link, useParams } from "react-router-dom";

export default function OrderNavbar() {
  const { id } = useParams();

  return (
    <nav className="w-full bg-[#181310] border-b border-[#2c251f] px-10 py-5 
                    flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.25)]">

      {/* Logo + Restaurant Name */}
      <div className="flex items-center gap-3">
        {/* PremiumDine Logo Dot */}
        <div className="h-3 w-3 rounded-full border border-[#C6A667] flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-[#C6A667]"></div>
        </div>

        <div>
          <h1 className="text-lg font-medium text-white tracking-wide">
            PremiumDine
          </h1>
          <p className="text-xs text-gray-400 -mt-1">
            Reservation • Restaurant {id}
          </p>
        </div>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-10 text-sm">
        <a
          href="#details"
          className="text-gray-300 hover:text-[#C6A667] transition"
        >
          Details
        </a>

        <a
          href="#customer"
          className="text-gray-300 hover:text-[#C6A667] transition"
        >
          Customer Info
        </a>

        <a
          href="#order"
          className="text-gray-300 hover:text-[#C6A667] transition"
        >
          Reservation Info
        </a>
      </div>

      {/* Back button */}
      <Link
        to={`/restaurant/${id}`}
        className="text-gray-300 hover:text-[#C6A667] text-sm transition"
      >
        ← Back
      </Link>
    </nav>
  );
}
