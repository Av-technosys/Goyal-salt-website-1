import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, HeartHandshake, ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "Goyal Salt Chairman’s Desk | Salt Suppliers & Manufacturers",
  description:
    "Read the Chairman’s Desk message at Goyal Salt Ltd, reflecting dedication to premium salt production for India’s distributors, suppliers & industrial sectors.",
  alternates: {
    canonical: "https://goyalsaltltd.com/chairman-desk",
  },
};

export default function ChairmansDeskPage() {
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
            <span>Leadership & Vision</span>
          </div>
        </div>

        {/* PAGE TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Chairman&apos;s <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Desk</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            A message of vision, leadership, and gratitude from our Chairman
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* MAIN EXECUTIVE SHOWCASE CARD */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-red-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT PROFILE CARD */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 p-8 sm:p-12 text-white flex flex-col items-center justify-between relative overflow-hidden">
              {/* Decorative Subtle Background Shapes */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-full flex flex-col items-center relative z-10 text-center">
                {/* Profile Image Frame */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl p-1 bg-gradient-to-tr from-red-500 to-amber-400 group">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/Images/rajesh.jpg"
                      alt="Rajesh Goyal"
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Rajesh Goyal
                </h2>
                <p className="text-red-400 font-semibold text-sm sm:text-base mt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Chairman & Whole Time Director</span>
                </p>

                {/* Key Achievements Chips */}
                <div className="mt-6 w-full space-y-2.5 text-left">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-xs text-gray-200">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>20+ Years Salt Industry Pioneer</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 text-xs text-gray-200">
                    <HeartHandshake className="w-4 h-4 text-red-400 shrink-0" />
                    <span>India&apos;s 1st North Iodised Plant Pioneer</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-8 pt-6 border-t border-white/10 w-full text-center relative z-10">
                <p className="text-xs text-gray-300 italic">
                  &ldquo;Building an empire built on trust, quality, and commitment.&rdquo;
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT SECTION */}
            <div className="lg:col-span-8 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative bg-gradient-to-b from-white to-gray-50/50">
              {/* Background Watermark Icon */}
              <Quote className="absolute top-8 right-8 w-28 h-28 text-red-600/5 pointer-events-none rotate-180" />

              <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                
                {/* Intro Highlight Box */}
                <div className="relative border-l-4 border-red-600 bg-red-50/60 p-5 rounded-r-2xl border-y border-r border-red-100/80 shadow-xs">
                  <p className="font-semibold text-gray-900 leading-relaxed">
                    With a vision to set up India’s one of the largest salt
                    industries, we started our journey over a decade ago by taking
                    small yet determined steps. What began as a dream has today
                    transformed into a strong and growing organization built on
                    trust, quality, and commitment.
                  </p>
                </div>

                {/* Paragraph 2 */}
                <p className="text-gray-700">
                  Building an empire is not a one-person effort. Without a
                  hardworking and dedicated team, this journey would not have
                  been possible. I am deeply proud of every individual who has
                  walked alongside me, contributing their passion and dedication
                  to shape what we are today.
                </p>

                {/* Paragraph 3 */}
                <p className="text-gray-700">
                  As we move forward, our focus remains on sustainable growth,
                  ethical practices, and creating a positive workplace culture
                  where innovation and excellence thrive.
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
                    href="/message-from-md"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gray-900 text-white hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    <span>Read Message from MD</span>
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
