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
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white">Login</h1>
          <p className="text-gray-400 mt-2">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-gray-300 text-sm font-medium">
                Password
              </label>
              <a className="text-sm text-gray-400 hover:text-white" href="#">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#C6A667] hover:bg-[#B49052] text-black font-semibold rounded-lg transition shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Google Login
          <button
            type="button"
            className="w-full py-3 bg-[#222] border border-gray-700 hover:bg-[#333] text-white font-medium rounded-lg transition"
          >
            Continue with Google
          </button> */}

          {/* Signup link */}
          <p className="text-center text-gray-400 text-sm mt-3">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#C6A667] hover:underline"
            >
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
