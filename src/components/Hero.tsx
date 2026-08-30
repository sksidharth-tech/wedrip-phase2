"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 md:px-10 overflow-hidden paper-bg" id="top">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#ebe5d8] to-[#f5f0e8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(234,179,8,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(232,85,61,0.03)_0%,transparent_50%)]" />

      {/* VHS frame overlay */}
      <div className="absolute inset-5 border-2 border-[var(--color-text)] pointer-events-none opacity-20">
        <div className="absolute top-4 left-5 font-[var(--font-retro)] text-[10px] text-[var(--color-orange)] tracking-[0.2em] blink">
          ● REC
        </div>
        <div className="absolute top-4 right-5 font-[var(--font-retro)] text-[10px] text-[var(--color-text-muted)] tracking-[0.15em]">
          {time}
        </div>
        <div className="absolute bottom-4 right-5 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.1em]">
          CHENNAI — 13.0827° N, 80.2707° E
        </div>
        <div className="absolute bottom-4 left-5 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.1em]">
          SP / Hi-Fi STEREO
        </div>
      </div>

      {/* Film strip left */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-[var(--color-dark)] opacity-5 hidden lg:flex flex-col items-center justify-center gap-1">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-4 h-3 border border-[var(--color-cream)] opacity-40" />
        ))}
      </div>

      {/* Film strip right */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-[var(--color-dark)] opacity-5 hidden lg:flex flex-col items-center justify-center gap-1">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-4 h-3 border border-[var(--color-cream)] opacity-40" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[var(--font-retro)] text-[11px] text-[var(--color-neon)] tracking-[0.3em] mb-8"
        >
          DROP 001 / THE THIRD SPACE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-[-0.03em] mb-10 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          <span className="block">NOT MERCH.</span>
          <span className="block text-[var(--color-neon)] glow-text mt-2">
            <em className="not-italic">A PIECE OF THE WORLD.</em>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-[var(--font-handwritten)] text-2xl md:text-3xl text-[var(--color-text-muted)] mb-10"
        >
          not just fabric — it&apos;s a frequency
        </motion.p>

        <motion.a
          href="#objects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-flex items-center gap-3 font-[var(--font-mono)] text-[12px] font-bold tracking-[0.15em] text-white bg-[var(--color-neon)] px-8 py-4 no-underline hover:bg-[var(--color-orange)] transition-all duration-300 hover:-translate-y-0.5 retro-border-neon"
        >
          ENTER THE DROP
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.a>
      </div>

      {/* Cassette tape decoration */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.9, rotate: -5 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-[10%] right-[8%] hidden lg:block"
      >
        <div className="w-52 h-32 bg-gradient-to-br from-[#f5f0e8] to-[#ebe5d8] border-2 border-[var(--color-text)] rounded-lg p-3 flex flex-col items-center gap-2 shadow-[4px_4px_0_var(--color-text)] relative">
          {/* Cassette label */}
          <div className="w-full h-8 bg-[var(--color-dark)] flex items-center justify-center">
            <span className="font-[var(--font-retro)] text-[10px] text-[var(--color-neon)] tracking-[0.2em]">
              WEDRIP RECORDS™
            </span>
          </div>
          {/* Reels */}
          <div className="flex gap-10 mt-1">
            <div className="w-8 h-8 border-2 border-[var(--color-text)] rounded-full relative cassette-reel">
              <div className="absolute inset-1.5 border border-[var(--color-text-muted)] rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--color-text)] rounded-full" />
              </div>
            </div>
            <div className="w-8 h-8 border-2 border-[var(--color-text)] rounded-full relative cassette-reel" style={{ animationDelay: "-1.5s" }}>
              <div className="absolute inset-1.5 border border-[var(--color-text-muted)] rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--color-text)] rounded-full" />
              </div>
            </div>
          </div>
          {/* Label */}
          <div className="font-[var(--font-retro)] text-[8px] text-[var(--color-text-muted)] tracking-[0.15em] mt-1">
            SIDE A — THE THIRD SPACE — 2026
          </div>
          {/* Screw holes */}
          <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
          <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
        </div>
      </motion.div>

      {/* Floating editorial note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-8 left-5 font-[var(--font-handwritten)] text-sm text-[var(--color-text-muted)] hidden md:block"
      >
        ← scroll to explore
      </motion.div>

      {/* Retro TV channel indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="font-[var(--font-retro)] text-[var(--color-text)] text-4xl font-bold">
          03
        </div>
        <div className="font-[var(--font-retro)] text-[8px] text-[var(--color-text-muted)] tracking-[0.2em]">
          CH
        </div>
      </motion.div>
    </section>
  );
}
