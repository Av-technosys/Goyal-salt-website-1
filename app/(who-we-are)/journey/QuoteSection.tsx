"use client";

import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Floating blob (hide on mobile) */}
        <div className="hidden sm:block absolute -top-16 -left-16 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#10b15a] rounded-3xl sm:rounded-[48px] 
                     px-6 sm:px-12 lg:px-16 
                     py-10 sm:py-14 lg:py-16 
                     shadow-2xl text-center overflow-hidden"
        >
          {/* Decorative quotes */}
          <span className="absolute top-4 left-4 sm:top-8 sm:left-10 
                           text-white/20 text-[64px] sm:text-[120px] 
                           leading-none font-serif">
            “
          </span>

          <span className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 
                           text-white/20 text-[64px] sm:text-[120px] 
                           leading-none font-serif">
            ”
          </span>

          <p className="relative text-white 
                        text-lg sm:text-2xl xl:text-3xl 
                        font-semibold leading-relaxed">
            At <span className="text-yellow-200">Goyal Salt</span>, we consider our
            workers and distributors as part of our family. We respect their hard
            work and passion, and empower them. Our goal is not just success, but
            to create a better and stronger future for our community.
          </p>

          {/* Signature */}
          <div className="mt-6 sm:mt-10 text-white/80 text-xs sm:text-sm tracking-wider uppercase">
            — Goyal Salt Family
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
