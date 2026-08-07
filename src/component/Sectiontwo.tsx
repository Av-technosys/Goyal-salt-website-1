"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, HeartPulse, ShieldCheck } from "lucide-react";
import SaltButton from "./SaltButton";

export default function HealthSaltSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-t border-gray-100">
      
      {/* Background Ambient Lighting Halos */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">

        {/* ================= CARD 1: HEALTH CARE SALT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-red-50/60 via-white to-gray-50/80 border border-red-100/80 shadow-xl p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Top Decorative Pill */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* TEXT CONTENT (Lg: 7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/80 border border-red-200 shadow-2xs mb-4">
                <HeartPulse className="w-4 h-4 text-red-600 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-700">
                  Everyday Essential
                </span>
              </div>

              {/* Main H2 Heading (Rule #6 Typography Scale) */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
                Health Care Salt
              </h2>

              {/* Description Paragraph */}
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Crafted for everyday wellness, enriched with iodine to support balanced nutrition and a healthier lifestyle.
              </p>

              {/* Key Benefit Highlights Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Iodine Fortified Nutrition</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Daily Balance & Immunity</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link href="/products">
                  <SaltButton variant="primary" size="lg">
                    <span>View All Items</span>
                    <ArrowRight size={18} />
                  </SaltButton>
                </Link>
              </div>
            </div>

            {/* PRODUCT PACKET SHOWCASE CARD (Lg: 5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 sm:p-8 bg-white rounded-3xl border border-red-100 shadow-2xl backdrop-blur-md group w-full max-w-sm sm:max-w-md">
                
                {/* Floating Salt Shimmer Badge */}
                <div className="absolute top-4 left-4 z-20 bg-red-50/90 border border-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                  <Sparkles size={12} className="text-red-600" />
                  <span>Enriched Iodine</span>
                </div>

                <div className="relative w-full h-[260px] sm:h-[320px] flex items-center justify-center my-2">
                  <Image
                    src="/Images/health-care-packet-copy-scaled.png"
                    alt="Health Care Salt"
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(220,38,38,0.15)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>


        {/* ================= CARD 2: IDEAL SALT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-bl from-gray-50/80 via-white to-red-50/60 border border-red-100/80 shadow-xl p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Top Decorative Pill */}
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-red-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* PRODUCT PACKET SHOWCASE CARD (Lg: 5 cols) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative p-6 sm:p-8 bg-white rounded-3xl border border-red-100 shadow-2xl backdrop-blur-md group w-full max-w-sm sm:max-w-md">
                
                {/* Floating Pure Badge */}
                <div className="absolute top-4 left-4 z-20 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>100% Pure Refined</span>
                </div>

                <div className="relative w-full h-[260px] sm:h-[320px] flex items-center justify-center my-2">
                  <Image
                    src="/Images/idea-packet-copy-scaled.png"
                    alt="Ideal Salt"
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* TEXT CONTENT (Lg: 7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left order-1 lg:order-2">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100/80 border border-red-200 shadow-2xs mb-4">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-700">
                  Pure & Trusted
                </span>
              </div>

              {/* Main H2 Heading (Rule #6 Typography Scale) */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
                Ideal Salt
              </h2>

              {/* Description Paragraph */}
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Refined with care to preserve purity and taste, bringing healthier nutrition to every household.
              </p>

              {/* Key Benefit Highlights Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Vacuum Processed Purity</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-gray-100 shadow-2xs">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Free Flowing Granules</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link href="/products">
                  <SaltButton variant="primary" size="lg">
                    <span>View All Items</span>
                    <ArrowRight size={18} />
                  </SaltButton>
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
