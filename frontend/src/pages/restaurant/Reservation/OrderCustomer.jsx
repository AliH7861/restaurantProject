export default function OrderCustomer() {
  return (
    <div className="bg-[#181310] p-6 rounded-xl border border-[#2c251f]">
      <h2 className="text-xl font-medium text-white mb-4">Customer Information</h2>

      <div className="space-y-3 text-gray-300">
        <p><strong className="text-white">Name:</strong> Sarah Thompson</p>
        <p><strong className="text-white">Phone:</strong> +1 (437) 555-1293</p>
        <p><strong className="text-white">Email:</strong> sarah@email.com</p>
        <p><strong className="text-white">Notes:</strong> Birthday dinner, prefers window seating.</p>
      </div>
    </div>
  );
}
