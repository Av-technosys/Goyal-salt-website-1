"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  HeartPulse, 
  ShieldCheck, 
  Activity, 
  Droplets, 
  Sun,
  Award
} from "lucide-react";

export default function HealthSaltSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-[#ECFDF5] to-[#F0FDF4] pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36">
      
      {/* ========================================================================= */}
      {/* TOP ORGANIC WAVE (LAHAR) DIVIDER                                          */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 text-white block"
          preserveAspectRatio="none"
        >
          {/* Main White Organic Wave Fill */}
          <path
            d="M0,0 L1440,0 L1440,45 Q1080,110 720,45 Q360,-15 0,65 Z"
            fill="#ffffff"
          />
          {/* Subtle Secondary Translucent Wave Curve */}
          <path
            d="M0,65 Q360,-15 720,45 Q1080,110 1440,45"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM ORGANIC WAVE (LAHAR) DIVIDER                                       */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 text-white block"
          preserveAspectRatio="none"
        >
          {/* Main White Organic Wave Fill */}
          <path
            d="M0,75 Q360,135 720,65 Q1080,-5 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
          {/* Subtle Secondary Translucent Wave Curve */}
          <path
            d="M0,75 Q360,135 720,65 Q1080,-5 1440,60"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Background Soft Ambient Light Rays */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32 lg:space-y-40">

        {/* ========================================================================= */}
        {/* 1. HEALTH CARE SALT (Editorial Free-Flowing Narrative Showcase)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text & Editorial Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Minimalist Category Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs mb-5 backdrop-blur-sm">
              <HeartPulse className="w-4 h-4 text-red-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800">
                Daily Wellness Essential
              </span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-gray-950 tracking-tight leading-[1.12]">
              Health Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Salt</span>
            </h2>

            {/* Lead Narrative Text */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
              Crafted for everyday wellness, enriched with iodine to support balanced nutrition and a healthier lifestyle for the entire family.
            </p>

            {/* Organic Feature Nodes */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl">
              
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-100/90 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Optimal Iodine Balance</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Supports thyroid health and active cognitive development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-100/90 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Triple Refined Crystals</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Instant dissolution with consistent pure salty taste.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-100/90 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Zero Impurities</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Vacuum processed under strict FSSAI quality standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Trusted in Millions of Homes</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Delivering daily vitality across every Indian kitchen.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Explore Health Range</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-red-600 font-bold text-sm sm:text-base border border-emerald-200/60 shadow-2xs transition-all"
              >
                <span>Inquire For Bulk Supply</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Floating Hero Packet Showcase (5 Cols, Open Organic Composition) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]"
          >
            {/* Glowing Aura Backdrop */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-emerald-300/30 to-teal-200/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-6 w-64 sm:w-80 h-10 bg-emerald-950/10 rounded-full blur-2xl pointer-events-none" />

            {/* Floating Metric Badge 1 (Top Left) */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 sm:top-24 left-1 sm:left-3 md:left-5 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-lg text-xs font-bold text-gray-900"
            >
              <Sparkles className="w-4 h-4 text-red-600" />
              <span>Enriched with Iodine</span>
            </motion.div>

            {/* Floating Metric Badge 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 sm:bottom-12 right-2 sm:right-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gray-950/90 backdrop-blur-md border border-white/10 shadow-xl text-xs font-bold text-amber-300"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% Everyday Wellness</span>
            </motion.div>

            {/* Free-Standing Hero Product Packet */}
            <div className="relative w-64 sm:w-72 md:w-80 h-[340px] sm:h-[400px] md:h-[440px] transition-transform duration-700 hover:scale-105 group cursor-pointer">
              <Image
                src="/Images/health-care-packet-copy-scaled.png"
                alt="Goyal Health Care Salt"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                priority
                className="object-contain drop-shadow-[0_25px_40px_rgba(16,185,129,0.22)] group-hover:drop-shadow-[0_30px_50px_rgba(16,185,129,0.3)] transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>


        {/* ========================================================================= */}
        {/* 2. idea SALT (Alternating Narrative Layout)                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10 border-t border-emerald-200/60">
          
          {/* LEFT: Floating Hero Packet Showcase (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] order-2 lg:order-1"
          >
            {/* Glowing Aura Backdrop */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-teal-300/25 to-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-6 w-64 sm:w-80 h-10 bg-emerald-950/10 rounded-full blur-2xl pointer-events-none" />

            {/* Floating Metric Badge 1 (Top Right) */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 sm:top-24 right-1 sm:right-3 md:right-5 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-lg text-xs font-bold text-gray-900"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Pure Refined</span>
            </motion.div>

            {/* Floating Metric Badge 2 (Bottom Left) */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 sm:bottom-12 left-2 sm:left-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gray-950/90 backdrop-blur-md border border-white/10 shadow-xl text-xs font-bold text-emerald-300"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Free-Flowing Crystals</span>
            </motion.div>

            {/* Free-Standing Hero Product Packet */}
            <div className="relative w-64 sm:w-72 md:w-80 h-[340px] sm:h-[400px] md:h-[440px] transition-transform duration-700 hover:scale-105 group cursor-pointer">
              <Image
                src="/Images/idea-packet-copy-scaled.png"
                alt="Goyal idea Salt"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                className="object-contain drop-shadow-[0_25px_40px_rgba(16,185,129,0.2)] group-hover:drop-shadow-[0_30px_50px_rgba(16,185,129,0.28)] transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* RIGHT: Text & Editorial Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Top Category Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs mb-5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800">
                Pristine Purity & Taste
              </span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-gray-950 tracking-tight leading-[1.12]">
              idea <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Salt</span>
            </h2>

            {/* Lead Narrative Text */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
              Refined with meticulous care to preserve natural purity and taste, bringing healthier daily nutrition to households across India.
            </p>

            {/* Organic Feature Nodes */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl">
              
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/90 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Vacuum Evaporated</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Advanced vacuum evaporation for crystalline clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-teal-100/90 text-teal-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Smooth Free Flow</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Zero clumping, spreads evenly into every culinary dish.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-100/90 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Balanced Sodium Formula</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Perfect seasoning balance for health-conscious living.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100/80 shadow-xs hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-100/90 text-rose-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Guaranteed Hygiene</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-normal">
                    Untouched by human hands in automated modern units.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Discover idea Salt</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
