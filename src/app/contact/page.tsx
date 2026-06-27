import { NewsletterForm } from "@/components/NewsletterForm";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Made By Bianca Rae. Questions, collaboration ideas, or wholesale inquiries — we'd love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="blob-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            Contact
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-espresso sm:text-5xl">
            Contact me.
          </h1>
          <p className="mt-4 text-lg text-espresso/70">
            Questions? Super cool collaboration idea? Shoot me a message or an
            email!
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl border-2 border-terracotta/30 bg-white p-8">
              <h2 className="font-display text-xl font-bold text-espresso">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block text-xl font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-3xl border-2 border-sage/30 bg-white p-8">
              <h2 className="font-display text-xl font-bold text-espresso">
                Find us online
              </h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={siteConfig.links.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-espresso/80 underline underline-offset-4 hover:text-terracotta"
                  >
                    Shop on Etsy →
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.faire}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-espresso/80 underline underline-offset-4 hover:text-terracotta"
                  >
                    Wholesale on Faire →
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-espresso/80 underline underline-offset-4 hover:text-terracotta"
                  >
                    Follow on Instagram →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-lavender/40 bg-white p-8">
            <h2 className="font-display text-xl font-bold text-espresso">
              Join the list
            </h2>
            <p className="mt-2 text-espresso/70">
              Get updates on drops, markets, and studio news.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <p className="mt-6 rounded-xl bg-cream p-4 text-sm text-espresso/60">
              Official privacy policy is I won&apos;t share any of your
              information because that&apos;s shady. Love you all!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
