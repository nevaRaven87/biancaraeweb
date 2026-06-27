export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "holy-progression",
    title: "Holy Progression.",
    date: "2024-12-26",
    excerpt:
      "Just wanted to share a bit of the evolution of my work. I've been pretty (abruptly) shocked by it myself as I sifted through photos from this past year and updated my shops. Tell me what you think!",
    content: `Just wanted to share a bit of the evolution of my work. I've been pretty (abruptly) shocked by it myself as I sifted through photos from this past year and updated my shops.

Looking back at where I started versus where I am now — the color palettes, the surface patterns, the shapes — it's been a wild ride. Each piece teaches me something new about clay, about patience, and about leaning into the weird.

Tell me what you think! I'd love to hear which era speaks to you most.`,
  },
  {
    slug: "goodbye-2024-and-hellooooooo-2025",
    title: "GOODBYE 2024 and hellooooooo 2025!",
    date: "2024-12-26",
    excerpt:
      "Onward and upward! Big studio announcements for 2025. SO MANY IDEAS!",
    content: `Onward and upward! Big studio announcements for 2025. SO MANY IDEAS!

2024 was a year of growth, change, and a whole lot of clay under my fingernails. As we step into 2025, I'm buzzing with new collections, fresh market dates, and collaborations I can't wait to share.

Stay tuned on Instagram for drop announcements — you won't want to miss what's coming.`,
  },
  {
    slug: "2024-reflections",
    title: "2024 Reflections",
    date: "2024-12-11",
    excerpt:
      "What a year it's been. A bit about how a closed door opened a world of opportunity.",
    content: `What a year it's been. A bit about how a closed door opened a world of opportunity.

Sometimes the universe closes one chapter so you can write a better one. Leaving teaching after nearly a decade was scary — but it gave me the space to pour everything into this studio, my family, and the work that makes my heart sing.

Thank you to every collector, stockist, and market friend who showed up this year. You make this mess-making possible.`,
  },
  {
    slug: "welcome-friends",
    title: "Welcome friends!",
    date: "2024-08-21",
    excerpt:
      "Welcome to the new home for Made By Bianca Rae — handmade ceramics, maximalist cats, and a whole lot of personality.",
    content: `Welcome to the new home for Made By Bianca Rae!

If you're new here: hi! I'm Bianca, a potter and seamstress obsessed with color and surface design. I make pretty things by hand in the mountains of Tennessee — plates covered in cats, ornaments that make you laugh, and trinket dishes you'll actually use.

Browse the shop links, find a stockist near you, or drop me a line. So glad you're here.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
