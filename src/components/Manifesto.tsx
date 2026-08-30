"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10 bg-[var(--color-bg-warm)] film-strip-border" id="story" ref={ref}>
      {/* VCR overlay */}
      <div className="absolute top-4 left-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        LINE IN / AUTO
      </div>
      <div className="absolute top-4 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        NTSC / 4:3
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)] tracking-[0.3em] mb-8"
        >
          WE ARE WEDRIP / 001
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-16 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Creators build worlds.
          <br />
          We make them{" "}
          <span className="text-[var(--color-neon)] italic">wearable.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2"
          >
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-futuristic)" }}>
              We don&apos;t make merch. We make artifacts of the culture you live in. Each piece is a conversation between the creator and the person wearing it.
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed" style={{ fontFamily: "var(--font-futuristic)" }}>
              Limited runs. No restocks. When a drop is gone, it exists only in the wardrobes of the people who understood the moment.
            </p>

            {/* Handwritten note with tape effect */}
            <div className="mt-8 relative inline-block">
              <div className="absolute -top-2 left-4 w-12 h-4 bg-[var(--color-neon)] opacity-40 rotate-[-2deg]" />
              <div className="font-[var(--font-handwritten)] text-2xl text-[var(--color-orange)] -rotate-1 bg-[var(--color-bg)] px-4 py-2 border border-[var(--color-text)] border-dashed relative z-10">
                &quot;we don&apos;t chase trends — we bury them.&quot;
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={inView ? { opacity: 0.8, rotate: -15, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Stamp outer ring */}
              <div className="w-40 h-40 border-[3px] border-[var(--color-orange)] rounded-full flex items-center justify-center stamp-animate relative">
                <div className="absolute inset-2 border border-dashed border-[var(--color-orange)] rounded-full" />
                <div className="absolute inset-4 border border-[var(--color-orange)] rounded-full opacity-30" />
                {/* Inner content */}
                <div className="flex flex-col items-center gap-1 font-[var(--font-mono)] text-[10px] font-bold text-[var(--color-orange)] tracking-[0.2em]">
                  <span>WEDRIP</span>
                  <span className="text-[8px] text-[var(--color-text-muted)]">STUDIO</span>
                  <span className="text-[8px] text-[var(--color-text-muted)]">CHENNAI</span>
                  <span>2026</span>
                </div>
              </div>
              {/* Tape strip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[var(--color-neon)] opacity-30 rotate-[-3deg]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
