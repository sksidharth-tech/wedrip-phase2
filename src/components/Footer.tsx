"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-16 md:py-24 px-5 md:px-10 border-t-2 border-[var(--color-text)]" ref={ref}>
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
          >
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Objects, uniforms and wearable worlds built with independent creators. Each piece is a collaboration, not a commodity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              CHENNAI, INDIA
              <br />
              HELLO@WEDRIP.IN
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <a href="#" className="hover:text-[var(--color-neon)] transition-colors">INSTAGRAM ↗</a>
              <br />
              <a href="#" className="hover:text-[var(--color-neon)] transition-colors">SHIPPING & RETURNS</a>
            </p>
          </motion.div>
        </div>

        <div className="pt-6 border-t border-[rgba(26,23,20,0.1)] text-center">
          <small className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)] tracking-[0.15em]">
            © 2026 WEDRIP STUDIO — ALL RIGHTS RESERVED
          </small>
        </div>
      </div>
    </footer>
  );
}
