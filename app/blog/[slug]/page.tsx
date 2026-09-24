import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Clock } from "lucide-react";

import { getImageUrl } from "@/src/lib/blogs/images";
import { getPublishedBlogBySlug, listBlogs } from "@/src/lib/blogs/queries";
import type { Blog } from "@/src/db";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

const FALLBACK_COVER_IMAGE = "/Images/goyal-banner1.jpg";

function formatDate(value: Date | string | null) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

function getCoverImageSrc(blog: Blog) {
  return getImageUrl(blog.coverImageKey) ?? FALLBACK_COVER_IMAGE;
}

function getReadTime(content: string) {
  const text = content.replace(/<[^>]*>/g, " ").trim();
  const wordCount = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(wordCount / 200));
}

/**
 * Sanitize stored HTML so it renders consistently on the public page:
 * - Strips inline color/text-decoration styles from <a> tags (so CSS controls them)
 * - Converts className="..." → class="..." (editor inserts JSX-style attributes)
 */
function sanitizeContent(html: string): string {
  return html
    // Fix className -> class (editor table HTML uses JSX syntax)
    .replace(/className=/g, "class=")
    // Remove inline color styles from <a> tags so our CSS takes over
    .replace(
      /<a(\s[^>]*?)style="([^"]*)"/gi,
      (match, attrs, styleValue) => {
        const cleaned = styleValue
          .split(";")
          .filter(
            (s: string) =>
              !/^\s*color\s*:/i.test(s) &&
              !/^\s*text-decoration\s*:/i.test(s)
          )
          .join(";");
        return cleaned.trim()
          ? `<a${attrs}style="${cleaned}"`
          : `<a${attrs}`;
      }
    );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Goyal Salt Limited",
    };
  }

  const coverImage = getImageUrl(post.coverImageKey);

  return {
    title: `${post.seoTitle || post.title}`,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `https://goyalsaltltd.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: coverImage ? [{ url: coverImage }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedBlogs = await listBlogs({
    page: 1,
    limit: 4,
    search: "",
    status: "published",
  });
  const relatedPosts = relatedBlogs.data
    .filter((relatedPost) => relatedPost.id !== post.id)
    .slice(0, 3);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10 sm:py-16 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* BACK TO BLOG LINK */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-red-600 transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* ARTICLE HEADER */}
        <header className="space-y-6 mb-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200/80">
              Blog
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              {getReadTime(post.content)} min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 font-medium leading-relaxed">
            {post.excerpt}
          </p>

          {/* METADATA BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-red-600" />
                Published {formatDate(post.publishedAt)}
              </span>
            </div>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl mb-12 bg-gray-100 border border-gray-200/80">
          <Image
            src={getCoverImageSrc(post)}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* MAIN ARTICLE BODY CONTENT */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-12 mb-12">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}
          />
        </div>


        {/* RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                Related Articles
              </h3>
              <Link
                href="/blog"
                className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
              >
                View All <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                      <Image
                        src={getCoverImageSrc(rel)}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      Blog
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mt-1">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-semibold text-gray-500 flex items-center justify-between">
                    <span>{formatDate(rel.publishedAt)}</span>
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                      Read
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
