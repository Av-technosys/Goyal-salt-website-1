"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Building2,
  Zap,
  Users,
  MapPin,
  TrendingUp,
  Award,
  Sun,
  ZoomIn,
  X,
  Factory,
} from "lucide-react";

export default function Frominfra() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stats = [
    { label: "Factory Units", value: "3+", icon: Factory, color: "text-red-600", bg: "bg-red-50" },
    { label: "Annual Capacity", value: "6,60,000 MT", icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Land Area", value: "700 Bighas", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Retail Presence", value: "5000+ Outlets", icon: Award, color: "text-teal-600", bg: "bg-teal-50" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:py-20 relative z-10">
        
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-sm tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Operational Scale & Facilities</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* IMAGE / LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white p-1.5 bg-gradient-to-tr from-red-600 via-amber-500 to-emerald-500 group">
              <div className="relative w-full h-[340px] sm:h-[450px] rounded-2xl overflow-hidden">
                <Image
                  src="/Images/infrastructure.png"
                  alt="Salt Infrastructure"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-red-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">State-of-the-Art Production Units</h3>
                      <p className="text-xs text-gray-600">Nawa City & Gandhidham Facilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TEXT / RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Investment in Infrastructure is the{" "}
              <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">
                Backbone of Growth
              </span>
            </h1>

            <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />

            <div className="relative border-l-4 border-red-600 bg-red-50/60 p-6 rounded-r-2xl border-y border-r border-red-100/80 shadow-xs">
              <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed">
                Investment in infrastructure is a long-term requirement for growth,
                stability, and sustainability of the company. It ensures smooth
                access to resources and uninterrupted production.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= DETAILED FACILITIES CONTENT ================= */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Strategic Production Premises & Infrastructure
            </h2>
            <p className="mt-3 text-base text-gray-600 font-medium">
              High-capacity refining, renewable solar energy, and dedicated operational manpower
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Premise Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-red-600 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Manufacturing Hub</span>
                    <h3 className="text-xl font-extrabold text-gray-900">Nawa City Units (Rajasthan)</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  Goyal Salt has three factory premises. Two units are located in
                  Nawa City—one for refined free-flow salt and another for refined
                  half-dry salt production. The half-dry unit covers 2 acres, while
                  the free-flow unit spans 13 acres.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-lg border border-red-200/60">Free-Flow Unit (13 Acres)</span>
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-lg border border-red-200/60">Half-Dry Unit (2 Acres)</span>
              </div>
            </motion.div>

            {/* Premise Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-amber-500 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">High Capacity Expansion</span>
                    <h3 className="text-xl font-extrabold text-gray-900">Gandhidham Unit III (Gujarat)</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  Unit III is located in Gandhidham near Kutch, spread across 12 acres,
                  with a production capacity of <strong className="text-gray-900">4,50,000 MT per annum</strong>.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-lg border border-amber-200/60">12 Acres Land Area</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-lg border border-amber-200/60">4,50,000 MT/Yr Capacity</span>
              </div>
            </motion.div>

            {/* Premise Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-emerald-500 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Storage & Renewable Energy</span>
                    <h3 className="text-xl font-extrabold text-gray-900">Power & Solar Energy Infrastructure</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  The company also operates spacious go-downs for raw salt and finished
                  products, four silent diesel generator sets, separate labour
                  quarters, and a <strong className="text-gray-900">1000 KVA solar plant</strong>. Another 2000 KVA
                  solar plant is planned for Gandhidham.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200/60">1000 KVA Solar Plant</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200/60">4 Silent DG Sets</span>
              </div>
            </motion.div>

            {/* Premise Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-teal-600 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-600 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Human Capital</span>
                    <h3 className="text-xl font-extrabold text-gray-900">Dedicated Workforce Asset</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  Manpower remains our strongest asset, with dedicated teams across
                  quality control, production, R&D, maintenance, finance, and
                  operations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                <span className="px-3 py-1 bg-teal-50 text-teal-800 rounded-lg border border-teal-200/60">Quality Control & R&D</span>
                <span className="px-3 py-1 bg-teal-50 text-teal-800 rounded-lg border border-teal-200/60">Production & Operations</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div key={i} className="pt-4 md:pt-0 px-4">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-amber-400 mb-4 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-300 font-medium">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Infrastructure Facilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
              Explore our modern refining plants, storage premises, and tech infrastructure
            </p>
            <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            {["/Images/infra1.png"].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(img)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white bg-white"
              >
                <div className="relative w-full h-[320px] sm:h-[450px]">
                  <Image
                    src={img}
                    alt="Infrastructure Facility"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Zoom Indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold text-lg">Click to View High-Resolution Facility View</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== LIGHTBOX MODAL PREVIEW ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/20"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-red-600 flex items-center justify-center transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[65vh] sm:h-[75vh]">
                <Image
                  src={selectedImage}
                  alt="Infrastructure Full View"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}