import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-clay/15 bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Logo size="md" variant="light" />
            </Link>
            <p className="mt-3 max-w-sm text-cream/75">
              Hand-formed & hand-painted ceramics from the mountains of
              Tennessee. Quirky, colorful, and made with love (and a little
              chaos).
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-coral">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-coral">
              Connect
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.etsy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  Shop on Etsy
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.faire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  Wholesale on Faire
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  Follow on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} Made By Bianca Rae. All rights
            reserved.
          </p>
          <p className="font-display text-sm text-cream/40">
            clay · color · chaos ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
