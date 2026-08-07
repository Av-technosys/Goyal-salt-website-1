"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import SaltButton from "./SaltButton";

export default function ProductInfoSection() {
  const features = [
    "100% Natural and Unrefined",
    "Rich in Essential Minerals",
    "Moisture Free and Fresh",
    "No Harmful Additives",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE WITH GLASSMORPHIC EMBED & AMBIENT GLOW */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Soft Ambient Brand Glow */}
            <div className="
              absolute -z-10
              w-[280px] h-[280px]
              sm:w-[360px] sm:h-[360px]
              lg:w-[460px] lg:h-[460px]
              bg-gradient-to-tr from-red-100/60 via-red-50/40 to-transparent
              rounded-full blur-3xl opacity-80
            " />

            {/* Glassmorphic Background Card Container */}
            <div className="relative p-6 sm:p-10 bg-gradient-to-b from-gray-50/80 to-white/90 rounded-3xl border border-gray-100 shadow-xl backdrop-blur-md">
              <div className="relative w-[260px] sm:w-[380px] lg:w-[480px] h-[260px] sm:h-[380px] lg:h-[480px] transition-transform duration-500 hover:scale-105">
                <Image
                  src="/Images/Untitled-5-scaled.png"
                  alt="Goyal Salt Products"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Quality Assurance Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-red-100 shadow-lg flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">100% Pure & Hygienic</p>
                  <p className="text-[10px] text-gray-500 font-medium">Certified Quality Salt</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Category Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
                Premium Wellness
              </span>
            </div>

            {/* Main H2 Heading (Strict Typography Scale Rule #6) */}
            <h2 className="
              text-2xl sm:text-3xl lg:text-4xl
              font-bold text-gray-900
              tracking-tight leading-snug mb-4 sm:mb-6
            ">
              Ready for Instant and Healthy Use
            </h2>

            {/* Paragraph Text (Strict Typography Scale Rule #6) */}
            <p className="
              text-sm sm:text-base text-gray-600
              leading-relaxed font-normal mb-8
              max-w-xl mx-auto lg:mx-0
            ">
              Experience the natural taste and wellness of premium-quality salt, sourced directly from mineral-rich regions. Whether it rock salt, black salt, or iodized varieties – our products are carefully processed to retain their purity and essential nutrients.
            </p>

            {/* FEATURES GRID */}
            <div className="
              grid grid-cols-1 sm:grid-cols-2
              gap-4 sm:gap-5
              mb-8 sm:mb-10
              text-left max-w-xl mx-auto lg:mx-0
            ">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    p-3.5 rounded-xl bg-gray-50/80 border border-gray-100
                    flex items-center gap-3 hover:bg-red-50/50 hover:border-red-100 transition-colors
                  "
                >
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ABOUT US CTA BUTTON WITH UNIVERSAL SALTBUTTON */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/about-us">
                <SaltButton variant="primary" size="lg">
                  <span>About Us</span>
                  <ArrowRight size={18} />
                </SaltButton>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
