"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/data/products";
import { siteConfig } from "@/data/site";

export function WholesaleCatalog() {
  const [activeCategory, setActiveCategory] = useState<
    ProductCategory | "All"
  >("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === "All"
                ? "bg-espresso text-cream"
                : "bg-white text-espresso/70 hover:bg-clay/20"
            }`}
          >
            All
          </button>
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-espresso text-cream"
                  : "bg-white text-espresso/70 hover:bg-clay/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full border-2 border-clay/30 bg-white px-5 py-2 text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:outline-none"
          aria-label="Search wholesale products"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border-2 border-dashed border-clay/40 bg-white/50 p-12 text-center">
          <p className="font-display text-xl font-bold text-espresso">
            No results found
          </p>
          <p className="mt-2 text-espresso/60">
            No results match your search. Try removing a few filters.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      )}

      <div className="mt-16 rounded-3xl bg-sage p-8 text-center text-cream sm:p-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Ready to order wholesale?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream/85">
          Browse the full catalog and place orders directly on Faire.
        </p>
        <a
          href={siteConfig.links.faire}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-cream px-8 py-3 font-semibold text-espresso transition-transform hover:scale-105"
        >
          Shop on Faire →
        </a>
      </div>
    </div>
  );
}
