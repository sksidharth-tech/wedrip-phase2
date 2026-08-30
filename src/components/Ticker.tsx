"use client";

const items = [
  "WEAR THE SCENE",
  "CREATOR-LED OBJECTS",
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
    <div className="fixed top-0 left-0 right-0 h-8 bg-[var(--color-dark)] text-[var(--color-cream)] z-[1000] overflow-hidden flex items-center font-[var(--font-mono)] text-[11px] font-bold tracking-[0.15em]">
      <div className="ticker-content flex gap-8 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="text-[var(--color-orange)] text-xs">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
