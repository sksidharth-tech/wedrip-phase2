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
    <section className="relative min-h-screen flex items-center justify-center px-5 md:px-10 overflow-hidden" id="top">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0b08] via-[#1a1510] to-[#0d0b08]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(200,255,0,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,107,53,0.03)_0%,transparent_50%)]" />

      {/* VHS frame overlay */}
      <div className="absolute inset-5 border border-[rgba(255,255,255,0.04)] pointer-events-none">
        <div className="absolute top-4 left-5 font-[var(--font-retro)] text-[10px] text-[var(--color-faded-red)] tracking-[0.2em] blink">
          ● REC
        </div>
        <div className="absolute top-4 right-5 font-[var(--font-retro)] text-[10px] text-[rgba(255,255,255,0.25)] tracking-[0.15em]">
          {time}
        </div>
        <div className="absolute bottom-4 right-5 font-[var(--font-retro)] text-[9px] text-[rgba(255,255,255,0.15)] tracking-[0.1em]">
          CHENNAI — 13.0827° N, 80.2707° E
        </div>
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
          className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-[-0.03em] mb-10"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          <span className="block text-[var(--color-cream)]">NOT MERCH.</span>
          <span className="block text-[var(--color-neon)] glow-text mt-2">
            <em className="not-italic">A PIECE OF THE WORLD.</em>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-[var(--font-handwritten)] text-2xl md:text-3xl text-[var(--color-cream-muted)] mb-10"
        >
          not just fabric — it&apos;s a frequency
        </motion.p>

        <motion.a
          href="#objects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-flex items-center gap-3 font-[var(--font-mono)] text-[12px] font-bold tracking-[0.15em] text-[var(--color-bg)] bg-[var(--color-neon)] px-8 py-4 no-underline hover:bg-[var(--color-orange)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,255,0,0.2)]"
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
        animate={{ opacity: 0.7, rotate: -5 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-[10%] right-[8%] hidden lg:block"
      >
        <div className="w-48 h-28 bg-gradient-to-br from-[#2a2520] to-[#1a1815] border-2 border-[#3a3530] rounded-lg p-3 flex flex-col items-center gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="font-[var(--font-retro)] text-[9px] text-[var(--color-neon)] tracking-[0.2em] px-2 py-0.5 border border-[var(--color-neon)]">
            DROP 001
          </div>
          <div className="flex gap-8">
            <div className="w-7 h-7 border-2 border-[#555] rounded-full relative cassette-reel">
              <div className="absolute inset-1.5 border border-[#444] rounded-full" />
            </div>
            <div className="w-7 h-7 border-2 border-[#555] rounded-full relative cassette-reel" style={{ animationDelay: "-1s" }}>
              <div className="absolute inset-1.5 border border-[#444] rounded-full" />
            </div>
          </div>
          <div className="font-[var(--font-retro)] text-[7px] text-[#666] tracking-[0.15em]">
            SIDE A — THE THIRD SPACE
          </div>
        </div>
      </motion.div>

      {/* Floating editorial note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-8 left-5 font-[var(--font-handwritten)] text-sm text-[var(--color-cream-muted)] hidden md:block"
      >
        ← scroll to explore
      </motion.div>
    </section>
  );
}
