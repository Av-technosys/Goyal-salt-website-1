"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  ZoomIn,
  X,
  Award,
  Users,
  FileText,
} from "lucide-react";

const csrGalleryItems = [
  {
    img: "/Images/csr1.jpg",
    title: "Community Welfare & Support",
    category: "Social Outreach",
  },
  {
    img: "/Images/csr2.jpg",
    title: "Environmental & Green Initiatives",
    category: "Sustainability",
  },
  {
    img: "/Images/csr3.jpg",
    title: "Health & Nutrition Awareness",
    category: "Healthcare",
  },
  {
    img: "/Images/csr4.jpg",
    title: "Empowering Rural Communities",
    category: "Livelihood",
  },
  {
    img: "/Images/csr5.jpg",
    title: "Educational Assistance Drives",
    category: "Education",
  },
  {
    img: "/Images/csr6.jpg",
    title: "Inclusive Society Development",
    category: "Community Care",
  },
];

export default function Fromcsr() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="/Images/csr.jpg"
          alt="Corporate Social Responsibility"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-650/85 via-slate-700/75 to-red-650/80 backdrop-blur-[2px]" />
        
        {/* Ambient Glows */}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-red-300 mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Corporate Social Responsibility</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Empowering Communities, <br />
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Sustaining Futures
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Building an inclusive, environmentally responsible, and thriving society together.
          </p>
        </div>
      </div>

      {/* ===== INTRO CARDS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Intro Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-emerald-500 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Environmentally Responsible
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Goyal Salt is at the forefront of environmentally responsible
                practices. We create, deliver, and share value with our
                stakeholders—working towards a sustainable and inclusive society.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Sustainable Value Creation</span>
            </div>
          </motion.div>

          {/* Intro Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100 border-t-4 border-t-red-600 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Statutory CSR Governance
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Our CSR initiatives are aligned with Schedule VII of the Companies
                Act, 2013 and are monitored by a dedicated CSR Committee to ensure
                long-term social impact.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-red-700">
              <FileText className="w-4 h-4 text-red-600" />
              <span>Aligned with Companies Act, 2013</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ===== IMAGE GALLERY SECTION ===== */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-3 uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Community Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our CSR Initiatives <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">in Action</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Visual highlights of our social welfare, education, healthcare, and sustainability drives.
            </p>
            <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {csrGalleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(item.img)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative w-full h-[280px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-gray-900 shadow-md">
                    {item.category}
                  </span>

                  {/* Zoom Icon Overlay */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Title Box */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold drop-shadow-md group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== IMPACT BANNER ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 text-amber-300 border border-white/10">
              <HeartHandshake className="w-4 h-4" />
              <span>Social & Environmental Commitment</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Creating Sustainable Impact
            </h3>

            <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-medium">
              In a nutshell, we balance business success with social and
              environmental responsibility. Goyal Salt remains committed to
              supporting economically, socially, and physically challenged
              communities—empowering them towards sustainable livelihoods.
            </p>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/csr-document"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-red-600 text-white hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30"
              >
                <FileText className="w-4 h-4" />
                <span>View Statutory CSR Documents</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
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
              className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-red-600 flex items-center justify-center transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[60vh] sm:h-[70vh]">
                <Image
                  src={selectedImage}
                  alt="CSR Activity Full View"
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
