"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Drop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10 bg-[var(--color-bg-warm)] overflow-hidden editorial-stripe" id="drops" ref={ref}>
      {/* VCR overlay */}
      <div className="absolute top-4 left-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        CH-03 / LINE IN
      </div>
      <div className="absolute top-4 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        SP / Hi-Fi
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-[var(--font-retro)] text-[11px] text-[var(--color-orange)] tracking-[0.3em] mb-6"
            >
              NEXT TRANSMISSION / 09.26
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              YOUR FAVOURITE CREATOR&apos;S
              <br />
              <span className="text-[var(--color-orange)] italic">NEXT WORLD</span>{" "}
              STARTS HERE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[var(--font-handwritten)] text-xl md:text-2xl text-[var(--color-text-muted)] mb-10 max-w-md"
            >
              every collaboration is a universe. yours is next.
            </motion.p>

            <motion.a
              href="mailto:hello@wedrip.in"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-3 font-[var(--font-mono)] text-[12px] font-bold tracking-[0.15em] text-white bg-[var(--color-orange)] px-8 py-4 no-underline hover:bg-[var(--color-neon)] transition-all duration-300 hover:-translate-y-0.5 retro-border"
            >
              BUILD WITH WEDRIP
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.a>
          </div>

          {/* Vinyl record with VHS aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Tape strip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--color-neon)] opacity-30 rotate-[-2deg] z-10" />
              
              <div className="w-72 h-72 rounded-full bg-[var(--color-text)] flex items-center justify-center vinyl-spin border-4 border-[var(--color-text)] shadow-[8px_8px_0_var(--color-neon)] relative">
                {/* Vinyl grooves */}
                <div className="absolute inset-4 rounded-full" style={{
                  background: "repeating-radial-gradient(circle at center,#1a1714 0px,#1a1714 2px,#2a2a2a 2px,#2a2a2a 3px)"
                }} />
                {/* Center label */}
                <div className="w-24 h-24 rounded-full bg-[var(--color-orange)] flex flex-col items-center justify-center gap-1 relative z-10 border-2 border-[var(--color-text)]">
                  <span className="font-[var(--font-mono)] text-[9px] font-bold text-white tracking-[0.1em]">WEDRIP</span>
                  <span className="font-[var(--font-mono)] text-[9px] text-white">●</span>
                  <span className="font-[var(--font-mono)] text-[8px] text-white tracking-[0.1em]">DROP 002</span>
                </div>
                {/* Center hole */}
                <div className="absolute w-3 h-3 rounded-full bg-[var(--color-bg)] z-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
