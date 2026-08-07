"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes Goyal Salt different from regular table salt?",
    answer:
      "Goyal Salt is carefully refined and processed to retain essential minerals while eliminating impurities. Our range includes rock salt, black salt, iodised salt, and double-fortified options for various health needs.",
  },
  {
    question: "Is your salt iodised?",
    answer:
      "Yes, most of our salt products are iodised to support thyroid health. We also offer rock salt and black salt for natural, uniodised alternatives.",
  },
  {
    question: "Is Goyal Salt suitable for daily cooking?",
    answer:
      "Absolutely. Our refined salts are free-flowing, moisture-resistant, and ideal for everyday use in all types of dishes.",
  },
  {
    question: "Where is your salt sourced from?",
    answer:
      "Our salts are mined and processed from trusted sources across India, including natural rock salt from the Himalayan range and black salt from mineral-rich regions.",
  },
];

export default function SaltFaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100">
            <Image
              src="/Images/infrastructure.png"
              alt="Salt Processing"
              width={700}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* EXPERIENCE BADGE */}
          <div className="absolute top-6 left-6 bg-red-600 text-white rounded-2xl px-6 py-4 shadow-xl border border-red-500">
            <p className="text-3xl font-extrabold leading-none">14+</p>
            <p className="text-xs font-semibold mt-1 tracking-wider uppercase opacity-95">Years Experience</p>
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          {/* Category Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-4">
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Got Questions?
            </span>
          </div>

          {/* Heading (Rule #6 Typography Scale) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 tracking-tight leading-snug">
            Common Questions About <br className="hidden sm:block" />
            Salt Processing & Usage
          </h2>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/70 overflow-hidden transition-colors hover:border-red-200"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-4.5 text-left font-bold text-sm sm:text-base text-gray-900 hover:bg-red-50/50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-red-600" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {/* ANSWER (Animated) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
