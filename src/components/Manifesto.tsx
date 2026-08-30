"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10 bg-[var(--color-bg-warm)]" id="story" ref={ref}>
      {/* Swiss divider top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-text)]" />

      {/* VCR overlay */}
      <div className="absolute top-4 left-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        LINE IN / AUTO
      </div>
      <div className="absolute top-4 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        NTSC / 4:3
      </div>

      <div className="max-w-6xl mx-auto ml-6 md:ml-12">
        {/* Swiss-style eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)] tracking-[0.3em] mb-8"
        >
          WE ARE WEDRIP / 001
        </motion.p>

        {/* Editorial headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-16 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Creators build worlds.
          <br />
          We make them{" "}
          <span className="text-[var(--color-neon)] italic">wearable.</span>
        </motion.h2>

        {/* Swiss grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Main content - Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-8"
          >
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-futuristic)" }}>
              We don&apos;t make merch. We make artifacts of the culture you live in. Each piece is a conversation between the creator and the person wearing it.
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed" style={{ fontFamily: "var(--font-futuristic)" }}>
              Limited runs. No restocks. When a drop is gone, it exists only in the wardrobes of the people who understood the moment.
            </p>

            {/* Handwritten note with tape */}
            <div className="mt-10 relative inline-block">
              <div className="tape-strip w-16 left-4" />
              <div className="handwritten-card max-w-md">
                <p className="font-[var(--font-handwritten)] text-xl text-[var(--color-orange)]">
                  &quot;we don&apos;t chase trends — we bury them.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stamp - Retro + Handwritten */}
          <motion.div
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={inView ? { opacity: 0.8, rotate: -15, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="md:col-span-4 flex items-center justify-center"
          >
            <div className="relative">
              {/* Tape strip */}
              <div className="tape-strip w-20 -top-3 left-1/2 -translate-x-1/2" />
              
              {/* Stamp */}
              <div className="w-40 h-40 border-[3px] border-[var(--color-orange)] rounded-full flex items-center justify-center stamp-animate relative">
                <div className="absolute inset-2 border border-dashed border-[var(--color-orange)] rounded-full" />
                <div className="absolute inset-4 border border-[var(--color-orange)] rounded-full opacity-30" />
                <div className="flex flex-col items-center gap-1 font-[var(--font-pixel)] text-[8px] font-bold text-[var(--color-orange)] tracking-[0.2em]">
                  <span>WEDRIP</span>
                  <span className="text-[6px] text-[var(--color-text-muted)] font-[var(--font-mono)]">STUDIO</span>
                  <span className="text-[6px] text-[var(--color-text-muted)] font-[var(--font-mono)]">CHENNAI</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Swiss-style bottom divider with pixel dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-[var(--color-text)] opacity-20" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[var(--color-neon)]" />
            ))}
          </div>
          <div className="flex-1 h-px bg-[var(--color-text)] opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
