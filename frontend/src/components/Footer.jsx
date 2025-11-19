export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t border-[#3a2f27]"
      style={{
        background:
          "linear-gradient(180deg, #0d0a09 0%, #120f0d 50%, #0b0908 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm tracking-wide"
          style={{ color: "rgba(198,166,103,0.55)" }}
        >
          © {new Date().getFullYear()} 𝕬𝕳.co — PremiumDine.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
