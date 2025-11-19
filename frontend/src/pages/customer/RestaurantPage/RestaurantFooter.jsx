export default function RestaurantFooter() {
  return (
    <footer className="py-10 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} 𝕬𝕳.co — PremiumDine. All rights reserved.
      </div>
    </footer>
  );
}
