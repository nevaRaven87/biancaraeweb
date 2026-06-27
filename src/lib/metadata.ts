import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${siteConfig.name} | Handmade Ceramics & Pottery`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
