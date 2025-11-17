export default function SignUp() {
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

        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
            />
          </div>

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
            <label className="text-gray-300 block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A667]"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="text-gray-300 block mb-2 text-sm font-medium">
              Account Type
            </label>
            <select
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#C6A667]"
              required
            >
              <option value="" disabled selected className="bg-black">
                Select your role
              </option>
              <option value="customer" className="bg-black">
                Customer
              </option>
              <option value="manager" className="bg-black">
                Restaurant Manager
              </option>
            </select>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#C6A667] hover:bg-[#B49052] text-black font-semibold rounded-lg transition shadow-md"
          >
            Create Account
          </button>


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
