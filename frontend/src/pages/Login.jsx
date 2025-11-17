export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#111] border border-gray-800 rounded-2xl p-10 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Login</h1>
          <p className="text-gray-400 mt-3">
            Access your account to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667] transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667] transition"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#C6A667] hover:bg-[#b38a4f] text-black font-semibold rounded-lg transition duration-200 shadow-lg"
          >
            Login
          </button>

          {/* Signup link */}
          <p className="text-center text-gray-400 text-sm pt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#C6A667] hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
