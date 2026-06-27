const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://bybiancarae.com";

export const siteConfig = {
  name: "Made By Bianca Rae",
  shortName: "Bianca Rae",
  tagline: "Handmade ceramics with color, chaos & charm",
  description:
    "Quirky handmade pottery and ceramics by Bianca Rae — formed and painted by hand in the mountains of Tennessee. Shop on Etsy, wholesale on Faire, or find us at markets nationwide.",
  url: siteUrl,
  email: "ByBiancaRae@gmail.com",
  location: "Mountains of Tennessee",
  links: {
    etsy: "https://www.etsy.com/shop/MadeByBiancaRae",
    faire: "https://www.faire.com/direct/madebybiancarae",
    instagram: "https://www.instagram.com/bybiancarae/",
  },
  announcements: [
    { label: "Next Drop on Etsy", date: "1/14" },
    { label: "Faire Market", date: "1/22" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/stockists", label: "Stockists" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
