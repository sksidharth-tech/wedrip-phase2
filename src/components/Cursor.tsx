"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const interactives = document.querySelectorAll("a, button, .product-card, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    let raf: number;
    let dx = 0, dy = 0;
    const animate = () => {
      dx += (pos.x - dx) * 0.12;
      dy += (pos.y - dy) * 0.12;
      setDot({ x: dx, y: dy });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [pos]);

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
        }}
      >
        <svg
          width={hovering ? 36 : 28}
          height={hovering ? 36 : 28}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: "all 0.15s ease-out" }}
        >
          <path
            d="M18 8L28 4H36L46 8L56 16V28L48 24H16L8 28V16L18 8Z"
            fill={hovering ? "var(--color-orange)" : "var(--color-neon)"}
            stroke={hovering ? "var(--color-orange)" : "var(--color-neon)"}
            strokeWidth="1.5"
          />
          <path
            d="M16 24V54H48V24"
            fill={hovering ? "var(--color-orange)" : "var(--color-neon)"}
            stroke={hovering ? "var(--color-orange)" : "var(--color-neon)"}
            strokeWidth="1.5"
          />
          <path
            d="M28 4C30 8 34 8 36 4"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="32" cy="34" r="4" fill="white" opacity="0.4" />
        </svg>
      </div>

      <div
        className="cursor-dot hidden md:block"
        style={{
          left: dot.x,
          top: dot.y,
          opacity: visible ? 0.6 : 0,
        }}
      />
    </>
  );
}
