"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Smooth scrolling to IDs
const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Insights", href: "#dashboard-preview" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="text-white"
      style={{
        background:
          "radial-gradient(circle at top, #1a1614 0%, #0f0c0b 50%, #0b0908 100%)",
      }}
    >
      {/* ============================ NAVBAR ============================ */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-16 lg:py-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full border border-[#C6A667] flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#C6A667]" />
              </div>

              <span className="text-lg font-semibold tracking-wide">
                PremiumDine
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-gray-300 rounded-md"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#C6A667] transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login / Signup */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
            <a
              href="/login"
              className="text-sm font-semibold text-gray-300 hover:text-[#C6A667] transition"
            >
              Log in →
            </a>

            <a
              href="/signup"
              className="rounded-md bg-[#C6A667] px-4 py-2 text-sm font-semibold text-black shadow-md hover:bg-[#b89452] transition"
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* ============================ MOBILE MENU ============================ */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-40 bg-black/60" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#120f0e] p-6 text-white border-l border-[#2c251f]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">PremiumDine</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-gray-300"
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base text-gray-200 hover:bg-[#1a1513]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/login"
                className="block rounded-lg px-3 py-2 text-base text-gray-200 hover:bg-[#1a1513]"
              >
                Log in →
              </a>

              <a
                href="/signup"
                className="block rounded-lg px-3 py-2 text-base bg-[#C6A667] text-black font-semibold hover:bg-[#b89452]"
              >
                Sign Up
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* ============================ HERO SECTION ============================ */}
      <main
        id="hero"
        className="relative isolate px-6 pt-40 pb-40 lg:px-10 m-20"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[650px] h-[650px] bg-[#C6A667]/10 blur-[180px] rounded-full" />
        </div>

        <div className="mx-auto max-w-3xl text-center py-28">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight font-serif mt-10 mb-10">
            Reserve unforgettable dining experiences.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover curated restaurants, manage reservations, and elevate your
            guests’ dining journey from first click to final course.
          </p>

        
        </div>
      </main>
    </div>
  );
}
