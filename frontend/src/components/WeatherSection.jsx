import { useState } from "react";

export default function WeatherHighlights() {
  const [city, setCity] = useState("");

  return (
    <section
      className="w-full py-20 px-12 border border-gray-800"
      style={{
        background:
          "radial-gradient(circle at top, #1b1b1b 0%, #0d0d0d 40%, #000 100%)",
      }}
    >
      {/* ========== HEADER (CENTERED) ========== */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Weather Highlights
        </h2>

        <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
          Before visiting a restaurant, check the weather conditions for the city 
          you're heading to. This helps you plan your commute, seating preferences, 
          and overall dining experience more comfortably.
        </p>
      </div>

      {/* ========== MAIN GRID ========== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT — City Input */}
        <div>
          <label className="text-gray-300 text-sm font-medium">City</label>

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g., Toronto, Dubai, Paris"
            className="w-full mt-2 p-4 bg-black/40 border border-gray-700 rounded-xl text-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A667]/40"
          />

          <p className="text-gray-500 text-xs mt-2">
            Enter any city to preview weather details.
          </p>
        </div>

        {/* RIGHT — Weather Preview Placeholder */}
        <div className="bg-[#0d0d0d] rounded-2xl border border-gray-800 p-6 flex items-center gap-6 shadow-xl">

          {/* Placeholder weather icon */}
          <div className="w-20 h-20 bg-gray-800 rounded-full animate-pulse"></div>

          <div>
            {/* Fake city name */}
            <div className="w-28 h-4 bg-gray-700 rounded mb-3 animate-pulse"></div>

            {/* Fake temperature */}
            <div className="w-40 h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>

            {/* Fake description */}
            <div className="w-24 h-3 bg-gray-700 rounded animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
