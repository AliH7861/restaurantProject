export default function DashboardPreview() {
  return (
    <section
      className="w-full py-20 px-12 border-t border-gray-900 mt-0"
      style={{
        background: "radial-gradient(circle at top, #1b1b1b 0%, #0d0d0d 40%, #000 100%)",
      }}
    >
      {/* Title + Description */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Platform Analytics
        </h2>
        <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
          Visual insights that help understand reservation flow, restaurant performance,
          and peak dining patterns. These preview charts simulate the dashboard experience.
        </p>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        
        {/* Fake Chart.js Card 1 */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-white font-semibold mb-4">Weekly Reservations Trend</h3>
          <div className="relative w-full h-40 bg-[#111] rounded-xl overflow-hidden flex items-end p-4">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-gray-700/20 to-transparent"></div>
            <div className="flex gap-2 w-full h-full items-end">
              <div className="w-8 bg-[#C6A667] h-[20%] rounded-sm"></div>
              <div className="w-8 bg-[#C6A667] h-[45%] rounded-sm"></div>
              <div className="w-8 bg-[#C6A667] h-[60%] rounded-sm"></div>
              <div className="w-8 bg-[#C6A667] h-[40%] rounded-sm"></div>
              <div className="w-8 bg-[#C6A667] h-[70%] rounded-sm"></div>
              <div className="w-8 bg-[#C6A667] h-[55%] rounded-sm"></div>
              <div className="w-8 bg-[#C6A667] h-[75%] rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Fake Chart.js Card 2 */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-white font-semibold mb-4">Top Restaurants Overview</h3>
          <div className="relative w-full h-40 bg-[#111] rounded-xl overflow-hidden p-4">
            <div className="space-y-3">
              <div className="w-[85%] h-4 bg-[#C6A667] rounded"></div>
              <div className="w-[65%] h-4 bg-[#C6A667] rounded"></div>
              <div className="w-[92%] h-4 bg-[#C6A667] rounded"></div>
              <div className="w-[55%] h-4 bg-[#C6A667] rounded"></div>
              <div className="w-[78%] h-4 bg-[#C6A667] rounded"></div>
            </div>
          </div>
        </div>

        {/* Fake Donut Chart Card */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-white font-semibold mb-4">Reservation Categories Breakdown</h3>
          <div className="relative w-full h-40 bg-[#111] rounded-xl flex items-center justify-center">
            <div className="relative w-32 h-32 rounded-full border-[10px] border-[#C6A667] border-t-[#444] border-r-[#333] border-b-[#222]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
