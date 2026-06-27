import { WholesaleCatalog } from "@/components/WholesaleCatalog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Wholesale",
  description:
    "Wholesale handmade ceramics by Made By Bianca Rae — plates, ornaments, sculptures, itty bitties, stickers and prints. Order on Faire.",
  path: "/wholesale",
});

export default function WholesalePage() {
  return (
    <div className="blob-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            Wholesale
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-espresso sm:text-5xl">
            WHOLESALE
          </h1>
          <p className="mt-4 text-lg text-espresso/70">
            Stock your shop with handmade ceramics — maximalist kitty plates,
            quirky ornaments, sculptures, and more.
          </p>
        </div>

        <div className="mt-12">
          <WholesaleCatalog />
        </div>
      </section>
    </div>
  );
}
