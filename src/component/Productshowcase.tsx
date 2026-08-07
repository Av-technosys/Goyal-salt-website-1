"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SaltButton from "./SaltButton";

const features = [
  {
    title: "Healthy Rock Salt",
    desc: "Naturally sourced and mineral-rich, supporting digestion and immunity.",
    href: "/products",
  },
  {
    title: "Refined Iodised Salt",
    desc: "Free-flowing, double-purified salt for balanced thyroid health.",
    href: "/products",
  },
  {
    title: "Black Salt",
    desc: "Tangy Indian favourite aiding metabolism and gut health.",
    href: "/products",
  },
  {
    title: "Double Fortified Salt",
    desc: "Infused with iron & iodine to combat anemia.",
    href: "/products",
  },
  {
    title: "Salt for Wellness & Care",
    desc: "Curated for wellness-focused and low-sodium diets.",
    href: "/products",
  },
  {
    title: "Natural Himalayan Salt",
    desc: "Harvested from Himalayas with 84+ trace minerals.",
    href: "/products",
  },
];

export default function SaltProductsShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading Section (Rule #6 Typography Scale) */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-3">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Household Nutrition
            </span>
          </div>

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

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-10">
            {features.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 shadow-xs"
              >
                <h4 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="mt-4">
                  <Link href={item.href}>
                    <SaltButton variant="outline" size="sm">
                      <span>Know More</span>
                      <ArrowRight size={14} />
                    </SaltButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER PRODUCT WITH GLASSMORPHIC CARD & RED AMBIENT GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center py-6"
          >
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-6 sm:p-8 bg-gradient-to-b from-gray-50/80 to-white/90 rounded-3xl border border-red-100 shadow-xl backdrop-blur-md">
              <Image
                src="/Images/Untitled-5-scaled.png"
                alt="Goyal Salt Products"
                width={400}
                height={400}
                className="relative z-10 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10 text-left lg:text-right">
            {features.slice(3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 shadow-xs"
              >
                <h4 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="mt-4 flex justify-start lg:justify-end">
                  <Link href={item.href}>
                    <SaltButton variant="outline" size="sm">
                      <span>Know More</span>
                      <ArrowRight size={14} />
                    </SaltButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
