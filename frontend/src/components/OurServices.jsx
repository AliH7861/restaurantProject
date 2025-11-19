import { Utensils, LayoutGrid, ClipboardList, BarChart3 } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: Utensils,
      title: "Smart Reservations",
      desc: "Real-time bookings, automated confirmations, and a smooth experience for every guest.",
    },
    {
      icon: ClipboardList,
      title: "Menu Management",
      desc: "Keep menus updated, highlight seasonal dishes, and adjust pricing effortlessly.",
    },
    {
      icon: LayoutGrid,
      title: "Table Layout Tools",
      desc: "Design and edit your floor plan with an interactive visual editor built for hosts.",
    },
    {
      icon: BarChart3,
      title: "Restaurant Analytics",
      desc: "Track peak hours, guest patterns, and performance insights to make better decisions.",
    },
  ];

  return (
    <section
      className="py-20 px-6 border-t border-[#2c251f]"
      style={{
        background:
          "radial-gradient(circle at top, #15100d 0%, #090706 40%, #050404 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Solutions crafted to give restaurants complete control — simple,
            intuitive, and designed with premium detail.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0b0908] border border-[#2c251f] rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:border-[#C6A667] transition"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#C6A667]/14 mb-5">
                <Icon className="w-5 h-5 text-[#C6A667]" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
