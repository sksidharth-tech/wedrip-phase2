"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
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

    let raf: number;
    let dx = 0, dy = 0;
    const animate = () => {
      dx += (pos.x - dx) * 0.15;
      dy += (pos.y - dy) * 0.15;
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
      {/* Main dot */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "var(--color-orange)",
          opacity: visible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />

      {/* Trailing dot */}
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: dot.x,
          top: dot.y,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--color-neon)",
          opacity: visible ? 0.5 : 0,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
