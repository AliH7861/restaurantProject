'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Restaurants', href: '#' },
  { name: 'Cuisines', href: '#' },
  { name: 'Locations', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#0B0B0B] min-h-screen text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-16"
        >
          {/* Fake Logo Making */}
          <div className="flex lg:flex-1">
            <a href="#" className="flex items-center gap-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C6A667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2 4-4" />
              </svg>
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" className="text-sm font-semibold text-gray-300 hover:text-white">
              Log in <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#111] p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">PremiumDine</span>
              <button
                type="button"
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
                  className="block rounded-lg px-3 py-2 text-base text-gray-200 hover:bg-[#1a1a1a]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="block rounded-lg px-3 py-3 text-base text-gray-200 hover:bg-[#1a1a1a]"
              >
                Log in →
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* HERO SECTION */}
      <div className="relative isolate px-6 pt-36 lg:px-16">

        {/* Soft Spotlight Background Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 flex justify-center"
        >
          <div className="w-[600px] h-[600px] bg-[#C6A667]/20 blur-[160px] rounded-full" />
        </div>

        <div className="mx-auto max-w-3xl text-center py-40">
          <h1 className="text-5xl sm:text-7xl font-semibold text-white leading-tight font-serif">
            Reserve unforgettable dining experiences
          </h1>

          <p className="mt-6 text-lg text-gray-300 sm:text-xl max-w-2xl mx-auto">
            Discover curated fine-dining restaurants and book your perfect table with ease.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-md bg-[#C6A667] px-5 py-3 text-sm font-semibold text-black shadow-lg hover:bg-[#B49052] transition"
            >
              Book a Table
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-gray-200 hover:text-white transition"
            >
              Explore Restaurants →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
