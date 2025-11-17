export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 text-white">
      
      <div className="text-center">
        
        {/* 404 Number */}
        <h1 className="text-8xl font-bold text-[#C6A667] drop-shadow-lg">
          404
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-lg mt-4">
          The page you're looking for doesn’t exist or was moved.
        </p>

        {/* Not Found Text */}
        <h2 className="text-4xl font-semibold mt-6 text-[#C6A667]">
          Page Not Found
        </h2>

        {/* Go Home Button */}
        <a
          href="/"
          className="inline-block mt-10 px-6 py-3 rounded-lg bg-[#C6A667] text-black font-semibold 
                     hover:bg-[#B49052] transition shadow-lg"
        >
          Return Home
        </a>

      </div>

    </div>
  );
}
