"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SaltButton from "./SaltButton";

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
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-red-50/40 via-white to-red-50/40 border-t border-gray-100">
      <div
        className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl p-8 lg:p-12 flex flex-col items-center border border-gray-100 shadow-xl"
        >
          <div className="relative w-[220px] sm:w-[260px] h-[320px] sm:h-[360px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {note && (
            <p className="mt-6 text-center text-xs sm:text-sm text-gray-600 max-w-sm leading-relaxed font-normal">
              {note}
            </p>
          )}
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          {/* H2 Heading (Rule #6 Typography Scale) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight leading-snug">
            {title}
          </h2>

          {subtitle && (
            <span className="inline-block mb-4 rounded-full bg-red-50 border border-red-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
              {subtitle}
            </span>
          )}

          {description && (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          )}

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link href="/contact">
              <SaltButton variant="primary" size="lg">
                <span>Enquire Now</span>
              </SaltButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
