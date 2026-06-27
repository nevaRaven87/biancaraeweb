import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="bg-terracotta py-2.5 text-center text-sm font-semibold text-cream">
      <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4">
        {siteConfig.announcements.map((item, i) => (
          <span key={item.label} className="inline-flex items-center gap-2">
            {i > 0 && <span aria-hidden className="hidden text-cream/50 sm:inline">✦</span>}
            <span>
              {item.label}: <strong>{item.date}</strong>
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-espresso/10 bg-cream shadow-sm">
      <AnnouncementBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Logo size="sm" linkToHome />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-espresso/80 transition-colors hover:bg-sage/25 hover:text-espresso"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.etsy}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-espresso px-5 py-2.5 text-sm font-bold text-cream shadow-md transition-all hover:scale-105 hover:bg-terracotta sm:inline-block"
          >
            Shop Etsy ✦
          </a>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border-2 border-espresso bg-white px-4 py-2 text-sm font-bold text-espresso shadow-sm [&::-webkit-details-marker]:hidden">
              ☰ Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 mt-2 w-52 rounded-2xl border-2 border-espresso/10 bg-cream p-2 shadow-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-espresso hover:bg-sage/25"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.links.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-xl bg-terracotta px-4 py-2.5 text-center text-sm font-bold text-cream"
              >
                Shop Etsy
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
