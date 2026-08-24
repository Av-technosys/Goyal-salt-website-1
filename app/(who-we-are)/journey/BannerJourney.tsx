"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, TrendingUp, Award } from "lucide-react";

const stats = [
  { label: "Founded", value: "1975", icon: Calendar },
  { label: "Annual Capacity", value: "500,000+ MT", icon: TrendingUp },
  { label: "NSE SME Listed", value: "Oct 2023", icon: Award },
];

const BannerJourney = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-4"
        >
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>5 Decades of Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center tracking-tight mb-4"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">Journey</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 text-center max-w-2xl font-normal mb-10"
        >
          From humble beginnings in 1975 to becoming one of India's largest and most trusted salt refiners.
        </motion.p>

        {/* Hero Image with Glass Frame & Floating Stat Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/60 border border-gray-200/80 group"
        >
          <div className="relative w-full h-[250px] sm:h-[380px] md:h-[480px] lg:h-[540px]">
            <Image
              src="/Images/journey.jpg"
              alt="Our Journey"
              fill
              sizes="100vw"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Floating Key Stats inside Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Icon className="w-5 h-5 text-red-400 mb-1" />
                  <span className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs text-gray-300 font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BannerJourney;
