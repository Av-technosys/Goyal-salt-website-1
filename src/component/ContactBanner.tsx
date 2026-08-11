"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function ContactBanner() {
  return (
    <section className="relative pt-12 sm:pt-20 md:pt-28 lg:pt-40 pb-20 sm:pb-24 lg:pb-24 bg-white overflow-x-clip overflow-y-visible select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-yellow-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Yellow Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-[2.2rem] sm:rounded-[3rem] lg:rounded-[3.8rem] bg-[#ffd100] bg-gradient-to-r from-[#ffd400] via-[#ffd000] to-[#fec800] shadow-[0_20px_50px_-10px_rgba(234,179,8,0.35)] p-6 sm:p-8 md:p-10 lg:p-14 lg:py-16 pt-7 sm:pt-10 pb-0 sm:pb-0 lg:pb-16 min-h-0 lg:min-h-[440px] flex items-center overflow-visible"
        >
          {/* Subtle Ambient Texture Overlays */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-4 items-center">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-7 z-10 space-y-3.5 sm:space-y-5 lg:space-y-6 max-w-xl">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[46px] font-black text-gray-950 tracking-tight leading-none">
                Contact Us
              </h2>

              {/* Company Name & Address */}
              <div className="space-y-1 text-gray-950 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                <p className="font-bold text-gray-950 text-sm sm:text-base md:text-lg">
                  Goyal Salt Limited
                </p>
                <p className="text-gray-900 font-medium leading-relaxed">
                  Plot No 229–230, Guru Jambeshwar Nagar,
                  <br />
                  Lane No – 07, Gandhi Path, Vaishali Nagar,
                  <br />
                  Jaipur – 302021, Rajasthan (India).
                </p>
              </div>

              {/* Phone Info */}
              <div className="pt-0.5 text-xs sm:text-sm md:text-[15px] text-gray-950">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-bold text-gray-950 min-w-[60px] sm:min-w-[68px]">
                    Phone :
                  </span>
                  <a
                    href="tel:+917568018883"
                    className="font-semibold text-gray-950 hover:text-red-700 transition-colors underline decoration-black/20 hover:decoration-red-700 underline-offset-4"
                  >
                    +91-7568018883
                  </a>
                </div>
              </div>

              {/* Email Info */}
              <div className="text-xs sm:text-sm md:text-[15px] text-gray-950">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-bold text-gray-950 min-w-[60px] sm:min-w-[68px]">
                    E-mail :
                  </span>
                  <a
                    href="mailto:info@goyalsalt.in"
                    className="font-semibold text-gray-950 hover:text-red-700 transition-colors underline decoration-black/20 hover:decoration-red-700 underline-offset-4"
                  >
                    info@goyalsalt.in
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1.5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://wa.me/917568018883?text=Hello%20Goyal%20Salt,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp size={15} />
                  <span>WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-950 hover:bg-red-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Call Back</span>
                  <FaArrowRight size={11} />
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: 2 OVERLAPPING SALT PACKETS (Bottom on Mobile, Right on Desktop) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-0 lg:min-h-full mt-2 sm:mt-4 lg:mt-0">
              
              {/* Product Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-64 lg:w-96 h-44 sm:h-64 lg:h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

              {/* Mockup Frame Container - Compact, centered on mobile & hanging out below */}
              <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[480px] h-[190px] sm:h-[230px] md:h-[280px] lg:h-[460px] xl:h-[500px] translate-y-10 sm:translate-y-12 lg:translate-y-0 -mb-4 sm:-mb-6 lg:mb-0 lg:-my-20 xl:-my-28 flex items-center justify-center overflow-visible">
                
                {/* PACKET 1: Goyal Pure Iodised Salt (Left Packet - Tilted, pops out bottom on mobile, top on desktop) */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                  whileHover={{ scale: 1.04, rotate: -4, y: -6 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute left-0 sm:left-2 lg:-left-8 xl:-left-12 -bottom-6 sm:-bottom-8 lg:bottom-auto lg:-top-28 xl:-top-36 w-[145px] sm:w-[170px] md:w-[210px] lg:w-[310px] xl:w-[350px] h-[190px] sm:h-[230px] md:h-[285px] lg:h-[425px] xl:h-[480px] z-10 cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/Images/goyalsalt.png"
                      alt="Goyal Pure Iodised Salt"
                      fill
                      sizes="(max-width: 640px) 145px, (max-width: 1024px) 210px, 350px"
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] transition-all duration-300 pointer-events-none"
                      priority
                    />
                  </div>
                </motion.div>

                {/* PACKET 2: Goyal Gold Salt (Right Packet - Tilted, overlapping closely at bottom on mobile, top on desktop) */}
                <motion.div
                  initial={{ opacity: 0, y: 35, rotate: 12 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 10 }}
                  whileHover={{ scale: 1.04, rotate: 6, y: -6 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute right-0 sm:right-2 lg:-right-6 xl:-right-8 -bottom-3 sm:-bottom-4 lg:bottom-auto lg:-top-14 xl:-top-18 w-[130px] sm:w-[155px] md:w-[190px] lg:w-[275px] xl:w-[310px] h-[170px] sm:h-[210px] md:h-[255px] lg:h-[380px] xl:h-[425px] z-20 cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/Images/goyalgold.png"
                      alt="Goyal Gold Salt"
                      fill
                      sizes="(max-width: 640px) 130px, (max-width: 1024px) 190px, 310px"
                      className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.32)] transition-all duration-300 pointer-events-none"
                      priority
                    />
                  </div>
                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
