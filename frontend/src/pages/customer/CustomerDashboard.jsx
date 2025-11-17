export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-4xl font-semibold mb-4">Customer Dashboard</h1>

      <p className="text-gray-300">
        Welcome to your dashboard. Here you can browse restaurants, book tables, 
        check your reservations, and explore your dining history.
      </p>

      {/* Add more sections later */}
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Browse Restaurants</h2>
          <p className="text-gray-400">Explore restaurants and cuisines.</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Book a Table</h2>
          <p className="text-gray-400">Quickly reserve a table.</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Your Reservations</h2>
          <p className="text-gray-400">View and manage your booking history.</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Edit Profile</h2>
          <p className="text-gray-400">Update your information.</p>
        </div>
      </div>
    </div>
  );
}
