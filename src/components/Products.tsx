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
      {/* Image */}
      <div
        className="relative aspect-[3/4] overflow-hidden mb-4 noise-hover"
        style={{ backgroundColor: product.bgColor }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* VHS overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Number tag */}
        <div className="absolute top-3 left-3 font-[var(--font-retro)] text-[10px] text-[var(--color-cream-muted)] tracking-[0.15em] bg-[rgba(0,0,0,0.5)] px-2 py-1 backdrop-blur-sm">
          {product.number}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 font-[var(--font-mono)] text-[8px] text-[var(--color-neon)] tracking-[0.2em] bg-[rgba(0,0,0,0.5)] px-2 py-1 backdrop-blur-sm uppercase">
          {product.category}
        </div>

        {/* Add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
            added
              ? "bg-[var(--color-neon)] border-[var(--color-neon)] text-[var(--color-bg)] scale-110"
              : "bg-[var(--color-bg)] border-[var(--color-neon)] text-[var(--color-neon)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
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
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
          <h3
            className="text-sm font-semibold tracking-wide mb-1"
            style={{ fontFamily: "var(--font-futuristic)" }}
          >
            {product.name}
          </h3>
          <p className="font-[var(--font-handwritten)] text-sm text-[var(--color-orange)] mb-1">
            {product.tagline}
          </p>
          <p className="font-[var(--font-mono)] text-[9px] text-[var(--color-cream-muted)] tracking-[0.1em]">
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
        {/* Header */}
        <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-[rgba(255,255,255,0.06)]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-[var(--font-mono)] text-xs tracking-[0.3em] font-bold"
          >
            THE OBJECTS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6 font-[var(--font-mono)] text-[10px] text-[var(--color-cream-muted)] tracking-[0.15em]"
          >
            <span>DROP 001</span>
            <span>VIEW [{products.length}]</span>
          </motion.div>
        </div>

        {/* Grid */}
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
