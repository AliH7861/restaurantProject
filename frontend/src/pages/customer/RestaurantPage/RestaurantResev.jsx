import { useState } from "react";

export default function RestaurantResev() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Book a Reservation</h3>

      {/* CTA BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 bg-[#C6A667] text-black rounded-lg 
                   hover:bg-[#d1b57c] transition font-medium"
      >
        Book Now
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#181310] border border-[#2c251f] p-8 rounded-xl w-[90%] max-w-lg shadow-xl relative">

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-[#C6A667]">
              Reserve Your Table
            </h2>

            <form className="space-y-4">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-300">Phone Number</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="text-sm text-gray-300">Date</label>
                <input
                  type="date"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                />
              </div>

              {/* TIME */}
              <div>
                <label className="text-sm text-gray-300">Time</label>
                <input
                  type="time"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                />
              </div>

              {/* PARTY SIZE */}
              <div>
                <label className="text-sm text-gray-300">Party Size</label>
                <select
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7+</option>
                </select>
              </div>

              {/* TABLE SELECTION */}
              <div>
                <label className="text-sm text-gray-300">Select Table</label>
                <select
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-[#0f0c0a] border border-[#3a2f29] text-white focus:border-[#C6A667] outline-none"
                >
                  <option>Window Table</option>
                  <option>Outdoor Table</option>
                  <option>Booth</option>
                  <option>Chef’s Counter</option>
                  <option>Private Room</option>
                </select>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full mt-4 px-5 py-3 bg-[#C6A667] text-black rounded-lg 
                           hover:bg-[#b89452] transition font-semibold"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

