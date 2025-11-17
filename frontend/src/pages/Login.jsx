export default function Login() {
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
        <form className="space-y-5">
          
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
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#C6A667] hover:bg-[#B49052] text-black font-semibold rounded-lg transition shadow-md"
          >
            Login
          </button>

          {/* Google Login */}
          <button
            type="button"
            className="w-full py-3 bg-[#222] border border-gray-700 hover:bg-[#333] text-white font-medium rounded-lg transition"
          >
            Continue with Google
          </button>

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
      </div>
    </div>
  );
}
