export default function ManagerDashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-4xl font-semibold mb-4">Manager Dashboard</h1>

      <p className="text-gray-300">
        Welcome to your management panel. Here you can oversee restaurant operations, 
        manage reservations, and monitor performance analytics.
      </p>

      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
        
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Today's Reservations</h2>
          <p className="text-gray-400">
            View all upcoming reservations for your restaurant.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Manage Reservations</h2>
          <p className="text-gray-400">
            Edit, update, or cancel customer bookings.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Table Status</h2>
          <p className="text-gray-400">
            Check available tables and table assignment status.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Analytics & Reports</h2>
          <p className="text-gray-400">
            View charts, insights, and performance metrics.
          </p>
        </div>

      </div>
    </div>
  );
}
