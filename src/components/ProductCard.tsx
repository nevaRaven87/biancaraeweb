import type { Product } from "@/data/products";

const categoryColors: Record<string, string> = {
  Sculpture: "bg-lavender/30 text-espresso",
  "Stickers + Prints": "bg-coral/20 text-espresso",
  "Itty Bitties": "bg-sage/30 text-espresso",
  Plates: "bg-terracotta/20 text-espresso",
  Ornaments: "bg-golden/30 text-espresso",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col rounded-2xl border-2 border-clay/20 bg-white p-5 transition-all hover:-rotate-1 hover:border-terracotta/40 hover:shadow-md">
      <span
        className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryColors[product.category]}`}
      >
        {product.category}
      </span>
      <h3 className="font-display text-lg font-semibold leading-snug text-espresso">
        {product.name}
      </h3>
      <p className="mt-auto pt-4 font-semibold text-terracotta">
        {product.price}
      </p>
    </article>
  );
}
