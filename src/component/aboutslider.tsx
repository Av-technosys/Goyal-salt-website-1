"use client";

import Image from "next/image";
import {
  IconShieldCheck,
  IconBuildingFactory2,
} from "@tabler/icons-react";

const AboutSlider = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-8 overflow-x-hidden overflow-y-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">

        {/* ================= SECTION 1 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-blue-50">
                <IconShieldCheck size={30} className="text-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Quality Salt Commitment
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We maintain the highest salt quality for industrial and edible
              uses with a team of skilled professionals in chemical,
              mechanical, technical, and commercial fields.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
              Our products consistently meet sodium chloride requirements
              across chemical, textile, detergent, feed, leather, power,
              oil & gas, and food industries.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group flex justify-center lg:justify-end lg:pr-14">
            <div className="relative w-[92%] max-w-md h-[260px] sm:h-[320px]">
              <Image
                src="/Images/about5.png"
                alt="Quality Salt"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* glow */}
            <div className="absolute -z-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl right-6 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group flex justify-center lg:justify-start lg:pl-14 order-2 lg:order-1">
            <div className="relative w-[92%] max-w-md h-[260px] sm:h-[320px]">
              <Image
                src="/Images/about5.png"
                alt="Advanced Salt Refining"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* glow */}
            <div className="absolute -z-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl left-6 top-1/2 -translate-y-1/2" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-blue-50">
                <IconBuildingFactory2 size={30} className="text-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Advanced Salt Refining
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our modern manufacturing plant utilizes advanced technology
              and infrastructure for precise salt refining and strict
              quality assurance.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-14">
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
