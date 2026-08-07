"use client";

import { motion } from "framer-motion";
import { Quote, HeartHandshake, Users, ShieldCheck, Award } from "lucide-react";

export default function CommunityQuoteSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      
      {/* Ambient Lighting Halos */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* MAIN GLASSMORPHIC QUOTE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-red-600 via-red-600 to-red-700 rounded-3xl p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden border border-red-500/30 text-center"
        >
          {/* Subtle Ambient Light Orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Giant Quote Icons */}
          <div className="absolute top-6 left-8 text-white/10 pointer-events-none hidden sm:block">
            <Quote size={100} className="rotate-180" />
          </div>
          <div className="absolute bottom-6 right-8 text-white/10 pointer-events-none hidden sm:block">
            <Quote size={100} />
          </div>

          {/* Category Tag Badge */}
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <HeartHandshake className="w-4 h-4 text-white" />
            <span>Community & Values</span>
          </div>

          {/* Main Statement Quote (Strict Typography Scale Rule #6) */}
          <blockquote className="relative text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed max-w-4xl mx-auto tracking-tight">
            At <span className="font-extrabold underline decoration-white/40 underline-offset-8">Goyal Salt</span>, we consider our farmers and distributors as part of our family. We respect their hard work and passion, and empower them. Our goal is not just success, but to create a better and stronger future for our community.
          </blockquote>

          {/* Signature Badge */}
          <div className="relative mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xs">
            <ShieldCheck size={16} className="text-white" />
            <span>— Goyal Salt Family</span>
          </div>

          {/* 3 CORE PILLARS MICRO-CARDS AT BOTTOM */}
          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-white flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Users size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/90">Family First</p>
                <p className="text-xs text-white/80 font-medium">Farmers & Distributors</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-white flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <HeartHandshake size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/90">Empowerment</p>
                <p className="text-xs text-white/80 font-medium">Respect & Fair Growth</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-white flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/90">Shared Future</p>
                <p className="text-xs text-white/80 font-medium">Stronger Community</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
