import { useState, useEffect } from "react";

export default function NewReservationForm() {
  const [form, setForm] = useState({
    customer_id: "",
    restaurant_id: "",
    reservation_date: "",
    start_time: "",
    end_time: "",
    table_id: "",
    num_people: "",
    customer_name: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/post/new-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      // Clear form
      setForm({
        customer_id: "",
        restaurant_id: "",
        reservation_date: "",
        start_time: "",
        end_time: "",
        table_id: "",
        num_people: "",
        customer_name: "",
      });

      // Show success message
      setSuccessMessage("Reservation successfully created!");

      // Auto-hide message after 4 seconds
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  }

  return (
    <div className="min-h-screen text-white">
      <div className="px-8 py-10 max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-4">Create a Reservation</h1>

        <p className="text-gray-300 mb-8">
          Fill in the details below to schedule your dining reservation.
        </p>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#141010]/60 backdrop-blur-md p-8 rounded-xl 
                     shadow-lg border border-white/10 space-y-5"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="number"
              name="customer_id"
              placeholder="Customer ID"
              value={form.customer_id}
              onChange={handleChange}
              required
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

            <input
              type="text"
              name="customer_name"
              placeholder="Full Name"
              value={form.customer_name}
              onChange={handleChange}
              required
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

            <input
              type="number"
              name="restaurant_id"
              placeholder="Restaurant ID"
              value={form.restaurant_id}
              onChange={handleChange}
              required
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

            <input
              type="number"
              name="table_id"
              placeholder="Table ID"
              value={form.table_id}
              onChange={handleChange}
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

            <input
              type="number"
              name="num_people"
              placeholder="# of People"
              value={form.num_people}
              onChange={handleChange}
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              type="date"
              name="reservation_date"
              value={form.reservation_date}
              onChange={handleChange}
              required
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

            <input
              type="time"
              name="start_time"
              value={form.start_time}
              onChange={handleChange}
              required
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

            <input
              type="time"
              name="end_time"
              value={form.end_time}
              onChange={handleChange}
              className="bg-[#1b1b1b] border border-white/10 rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-orange-600"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 transition 
                       py-3 rounded-lg text-lg font-medium shadow-md"
          >
            Create Reservation
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="mt-4 text-green-400 text-lg font-medium animate-fadeIn">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}
