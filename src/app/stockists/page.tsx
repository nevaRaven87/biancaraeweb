import { createMetadata } from "@/lib/metadata";
import { markets, stockists } from "@/data/stockists";

export const metadata = createMetadata({
  title: "Stockists + Markets",
  description:
    "Find Made By Bianca Rae ceramics at independent shops across the US, plus upcoming craft market dates and pop-up events.",
  path: "/stockists",
});

export default function StockistsPage() {
  return (
    <div className="blob-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            Stockists
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-espresso sm:text-5xl">
            Stockists By State
          </h1>
          <p className="mt-4 text-lg text-espresso/70">
            Find our handmade ceramics at these wonderful independent shops
            across the country.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {stockists.map((entry) => (
            <article
              key={entry.state}
              className="mb-6 break-inside-avoid rounded-2xl border-2 border-clay/20 bg-white p-6"
            >
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-terracotta">
                {entry.state}
              </h2>
              <ul className="mt-3 space-y-2">
                {entry.shops.map((shop) => (
                  <li
                    key={shop}
                    className="text-espresso/80 before:mr-2 before:text-sage before:content-['•']"
                  >
                    {shop}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-clay/20 bg-espresso px-5 py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Market Participation
          </h2>
          <p className="mt-3 max-w-xl text-cream/70">
            Come say hi! Here&apos;s where you can find us at craft fairs and
            markets.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <li
                key={`${market.name}-${market.dates}`}
                className="rounded-2xl border border-cream/10 bg-cream/5 p-5 transition-colors hover:bg-cream/10"
              >
                <p className="font-display text-lg font-bold text-coral">
                  {market.name}
                </p>
                {market.location && (
                  <p className="mt-1 text-sm text-cream/60">
                    {market.location}
                  </p>
                )}
                <p className="mt-2 font-semibold">{market.dates}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
