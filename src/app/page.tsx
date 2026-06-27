import Image from "next/image";
import Link from "next/link";
import { CtaCard } from "@/components/CtaCard";
import { withBasePath } from "@/lib/base-path";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

const doodles = ["🐱", "🐛", "🍽️", "✨", "🐍", "🐦"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="blob-bg relative overflow-hidden border-b-4 border-espresso/5 px-5 pb-20 pt-14 sm:pb-28 sm:pt-20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-coral/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-sage/30 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-lavender/30 blur-2xl" />

        {/* Floating doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {doodles.map((emoji, i) => (
            <span
              key={emoji}
              className="animate-float absolute text-2xl opacity-40 sm:text-3xl"
              style={{
                top: `${15 + i * 12}%`,
                left: `${8 + i * 14}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="animate-wiggle inline-block rounded-full border-2 border-golden bg-golden/50 px-5 py-2 text-sm font-bold uppercase tracking-wider text-espresso shadow-sm">
                ✦ handmade in Tennessee ✦
              </p>
              <h1 className="font-display mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-espresso sm:text-6xl xl:text-7xl">
                Pretty things,
                <br />
                <span className="text-terracotta">made by hand</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-espresso/80 sm:text-xl">
                Quirky ceramics obsessed with color and surface design. Plates
                covered in cats, ornaments that make you laugh, and trinket
                dishes you&apos;ll actually use.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.links.etsy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-bold text-cream shadow-lg transition-all hover:scale-105 hover:bg-terracotta-dark hover:shadow-xl"
                >
                  Shop on Etsy →
                </a>
                <Link
                  href="/wholesale"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-espresso bg-white px-7 py-3.5 font-bold text-espresso shadow-sm transition-all hover:bg-espresso hover:text-cream"
                >
                  Wholesale
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative mx-auto aspect-[4/5] max-w-sm">
                <div className="absolute inset-4 rotate-3 rounded-[2.5rem] border-4 border-dashed border-terracotta/40 bg-white/80 shadow-xl backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <Image
                    src={withBasePath("/logo.png")}
                    alt="Hand-painted pink party cat ceramic figurine by Bianca Rae"
                    width={320}
                    height={400}
                    priority
                    className="animate-float relative z-10 h-auto w-[75%] max-w-[280px] object-contain drop-shadow-2xl sm:w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="wavy-divider -mt-1 bg-cream" aria-hidden />

      {/* CTA Cards */}
      <section className="bg-cream px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-espresso sm:text-4xl">
            Shop & Connect
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-espresso/70">
            Find us online, stock your shop, or follow the chaos on Instagram.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <CtaCard
              title="Shop on Etsy"
              description="One-of-a-kind drops & fan favorites — snag them before they're gone!"
              href={siteConfig.links.etsy}
              external
              accent="terracotta"
              rotate="-rotate-2"
            />
            <CtaCard
              title="Wholesale on Faire"
              description="Stock your shop with maximalist kitty plates, ornaments & more."
              href={siteConfig.links.faire}
              external
              accent="sage"
              rotate="rotate-1"
            />
            <CtaCard
              title="Follow on Instagram"
              description="Drop announcements, studio chaos & bug ID sessions with toddlers."
              href={siteConfig.links.instagram}
              external
              accent="coral"
              rotate="-rotate-1"
            />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative overflow-hidden bg-espresso px-5 py-16 text-cream sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle, #fdf6ee 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rotate-6 rounded-full bg-coral/30 blur-xl" />
              <div className="animate-float relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-terracotta via-coral to-golden shadow-2xl sm:h-72 sm:w-72">
                <span className="font-display text-center text-7xl sm:text-8xl">
                  🎨
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-coral">
              The Maker
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold sm:text-5xl">
              Hey there, I&apos;m Bianca!
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/85 sm:text-xl">
              I make pretty things! Obsessed with all things surface — a potter
              and seamstress by trade. Each piece is formed and painted by hand
              in the mountains of Tennessee. Here to make art accessible,
              relatable, and a little bit weird.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-bold text-cream shadow-lg transition-all hover:scale-105 hover:bg-coral-dark"
            >
              Meet the maker →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="blob-bg px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-bold text-espresso sm:text-4xl">
            Find us IRL
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-espresso/70">
            Shop in stores across the country or catch us at a market near you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/stockists"
              className="rounded-full border-2 border-espresso bg-lavender px-8 py-3.5 font-bold text-espresso shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              View Stockists
            </Link>
            <Link
              href="/wholesale"
              className="rounded-full bg-sage px-8 py-3.5 font-bold text-cream shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              Wholesale Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
