import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3000/post/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid login");
        setLoading(false);
        return;
      }

      setSuccess("Login successful!");
      console.log("Success")
      setTimeout(() => navigate("/"), 500);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen 
                    flex items-center justify-center px-4
                    bg-gradient-to-b from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]">

      <div className="w-full max-w-lg 
                      bg-[#181310]/60 
                      border border-[#2c251f] 
                      rounded-2xl p-10 
                      shadow-[0_0_25px_rgba(198,166,103,0.08)]
                      backdrop-blur-sm">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Login</h1>
          <p className="text-gray-400 mt-3">
            Access your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 
                         bg-[#0f0c0a] 
                         border border-[#3a2f29] 
                         rounded-lg text-white
                         placeholder-gray-500 
                         focus:outline-none focus:border-[#C6A667]
                         transition"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 
                         bg-[#0f0c0a] 
                         border border-[#3a2f29] 
                         rounded-lg text-white
                         placeholder-gray-500 
                         focus:outline-none focus:border-[#C6A667]
                         transition"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 
                       bg-[#C6A667] 
                       hover:bg-[#b38a4f] 
                       text-black font-semibold rounded-lg 
                       transition duration-200 
                       shadow-[0_0_10px_rgba(198,166,103,0.25)]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-400 text-sm pt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#C6A667] hover:underline">
              Sign Up
            </a>
          </p>

        </form>

        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
        )}
        {success && (
          <p className="mt-2 text-sm text-green-500 text-center">{success}</p>
        )}
      </div>
    </div>
  );
}
