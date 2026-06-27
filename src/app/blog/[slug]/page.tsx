import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <JsonLd
        type="BlogPosting"
        blogPost={{
          title: post.title,
          description: post.excerpt,
          date: post.date,
          slug: post.slug,
        }}
      />
      <article className="blob-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            ← Back to Blog
          </Link>

          <header className="mt-8">
            <time
              dateTime={post.date}
              className="text-sm font-medium text-espresso/50"
            >
              {formatDate(post.date)} · Bianca Rae
            </time>
            <h1 className="font-display mt-4 text-4xl font-bold text-espresso sm:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="prose-custom mt-10 space-y-6 text-lg leading-relaxed text-espresso/80">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
