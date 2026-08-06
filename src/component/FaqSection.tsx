"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-xl">
            <Image
              src="/Images/infrastructure.png"
              alt="Salt Processing"
              width={700}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* EXPERIENCE BADGE */}
          <div className="absolute top-6 left-6 bg-orange-500 text-white rounded-xl px-6 py-4 shadow-lg">
            <p className="text-3xl font-bold leading-none">14+</p>
            <p className="text-sm font-medium mt-1">Years Experience</p>
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h2 className="text-2xl sm:text-4xl  text-gray-900 mb-8">
            Common Questions About <br className="hidden sm:block" />
            Salt Processing & Usage
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-100 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-500" : ""
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
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
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
