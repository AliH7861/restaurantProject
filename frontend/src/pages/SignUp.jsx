import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match.");
      return;
    }
    const res = await fetch("http://localhost:3000/post/new-customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Response:", data);
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-xl">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white">Create an Account</h1>
          <p className="text-gray-400 mt-2">
            Join PremiumDine and start booking unforgettable experiences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={form.full_name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              placeholder="111-222-3333"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              placeholder="********"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={form.confirm_password}
              onChange={handleChange}
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#C6A667] hover:bg-[#B49052] text-black font-semibold rounded-lg transition shadow-md"
          >
            Create Account
          </button>

          {/* Google Button
          <button
            type="button"
            className="w-full py-3 bg-[#222] border border-gray-700 hover:bg-[#333] text-white font-medium rounded-lg transition"
          >
            Continue with Google
          </button> */}

          {/* Redirect to login */}
          <p className="text-center text-gray-400 text-sm mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-[#C6A667] hover:underline">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
