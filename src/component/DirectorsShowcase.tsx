"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, GraduationCap, Briefcase, X, Sparkles, UserCheck, ArrowRight } from "lucide-react";

interface Director {
  id: string;
  name: string;
  role: string;
  category: "executive" | "independent" | "non-executive";
  image: string;
  highlights: string[];
  description: string;
}

const directorsData: Director[] = [
  {
    id: "rajesh-goyal",
    name: "Rajesh Goyal",
    role: "Chairman & Whole Time Director",
    category: "executive",
    image: "/Images/rajesh.jpg",
    highlights: ["Master's in Accountancy", "20+ Yrs Salt Industry Exp.", "North India's 1st Iodised Plant Pioneer"],
    description:
      "He is the Chairman and Whole Time Director of the Company. He holds a Master’s degree in Accountancy from Rajasthan University and has over 20 years of experience in the salt industry. He has closely observed the salt industry over the years and played a key role in establishing India’s first washed salt iodised plant in North India. Under his leadership, multiple high-capacity plants were established to cater to the pan-India salt market.",
  },
  {
    id: "pramesh-goyal",
    name: "Pramesh Goyal",
    role: "Managing Director",
    category: "executive",
    image: "/Images/pramesh.jpg",
    highlights: ["20+ Yrs Industry Leadership", "Market & Operational Master", "Capacity Expansion Strategist"],
    description:
      "He is the Managing Director of Goyal Salt Limited. A dynamic leader with over 20 years of experience, he joined the family business early and mastered the salt industry’s operational and market dynamics. He has led multiple capacity expansions and played a crucial role in strengthening the company’s presence across India.",
  },
  {
    id: "lokesh-goyal",
    name: "Lokesh Goyal",
    role: "Whole Time Director",
    category: "executive",
    image: "/Images/lokesh.jpg",
    highlights: ["BBA (Pune) & MBA (RTU)", "15+ Yrs Industry Exp.", "Product Innovation & Trade Control"],
    description:
      "He is Whole Time Director of Goyal Salt Limited. He is a young and dynamic person who is always ready to take challenge & innovation technology. Completed his bachelor degree form Pune in Business Administration and then Master in Business Management & Marketing form Rajasthan Technical University. He Joined Goyal Salt in 2010 and was redesignated as Whole-Time Director in 2023. he has an experience of over 15 years in the salt industry. He has good control of man power & salt trade. He has a team of experienced employees and qualified technicians. He focuses & invests time in product development & innovation for customer satisfaction.",
  },
  {
    id: "priyanka-goyal",
    name: "Priyanka Goyal",
    role: "Non-Executive Director",
    category: "non-executive",
    image: "/Images/priyanka.jpg",
    highlights: ["Master's Degree (Univ of Raj)", "14+ Yrs Salt Business Exp.", "Board Member Since 2023"],
    description:
      "She is the Non-Executive Director of the Company. She holds Master’s degree from the University of Rajasthan. She is engaged in the salt business for more than 14 years.In 2023, She has joined theBoard as a Non-Executive Director.",
  },
  {
    id: "narendra-dev-garg",
    name: "Narendra Dev Garg",
    role: "Independent Director",
    category: "independent",
    image: "/Images/narendra.jpg",
    highlights: ["40+ Yrs Banking Veteran", "CAIIB Certified", "Start-up Advisor & IBPS Panelist"],
    description:
      "Mr. Narendra Dev Garg is an Independent Director of the Company. He is presently working as General Manager (Commercial) in M/s Mahavir Polymers Private Limited. He is a seasoned banker having over 40 years of work experience in almost every Banking Segment. Besides this, he is a Certified Associate of Indian Institute of Bankers (CAIIB), Advisor to various start-ups and is on panel of interview Board of IBPS. He is a person having entrepreneurial mind set with consistent result oriented high performance. He joined the Board on March 22, 2024.",
  },
  {
    id: "manisha-godara",
    name: "Manisha Godara",
    role: "Independent Director",
    category: "independent",
    image: "/Images/manisha.jpg",
    highlights: ["AIR 23 CS Foundation Ranker", "ICSI Professional Member", "M.Com & Merit Holder"],
    description:
      "She is an Independent Director of the Company. She got 23rd All India Rank (AIR) in Company Secretaries Foundation Examination. She is Professional Member of Institute of Company Secretaries of India (ICSI) and practicing since 2014 in the name as “Manisha Godara & Associates”. She is a merit holder in All India Commerce Talent Search Examination. She holds Masters’ degree in Commerce from Rajasthan University and completed Bachelor of Commerce from Maharani College, Jaipur. She scored 94% in Rajasthan State Certificate Course in Information Technology. She joined the Company in 2023.",
  },
];

export default function DirectorsShowcase() {
  const [activeFilter, setActiveFilter] = useState<"all" | "executive" | "independent">("all");
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  const filteredDirectors = directorsData.filter((director) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "executive") return director.category === "executive";
    if (activeFilter === "independent") return director.category === "independent" || director.category === "non-executive";
    return true;
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 overflow-hidden">
      {/* Background Soft Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>Corporate Governance & Vision</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Board of <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">Directors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            Seasoned industry pioneers, business leaders, and governance experts guiding Goyal Salt Limited towards sustainable long-term growth.
          </motion.p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100/90 backdrop-blur-md border border-gray-200 shadow-inner">
            {[
              { id: "all", label: "All Board Members" },
              { id: "executive", label: "Executive Leadership" },
              { id: "independent", label: "Independent & Non-Executive" },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-red-600 shadow-md shadow-gray-200"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* DIRECTORS GRID SHOWCASE */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDirectors.map((director, index) => {
              const isExec = director.category === "executive";

              return (
                <motion.div
                  key={director.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative flex flex-col rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200 transition-all duration-500 overflow-hidden"
                >
                  {/* Top Image Container */}
                  <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Gradient Fade to Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Role Pill on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-md backdrop-blur-md ${
                        isExec
                          ? "bg-red-600/90 text-white border-red-400/30"
                          : "bg-gray-900/80 text-amber-300 border-white/20"
                      }`}>
                        {director.role}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1.5 tracking-tight">
                        {director.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-col justify-between flex-1 p-6 sm:p-7">
                    
                    {/* Key Highlights Badges */}
                    <div className="space-y-2 mb-6">
                      {director.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span className="truncate">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bio Snippet */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 font-normal">
                      {director.description}
                    </p>

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedDirector(director)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md group-hover:shadow-red-600/20"
                    >
                      <span>Read Full Biography</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* FULL BIOGRAPHY MODAL DIALOG */}
      <AnimatePresence>
        {selectedDirector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDirector(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center gap-6">
                <button
                  onClick={() => setSelectedDirector(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-white/30 shadow-lg">
                  <Image
                    src={selectedDirector.image}
                    alt={selectedDirector.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white mb-1">
                    {selectedDirector.role}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {selectedDirector.name}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3">Key Qualifications & Credentials</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDirector.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Full Profile & Experience</h4>
                  <p className="text-gray-700 text-base leading-relaxed font-normal whitespace-pre-line">
                    {selectedDirector.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
