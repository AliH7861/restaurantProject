export default function ContactUsSection() {
  return (
    <section
      className="py-24 px-6 border-t border-[#2c251f]"
      style={{
        background:
          "radial-gradient(circle at top, #120e0c 0%, #080605 40%, #050404 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr,1.2fr] gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let’s Collaborate
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            Whether you're a restaurant owner, customer, or business partner,
            our team is here to support you. Reach out and we’ll respond within
            24–48 hours.
          </p>

          <div className="text-gray-300 text-sm space-y-3">
            <p>
              <span className="text-[#C6A667] font-semibold">Email:</span>{" "}
              support@premiumdine.com
            </p>
            <p>
              <span className="text-[#C6A667] font-semibold">Phone:</span>{" "}
              +1 (444) 555-8899
            </p>
            <p>
              <span className="text-[#C6A667] font-semibold">Location:</span>{" "}
              Toronto, Canada
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="bg-[#0b0908] p-9 rounded-2xl border border-[#2c251f] shadow-[0_8px_30px_rgba(0,0,0,0.45)] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 text-xs uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-2 p-3.5 bg-black/30 border border-[#3b2f28] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A667]/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-gray-300 text-xs uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                className="w-full mt-2 p-3.5 bg-black/30 border border-[#3b2f28] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A667]/40"
                placeholder="What can we help with?"
              />
            </div>

            <div>
              <label className="text-gray-300 text-xs uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 p-3.5 bg-black/30 border border-[#3b2f28] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A667]/40"
                placeholder="Email address"
              />
            </div>

            <div>
              <label className="text-gray-300 text-xs uppercase tracking-wide">
                Company
              </label>
              <input
                type="text"
                className="w-full mt-2 p-3.5 bg-black/30 border border-[#3b2f28] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A667]/40"
                placeholder="Restaurant name (optional)"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300 text-xs uppercase tracking-wide">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full mt-2 p-3.5 bg-black/30 border border-[#3b2f28] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A667]/40"
              placeholder="Start typing here..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-[#C6A667] text-black rounded-full text-sm font-semibold hover:bg-[#d1b473] transition"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
