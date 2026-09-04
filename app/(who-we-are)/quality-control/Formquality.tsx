"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  Clock,
  BookOpenCheck,
  CheckCheck,
} from "lucide-react";

const licenses = [
  {
    title: "IS: 7224 for Iodised Salt from BIS",
    badge: "BIS Certification",
    category: "Edible Salt Standard",
  },
  {
    title: "IS: 16232 for Double Fortified Salt from BIS",
    badge: "BIS Certification",
    category: "Fortified Salt Standard",
  },
  {
    title: "FOSTAC – Food Safety Training & Certification (FSSAI)",
    badge: "FSSAI Training",
    category: "Food Safety",
  },
  {
    title: "ISO 22000:2018 Certification",
    badge: "ISO Standard",
    category: "Food Safety Management",
  },
  {
    title: "License under FSS Act, 2006 from FSSAI, New Delhi",
    badge: "FSSAI License",
    category: "Statutory License",
  },
];

export default function Formquality() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">

        {/* BREADCRUMB / BADGE */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-sm tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Purity, Hygiene & Testing Excellence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Quality <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Control</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Rigorous testing, automated monitoring, and certified standards at every stage of production.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* ================= HERO LABORATORY SECTION ================= */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white p-1.5 bg-gradient-to-tr from-emerald-500 via-amber-500 to-red-600 group">
                <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/Images/qualitylab.jpg"
                    alt="Quality Lab"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
                    <FlaskConical className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">In-House Testing Laboratory</h3>
                      <p className="text-xs text-gray-600">Qualified Chemists & Trained Technicians</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TEXT & SAMPLING HIGHLIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Uncompromising Purity</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-1">
                  World-Class Quality Testing Laboratory
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We have a well-equipped laboratory with qualified technicians and
                a team of highly trained chemists. They ensure round-the-clock
                monitoring of production quality to maintain consistent excellence.
              </p>

              {/* 15-minute Sampling Rule Callout */}
              <div className="relative border-l-4 border-amber-500 bg-amber-50/70 p-5 rounded-r-2xl border-y border-r border-amber-200/60 shadow-xs flex items-start gap-3.5">
                <Clock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">15-Minute Online Sampling Rule</h4>
                  <p className="mt-1 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    For quality testing purposes, random samples are drawn from various
                    points of the online production line every 15 minutes. Only after
                    meeting all quality parameters is a batch approved for packaging.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Our state-of-the-art, fully automated and highly technical plant is
                supported by a dedicated R&D team that continuously works towards
                improving product quality and customization for complete customer
                satisfaction.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ================= LICENSES & CERTIFICATIONS SECTION ================= */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Statutory Approvals</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Licenses & Certifications
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
              Officially recognized standards from Bureau of Indian Standards (BIS) and FSSAI
            </p>
            <div className="mt-3 w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                      <CheckCheck className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>{item.category}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= TRAINING NOTE BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Icon */}
          <BookOpenCheck className="absolute -bottom-6 -right-6 w-48 h-48 text-red-600/10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-amber-300 border border-white/10 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Food Safety Standards</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Continuous Training & Compliance
            </h4>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium pt-1">
              Our team regularly undergoes training and certification programs
              conducted by FSSAI and BIS to stay aligned with the latest food safety
              standards and best industry practices.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
