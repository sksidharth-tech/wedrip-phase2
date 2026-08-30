"use client";

import { useState, useEffect } from "react";
import Cursor from "@/components/Cursor";
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
      <Cursor />
      <Ticker />
      <Header bagCount={bagItems.length} />

      <main>
        <Hero />

        <Manifesto />

        {/* Large scrolling text - editorial style */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="we are not a brand we are a frequency"
            variant="default"
          />
        </div>

        {/* Handwritten interjection */}
        <div className="text-center py-12 md:py-20 px-5">
          <p
            className="font-[var(--font-handwritten)] text-3xl md:text-5xl lg:text-6xl text-[var(--color-orange)] max-w-4xl mx-auto leading-snug"
          >
            &quot;the world has enough plain clothes.
            <br />
            <span className="text-[var(--color-neon)]">wear something that says something.&quot;</span>
          </p>
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

        {/* Retro editorial quote */}
        <div className="py-16 md:py-24 px-5 md:px-10 bg-[var(--color-bg-warm)] editorial-stripe">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-[var(--font-retro)] text-lg md:text-2xl text-[var(--color-vhs-blue)] tracking-[0.2em] mb-6">
              ▶ PLAY ▶ PAUSE ▶ REWIND
            </p>
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--color-cream)] leading-tight"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              every thread tells a story.
              <br />
              <span className="text-[var(--color-neon)]">every drop starts a chapter.</span>
            </p>
            <p className="font-[var(--font-handwritten)] text-xl md:text-2xl text-[var(--color-cream-muted)] mt-8">
              — from the WEDRIP studio, with love and chaos
            </p>
          </div>
        </div>

        {/* Drop */}
        <Drop />

        {/* Final marquee */}
        <div className="relative overflow-hidden py-4">
          <MarqueeText
            text="no restocks no regrets"
            variant="handwritten"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
