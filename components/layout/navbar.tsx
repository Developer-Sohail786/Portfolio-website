"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Ask Sohail", href: "#ask-sohail" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigation() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#174ea6]">
      <nav className="mx-auto flex h-[68px] max-w-[1470px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="font-mono text-[15px] font-bold tracking-tight text-white"
        >
          SOHAIL<span className="text-blue-300">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigation}
              className="font-mono text-[11px] uppercase tracking-wide text-white/55 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:border-white md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#174ea6] px-6 py-5 md:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigation}
                className="border-b border-white/10 py-4 font-mono text-xs uppercase tracking-wider text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
