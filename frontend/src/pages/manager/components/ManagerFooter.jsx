export default function ManagerFooter() {
  return (
    <footer className="mt-16 py-6 text-center text-gray-400 border-t border-[#2c251f] bg-[#181310]">
      <p className="text-sm">
        © {new Date().getFullYear()} PremiumDine — Manager Portal
      </p>
    </footer>
  );
}