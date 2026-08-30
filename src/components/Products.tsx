"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";

function ProductCard({
  product,
  index,
  onAddToBag,
}: {
  product: Product;
  index: number;
  onAddToBag: (id: string) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAddToBag(product.id);
    setTimeout(() => setAdded(false), 600);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="product-card group"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-4 noise-hover retro-border bg-white">
        {/* VHS scanlines overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          background: "repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(0,0,0,0.03) 1px,rgba(0,0,0,0.03) 2px)"
        }} />

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,23,20,0.4)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Film frame number */}
        <div className="absolute top-3 left-3 font-[var(--font-retro)] text-[10px] text-[var(--color-text)] tracking-[0.15em] bg-white px-2 py-1 border border-[var(--color-text)] shadow-[2px_2px_0_var(--color-text)] z-20">
          {product.number}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 font-[var(--font-mono)] text-[8px] text-[var(--color-neon)] tracking-[0.2em] bg-white px-2 py-1 border border-[var(--color-neon)] shadow-[2px_2px_0_var(--color-neon)] uppercase z-20">
          {product.category}
        </div>

        {/* Add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center border transition-all duration-300 z-20 ${
            added
              ? "bg-[var(--color-lime)] border-[var(--color-lime)] text-white scale-110 shadow-[2px_2px_0_var(--color-text)]"
              : "bg-white border-[var(--color-text)] text-[var(--color-text)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-[2px_2px_0_var(--color-text)]"
          }`}
          aria-label={`Add ${product.name} to bag`}
        >
          {added ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          )}
        </button>

        {/* VHS tracking line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-neon)] opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20" />
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3
            className="text-sm font-semibold tracking-wide mb-1 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-futuristic)" }}
          >
            {product.name}
          </h3>
          <p className="font-[var(--font-handwritten)] text-sm text-[var(--color-orange)] mb-1">
            {product.tagline}
          </p>
          <p className="font-[var(--font-mono)] text-[9px] text-[var(--color-text-muted)] tracking-[0.1em]">
            {product.gsm} / LIMITED RUN
          </p>
        </div>
        <strong className="font-[var(--font-mono)] text-sm text-[var(--color-neon)]">
          ₹{product.price.toLocaleString("en-IN")}
        </strong>
      </div>
    </motion.article>
  );
}

export default function Products({
  products,
  onAddToBag,
}: {
  products: Product[];
  onAddToBag: (id: string) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-5 md:px-10" id="objects" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header with retro decorations */}
        <div className="flex justify-between items-baseline mb-8 pb-4 border-b-2 border-[var(--color-text)] relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-[var(--font-mono)] text-xs tracking-[0.3em] font-bold text-[var(--color-text)]"
          >
            THE OBJECTS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6 font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)] tracking-[0.15em]"
          >
            <span>DROP 001</span>
            <span>VIEW [{products.length}]</span>
          </motion.div>
          {/* Decorative tape */}
          <div className="absolute -bottom-1 left-20 w-20 h-3 bg-[var(--color-neon)] opacity-30 rotate-[1deg]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onAddToBag={onAddToBag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
