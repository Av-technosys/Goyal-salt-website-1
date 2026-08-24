"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ChevronRight, Sparkles } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  badgeTag: string;
}

const items: Milestone[] = [
  {
    year: "1975",
    title: "Joined Family Business",
    badgeTag: "The Legacy Begins",
    desc: "The family legacy began in 1975, late Mr. Kunj Bihari joined family business medical store at 15 years of age, marking the foundation of what would grow into a large-scale enterprise.",
  },
  {
    year: "1980",
    title: "New Medical Store",
    badgeTag: "Business Diversification",
    desc: "Diversification started with the opening of a medical store, reflecting the entrepreneurial spirit.",
  },
  {
    year: "1985",
    title: "First Iodised Salt Plant",
    badgeTag: "Salt Industry Pioneer",
    desc: "Started North India's first Iodised Salt plant under the name of “M/s Goyal Iodised Salt Works” at Nawa.",
  },
  {
    year: "2005",
    title: "Rajesh & Pramesh Joined",
    badgeTag: "Leadership Growth",
    desc: "Mr. Rajesh Goyal and Mr. Pramesh Goyal joined the business with new ideas and added strength to the Company.",
  },
  {
    year: "2009",
    title: "Salt Washery Established",
    badgeTag: "Infrastructure Milestone",
    desc: "Established Rajasthan's one of the largest Salt Washery.",
  },
  {
    year: "2010",
    title: "Lokesh Joined Business",
    badgeTag: "Next Gen Vision",
    desc: "Mr. Lokesh Goyal also joined the family business under the guidance of Mr. K B Goyal Ji and his brothers.",
  },
  {
    year: "2011",
    title: "Goyal Salt Pvt. Ltd.",
    badgeTag: "Corporate Incorporation",
    desc: "The foundation of M/s Goyal Salt Private Limited was set up and Triple Refined Free Flow Salt refinery was started with commercial production.",
  },
  {
    year: "2015",
    title: "Capacity 2.5 Lakh MT",
    badgeTag: "Scale Expansion",
    desc: "Increased the production capacity to 2,50,000 MT of refined salt per annum.",
  },
  {
    year: "2016",
    title: "Gujarat Expansion",
    badgeTag: "Interstate Growth",
    desc: "Promoters of GSL entered a new venture namely M/s Shree Shakambhar Chemfood Industries, Santhalpur, Gujarat, with a capacity of 2,50,000 MT per annum of refined salt.",
  },
  {
    year: "2023",
    title: "Phalodi Salt Refinery",
    badgeTag: "Capacity Addition",
    desc: "Promoters of GSL entered into another salt refinery venture at Phalodi, Rajasthan with a capacity of 100,000 MT per annum.",
  },
  {
    year: "2025",
    title: "India’s Largest Salt Refinery",
    badgeTag: "Mega Flagship Project",
    desc: "Launched India's largest Salt Refinery with an investment of Rs. 80 Crore at Chirai Moti, Gujarat.",
  },
];

const Formjourney = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Key Highlights of <span className="text-red-600">Our Growth</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Every step in our history represents dedication, quality refinement, and consumer trust.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* DESKTOP CENTER LINE & SCROLL TRACKER */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gray-100 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-600 via-rose-600 to-amber-500 rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* MOBILE LEFT LINE & SCROLL TRACKER */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-1 bg-gray-100 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-600 via-rose-600 to-amber-500 rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* MILESTONE ITEMS */}
          <div className="space-y-12 sm:space-y-16">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 * (index % 3) }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* DESKTOP TIMELINE CENTER YEAR NODE */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white font-extrabold text-xs shadow-lg shadow-red-600/30 flex items-center justify-center ring-4 ring-white transform hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                  </div>

                  {/* MOBILE TIMELINE LEFT NODE */}
                  <div className="md:hidden absolute left-5 -translate-x-1/2 z-20 top-6">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white font-extrabold text-[10px] shadow-md shadow-red-600/30 flex items-center justify-center ring-2 ring-white">
                      {item.year.slice(2)}
                    </div>
                  </div>

                  {/* CARD CONTAINER */}
                  <div
                    className={`w-full pl-12 md:pl-0 md:w-[46%] ${
                      isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    }`}
                  >
                    <div className="group relative p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200 transition-all duration-500">
                      
                      {/* Top Badge & Year Header */}
                      <div
                        className={`flex items-center gap-2 mb-3 flex-wrap ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="md:hidden text-xs font-bold text-red-600 px-2.5 py-0.5 rounded-md bg-red-50 border border-red-100">
                          Year {item.year}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 px-3 py-1 rounded-full bg-gray-100">
                          <Calendar className="w-3 h-3 text-red-500" />
                          {item.badgeTag}
                        </span>
                      </div>

                      {/* Content Header & Logo Icon */}
                      <div
                        className={`flex items-center gap-4 mb-3 ${
                          isEven ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 p-2 shrink-0 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                          <Image
                            src="/logo.png"
                            alt="Goyal Salt Logo"
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                        {item.desc}
                      </p>

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
};

export default Formjourney;
