"use client";

const items = [
  "WEAR THE SCENE",
  "CREATOR-LED STORE",
  "MADE IN INDIA",
  "NO BLANKS",
  "NO LOGO SLAPS",
  "LIMITED DROPS",
  "CHENNAI STUDIO",
  "EVERY PIECE HAS A REASON",
];

export default function Ticker() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[var(--color-dark)] text-[var(--color-neon)] z-[1000] overflow-hidden flex items-center border-b-2 border-[var(--color-neon)]">
      <div className="ticker-content flex gap-8 whitespace-nowrap font-[var(--font-pixel)] text-[9px] tracking-[0.2em]">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="text-[var(--color-orange)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
