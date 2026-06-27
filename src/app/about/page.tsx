import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Me",
  description:
    "Meet Bianca Rae — potter, seamstress, and head mess maker. Hand-painted ceramics from the mountains of Tennessee, made to bring color and joy to everyday life.",
  path: "/about",
});

const credentials = [
  "BFA Ceramics — Rhode Island College",
  "BS Art Education — Rhode Island College",
  "MAE Art Education & Digital Media — Rhode Island College",
  "Master Seamstress — URI",
];

export default function AboutPage() {
  return (
    <div className="blob-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            About Me
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-espresso sm:text-5xl">
            Hey there, I&apos;m Bianca!
          </h1>
          <p className="font-display mt-2 text-2xl text-coral sm:text-3xl">
            I make pretty things!
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-espresso/80">
            <p>
              Obsessed with all things surface. A potter and seamstress by trade,
              my work reflects my obsession with color and surface design. Here
              to make art accessible and relatable for a wide variety of
              audiences and collectors.
            </p>
            <p>
              After teaching art in the public schools for nearly 10 years, I
              left teaching to raise my kids. Each piece is formed and painted
              by hand in the mountains of Tennessee. If I&apos;m not making
              work, I&apos;m ID&apos;ing bugs with my twin toddlers.
            </p>
            <p>
              Market schedule and stockists are listed on the{" "}
              <Link href="/stockists" className="font-semibold text-terracotta underline underline-offset-4 hover:text-terracotta-dark">
                stockists page
              </Link>
              , and (chance) one-of-a-kind drops can be found announced on my{" "}
              <a
                href="https://www.instagram.com/bybiancarae/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-terracotta underline underline-offset-4 hover:text-terracotta-dark"
              >
                Instagram
              </a>{" "}
              account &lt;3
            </p>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-3xl border-2 border-clay/30 bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-bold text-espresso">
                Credentials
              </h2>
              <ul className="mt-4 space-y-3">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-espresso/75"
                  >
                    <span aria-hidden className="mt-0.5 text-terracotta">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-clay/20 bg-white/50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-espresso">
            Our Team
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <article className="rounded-3xl border-2 border-terracotta/20 bg-cream p-8 transition-transform hover:-rotate-1">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/20 text-3xl">
                🎨
              </div>
              <h3 className="font-display text-2xl font-bold text-espresso">
                Bianca Rae
              </h3>
              <p className="mt-1 font-semibold text-terracotta">
                Founder // Head Mess Maker
              </p>
              <p className="mt-4 text-espresso/70">
                The creative force behind every piece — color-obsessed, clay-covered,
                and always chasing the next weird idea.
              </p>
            </article>

            <article className="rounded-3xl border-2 border-sage/30 bg-cream p-8 transition-transform hover:rotate-1">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-3xl">
                🏺
              </div>
              <h3 className="font-display text-2xl font-bold text-espresso">
                Alyssa Fuson
              </h3>
              <p className="mt-1 font-semibold text-sage-dark">
                Production Assistant
              </p>
              <p className="mt-4 text-espresso/70">
                Alyssa Fuson is a ceramicist based in Knoxville, TN. She found
                her passion for ceramics through the program at UTK, spending
                three years learning the craft before graduating in 2024. Since
                then, she has begun making pots in her studio space, and working
                as an instructor and studio coordinator at Appalachian Arts Craft
                Center. When she&apos;s not in either studio, she can be found
                spending time with her husband Brian and their cat Frank.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
