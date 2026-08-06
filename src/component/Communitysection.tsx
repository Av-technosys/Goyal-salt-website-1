"use client";

import { motion } from "framer-motion";

export default function CommunityQuoteSection() {
  return (
    <section className="py-10 bg-[#f6fdf9]">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Floating blobs */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#10b15a] rounded-[48px] px-10 sm:px-16 py-16 shadow-2xl text-center overflow-hidden"
        >
          {/* Decorative quotes */}
          <span className="absolute top-8 left-10 text-white/20 text-[120px] leading-none font-serif">
            “
          </span>
          <span className="absolute bottom-8 right-10 text-white/20 text-[120px] leading-none font-serif">
            ”
          </span>

          <p className="relative text-white text-2xl sm:text-3xl xl:text-4xl font-semibold leading-relaxed">
            At <span className="text-yellow-200">Goyal Salt</span>, we consider
            our farmers and distributors as part of our family. We respect their
            hard work and passion, and empower them. Our goal is not just
            success, but to create a better and stronger future for our
            community.
          </p>

          {/* Optional signature */}
          <div className="mt-10 text-white/80 text-sm tracking-wider uppercase">
            — Goyal Salt Family
          </div>
        </motion.div>
      </div>
    </section>
  );
}
