import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, TrendingUp, ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "Managing Director’s Message | Goyal Salt Limited",
  description:
    "Read the message from the managing director at Goyal Salt Ltd for insights on vision, values, growth and commitment to quality and service excellence.",
  alternates: {
    canonical: "https://goyalsaltltd.com/message-from-md",
  },
};

export default function MessageFromMDPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BREADCRUMB / BADGE */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-sm tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Executive Insights</span>
          </div>
        </div>

        {/* PAGE TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Message From <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">MD</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            A word of leadership, vision, and commitment from our Managing Director
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* MAIN EXECUTIVE CARD */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-red-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT PROFILE CARD */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 p-8 sm:p-12 text-white flex flex-col items-center justify-between relative overflow-hidden">
              {/* Decorative Background Glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-full flex flex-col items-center relative z-10 text-center">
                {/* Profile Image Frame */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl p-1 bg-gradient-to-tr from-red-500 to-amber-400 group">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/Images/pramesh.jpg"
                      alt="Pramesh Goyal"
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Pramesh Goyal
                </h2>
                <p className="text-red-400 font-semibold text-sm sm:text-base mt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Managing Director</span>
                </p>

                {/* Key Highlights Chips */}
                <div className="mt-6 w-full space-y-2.5 text-left">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-xs text-gray-200">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>20+ Years Industry Leadership</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-xs text-gray-200">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Product Quality & Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-8 pt-6 border-t border-white/10 w-full text-center relative z-10">
                <p className="text-xs text-gray-300 italic">
                  &ldquo;Driving continual growth, infrastructure excellence, and innovation.&rdquo;
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT SECTION */}
            <div className="lg:col-span-8 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative bg-gradient-to-b from-white to-gray-50/50">
              {/* Background Watermark Icon */}
              <Quote className="absolute top-8 right-8 w-28 h-28 text-red-600/5 pointer-events-none rotate-180" />

              <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                
                {/* Welcome Message */}
                <p className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                  Welcome to our website everyone.
                </p>

                {/* Styled Quote Box */}
                <div className="relative border-l-4 border-amber-500 bg-amber-50/60 p-6 rounded-r-2xl border-y border-r border-amber-200/60 shadow-xs">
                  <blockquote className="italic font-semibold text-gray-900 text-lg leading-relaxed">
                    &ldquo;Without continual growth and progress, such words as
                    improvement, achievement, and success have no meaning.&rdquo;
                  </blockquote>
                </div>

                {/* Paragraph 1 */}
                <p className="text-gray-700">
                  And for achieving this growth and progress, we must have a good
                  infrastructure, sufficient resources, and a strong team. We
                  have successfully grown our business by focusing on product
                  quality and customer satisfaction.
                </p>

                {/* Paragraph 2 */}
                <p className="text-gray-700">
                  At Goyal Salt, we remain committed to ethical practices,
                  innovation, and long-term relationships with our customers and
                  partners.
                </p>

              </div>

              {/* FOOTER CALLOUT / ACTIONS */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <span>Goyal Salt Limited Leadership</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/vision-mission"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gray-900 text-white hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    <span>Our Vision & Mission</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
