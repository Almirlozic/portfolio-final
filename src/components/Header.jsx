"use client";

import { useState } from "react";

const navLinks = [
  { label: "[WORK]", href: "#work", active: true },
  { label: "INDEX", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="font-label-mono text-label-mono uppercase tracking-widest sticky top-0 z-50 border-b border-primary w-full"
      style={{ backgroundColor: "rgba(251,249,249,0.92)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)", transform: "translateZ(0)" }}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-page py-4">
        <div className="font-label-mono-bold text-label-mono-bold text-primary">ALMIR LOZIC</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-gutter">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`px-2 py-1 hover:bg-primary hover:text-on-primary transition-all duration-300 ${
                active ? "text-primary font-bold" : "text-secondary"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className="md:hidden text-primary flex items-center justify-center"
          style={{ minWidth: 44, minHeight: 44, touchAction: "manipulation", cursor: "pointer" }}
          aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="3" x2="17" y2="17" />
              <line x1="17" y1="3" x2="3" y2="17" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="5" x2="17" y2="5" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="15" x2="17" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col border-t border-primary px-margin-mobile py-4 gap-4 bg-background">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-2 py-2 hover:bg-primary hover:text-on-primary transition-all duration-300 ${
                active ? "text-primary font-bold" : "text-secondary"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
