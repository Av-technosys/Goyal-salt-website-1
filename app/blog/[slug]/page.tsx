import React from "react";
import Image from "next/image";
import Link from "@/components/PrefetchLink";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Clock } from "lucide-react";

import { getImageUrl } from "@/src/lib/blogs/images";
import { getPublishedBlogBySlug, listBlogs } from "@/src/lib/blogs/queries";
import type { Blog } from "@/src/db";

import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* FEATURED STYLE HEADER */}
        <div className="mb-12">
          <div className="relative bg-[#130b06] border border-gray-200/80 rounded-3xl overflow-hidden shadow-xl min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center">
            {/* Background Cover Image with Overlay */}
            <div className="absolute inset-0 z-0 flex justify-end">
              <div className="relative w-full lg:w-[60%] h-full">
                <Image
                  src={getCoverImageSrc(post)}
                  alt={post.title}
                  fill
                  className="object-cover object-center lg:object-right transition-transform duration-700"
                  priority
                  unoptimized
                />
              </div>
              {/* Dark Overlay ending at 3/4 of the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#130b06]/80 to-[#130b06]/40 lg:from-[#130b06] lg:from-[40%] lg:via-[#130b06]/80 lg:via-[55%] lg:to-transparent lg:to-[75%] z-10" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 w-full lg:w-3/5 p-6 sm:p-10 lg:p-12 flex flex-col justify-center h-full pointer-events-none">
              <div className="mb-6 pointer-events-auto flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-600 text-white shadow-md">
                  Blog
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {getReadTime(post.content)} min read
                </span>
              </div>
              
              <div className="space-y-5 pointer-events-auto">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Published {formatDate(post.publishedAt)}
                  </span>
                  {post.authorName && (
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.authorName}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                  {post.title}
                </h1>

                <p className="text-sm sm:text-lg text-gray-200 leading-relaxed max-w-2xl drop-shadow-sm">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN ARTICLE BODY CONTENT (Full width to match banner) */}
        <div className="w-full mb-16">
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
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-[#ff842d]">
                      <Image
                        src={getCoverImageSrc(rel)}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="
                          object-cover
                          object-[100%_center]
                          scale-[1.18]
                          origin-bottom-right
                          group-hover:scale-[1.22]
                          transition-transform duration-500
                        "
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