// src/components/Footer.jsx
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card border-t mt-12 flex justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} 𝕬𝕳.co. All rights reserved.
      </p>

      <a href="#hero" className="p-2 rounded-full bg-red/10 hover:bg-red/20 transition">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
