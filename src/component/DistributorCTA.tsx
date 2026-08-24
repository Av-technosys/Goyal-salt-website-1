/*
 * ==============================================================================
 * COMPONENT: Become Our Distributor Hero Banner (Restored to Previous Version)
 * ------------------------------------------------------------------------------
 * Snack-brand style interactive hero banner featuring:
 * - Scalloped / Ticket-style decorative inset border with curved cut-out notches
 * - Bold saturated background color (customizable via CSS variables)
 * - Highlighter/marker style typography on heading
 * - Claw machine crane picking up the hero Goyal Salt packet (animated bob & sway)
 * - Stacked product bags scattered in the bottom-right prize bin
 *
 * HOW TO TOGGLE THE CLAW ANIMATION:
 * 1. Pass `enableClawAnimation={false}` as a prop to <DistributorCTASection />
 *    OR remove the `claw-animate` CSS class in the hero container.
 *
 * HOW TO SWAP THE HERO PRODUCT:
 * - Update the `HERO_PRODUCT_IMAGE` constant below to any image from /Images/
 * ==============================================================================
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// ==========================================
// CONFIGURATION CONSTANTS (Easily Editable)
// ==========================================
const CONFIG = {
  // Colors
  bgColor: "#FFD43B", // Bright yellow brand color
  bgGradient: "linear-gradient(135deg, #FFE45C 0%, #FFD43B 46%, #F4B400 100%)",
  
  // Text Content
  badgeText: "DISTRIBUTION PARTNERSHIP",
  headingLine1: "Become Our",
  headingLine2: "Distributor",
  description:
    "Join the Goyal Salt family and deliver unmatched purity, iodised excellence, and health to millions of kitchens across India. Enjoy high profit margins, PAN-India supply stability, and dedicated trade support.",
  
  // Perks / Trust Points
  perks: [
    "High Profit Margins",
    "PAN-India Supply Network",
    "Comprehensive Brand Support"
  ],

  // Call To Action
  ctaText: "Apply For Distributorship",
  ctaHref: "/contact",

  // Image Assets (Sourced directly from ProductSlider)
  heroProduct: {
    name: "Goyal Pure Iodised Salt",
    src: "/Images/goyalsalt.png", // Main hero product suspended by the claw
  },
  stackedProducts: [
    { name: "Goyal Gold Salt", src: "/Images/goyalgold.png", rotation: "-14deg", zIndex: 12 },
    { name: "Goyal Fortuner Salt", src: "/Images/fortuner-salt.png", rotation: "12deg", zIndex: 11 },
    { name: "Goyal Himalayan Pink Salt", src: "/Images/goyal-pink.png", rotation: "-6deg", zIndex: 10 },
    { name: "Meduplus Double Fortified Salt", src: "/Images/mediplus-copy.png", rotation: "18deg", zIndex: 9 },
  ],
};

interface DistributorCTAProps {
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  enableClawAnimation?: boolean; // Set to false to disable crane sway animation
}

export default function DistributorCTASection({
  headingLine1 = CONFIG.headingLine1,
  headingLine2 = CONFIG.headingLine2,
  description = CONFIG.description,
  ctaText = CONFIG.ctaText,
  ctaHref = CONFIG.ctaHref,
  enableClawAnimation = true,
}: DistributorCTAProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      
      {/* Self-contained CSS for ticket borders, highlighter effect, and claw bobbing animation */}
      <style jsx>{`
        /* Claw Machine Bob & Gentle Sway Animation */
        @keyframes clawBobAndSway {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }
          50% {
            transform: translateY(-18px) rotate(1.5deg);
          }
        }

        .claw-animate {
          animation: clawBobAndSway 3.2s ease-in-out infinite;
          transform-origin: top center;
        }

        .claw-suspension-thread {
          position: absolute;
          top: -78px;
          left: 50%;
          width: 4px;
          height: 104px;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: linear-gradient(90deg, #050505 0%, #2b2b2b 48%, #050505 100%);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
          z-index: 26;
          pointer-events: none;
        }

        .claw-suspension-thread::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 50%;
          width: 36px;
          height: 10px;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: #080808;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 640px) {
          .claw-suspension-thread {
            top: -42px;
            height: 70px;
          }
        }

        /* Scalloped / Ticket Cutout Notches */
        .ticket-notch-left {
          position: absolute;
          left: -18px;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: inset -4px 0 6px rgba(0, 0, 0, 0.08);
          z-index: 20;
        }

        .ticket-notch-right {
          position: absolute;
          right: -18px;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: inset 4px 0 6px rgba(0, 0, 0, 0.08);
          z-index: 20;
        }

        /* Marker highlighter box decoration */
        .marker-highlight {
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }
      `}</style>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================== */}
        {/* MAIN TICKET / SCALLOPED BANNER CONTAINER             */}
        {/* ==================================================== */}
        <div
          style={{ background: CONFIG.bgGradient }}
          className="relative rounded-[2rem] sm:rounded-[2.8rem] lg:rounded-[3.5rem] p-6 sm:p-10 md:p-12 lg:p-16 text-gray-950 shadow-[0_25px_60px_-15px_rgba(244,180,0,0.45)] border border-yellow-300/60 overflow-hidden"
        >
          {/* Left & Right Ticket Cut-Out Notches */}
          <div className="ticket-notch-left hidden sm:block" />
          <div className="ticket-notch-right hidden sm:block" />

          {/* Decorative Inset Ticket Border (Dashed / Scalloped frame) */}
          <div className="absolute inset-3 sm:inset-5 rounded-[1.5rem] sm:rounded-[2.2rem] lg:rounded-[2.8rem] border-2 border-dashed border-white/45 pointer-events-none z-10" />

          {/* Subtle Ambient Radial Lighting Background */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-700/20 rounded-full blur-3xl pointer-events-none" />

          {/* ==================================================== */}
          {/* TWO COLUMN GRID: Content (Left) & Claw Machine (Right)*/}
          {/* ==================================================== */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* -------------------------------------------------- */}
            {/* LEFT COLUMN: Text, Highlights & CTA Button         */}
            {/* -------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Category Badge Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-950 text-white border border-amber-400/30 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                <span>{CONFIG.badgeText}</span>
              </div>

              {/* Marker / Highlighter Style Heading */}
              <div className="space-y-1 sm:space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.12] text-gray-950">
                  
                  {/* Line 1 with white translucent marker highlight */}
                  <span className="inline-block bg-white/90 text-red-600 px-3.5 py-1 rounded-xl shadow-xs transform -rotate-1 marker-highlight mb-1.5">
                    {headingLine1}
                  </span>
                  <br />
                  
                  {/* Line 2 with dark contrasting marker highlight */}
                  <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-xl shadow-md transform rotate-1 marker-highlight">
                    {headingLine2}
                  </span>

                </h2>
              </div>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-950/90 font-medium leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Key Trust Perks */}
              <div className="flex flex-wrap gap-2.5 sm:gap-4 pt-1">
                {CONFIG.perks.map((perk, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 backdrop-blur-sm border border-white/60 text-xs sm:text-sm font-bold text-gray-900 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button: Pill-shaped contrasting green with hover scale */}
              <div className="pt-3 sm:pt-4">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-base sm:text-lg shadow-[0_12px_28px_rgba(16,185,129,0.4)] hover:shadow-[0_16px_32px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 group cursor-pointer"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>

            </div>

            {/* -------------------------------------------------- */}
            {/* RIGHT COLUMN: Claw Machine + Stacked Bags          */}
            {/* -------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]">
              
              {/* Product Area Subtle Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

              {/* Stage Frame Container */}
              <div className="relative w-full max-w-[420px] h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center">
                <div className="claw-suspension-thread" />

                {/* ================================================ */}
                {/* 1. CLAW CRANE + HERO GOYAL SALT BAG (Animated)   */}
                {/* ================================================ */}
                <div
                  className={`absolute top-0 z-30 flex flex-col items-center cursor-pointer ${
                    enableClawAnimation ? "claw-animate" : ""
                  }`}
                  style={{ width: "220px" }}
                >
                  
                  {/* SVG MECHANICAL CRANE & CABLES */}
                  <div className="w-36 h-28 -mb-9 relative z-20 flex justify-center">
                    <svg
                      viewBox="0 0 160 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full drop-shadow-md"
                    >
                      {/* Top Mount Rod / Rail */}
                      <rect x="74" y="0" width="12" height="30" rx="3" fill="#262626" />
                      <rect x="76" y="0" width="4" height="30" fill="#737373" />

                      {/* Main Center Pulley Box */}
                      <rect x="58" y="26" width="44" height="24" rx="5" fill="#171717" stroke="#404040" strokeWidth="2" />
                      <circle cx="80" cy="38" r="6" fill="#F5A623" />
                      <circle cx="80" cy="38" r="2.5" fill="#171717" />
                      
                      {/* Left & Right Mechanical Bolts */}
                      <circle cx="64" cy="38" r="2" fill="#737373" />
                      <circle cx="96" cy="38" r="2" fill="#737373" />

                      {/* Left Claw Cable / Arm */}
                      <path
                        d="M 64 50 Q 52 75 42 98 Q 50 102 62 95"
                        stroke="#262626"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Left Metal Tip */}
                      <polygon points="40,95 48,105 35,102" fill="#E5E5E5" stroke="#171717" strokeWidth="1.5" />

                      {/* Center Grip Cable */}
                      <path
                        d="M 80 50 L 80 116"
                        stroke="#404040"
                        strokeWidth="3.5"
                        strokeDasharray="3 2"
                        strokeLinecap="round"
                      />
                      <circle cx="80" cy="116" r="4.5" fill="#E5E5E5" stroke="#171717" strokeWidth="1.5" />

                      {/* Right Claw Cable / Arm */}
                      <path
                        d="M 96 50 Q 108 75 118 98 Q 110 102 98 95"
                        stroke="#262626"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Right Metal Tip */}
                      <polygon points="120,95 112,105 125,102" fill="#E5E5E5" stroke="#171717" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* HERO BAG: Goyal Pure Iodised Salt */}
                  <div className="relative -mt-8 w-48 h-60 sm:w-56 sm:h-72 lg:w-60 lg:h-80 transition-transform duration-300 hover:scale-105">
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-gray-950 border-4 border-white/90 shadow-[0_6px_12px_rgba(0,0,0,0.35)]" />
                    <Image
                      src={CONFIG.heroProduct.src}
                      alt={CONFIG.heroProduct.name}
                      fill
                      sizes="(max-width: 640px) 180px, 240px"
                      priority
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                    />
                  </div>

                </div>

                {/* ================================================ */}
                {/* 2. STACKED / SCATTERED PRODUCT BAGS (Prize Bin)  */}
                {/* ================================================ */}
                <div className="absolute bottom-0 right-0 w-full h-44 sm:h-52 flex items-end justify-end pointer-events-none">
                  
                  {/* Stacked Bag 1: Goyal Gold Salt (Left angle) */}
                  <div
                    className="absolute -bottom-3 left-2 sm:left-4 lg:left-6 w-32 sm:w-44 h-40 sm:h-56 transition-transform duration-300"
                    style={{ transform: `rotate(${CONFIG.stackedProducts[0].rotation})`, zIndex: CONFIG.stackedProducts[0].zIndex }}
                  >
                    <Image
                      src={CONFIG.stackedProducts[0].src}
                      alt={CONFIG.stackedProducts[0].name}
                      fill
                      sizes="140px"
                      className="object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.3)] opacity-95"
                    />
                  </div>

                  {/* Stacked Bag 2: Fortuner Salt (Center-right angle) */}
                  <div
                    className="absolute -bottom-4 right-2 sm:right-8 lg:right-10 w-40 sm:w-52 h-48 sm:h-64 transition-transform duration-300"
                    style={{ transform: `rotate(${CONFIG.stackedProducts[1].rotation})`, zIndex: CONFIG.stackedProducts[1].zIndex }}
                  >
                    <Image
                      src={CONFIG.stackedProducts[1].src}
                      alt={CONFIG.stackedProducts[1].name}
                      fill
                      sizes="160px"
                      className="object-contain drop-shadow-[0_15px_24px_rgba(0,0,0,0.35)] opacity-95"
                    />
                  </div>

                  {/* Stacked Bag 3: Himalayan Pink Salt (Rightmost peek) */}
                  <div
                    className="absolute -bottom-5 -right-4 sm:-right-5 w-32 sm:w-40 h-40 sm:h-52 transition-transform duration-300"
                    style={{ transform: `rotate(${CONFIG.stackedProducts[2].rotation})`, zIndex: CONFIG.stackedProducts[2].zIndex }}
                  >
                    <Image
                      src={CONFIG.stackedProducts[2].src}
                      alt={CONFIG.stackedProducts[2].name}
                      fill
                      sizes="130px"
                      className="object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)] opacity-90"
                    />
                  </div>

                  {/* Base Prize Bin Soft Drop Shadow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-8 bg-black/25 rounded-full blur-xl z-0" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
