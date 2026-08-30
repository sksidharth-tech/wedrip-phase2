"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10 bg-[var(--color-bg-warm)]" id="story" ref={ref}>
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-neon)] to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-mono)] text-[10px] text-[var(--color-cream-muted)] tracking-[0.3em] mb-8"
        >
          WE ARE WEDRIP / 001
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-16"
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
            <p className="text-lg text-[var(--color-cream-muted)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-futuristic)" }}>
              We don&apos;t make merch. We make artifacts of the culture you live in. Each piece is a conversation between the creator and the person wearing it.
            </p>
            <p className="text-lg text-[var(--color-cream-muted)] leading-relaxed" style={{ fontFamily: "var(--font-futuristic)" }}>
              Limited runs. No restocks. When a drop is gone, it exists only in the wardrobes of the people who understood the moment.
            </p>

            {/* Handwritten note */}
            <div className="mt-8 font-[var(--font-handwritten)] text-2xl text-[var(--color-orange)] -rotate-1">
              &quot;we don&apos;t chase trends — we bury them.&quot;
            </div>
          </motion.div>

          {/* Stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={inView ? { opacity: 0.7, rotate: -15, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex items-center justify-center"
          >
            <div className="w-36 h-36 border-[3px] border-[var(--color-orange)] rounded-full flex items-center justify-center stamp-animate relative">
              <div className="absolute inset-2 border border-dashed border-[var(--color-orange)] rounded-full" />
              <div className="flex flex-col items-center gap-1 font-[var(--font-mono)] text-[10px] font-bold text-[var(--color-orange)] tracking-[0.2em]">
                <span>WEDRIP</span>
                <span className="text-[8px] text-[var(--color-cream-muted)]">STUDIO</span>
                <span className="text-[8px] text-[var(--color-cream-muted)]">CHENNAI</span>
                <span>2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
