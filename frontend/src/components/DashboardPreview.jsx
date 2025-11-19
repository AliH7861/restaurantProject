import { BarChart3, Activity, PieChart, Clock4 } from "lucide-react";

export default function DashboardPreview() {
  const cards = [
    {
      title: "Weekly Reservations Trend",
      icon: BarChart3,
      body: (
        <div className="relative w-full h-40 bg-[#111] rounded-xl overflow-hidden flex items-end p-4">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-gray-500/30 to-transparent" />
          <div className="flex gap-2 w-full h-full items-end">
            {[20, 45, 60, 40, 70, 55, 80].map((h, idx) => (
              <div
                key={idx}
                className="w-6 bg-[#C6A667] rounded-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Top Restaurants Overview",
      icon: Activity,
      body: (
        <div className="relative w-full h-40 bg-[#111] rounded-xl overflow-hidden p-4 flex flex-col justify-center">
          <div className="space-y-3">
            {[85, 65, 92, 55, 78].map((w, idx) => (
              <div
                key={idx}
                className="h-3 rounded-full bg-[#C6A667]"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Reservation Categories Breakdown",
      icon: PieChart,
      body: (
        <div className="relative w-full h-40 bg-[#111] rounded-xl flex items-center justify-center">
          <div className="relative w-28 h-28 rounded-full border-[9px] border-[#C6A667] border-t-[#444] border-r-[#333] border-b-[#222]" />
        </div>
      ),
    },
    {
      title: "Average Seating Time",
      icon: Clock4,
      body: (
        <div className="relative w-full h-40 bg-[#111] rounded-xl flex items-center justify-center px-6">
          <div className="w-full space-y-2">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Lunch</span>
              <span>1h 10m</span>
            </div>
            <div className="h-2 rounded-full bg-[#241b14] overflow-hidden">
              <div className="h-full w-[70%] bg-[#C6A667]" />
            </div>

            <div className="flex justify-between text-xs text-gray-400 mb-1 mt-3">
              <span>Dinner</span>
              <span>1h 45m</span>
            </div>
            <div className="h-2 rounded-full bg-[#241b14] overflow-hidden">
              <div className="h-full w-[85%] bg-[#C6A667]" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="w-full py-20 px-6 border-t border-[#2c251f]"
      style={{
        background:
          "radial-gradient(circle at top, #14100f 0%, #090706 40%, #050404 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title + Description */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Platform Analytics
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm sm:text-base">
            Visual insights to understand reservation flow, restaurant
            performance, and peak dining patterns. These preview charts simulate
            the dashboard experience.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map(({ title, icon: Icon, body }) => (
            <div
              key={title}
              className="bg-[#0b0908] border border-[#2c251f] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#C6A667]/14 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#C6A667]" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {title}
                </h3>
              </div>
              {body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
