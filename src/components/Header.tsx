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
      className={`fixed top-8 left-0 right-0 h-14 flex items-center justify-between px-5 md:px-10 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(245,240,232,0.95)] backdrop-blur-xl border-b border-[rgba(26,23,20,0.08)]"
          : "bg-[rgba(245,240,232,0.6)] backdrop-blur-sm"
      }`}
    >
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1"
        aria-label="Menu"
      >
        <span
          className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      <a href="#" className="font-[var(--font-mono)] text-lg font-bold tracking-wide no-underline text-[var(--color-text)]">
        WE<span className="text-[var(--color-neon)]">●</span>DRIP
      </a>

      <nav className="hidden md:flex gap-8">
        {["OBJECTS", "STORY", "DROPS", "CONTACT"].map((label) => (
          <a
            key={label}
            href={label === "CONTACT" ? "mailto:hello@wedrip.in" : `#${label.toLowerCase()}`}
            className="font-[var(--font-mono)] text-[11px] font-bold tracking-[0.15em] text-[var(--color-text-muted)] no-underline hover:text-[var(--color-neon)] transition-colors relative group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon)] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <button className="font-[var(--font-mono)] text-[11px] font-bold tracking-[0.1em] text-[var(--color-text-muted)] bg-transparent border border-[rgba(26,23,20,0.2)] px-3 py-1.5 hover:border-[var(--color-neon)] hover:text-[var(--color-neon)] transition-all">
        BAG [{bagCount}]
      </button>

      <div
        className={`fixed inset-0 top-8 bg-[rgba(245,240,232,0.97)] flex flex-col items-center justify-center gap-10 transition-opacity duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {["OBJECTS", "STORY", "DROPS", "CONTACT"].map((label) => (
          <a
            key={label}
            href={label === "CONTACT" ? "mailto:hello@wedrip.in" : `#${label.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-[var(--font-mono)] text-sm font-bold tracking-[0.3em] text-[var(--color-text-muted)] no-underline hover:text-[var(--color-neon)] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
