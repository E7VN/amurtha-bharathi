"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/initiatives", label: "Activities" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <BrandLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">

          <ThemeToggle />

          {/* Animated Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300
              ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-opacity duration-300
              ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300
              ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>

        </div>
      </div>

      {/* Mobile dropdown with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        bg-slate-900/60 backdrop-blur-xl`}
      >
        <div className="flex flex-col items-center gap-5 py-5 text-white">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-brand-blue transition-colors"
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>

    </header>
  );
}