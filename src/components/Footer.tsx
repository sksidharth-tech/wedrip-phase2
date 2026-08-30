"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-16 md:py-24 px-5 md:px-10 border-t-4 border-[var(--color-text)] relative" ref={ref}>
      {/* Film strip top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--color-dark)] opacity-10">
        <div className="flex gap-0.5 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="flex-1 bg-[var(--color-cream)] opacity-30" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-block font-[var(--font-mono)] text-3xl font-bold text-[var(--color-text)] no-underline tracking-wide mb-10"
        >
          WE<span className="text-[var(--color-neon)]">●</span>DRIP
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[var(--color-neon)] opacity-30" />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4">
              Objects, uniforms and wearable worlds built with independent creators. Each piece is a collaboration, not a commodity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[var(--color-orange)] opacity-30" />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4">
              CHENNAI, INDIA
              <br />
              HELLO@WEDRIP.IN
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[var(--color-electric)] opacity-30" />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4">
              <a href="#" className="hover:text-[var(--color-neon)] transition-colors">INSTAGRAM ↗</a>
              <br />
              <a href="#" className="hover:text-[var(--color-neon)] transition-colors">SHIPPING & RETURNS</a>
            </p>
          </motion.div>
        </div>

        {/* Bottom bar with retro elements */}
        <div className="pt-6 border-t-2 border-[var(--color-text)] flex flex-col md:flex-row justify-between items-center gap-4">
          <small className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)] tracking-[0.15em]">
            © 2026 WEDRIP STUDIO — ALL RIGHTS RESERVED
          </small>
          <div className="flex items-center gap-4">
            <div className="font-[var(--font-retro)] text-[10px] text-[var(--color-text-muted)] tracking-[0.2em]">
              PAL / NTSC
            </div>
            <div className="w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
            <div className="font-[var(--font-retro)] text-[10px] text-[var(--color-text-muted)] tracking-[0.2em]">
              SP MODE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
