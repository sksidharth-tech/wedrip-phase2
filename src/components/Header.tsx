"use client";

import { useState, useEffect } from "react";

export default function Header({ bagCount }: { bagCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-8 left-0 right-0 h-14 flex items-center justify-between px-5 md:px-10 z-[999] transition-all duration-200 ${
        scrolled
          ? "bg-[rgba(245,240,232,0.95)] backdrop-blur-xl border-b-2 border-[var(--color-text)]"
          : "bg-[rgba(245,240,232,0.7)] backdrop-blur-sm"
      }`}
    >
      {/* Mobile menu toggle - Pixel style */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-2 border-[var(--color-text)] p-1.5"
        aria-label="Menu"
      >
        <span
          className={`block w-4 h-[2px] bg-[var(--color-text)] transition-all duration-200 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-4 h-[2px] bg-[var(--color-text)] transition-all duration-200 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-4 h-[2px] bg-[var(--color-text)] transition-all duration-200 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Logo - Retro + Pixel */}
      <a href="#" className="flex items-center gap-1.5 no-underline ml-2 md:ml-4">
        <span className="font-[var(--font-pixel)] text-[16px] md:text-[18px] text-[var(--color-neon)] tracking-wider">WE</span>
        <span className="font-[var(--font-editorial)] text-3xl md:text-4xl font-black text-[var(--color-text)] italic">●</span>
        <span className="font-[var(--font-pixel)] text-[16px] md:text-[18px] text-[var(--color-neon)] tracking-wider">DRIP</span>
      </a>

      {/* Desktop nav - Swiss style */}
      <nav className="hidden md:flex gap-8">
        {["STORE", "STORY", "DROPS", "CONTACT"].map((label) => (
          <a
            key={label}
            href={label === "CONTACT" ? "mailto:hello@wedrip.in" : `#${label.toLowerCase()}`}
            className="font-[var(--font-mono)] text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] no-underline hover:text-[var(--color-neon)] transition-colors relative group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-neon)] transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Bag button - Retro bevel */}
      <button className="font-[var(--font-pixel)] text-[8px] tracking-wider text-[var(--color-text)] bg-[var(--color-bg)] border-2 border-[var(--color-text)] px-3 py-1.5 hover:bg-[var(--color-neon)] hover:text-[var(--color-dark)] transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[2px_2px_0_var(--color-text)]">
        BAG [{bagCount}]
      </button>

      {/* Mobile menu overlay - Handwritten style */}
      <div
        className={`fixed inset-0 top-8 bg-[rgba(245,240,232,0.97)] flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {["STORE", "STORY", "DROPS", "CONTACT"].map((label, i) => (
          <a
            key={label}
            href={label === "CONTACT" ? "mailto:hello@wedrip.in" : `#${label.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-[var(--font-handwritten)] text-3xl text-[var(--color-text)] no-underline hover:text-[var(--color-neon)] transition-colors"
            style={{ transform: `rotate(${-2 + i}deg)` }}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
