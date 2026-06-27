import { siteConfig } from "@/data/site";

type JsonLdProps = {
  type?: "Organization" | "LocalBusiness" | "BlogPosting";
  blogPost?: {
    title: string;
    description: string;
    date: string;
    slug: string;
  };
};

export function JsonLd({ type = "Organization", blogPost }: JsonLdProps) {
  let schema: Record<string, unknown>;

  if (type === "BlogPosting" && blogPost) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogPost.title,
      description: blogPost.description,
      datePublished: blogPost.date,
      author: {
        "@type": "Person",
        name: "Bianca Rae",
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: `${siteConfig.url}/blog/${blogPost.slug}`,
    };
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      areaServed: "US",
      sameAs: [
        siteConfig.links.etsy,
        siteConfig.links.faire,
        siteConfig.links.instagram,
      ],
      knowsAbout: [
        "Handmade ceramics",
        "Pottery",
        "Wholesale ceramics",
        "Surface design",
      ],
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
