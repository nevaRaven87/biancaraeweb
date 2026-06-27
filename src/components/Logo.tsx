import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  linkToHome?: boolean;
  variant?: "default" | "light";
};

const sizes = {
  sm: { image: 44, container: "h-11 w-11" },
  md: { image: 56, container: "h-14 w-14" },
  lg: { image: 80, container: "h-20 w-20" },
  xl: { image: 200, container: "h-48 w-48 sm:h-56 sm:w-56" },
};

export function Logo({
  size = "md",
  showText = true,
  className = "",
  linkToHome = false,
  variant = "default",
}: LogoProps) {
  const { image, container } = sizes[size];
  const titleColor = variant === "light" ? "text-cream" : "text-espresso";
  const accentColor = variant === "light" ? "text-coral" : "text-terracotta";

  const content = (
    <>
      <span
        className={`relative shrink-0 overflow-hidden rounded-full border-2 border-espresso/10 bg-white shadow-md ${container}`}
      >
        <Image
          src={withBasePath("/logo.png")}
          alt="Made By Bianca Rae — pink party cat ceramic figurine"
          width={image}
          height={image}
          className="h-full w-full object-cover object-[center_20%]"
          priority={size === "sm" || size === "md"}
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-display text-lg font-bold tracking-tight sm:text-xl ${titleColor}`}>
            Made By
          </span>
          <span className={`font-display text-lg font-bold tracking-tight sm:text-xl ${accentColor}`}>
            Bianca Rae
          </span>
        </span>
      )}
    </>
  );

  const wrapperClass = `group inline-flex items-center gap-3 ${className}`;

  if (linkToHome) {
    return (
      <Link href="/" className={`${wrapperClass} transition-transform hover:-rotate-1`}>
        {content}
      </Link>
    );
  }

  return <span className={wrapperClass}>{content}</span>;
}
