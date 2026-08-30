"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-16 md:py-24 px-5 md:px-10 border-t-[3px] border-[var(--color-text)] relative" ref={ref}>
      {/* Film strip top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--color-dark)] opacity-10">
        <div className="flex gap-0.5 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="flex-1 bg-[var(--color-cream)] opacity-40" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto ml-4 md:ml-8">
        {/* Logo - Retro + Pixel */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1 no-underline mb-10"
        >
          <span className="font-[var(--font-pixel)] text-[10px] text-[var(--color-neon)] tracking-wider">WE</span>
          <span className="font-[var(--font-editorial)] text-3xl font-black text-[var(--color-text)] italic">●</span>
          <span className="font-[var(--font-pixel)] text-[10px] text-[var(--color-neon)] tracking-wider">DRIP</span>
        </motion.a>

        {/* Swiss grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Swiss accent line */}
            <div className="absolute -left-3 top-0 bottom-0 w-[3px] bg-[var(--color-neon)]" />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4" style={{ fontFamily: "var(--font-futuristic)" }}>
              Objects, uniforms and wearable worlds built with independent creators. Each piece is a collaboration, not a commodity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-3 top-0 bottom-0 w-[3px] bg-[var(--color-orange)]" />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4" style={{ fontFamily: "var(--font-futuristic)" }}>
              CHENNAI, INDIA
              <br />
              HELLO@WEDRIP.IN
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-3 top-0 bottom-0 w-[3px] bg-[var(--color-electric)]" />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4" style={{ fontFamily: "var(--font-futuristic)" }}>
              <a href="#" className="hover:text-[var(--color-neon)] transition-colors">INSTAGRAM ↗</a>
              <br />
              <a href="#" className="hover:text-[var(--color-neon)] transition-colors">SHIPPING & RETURNS</a>
            </p>
          </motion.div>
        </div>

        {/* Bottom bar - Retro + Pixel */}
        <div className="pt-6 border-t-[3px] border-[var(--color-text)] flex flex-col md:flex-row justify-between items-center gap-4">
          <small className="font-[var(--font-pixel)] text-[7px] text-[var(--color-text-muted)] tracking-[0.2em]">
            © 2026 WEDRIP STUDIO — ALL RIGHTS RESERVED
          </small>
          <div className="flex items-center gap-4">
            <div className="font-[var(--font-retro)] text-[10px] text-[var(--color-text-muted)] tracking-[0.2em]">
              PAL / NTSC
            </div>
            <div className="w-2 h-2 border border-[var(--color-text)] opacity-30" />
            <div className="font-[var(--font-retro)] text-[10px] text-[var(--color-text-muted)] tracking-[0.2em]">
              SP MODE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
