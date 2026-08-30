"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MarqueeTextProps {
  text: string;
  className?: string;
  variant?: "default" | "accent" | "handwritten" | "retro" | "pixel";
}

export default function MarqueeText({
  text,
  className = "",
  variant = "default",
}: MarqueeTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    default: "text-[var(--color-text)]",
    accent: "text-[var(--color-neon)]",
    handwritten: "text-[var(--color-orange)]",
    retro: "text-[var(--color-electric)]",
    pixel: "text-[var(--color-dark)]",
  };

  const fontVariants = {
    default: "font-[var(--font-editorial)]",
    accent: "font-[var(--font-editorial)]",
    handwritten: "font-[var(--font-handwritten)]",
    retro: "font-[var(--font-retro)]",
    pixel: "font-[var(--font-pixel)]",
  };

  const sizeVariants = {
    default: "text-7xl md:text-9xl lg:text-[10rem]",
    accent: "text-6xl md:text-8xl lg:text-[8rem]",
    handwritten: "text-5xl md:text-7xl lg:text-[7rem]",
    retro: "text-4xl md:text-6xl lg:text-[6rem]",
    pixel: "text-xl md:text-3xl lg:text-4xl",
  };

  const repeated = `${text} ◆ ${text} ◆ ${text} ◆ ${text} ◆ `;

  return (
    <div
      ref={ref}
      className={`overflow-hidden whitespace-nowrap py-6 md:py-10 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.08 } : {}}
        transition={{ duration: 1.5 }}
        className={`marquee-left inline-block ${variants[variant]} ${fontVariants[variant]} ${sizeVariants[variant]} font-black tracking-tight italic uppercase leading-none`}
      >
        {repeated}
        {repeated}
      </motion.div>
    </div>
  );
}
