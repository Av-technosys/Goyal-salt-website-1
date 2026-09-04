import Link from "next/link";
import { Sparkles, Eye, Target, ShieldCheck, Award, HeartHandshake, Leaf, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Goyal Salt Ltd Vision & Mission | Salt Manufacturers India",
  description:
    "Our vision drives us to be among India’s top salt manufacturers & suppliers, ensuring purity, consistency, and a trusted supply for distributors and clients.",
  alternates: {
    canonical: "https://goyalsaltltd.com/vision-mission",
  },
};

export default function VisionMissionPage() {
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
            <span>Purpose & Direction</span>
          </div>
        </div>

        {/* PAGE TITLE */}
        <div className="text-center mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Vision & <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Driving excellence, innovation, and trust in salt production for a
            healthier tomorrow.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* VISION CARD */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 border-t-4 border-t-amber-500 flex flex-col justify-between group">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Our Aspirations</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    Vision
                  </h2>
                </div>
              </div>

              <div className="w-16 h-1 bg-amber-400 rounded-full mb-6" />

              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Our vision is to become a globally trusted name in salt production
                  by offering high-quality, diverse, and sustainable salt products
                  that enhance the health, well-being, and satisfaction of our
                  customers, suppliers, and employees.
                </p>

                <p>
                  We aim to lead with innovation, uphold ethical standards, and
                  foster a culture of continuous improvement in every step of our
                  value chain.
                </p>
              </div>
            </div>

            {/* Core Focus Tags */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                Global Trust
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                Sustainable Products
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                Continuous Improvement
              </span>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 border-t-4 border-t-red-600 flex flex-col justify-between group">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 shadow-sm shrink-0">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Our Commitment</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    Mission
                  </h2>
                </div>
              </div>

              <div className="w-16 h-1 bg-red-500 rounded-full mb-6" />

              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Our mission is to consistently deliver premium-quality salt
                  products through advanced processing, strict quality control, and
                  responsible sourcing practices.
                </p>

                <p>
                  We are committed to building long-term relationships with our
                  customers and partners by maintaining transparency, reliability,
                  and innovation while contributing positively to society and the
                  environment.
                </p>
              </div>
            </div>

            {/* Core Focus Tags */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-700 border border-red-200/60">
                Premium Quality
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-700 border border-red-200/60">
                Strict Quality Control
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-700 border border-red-200/60">
                Environmental & Social Care
              </span>
            </div>
          </div>

        </div>

        {/* CORE VALUES PILLARS BANNER */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-gray-900 to-red-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Guiding Principles of Goyal Salt
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                The core pillars supporting our vision and operational mission across India
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <ShieldCheck className="w-8 h-8 text-amber-400 mb-3" />
                <h4 className="font-bold text-white text-base">Uncompromised Quality</h4>
                <p className="text-xs text-gray-300 mt-1">Refined processing and rigorous testing standards.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <HeartHandshake className="w-8 h-8 text-red-400 mb-3" />
                <h4 className="font-bold text-white text-base">Partner Trust</h4>
                <p className="text-xs text-gray-300 mt-1">Building long-term transparent customer relationships.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <Award className="w-8 h-8 text-emerald-400 mb-3" />
                <h4 className="font-bold text-white text-base">Ethical Sourcing</h4>
                <p className="text-xs text-gray-300 mt-1">Responsible manufacturing & transparent practices.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <Leaf className="w-8 h-8 text-teal-400 mb-3" />
                <h4 className="font-bold text-white text-base">Sustainability</h4>
                <p className="text-xs text-gray-300 mt-1">Contributing positively to society and environment.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/why-goyal-salt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-red-600 text-white hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20"
              >
                <span>Discover Why Goyal Salt Ltd</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
