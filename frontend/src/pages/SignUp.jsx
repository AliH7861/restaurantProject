export default function SignUp() {
  return (
    <div className="min-h-screen 
                    flex items-center justify-center px-4
                    bg-gradient-to-b from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]">

      <div className="w-full max-w-md 
                      bg-[#181310]/60 
                      border border-[#2c251f] 
                      rounded-2xl p-8 
                      shadow-[0_0_25px_rgba(198,166,103,0.08)]
                      backdrop-blur-sm">

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
              className="w-full px-4 py-2 
                         bg-[#0f0c0a] 
                         border border-[#3a2f29] 
                         rounded-lg 
                         text-white placeholder-gray-500
                         focus:outline-none focus:border-[#C6A667]"
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
              className="w-full px-4 py-2 
                         bg-[#0f0c0a] 
                         border border-[#3a2f29] 
                         rounded-lg 
                         text-white placeholder-gray-500
                         focus:outline-none focus:border-[#C6A667]"
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
              className="w-full px-4 py-2 
                         bg-[#0f0c0a] 
                         border border-[#3a2f29] 
                         rounded-lg 
                         text-white placeholder-gray-500
                         focus:outline-none focus:border-[#C6A667]"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="text-gray-300 block mb-2 text-sm font-medium">
              Account Type
            </label>
            <select
              className="w-full px-4 py-2 
                         bg-[#0f0c0a] 
                         border border-[#3a2f29] 
                         rounded-lg 
                         text-white 
                         focus:outline-none focus:border-[#C6A667]"
              required
            >
              <option value="" disabled selected className="bg-[#0f0c0a]">
                Select your role
              </option>
              <option value="customer" className="bg-[#0f0c0a]">
                Customer
              </option>
              <option value="manager" className="bg-[#0f0c0a]">
                Restaurant Manager
              </option>
            </select>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 
                       bg-[#C6A667] 
                       hover:bg-[#b58a4f] 
                       text-black font-semibold 
                       rounded-lg transition 
                       shadow-[0_0_10px_rgba(198,166,103,0.25)]"
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

