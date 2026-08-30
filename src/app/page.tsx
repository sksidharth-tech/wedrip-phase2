"use client";

import { useState, useEffect } from "react";
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
      <div className="fixed top-8 left-0 right-0 h-1.5 bg-[var(--color-dark)] z-[998] opacity-10">
        <div className="flex gap-0.5 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="flex-1 bg-[var(--color-cream)] opacity-40" />
          ))}
        </div>
      </div>

      <main>
        <Hero />

        {/* Film strip divider - Pixel art style */}
        <div className="w-full overflow-hidden py-3 bg-[var(--color-dark)] relative">
          <div className="flex gap-1 justify-center">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-3 h-2 bg-[var(--color-cream)] opacity-20" />
                <div className="w-10 h-6 border border-[var(--color-cream)] opacity-30" />
                <div className="w-3 h-2 bg-[var(--color-cream)] opacity-20" />
              </div>
            ))}
          </div>
        </div>

        <Manifesto />

        {/* VHS static noise bar - Retro */}
        <div className="w-full h-20 bg-[var(--color-dark)] relative overflow-hidden flex items-center">
          <div className="absolute inset-0 tv-static opacity-15" />
          <div className="absolute inset-0" style={{
            background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.02) 2px,rgba(255,255,255,0.02) 4px)"
          }} />
          <div className="w-full text-center font-[var(--font-pixel)] text-[var(--color-neon)] text-[8px] tracking-[0.5em] opacity-60 relative z-10">
            ▮▮▮ SIGNAL LOST ▮▮▮ TRACKING ▮▮▮ AUTO FOCUS ▮▮▮
          </div>
          <div className="absolute bottom-2 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-orange)] tracking-[0.2em] opacity-60">
            SP / 00:42:17
          </div>
        </div>

        {/* Large scrolling text - Editorial + Pixel */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="we are not a brand we are a frequency"
            variant="default"
          />
        </div>

        {/* Quote section - Swiss grid + Handwritten */}
        <div className="py-12 md:py-20 pl-7 pr-5">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-12 gap-4">
              {/* Left decorative column - Swiss */}
              <div className="col-span-1 hidden md:flex flex-col items-center gap-2 pt-4">
                <div className="w-px h-16 bg-[var(--color-text)] opacity-20" />
                <div className="w-2 h-2 border border-[var(--color-text)] opacity-30" />
                <div className="w-px h-16 bg-[var(--color-text)] opacity-20" />
                <div className="w-2 h-2 border border-[var(--color-text)] opacity-30" />
                <div className="w-px h-16 bg-[var(--color-text)] opacity-20" />
              </div>

              {/* Main content */}
              <div className="col-span-12 md:col-span-10 relative">
                {/* Tape strips - Handwritten */}
                <div className="relative inline-block mb-6">
                  <div className="tape-strip w-16 left-6" />
                  <div className="tape-strip w-12 right-8 bg-[var(--color-orange)]" style={{ transform: "rotate(1deg)" }} />
                </div>

                {/* Quote - Handwritten font */}
                <p className="font-[var(--font-handwritten)] text-3xl md:text-5xl lg:text-6xl text-[var(--color-text)] text-center leading-snug relative z-10 mb-8">
                  &quot;the world has enough plain clothes.
                  <br />
                  <span className="text-[var(--color-orange)]">wear something that says something.&quot;</span>
                </p>

                {/* Attribution - Swiss style */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="w-12 h-px bg-[var(--color-text)] opacity-30" />
                  <span className="font-[var(--font-mono)] text-[9px] text-[var(--color-text-muted)] tracking-[0.3em] uppercase">
                    WEDRIP Studio Manifesto
                  </span>
                  <div className="w-12 h-px bg-[var(--color-text)] opacity-30" />
                </div>

                {/* Pixel dots */}
                <div className="flex justify-center gap-1 mt-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-[var(--color-neon)] opacity-40" />
                  ))}
                </div>
              </div>

              {/* Right decorative column - Swiss */}
              <div className="col-span-1 hidden md:flex flex-col items-center gap-2 pt-4">
                <div className="w-px h-16 bg-[var(--color-text)] opacity-20" />
                <div className="w-2 h-2 border border-[var(--color-text)] opacity-30" />
                <div className="w-px h-16 bg-[var(--color-text)] opacity-20" />
                <div className="w-2 h-2 border border-[var(--color-text)] opacity-30" />
                <div className="w-px h-16 bg-[var(--color-text)] opacity-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Cassette tape divider - Retro */}
        <div className="w-full py-8 bg-[var(--color-bg-warm)] border-y-[3px] border-[var(--color-text)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            background: "repeating-linear-gradient(-45deg,transparent,transparent 4px,var(--color-text) 4px,var(--color-text) 5px)"
          }} />
          <div className="flex items-center justify-center gap-6 relative z-10">
            <div className="font-[var(--font-retro)] text-xs text-[var(--color-text-muted)] tracking-[0.3em]">
              ◀◀
            </div>
            <div className="w-16 h-[2px] bg-[var(--color-text)] opacity-20" />
            <div className="w-3 h-3 rounded-full border-2 border-[var(--color-text)] opacity-40" />
            <div className="font-[var(--font-pixel)] text-[8px] text-[var(--color-text)] tracking-[0.5em]">
              SIDE A
            </div>
            <div className="w-3 h-3 rounded-full border-2 border-[var(--color-text)] opacity-40" />
            <div className="w-16 h-[2px] bg-[var(--color-text)] opacity-20" />
            <div className="font-[var(--font-retro)] text-xs text-[var(--color-text-muted)] tracking-[0.3em]">
              ▶▶
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-[var(--font-mono)] text-[6px] text-[var(--color-text-muted)] tracking-[0.4em] opacity-40">
            WEDRIP RECORDS™ CHENNAI
          </div>
        </div>

        {/* Products */}
        <Products products={products} onAddToBag={handleAddToBag} />

        {/* Another large text - Pixel variant */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="made in india for the world"
            variant="accent"
          />
        </div>

        {/* VHS Player section - Futuristic + Retro */}
        <div className="py-16 md:py-24 pl-7 pr-5 md:pl-20 md:pr-10 bg-[var(--color-bg-warm)] editorial-stripe relative">
          <div className="absolute top-4 left-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-40">
            CH-03 / LINE IN / AUTO
          </div>
          <div className="absolute top-4 right-4 font-[var(--font-retro)] text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] opacity-40">
            SP / Hi-Fi STEREO
          </div>

          {/* Film perforations */}
          <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-center gap-2 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-4 h-3 border border-[var(--color-text)] mx-auto" />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col justify-center gap-2 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-4 h-3 border border-[var(--color-text)] mx-auto" />
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
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

            {/* Handwritten annotation with tape */}
            <div className="mt-10 relative inline-block">
              <div className="tape-strip w-14 left-4" />
              <div className="handwritten-card">
                <p className="font-[var(--font-handwritten)] text-xl md:text-2xl text-[var(--color-text-muted)]">
                  — from the WEDRIP studio, with love and chaos
                </p>
              </div>
            </div>

            {/* Swiss grid lines */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-px h-8 bg-[var(--color-text)] opacity-15" />
                  <div className="w-1.5 h-1.5 bg-[var(--color-neon)] opacity-30" />
                  <div className="w-px h-8 bg-[var(--color-text)] opacity-15" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Drop */}
        <Drop />

        {/* Film strip divider */}
        <div className="w-full overflow-hidden py-3 bg-[var(--color-dark)] relative">
          <div className="flex gap-1 justify-center">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-3 h-2 bg-[var(--color-cream)] opacity-20" />
                <div className="w-10 h-6 border border-[var(--color-cream)] opacity-30" />
                <div className="w-3 h-2 bg-[var(--color-cream)] opacity-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Final marquee - Handwritten */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="no restocks no regrets"
            variant="handwritten"
          />
        </div>

        {/* VHS end screen - Retro + Futuristic */}
        <div className="w-full py-16 bg-[var(--color-dark)] flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 tv-static opacity-10" />
          
          <div className="font-[var(--font-pixel)] text-[var(--color-neon)] text-[10px] tracking-[0.5em] opacity-70 relative z-10">
            ■ END OF TAPE ■
          </div>
          
          {/* Pixel art dots */}
          <div className="flex gap-1 relative z-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[var(--color-neon)] opacity-40" />
            ))}
          </div>
          
          <div className="flex gap-3 items-center relative z-10">
            <div className="font-[var(--font-retro)] text-[var(--color-orange)] text-xs tracking-[0.3em] blink">
              ● REC
            </div>
            <div className="w-1 h-1 bg-[var(--color-cream)] opacity-30" />
            <div className="font-[var(--font-pixel)] text-[var(--color-cream)] text-[7px] tracking-[0.2em] opacity-40">
              SP MODE
            </div>
          </div>

          {/* Corner brackets - Futuristic */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[var(--color-neon)] opacity-30" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--color-neon)] opacity-30" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--color-neon)] opacity-30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[var(--color-neon)] opacity-30" />
        </div>
      </main>

      <Footer />
    </>
  );
}
