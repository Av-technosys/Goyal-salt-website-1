import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";

import { getImageUrl } from "@/src/lib/blogs/images";
import { listBlogs } from "@/src/lib/blogs/queries";
import type { Blog } from "@/src/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Salt Industry Insights & Blogs | Goyal Salt Limited",
  description:
    "Explore the latest blogs, news, health insights, and industry updates from Goyal Salt Limited. Learn about refined salt processing, double fortified salt, and quality control.",
  alternates: {
    canonical: "https://goyalsaltltd.com/blog",
  },
};

const FALLBACK_COVER_IMAGE = "/Images/goyal-banner1.jpg";

function formatDate(value: Date | string | null) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function getCoverImageSrc(blog: Blog) {
  return getImageUrl(blog.coverImageKey) ?? FALLBACK_COVER_IMAGE;
}

export default async function BlogPage() {
  const blogs = await listBlogs({
    page: 1,
    limit: 50,
    search: "",
    status: "published",
  });

  const featuredPost = blogs.data[0] ?? null;
  const remainingPosts = blogs.data.slice(1);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER BADGE */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-xs tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>Knowledge Hub & Insights</span>
          </div>
        </div>

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Latest{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">
              Blogs & Articles
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Discover articles on refined salt processing, health benefits of fortified salt, quality control, and corporate updates from Goyal Salt.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {featuredPost ? (
          <>
            {/* FEATURED POST */}
            <div className="mb-14">
              <div className="group relative bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-red-300 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Cover Image */}
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden bg-gray-100"
                >
                  <Image
                    src={getCoverImageSrc(featuredPost)}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured Article
                    </span>
                  </div>
                </Link>

                {/* Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:from-red-700 hover:to-amber-700 transition-all duration-200 group-hover:gap-3"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* DYNAMIC BLOG GRID */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span>More Articles</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-700">
                  {remainingPosts.length}
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {remainingPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                    <div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative block h-48 sm:h-52 overflow-hidden bg-gray-100"
                      >
                        <Image
                          src={getCoverImageSrc(post)}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-500" />
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0 mt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-sm">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">No Articles Found</h3>
            <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
              Published articles will appear here once they are added from the admin panel.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
