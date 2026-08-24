"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Trophy, TrendingUp, Star, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface Achievement {
  title: string;
  badge: string;
  badgeColor: string;
  badgeGradient: string;
  icon: React.ElementType;
  date: string;
  image: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Listed on NSE – SME Platform",
    badge: "Corporate Milestone",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeGradient: "from-emerald-500 to-teal-600",
    icon: TrendingUp,
    date: "October 11, 2023",
    image: "/Images/Our-achievement1.png",
    description:
      "On October 11, 2023, Goyal Salt Limited achieved a major corporate milestone by getting listed on the SME Emerge Platform of NSE, the largest stock exchange of India. This listing reflects our transparent governance, financial strength, and long-term growth vision.",
  },
  {
    title: "Rajasthan Radiance Award 2023",
    badge: "Industry Recognition",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    badgeGradient: "from-amber-500 to-yellow-600",
    icon: Trophy,
    date: "Year 2023",
    image: "/Images/Our-achievement2.jpg",
    description:
      "In the same year, Goyal Salt Limited was honored with the prestigious “Rajasthan Radiance Award 2023” for excellence in the category of Salt Manufacturing, recognizing our commitment to quality, innovation, and operational excellence.",
  },
  {
    title: "Most Trusted Salt Manufacturer in India – 2024",
    badge: "National Honor",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    badgeGradient: "from-red-600 to-rose-700",
    icon: ShieldCheck,
    date: "September 28, 2024",
    image: "/Images/infrastructure.png",
    description:
      "Recently, Goyal Salt Limited was honored with the prestigious “Most Trusted Salt Manufacturer in India Award” at the National Quality Awards 2024, held on 28th September 2024 in New Delhi. This award reflects the trust millions of consumers place in our brand.",
  },
  {
    title: "National Quality Award – 2024 Ceremony",
    badge: "Award Ceremony",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    badgeGradient: "from-purple-600 to-indigo-600",
    icon: Award,
    date: "Year 2024",
    image: "/Images/Our-achievement3.jpg",
    description:
      "At the National Quality Awards 2024 ceremony, Goyal Salt Limited was recognized on a national platform for its excellence, reliability, and contribution to India’s salt manufacturing industry. This moment marks another proud milestone in our journey of trust and leadership.",
  },
];

const highlights = [
  { value: "NSE SME", label: "Publicly Listed", icon: TrendingUp },
  { value: "2024", label: "National Quality Award", icon: Trophy },
  { value: "100%", label: "Purity & Trust", icon: ShieldCheck },
  { value: "Top Tier", label: "Indian Manufacturer", icon: Star },
];

export default function AchievementsShowcase() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>Excellence & Recognition</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">Achievements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
          >
            Celebrating major corporate milestones, national honors, and industry recognitions that define our legacy of trust and leadership.
          </motion.p>
        </div>

        {/* HIGHLIGHT STATS RIBBON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-xl shadow-gray-200/50"
        >
          {highlights.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-red-50/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-md shadow-red-500/20 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium mt-1">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* ACHIEVEMENTS CARDS SHOWCASE */}
        <div className="space-y-16 sm:space-y-24">
          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200/80 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200/80 transition-all duration-500`}
              >
                {/* IMAGE CONTAINER */}
                <div
                  className={`lg:col-span-6 relative w-full h-[280px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={index === 0}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Floating Date Badge on Image */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.badgeGradient} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
