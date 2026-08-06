"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProductHighlightSectionProps {
  image: string | StaticImageData;
  title: string;
  subtitle?: string;
  description?: string;
  note?: string;
  reverse?: boolean;
}

export default function ProductHighlightSection({
  image,
  title,
  subtitle,
  description,
  note,
  reverse = false,
}: ProductHighlightSectionProps) {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-pink-50 via-white to-pink-100">
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-pink-200/60 rounded-3xl p-10 flex flex-col items-center shadow-xl"
        >
          <div className="relative w-[220px] sm:w-[260px] h-[360px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>

          <p className="mt-6 text-center text-gray-700 max-w-sm">
            {note}
          </p>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            {title}
          </h2>

          <h3 className="uppercase tracking-wider font-semibold text-gray-800 mb-6">
            {subtitle}
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            {description}
          </p>

          <button className="mt-10 px-12 py-4 rounded-full border-2 border-pink-500 text-pink-600 font-semibold text-lg hover:bg-pink-500 hover:text-white transition">
            Enquire Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
