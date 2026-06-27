import Link from "next/link";

type CtaCardProps = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  accent: "terracotta" | "sage" | "coral" | "lavender";
  rotate?: string;
};

const accentStyles = {
  terracotta:
    "bg-terracotta border-espresso/20 hover:bg-terracotta-dark",
  sage: "bg-sage border-espresso/20 hover:bg-sage-dark",
  coral: "bg-coral border-espresso/20 hover:bg-coral-dark",
  lavender:
    "bg-lavender border-espresso/20 hover:bg-lavender-dark text-espresso",
};

export function CtaCard({
  title,
  description,
  href,
  external = false,
  accent,
  rotate = "rotate-0",
}: CtaCardProps) {
  const isLavender = accent === "lavender";
  const className = `group block rounded-3xl border-4 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${accentStyles[accent]} ${rotate} ${isLavender ? "text-espresso" : "text-cream"}`;

  const content = (
    <>
      <span
        aria-hidden
        className="mb-4 inline-block text-3xl"
      >
        {accent === "terracotta" && "🛒"}
        {accent === "sage" && "🏪"}
        {accent === "coral" && "📸"}
        {accent === "lavender" && "✨"}
      </span>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className={`mt-2 ${isLavender ? "text-espresso/75" : "text-cream/90"}`}>
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 font-bold">
        Let&apos;s go
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-2"
        >
          →
        </span>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
