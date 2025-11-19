export default function RestaurantResev() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Today's Reservations</h3>

      <div className="space-y-4">
        <div className="p-4 bg-[#181310] rounded-lg border border-[#2c251f]">
          <p className="text-white">Reservation #1</p>
          <p className="text-gray-400 text-sm">6:00 PM • Party of 4</p>
        </div>

        <div className="p-4 bg-[#181310] rounded-lg border border-[#2c251f]">
          <p className="text-white">Reservation #2</p>
          <p className="text-gray-400 text-sm">7:30 PM • Party of 2</p>
        </div>

        <div className="p-4 bg-[#181310] rounded-lg border border-[#2c251f]">
          <p className="text-white">Reservation #3</p>
          <p className="text-gray-400 text-sm">9:00 PM • Party of 6</p>
        </div>
      </div>

      <button className="mt-6 px-5 py-2 bg-[#C6A667] text-black rounded-lg hover:bg-[#d1b57c] transition">
        View All Reservations
      </button>
    </div>
  );
}
