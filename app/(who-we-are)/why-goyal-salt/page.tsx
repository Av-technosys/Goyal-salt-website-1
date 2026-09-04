import Link from "next/link";
import {
  Sparkles,
  Download,
  ShieldCheck,
  Award,
  TrendingUp,
  FileText,
  CheckCircle2,
  Building2,
  Clock,
  Settings,
  Microscope,
  Truck,
  HeartHandshake,
  Cpu,
  Boxes,
  Crown,
} from "lucide-react";

export const metadata = {
  title: "Why Choose Goyal Salt Ltd – Leading Salt Suppliers in India",
  description:
    "Goyal Salt Ltd offers premium salt manufacturing in India, trusted by distributors & suppliers for purity, consistency, and efficient supply. Call us today.",
  alternates: {
    canonical: "https://goyalsaltltd.com/why-goyal-salt",
  },
};

const reasons = [
  { id: "01", title: "More than 14 Years of Experience", icon: Clock, category: "Legacy" },
  { id: "02", title: "Product Customization", icon: Settings, category: "Versatility" },
  { id: "03", title: "Research & Development Mastery", icon: Microscope, category: "Innovation" },
  { id: "04", title: "Strong Supply Chain Management", icon: Truck, category: "Logistics" },
  { id: "05", title: "Customer Centric Approach", icon: HeartHandshake, category: "Partnership" },
  { id: "06", title: "State of the Art Technology", icon: Cpu, category: "Automation" },
  { id: "07", title: "Effective Control on Raw Salt Procurement", icon: Boxes, category: "Sourcing" },
  { id: "08", title: "One of the Largest Salt Manufacturer in India", icon: Crown, category: "Scale" },
];

export default function WhyGoyalSalt() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">

        {/* BREADCRUMB / BADGE */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-sm tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Trust, Excellence & Scale</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Why <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Goyal Salt Ltd?</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Discover the key differentiators that make us India&apos;s preferred salt manufacturing partner.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* ================= 8 REASONS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Number & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                      {item.id}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                  <span>{item.category}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DOWNLOAD BROCHURE BUTTON ================= */}
        <div className="flex justify-center">
          <Link
            href="/Brochure/Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-2xl shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 animate-bounce" />
            <span>Download Company Brochure</span>
          </Link>
        </div>

        {/* ================= CORE VALUES SECTION ================= */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Core Pillars
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
              The ethical framework and values guiding our daily operations
            </p>
            <div className="mt-3 w-16 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* INTEGRITY */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-red-600 space-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">
                INTEGRITY
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Goyal Salt Ltd. believes in doing the right thing. Since our
                incorporation, we have maintained the highest level of moral and
                ethical values in every sphere of our work through habitual
                integrity.
              </p>
            </div>

            {/* HIGH-QUALITY STANDARDS */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-amber-500 space-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">
                HIGH-QUALITY STANDARDS
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                We have consistently offered the highest standards of quality,
                ensuring cost-effectiveness and long-term value for our clients.
              </p>
            </div>

            {/* LEADERSHIP */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-emerald-600 space-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">
                LEADERSHIP
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                We create our own path to success. Goyal Salt Ltd. leads the market
                through innovation, operational excellence, and profitable
                solutions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
