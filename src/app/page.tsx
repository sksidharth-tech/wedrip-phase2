"use client";

import { useEffect, useState } from "react";
import Ticker from "@/components/Ticker";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import MarqueeText from "@/components/MarqueeText";
import Products from "@/components/Products";
import Drop from "@/components/Drop";
import Footer from "@/components/Footer";
import { Product } from "@/lib/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [bagItems, setBagItems] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToBag = (id: string) => {
    setBagItems((prev) => [...prev, id]);
  };

  return (
    <>
      <Ticker />
      <Header bagCount={bagItems.length} />

      {/* Film strip border top */}
      <div className="fixed top-8 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,var(--color-text)_0px,var(--color-text)_8px,transparent_8px,transparent_16px)] z-[998] opacity-10" />

      <main>
        <Hero />

        {/* Film strip divider */}
        <div className="w-full overflow-hidden py-2 bg-[var(--color-dark)]">
          <div className="flex gap-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-8 h-5 border border-[var(--color-cream)] opacity-30 flex-shrink-0" />
            ))}
          </div>
        </div>

        <Manifesto />

        {/* VHS static noise bar */}
        <div className="w-full h-16 bg-[var(--color-dark)] relative overflow-hidden flex items-center">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }} />
          <div className="w-full text-center font-[var(--font-retro)] text-[var(--color-cream)] text-xs tracking-[0.5em] opacity-40 relative z-10">
            ▮▮▮ SIGNAL LOST ▮▮▮ TRACKING ▮▮▮ AUTO FOCUS ▮▮▮
          </div>
        </div>

        {/* Large scrolling text - editorial style */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="we are not a brand we are a frequency"
            variant="default"
          />
        </div>

        {/* Retro TV frame quote */}
        <div className="py-12 md:py-20 px-5">
          <div className="max-w-4xl mx-auto border-4 border-[var(--color-text)] p-8 md:p-12 relative" style={{ boxShadow: "8px 8px 0 var(--color-text)" }}>
            {/* TV knobs */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-[var(--color-text)]" />
              <div className="w-4 h-4 rounded-full border-2 border-[var(--color-text)]" />
            </div>
            {/* TV brand */}
            <div className="absolute top-4 left-4 font-[var(--font-mono)] text-[8px] text-[var(--color-text-muted)] tracking-[0.3em]">
              WEDRIP CRT-2026
            </div>
            {/* TV screen */}
            <div className="bg-[var(--color-dark)] p-6 md:p-10 relative overflow-hidden">
              {/* Scanlines on TV */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(255,255,255,0.03) 1px,rgba(255,255,255,0.03) 2px)"
              }} />
              <p className="font-[var(--font-handwritten)] text-3xl md:text-5xl lg:text-6xl text-[var(--color-neon)] text-center leading-snug relative z-10">
                &quot;the world has enough plain clothes.
                <br />
                <span className="text-[var(--color-orange)]">wear something that says something.&quot;</span>
              </p>
              {/* VHS timestamp */}
              <div className="absolute bottom-3 right-4 font-[var(--font-retro)] text-[10px] text-[var(--color-orange)] tracking-[0.2em]">
                PLAY ▶ 00:00:00
              </div>
            </div>
          </div>
        </div>

        {/* Cassette tape divider */}
        <div className="w-full py-6 bg-[var(--color-bg-warm)] border-y-2 border-[var(--color-text)] flex items-center justify-center gap-4">
          <div className="w-12 h-2 bg-[var(--color-text)] opacity-20" />
          <div className="w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
          <div className="font-[var(--font-retro)] text-xs text-[var(--color-text-muted)] tracking-[0.5em]">
            ◀◀ SIDE A ▶▶ SIDE B
          </div>
          <div className="w-2 h-2 rounded-full border border-[var(--color-text)] opacity-30" />
          <div className="w-12 h-2 bg-[var(--color-text)] opacity-20" />
        </div>

        {/* Products */}
        <Products products={products} onAddToBag={handleAddToBag} />

        {/* Another large text */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="made in india for the world"
            variant="accent"
          />
        </div>

        {/* VHS Player UI section */}
        <div className="py-16 md:py-24 px-5 md:px-10 bg-[var(--color-bg-warm)] editorial-stripe relative">
          {/* VCR overlay */}
          <div className="absolute top-4 left-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-40">
            CH-03 / LINE IN / AUTO
          </div>
          <div className="absolute top-4 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-40">
            SP / Hi-Fi STEREO
          </div>

          <div className="max-w-5xl mx-auto text-center relative">
            <p className="font-[var(--font-retro)] text-lg md:text-2xl text-[var(--color-electric)] tracking-[0.2em] mb-6">
              ▶ PLAY ▶ PAUSE ▶ REWIND
            </p>
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--color-text)] leading-tight"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              every thread tells a story.
              <br />
              <span className="text-[var(--color-neon)]">every drop starts a chapter.</span>
            </p>
            <p className="font-[var(--font-handwritten)] text-xl md:text-2xl text-[var(--color-text-muted)] mt-8">
              — from the WEDRIP studio, with love and chaos
            </p>

            {/* Decorative film frames */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 opacity-15">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-6 h-4 border border-[var(--color-text)]" />
              ))}
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 opacity-15">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-6 h-4 border border-[var(--color-text)]" />
              ))}
            </div>
          </div>
        </div>

        {/* Drop */}
        <Drop />

        {/* Film strip divider */}
        <div className="w-full overflow-hidden py-2 bg-[var(--color-dark)]">
          <div className="flex gap-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-8 h-5 border border-[var(--color-cream)] opacity-30 flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Final marquee */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="no restocks no regrets"
            variant="handwritten"
          />
        </div>

        {/* VHS end screen */}
        <div className="w-full py-12 bg-[var(--color-dark)] flex flex-col items-center gap-4">
          <div className="font-[var(--font-retro)] text-[var(--color-cream)] text-sm tracking-[0.5em] opacity-50">
            ■ END OF TAPE ■
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[var(--color-neon)] opacity-30" />
            ))}
          </div>
          <div className="font-[var(--font-retro)] text-[var(--color-orange)] text-xs tracking-[0.3em] blink">
            ● REC
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
