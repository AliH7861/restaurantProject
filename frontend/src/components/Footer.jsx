import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t border-gray-800 mt-20"
      style={{
        background: "radial-gradient(circle at top, #1b1b1b 0%, #0d0d0d 40%, #000 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 𝕬𝕳.co — PremiumDine. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-3 rounded-full bg-[#111] border border-gray-700 text-[#C6A667] 
                     hover:bg-[#1a1a1a] hover:border-[#C6A667] transition"
        >
          <ArrowUp size={18} />
        </a>

      </div>
    </footer>
  );
}
