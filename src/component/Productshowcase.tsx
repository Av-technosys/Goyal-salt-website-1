"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Mountain, 
  Droplets, 
  Flame, 
  ShieldCheck, 
  HeartPulse, 
  Gem 
} from "lucide-react";
import SaltButton from "./SaltButton";

const features = [
  {
    num: "01",
    title: "Healthy Rock Salt",
    desc: "Naturally sourced and mineral-rich, supporting digestion and immunity.",
    href: "/products",
    icon: Mountain,
  },
  {
    num: "02",
    title: "Refined Iodised Salt",
    desc: "Free-flowing, double-purified salt for balanced thyroid health.",
    href: "/products",
    icon: Droplets,
  },
  {
    num: "03",
    title: "Black Salt",
    desc: "Tangy Indian favourite aiding metabolism and gut health.",
    href: "/products",
    icon: Flame,
  },
  {
    num: "04",
    title: "Double Fortified Salt",
    desc: "Infused with iron & iodine to combat anemia.",
    href: "/products",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Salt for Wellness & Care",
    desc: "Curated for wellness-focused and low-sodium diets.",
    href: "/products",
    icon: HeartPulse,
  },
  {
    num: "06",
    title: "Natural Himalayan Salt",
    desc: "Harvested from Himalayas with 84+ trace minerals.",
    href: "/products",
    icon: Gem,
  },
];

export default function SaltProductsShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-gray-100">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[900px] h-[500px] bg-gradient-to-tr from-red-500/5 via-rose-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-400/5 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 shadow-2xs mb-4"
          >
            <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Household Nutrition
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug max-w-3xl mx-auto"
          >
            Pure & Healthier <span className="text-red-600 font-extrabold">Salt Products</span> for Every Home
          </motion.h2>
        </div>

        {/* 3-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* LEFT 3 FEATURES (Desktop: 4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            {features.slice(0, 3).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-red-50/40 border border-gray-200/80 hover:border-red-200 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge & Icon Avatar */}
                    <div className="flex flex-col items-center gap-1.5 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-red-600 transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                      
                      <div className="mt-4">
                        <Link href={item.href}>
                          <SaltButton variant="outline" size="sm">
                            <span>Know More</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </SaltButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER PRODUCT SHOWCASE PEDESTAL (Desktop: 4 cols) */}
          <div className="lg:col-span-4 flex justify-center my-6 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm flex flex-col items-center"
            >
              {/* Center Ambient Glow */}
              <div className="absolute w-72 h-72 sm:w-88 sm:h-88 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Glassmorphic Container */}
              <div className="relative w-full p-6 sm:p-8 bg-gradient-to-b from-white/95 via-white/90 to-gray-50/90 rounded-3xl border border-red-100 shadow-2xl backdrop-blur-md flex flex-col items-center">
                
                {/* Floating Salt Products Image with Float Animation */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center"
                >
                  <Image
                    src="/Images/Untitled-5-scaled.png"
                    alt="Goyal Salt Products"
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </motion.div>

                {/* Pedestal Bottom Shadow Ring */}
                <div className="w-48 h-3 bg-red-900/10 rounded-full blur-md mt-2" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT 3 FEATURES (Desktop: 4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            {features.slice(3).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-red-50/40 border border-gray-200/80 hover:border-red-200 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge & Icon Avatar */}
                    <div className="flex flex-col items-center gap-1.5 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-red-600 transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                      
                      <div className="mt-4">
                        <Link href={item.href}>
                          <SaltButton variant="outline" size="sm">
                            <span>Know More</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </SaltButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
