"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="relative py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Ambient Soft Glow Behind Banner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl sm:rounded-[40px] 
                     px-6 sm:px-12 lg:px-16 
                     py-10 sm:py-14 lg:py-16 
                     shadow-2xl shadow-emerald-900/20 text-center overflow-hidden border border-emerald-400/20"
        >
          {/* Decorative quotes icons */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white/15 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-28 sm:h-28 rotate-180" />
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white/15 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-28 sm:h-28" />
          </div>

          <p className="relative z-10 text-white 
                        text-lg sm:text-2xl xl:text-3xl 
                        font-medium leading-relaxed max-w-4xl mx-auto">
            At <span className="text-amber-300 font-bold">Goyal Salt</span>, we consider our
            workers and distributors as part of our family. We respect their hard
            work and passion, and empower them. Our goal is not just success, but
            to create a better and stronger future for our community.
          </p>

          {/* Signature */}
          <div className="mt-8 text-emerald-100 text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-emerald-300/40 rounded-full" />
            <span>— Goyal Salt Family</span>
            <span className="w-8 h-[2px] bg-emerald-300/40 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
