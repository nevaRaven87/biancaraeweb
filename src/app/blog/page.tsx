import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Studio updates, reflections, and behind-the-scenes stories from Made By Bianca Rae — handmade ceramics from Tennessee.",
  path: "/blog",
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="blob-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            Blog
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-espresso sm:text-5xl">
            Studio Stories
          </h1>
          <p className="mt-4 text-lg text-espresso/70">
            Updates from the studio, market recaps, and the occasional toddler
            bug-identification session.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              className={`group flex flex-col rounded-3xl border-2 border-clay/20 bg-white p-8 transition-all hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-lg ${i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"} hover:rotate-0`}
            >
              <time
                dateTime={post.date}
                className="text-sm font-medium text-espresso/50"
              >
                {formatDate(post.date)}
              </time>
              <h2 className="font-display mt-3 text-2xl font-bold text-espresso group-hover:text-terracotta">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-espresso/70">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-terracotta"
              >
                Read More
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
