export default function AboutUsSection() {
  return (
    <section
      className="w-full py-20 px-6 border-t border-[#2c251f]"
      style={{
        background:
          "radial-gradient(circle at top, #14100e 0%, #080605 40%, #050404 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About PremiumDine
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            We built PremiumDine with one purpose  to bring a modern, elegant,
            and seamless dining experience for both customers and restaurants.
            With reliable tools, beautiful interfaces, and smart automation,
            we’re reimagining what dining management can be.
          </p>
        </div>

        {/* 4 highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Our Mission",
              text: "To empower restaurants of all sizes with accessible, intuitive technology that simplifies operations and elevates every dining moment.",
            },
            {
              number: "02",
              title: "Our Services",
              text: "From real-time reservations to menu management and table layouts, we provide an all-in-one platform for smooth daily operations.",
            },
            {
              number: "03",
              title: "Our Commitment",
              text: "We focus on transparency, reliability, and ongoing support to help restaurants grow without sacrificing guest experience.",
            },
            {
              number: "04",
              title: "Contact Us",
              text: "Questions or ideas? Reach out at support@premiumdine.com. We’re here to collaborate with you.",
            },
          ].map((card) => (
            <div
              key={card.number}
              className="bg-[#0b0908] p-6 rounded-xl border border-[#2c251f] shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:border-[#C6A667] transition"
            >
              <div className="text-[#C6A667] text-xl font-bold mb-3">
                {card.number}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
