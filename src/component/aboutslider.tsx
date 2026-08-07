"use client";

import Image from "next/image";
import {
  IconShieldCheck,
  IconBuildingFactory2,
} from "@tabler/icons-react";

const AboutSlider = () => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ================= SECTION 1 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                <IconShieldCheck size={28} className="text-red-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
                Quality Salt Commitment
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              We maintain the highest salt quality for industrial and edible
              uses with a team of skilled professionals in chemical,
              mechanical, technical, and commercial fields.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-4">
              Our products consistently meet sodium chloride requirements
              across chemical, textile, detergent, feed, leather, power,
              oil & gas, and food industries.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group flex justify-center lg:justify-end">
            <div className="relative p-6 bg-white rounded-3xl border border-gray-100 shadow-xl backdrop-blur-sm">
              <div className="relative w-[260px] sm:w-[340px] h-[260px] sm:h-[320px]">
                <Image
                  src="/Images/about5.png"
                  alt="Quality Salt"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* glow */}
            <div className="absolute -z-10 w-80 h-80 bg-red-400/10 rounded-full blur-3xl right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative p-6 bg-white rounded-3xl border border-gray-100 shadow-xl backdrop-blur-sm">
              <div className="relative w-[260px] sm:w-[340px] h-[260px] sm:h-[320px]">
                <Image
                  src="/Images/about5.png"
                  alt="Advanced Salt Refining"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* glow */}
            <div className="absolute -z-10 w-80 h-80 bg-red-400/10 rounded-full blur-3xl left-6 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                <IconBuildingFactory2 size={28} className="text-red-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
                Advanced Salt Refining
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Our modern manufacturing plant utilizes advanced technology
              and infrastructure for precise salt refining and strict
              quality assurance.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-4">
              With a diverse product range and deep industry expertise,
              we deliver customized salt solutions while ensuring steady
              growth and long-term recognition.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSlider;
