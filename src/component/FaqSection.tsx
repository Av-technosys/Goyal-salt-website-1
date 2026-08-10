"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    num: "01",
    question: "What makes Goyal Salt different from regular table salt?",
    answer:
      "Goyal Salt is carefully refined and processed to retain essential minerals while eliminating impurities. Our range includes rock salt, black salt, iodised salt, and double-fortified options for various health needs.",
  },
  {
    num: "02",
    question: "Is your salt iodised?",
    answer:
      "Yes, most of our salt products are iodised to support thyroid health. We also offer rock salt and black salt for natural, uniodised alternatives.",
  },
  {
    num: "03",
    question: "Is Goyal Salt suitable for daily cooking?",
    answer:
      "Absolutely. Our refined salts are free-flowing, moisture-resistant, and ideal for everyday use in all types of dishes.",
  },
  {
    num: "04",
    question: "Where is your salt sourced from?",
    answer:
      "Our salts are mined and processed from trusted sources across India, including natural rock salt from the Himalayan range and black salt from mineral-rich regions.",
  },
];

export default function SaltFaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden border-t border-gray-100">
      
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Decorative Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE SHOWCASE (Desktop: 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            {/* Ambient Red Glow Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-3xl bg-white p-2.5 sm:p-3 border border-gray-200/80 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/4.2]">
                <Image
                  src="/Images/infrastructure.png"
                  alt="Salt Processing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* FLOATING EXPERIENCE BADGE (Top Left) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6 bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl p-4 sm:p-5 shadow-xl shadow-red-600/25 border border-red-400/40 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <Sparkles className="w-4 h-4 text-red-200 animate-pulse" />
                  <p className="text-2xl sm:text-3xl font-black leading-none">14+</p>
                </div>
                <p className="text-[11px] font-bold tracking-wider uppercase opacity-90 text-red-50">
                  Years Experience
                </p>
              </motion.div>

              {/* FLOATING QUALITY BADGE (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-200/80 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Advanced Plant</p>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">Automated Processing</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT FAQ ACCORDION (Desktop: 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* Category Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-4">
              <HelpCircle className="w-4 h-4 text-red-600" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
                Got Questions?
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 tracking-tight leading-snug">
              Common Questions About <br className="hidden sm:block" />
              <span className="text-red-600 font-extrabold">Salt Processing & Usage</span>
            </h2>

            {/* Accordion List */}
            <div className="space-y-3.5 sm:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`
                      rounded-2xl transition-all duration-300 overflow-hidden border
                      ${isOpen 
                        ? "bg-white border-red-300 shadow-lg shadow-red-500/5 ring-1 ring-red-400/20" 
                        : "bg-white/90 hover:bg-white border-gray-200/80 hover:border-red-200 hover:shadow-md"}
                    `}
                  >
                    {/* QUESTION BUTTON */}
                    <button
                      onClick={() => setActive(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-4.5 sm:p-5 text-left transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Number Badge */}
                        <span className={`
                          text-xs font-extrabold px-2.5 py-1 rounded-lg shrink-0 transition-colors
                          ${isOpen ? "bg-red-600 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-red-600"}
                        `}>
                          {faq.num}
                        </span>

                        <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? "text-red-600" : "text-gray-900 group-hover:text-red-600"}`}>
                          {faq.question}
                        </span>
                      </div>

                      {/* Icon Indicator */}
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                        ${isOpen ? "bg-red-50 text-red-600 rotate-180" : "bg-gray-100/80 text-gray-400 group-hover:bg-red-50 group-hover:text-red-600"}
                      `}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* ANSWER ACCORDION (Animated) */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100 pt-3.5 pl-14 sm:pl-16">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
