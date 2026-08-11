"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  X
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  weight: string;
  description: string;
  highlights: string[];
  gradient: string;
  glow: string;
  badgeStyle: string;
  btnStyle: string;
  accentBorder: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Meduplus Salt",
    subtitle: "Double Fortified Protection",
    image: "/Images/mediplus-copy.png",
    badge: "Double Fortified",
    weight: "1 kg Pack",
    description: "Formulated with both Iron & Iodine to fight anemia and support cognitive health for growing families across India.",
    highlights: ["Iron & Iodine Enriched", "Anti-Caking Free Flow", "FSSAI Quality Certified"],
    gradient: "from-red-500/10 via-rose-500/5 to-transparent",
    glow: "rgba(239, 68, 68, 0.25)",
    badgeStyle: "bg-red-100/90 text-red-700 border-red-200",
    btnStyle: "bg-red-600 hover:bg-red-700 text-white shadow-red-500/20",
    accentBorder: "group-hover:border-red-300"
  },
  {
    id: 2,
    name: "Goyal Fortuner Salt",
    subtitle: "Refined Iodised Excellence",
    image: "/Images/fortuner-salt.png",
    badge: "Free Flow",
    weight: "1 kg Pack",
    description: "Ultra-pure, fine-grain iodised salt processed for fast solubility and pure, consistent taste in every meal.",
    highlights: ["100% Vacuum Evaporated", "Optimal Iodine Level", "Free Flowing Granules"],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    glow: "rgba(16, 185, 129, 0.25)",
    badgeStyle: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    btnStyle: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20",
    accentBorder: "group-hover:border-emerald-300"
  },
  {
    id: 3,
    name: "Goyal Pure Iodised Salt",
    subtitle: "India's Household Trust",
    image: "/Images/goyalsalt.png",
    badge: "Household Favorite",
    weight: "1 kg Pack",
    description: "The classic household essential. Hygienically refined to preserve purity, essential minerals, and vital iodine.",
    highlights: ["Daily lodine Nutrition", "Non-Clumping Quality", "Purity Standard Tested"],
    gradient: "from-red-500/10 via-rose-500/5 to-transparent",
    glow: "rgba(239, 68, 68, 0.25)",
    badgeStyle: "bg-red-100/90 text-red-700 border-red-200",
    btnStyle: "bg-red-600 hover:bg-red-700 text-white shadow-red-500/20",
    accentBorder: "group-hover:border-red-300"
  },
  {
    id: 4,
    name: "Goyal Gold Salt",
    subtitle: "Triple Refined Gourmet",
    image: "/Images/goyalgold.png",
    badge: "Triple Refined",
    weight: "1 kg Pack",
    description: "Premium selection refined 3x for pristine whiteness, quick dissolution, and balanced saltiness for top kitchens.",
    highlights: ["Triple Refined Purity", "Gourmet Crystal Finish", "Extra Fine Texture"],
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    glow: "rgba(245, 158, 11, 0.25)",
    badgeStyle: "bg-amber-100/90 text-amber-800 border-amber-200",
    btnStyle: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20",
    accentBorder: "group-hover:border-amber-300"
  },
  {
    id: 5,
    name: "Goyal Premium Salt",
    subtitle: "Ultra Pure Vacuum Evaporated",
    image: "/Images/Goyal Premium.webp",
    badge: "Ultra Pure",
    weight: "1 kg Pack",
    description: "Manufactured using advanced vacuum evaporation technology for unmatched clarity and pure mineral taste.",
    highlights: ["Vacuum Processed", "Zero Impurities", "Rich Micro Minerals"],
    gradient: "from-red-500/10 via-rose-500/5 to-transparent",
    glow: "rgba(239, 68, 68, 0.25)",
    badgeStyle: "bg-red-100/90 text-red-700 border-red-200",
    btnStyle: "bg-red-600 hover:bg-red-700 text-white shadow-red-500/20",
    accentBorder: "group-hover:border-red-300"
  },
  {
    id: 6,
    name: "Goyal Himalayan Pink Salt",
    subtitle: "100% Natural Rock Salt",
    image: "/Images/goyal-pink.png",
    badge: "84 Trace Minerals",
    weight: "1 kg / 500g",
    description: "Hand-mined ancient mineral salt packed with natural pink crystals, supporting metabolic balance and digestion.",
    highlights: ["84 Natural Minerals", "Unrefined & Raw", "Low Sodium Balance"],
    gradient: "from-rose-500/10 via-pink-400/5 to-transparent",
    glow: "rgba(244, 63, 94, 0.25)",
    badgeStyle: "bg-rose-100/90 text-rose-800 border-rose-200",
    btnStyle: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20",
    accentBorder: "group-hover:border-rose-300"
  },
  {
    id: 7,
    name: "Goyal Ayurvedic Black Salt",
    subtitle: "Digestive & Health Care",
    image: "/Images/goyal-black-salt.png",
    badge: "Ayurvedic Care",
    weight: "500g Pack",
    description: "Traditional volcanic black salt (Kala Namak) rich in iron and sulfur minerals, ideal for digestive wellness.",
    highlights: ["Ayurvedic Formula", "Enhances Digestion", "Distinct Tangy Taste"],
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    glow: "rgba(168, 85, 247, 0.25)",
    badgeStyle: "bg-purple-100/90 text-purple-800 border-purple-200",
    btnStyle: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20",
    accentBorder: "group-hover:border-purple-300"
  }
];

