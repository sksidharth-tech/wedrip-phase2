"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Drop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-40 pl-[4px] pr-5 md:pl-[4px] md:pr-10 bg-[var(--color-bg-warm)] overflow-hidden editorial-stripe" id="drops" ref={ref}>
      {/* VCR overlay */}
      <div className="absolute top-4 left-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        CH-03 / LINE IN
      </div>
      <div className="absolute top-4 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-30">
        SP / Hi-Fi
      </div>

      {/* Film perforations left */}
      <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-center gap-2 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-4 h-3 border border-[var(--color-text)] mx-auto" />
        ))}
      </div>

      {/* Film perforations right */}
      <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col justify-center gap-2 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-4 h-3 border border-[var(--color-text)] mx-auto" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pl-[3px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Editorial */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-pixel)] text-[8px] text-[var(--color-orange)] tracking-[0.3em] mb-6"
            >
              NEXT TRANSMISSION / 09.26
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
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
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-[var(--font-handwritten)] text-xl md:text-2xl text-[var(--color-text-muted)] mb-10 max-w-md"
              style={{ transform: "rotate(-1deg)" }}
            >
              every collaboration is a universe. yours is next.
            </motion.p>

            {/* CTA - Retro bevel */}
            <motion.a
              href="https://www.wedrip.in/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-4 font-[var(--font-pixel)] text-[11px] tracking-[0.15em] text-[var(--color-dark)] bg-[var(--color-orange)] px-12 py-6 no-underline border-2 border-[var(--color-dark)] shadow-[5px_5px_0_var(--color-dark)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--color-dark)] hover:bg-[var(--color-neon)] transition-all duration-150"
            >
              BUILD WITH WEDRIP
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.a>
          </div>

          {/* Vinyl record - Retro + Futuristic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Tape strip */}
              <div className="tape-strip w-24 -top-4 left-1/2 -translate-x-1/2 z-10" />
              
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-[var(--color-dark)] flex items-center justify-center vinyl-spin border-4 border-[var(--color-text)] shadow-[8px_8px_0_var(--color-neon)] relative">
                {/* Vinyl grooves */}
                <div className="absolute inset-4 rounded-full vinyl-grooves" />
                {/* Center label */}
                <div className="w-20 h-20 rounded-full bg-[var(--color-orange)] flex flex-col items-center justify-center gap-1 relative z-10 border-2 border-[var(--color-text)]">
                  <span className="font-[var(--font-pixel)] text-[6px] font-bold text-white tracking-[0.1em]">WEDRIP</span>
                  <span className="font-[var(--font-pixel)] text-[6px] text-white">●</span>
                  <span className="font-[var(--font-pixel)] text-[5px] text-white tracking-[0.1em]">DROP 002</span>
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
