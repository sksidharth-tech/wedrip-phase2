"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
  variant?: "default" | "accent" | "handwritten" | "retro";
}

export default function MarqueeText({
  text,
  className = "",
  variant = "default",
}: MarqueeTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    default: "text-[var(--color-cream)]",
    accent: "text-[var(--color-neon)]",
    handwritten: "text-[var(--color-orange)]",
    retro: "text-[var(--color-vhs-blue)]",
  };

  const fontVariants = {
    default: "font-[var(--font-editorial)]",
    accent: "font-[var(--font-editorial)]",
    handwritten: "font-[var(--font-handwritten)]",
    retro: "font-[var(--font-retro)]",
  };

  const sizeVariants = {
    default: "text-7xl md:text-9xl lg:text-[10rem]",
    accent: "text-6xl md:text-8xl lg:text-[8rem]",
    handwritten: "text-5xl md:text-7xl lg:text-[7rem]",
    retro: "text-4xl md:text-6xl lg:text-[6rem]",
  };

  const repeated = `${text} ✦ ${text} ✦ ${text} ✦ ${text} ✦ `;

  return (
    <div
      ref={ref}
      className={`overflow-hidden whitespace-nowrap py-8 md:py-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.12 } : {}}
        transition={{ duration: 1.5 }}
        className={`marquee-left inline-block ${variants[variant]} ${fontVariants[variant]} ${sizeVariants[variant]} font-black tracking-tight italic uppercase leading-none`}
      >
        {repeated}
        {repeated}
      </motion.div>
    </div>
  );
}