export default function ProductCarousel() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check accessibility reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // GSAP ScrollTrigger Pinned Horizontal Row Animation
  useLayoutEffect(() => {
    if (isReducedMotion || typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const rowWidth = row.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(rowWidth - viewportWidth + (window.innerWidth < 640 ? 32 : 80));
      };

      gsap.to(row, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(1200, Math.abs(getScrollAmount()) * 1.1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, section);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [isReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden flex flex-col justify-between py-10 sm:py-12 lg:py-14 select-none"
    >
      {/* Warm Ambient Red & Rose Lighting Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-red-100/40 via-rose-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-red-50/40 to-amber-50/30 blur-3xl pointer-events-none rounded-full" />

      {/* ==================================================== */}
      {/* 1. HEADER SECTION (Exact Original Title & Desc)      */}
      {/* ==================================================== */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-3">
            <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Pure & Unmatched Quality
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
            Our <span className="text-red-600 font-extrabold">Premium Products</span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl">
            Crafted with ultimate purity, trusted by millions of households and top industries across India.
          </p>
        </div>
      </div>

      {/* ==================================================== */}
      {/* 2. GSAP SCROLL-HIJACKED HORIZONTAL PRODUCT ROW       */}
      {/* ==================================================== */}
      <div className="w-full flex-1 flex items-center overflow-hidden my-auto py-3">
        <div
          ref={rowRef}
          className={`flex items-stretch gap-6 sm:gap-8 pl-4 sm:pl-8 lg:pl-16 pr-8 sm:pr-20 w-max ${
            isReducedMotion ? "overflow-x-auto w-full snap-x pb-4" : ""
          }`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`
                group relative flex flex-col justify-between
                w-[280px] sm:w-[330px] md:w-[350px] h-[480px] sm:h-[500px] shrink-0
                rounded-3xl bg-white/95 backdrop-blur-xl
                border border-gray-200/80 shadow-xl hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 overflow-hidden cursor-pointer
                ${isReducedMotion ? "snap-center" : ""}
              `}
            >
              {/* Ambient Radial Background Glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${product.gradient} opacity-90 transition-opacity duration-500`} 
              />

              {/* Top Bar: Badge & Weight */}
              <div className="relative z-10 flex items-center justify-between p-5 sm:p-6 pb-0">
                <span className={`px-3 py-1 text-xs font-bold rounded-full border shadow-2xs ${product.badgeStyle}`}>
                  {product.badge}
                </span>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gray-200/60">
                  {product.weight}
                </span>
              </div>

              {/* Product Image Area */}
              <div className="relative z-10 flex-1 flex items-center justify-center p-3 my-1">
                <div 
                  className="absolute w-40 h-40 rounded-full blur-2xl transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: product.glow }}
                />

                <div className="relative w-40 h-44 sm:w-44 sm:h-48 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 180px, 220px"
                    className="object-contain drop-shadow-xl transition-all duration-500 group-hover:drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Bottom Info Section with Guaranteed Safe Spacing */}
              <div className="relative z-10 px-5 sm:px-6 pt-3 pb-5 sm:pb-6 bg-gradient-to-t from-white via-white/95 to-transparent border-t border-gray-100 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-red-600 tracking-wide uppercase block mb-1">
                    {product.subtitle}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors min-h-[50px] sm:min-h-[54px] flex items-center">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-2.5 pt-2.5 flex items-center justify-between border-t border-gray-100">
                  <span className="inline-flex items-center text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                    Product Details
                  </span>
                  
                  <div className={`p-2 rounded-full ${product.btnStyle} transition-all duration-300 transform group-hover:translate-x-1`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================== */}
      {/* 3. PRODUCT DETAIL MODAL (Click to Inquire)           */}
      {/* ==================================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Product Image Header */}
                <div className={`relative p-8 flex items-center justify-center bg-gradient-to-b ${selectedProduct.gradient} border-b md:border-b-0 md:border-r border-gray-100`}>
                  <div className="relative w-56 h-64">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border mb-3 ${selectedProduct.badgeStyle}`}>
                      {selectedProduct.badge}
                    </span>

                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-0.5">
                      {selectedProduct.subtitle}
                    </p>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed font-normal">
                      {selectedProduct.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-4 space-y-2">
                      <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                        Key Features:
                      </p>
                      {selectedProduct.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold text-gray-500">
                      Pack Size: <span className="text-gray-900 font-bold">{selectedProduct.weight}</span>
                    </div>

                    <a
                      href="/contact"
                      onClick={() => setSelectedProduct(null)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all duration-200 ${selectedProduct.btnStyle} flex items-center gap-2 cursor-pointer`}
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
