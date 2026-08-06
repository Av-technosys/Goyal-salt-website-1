"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HealthSaltSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff5f5] to-[#ffe4e6] py-16 sm:py-20 lg:py-8">

      {/* ================= SECTION 1 ================= */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-1  ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"  
          >
            <span className="inline-block mb-4 rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700">
              Everyday Essential
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900">
              Health Care Salt
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                  Crafted for everyday wellness, enriched with iodine to support
                  balanced nutrition and a healthier lifestyle.
            </p>
            <Link href="/products">
           <button className="
  mt-7 sm:mt-8 rounded-xl bg-red-600 px-8 py-3
  text-white font-semibold shadow-lg
  transition-all duration-300
  hover:bg-red-700 hover:scale-105
  cursor-pointer
">
  View All Items
</button>
</Link>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-[220px] sm:w-[260px] lg:w-[340px]">
              <Image
                src="/Images/health-care-packet-copy-scaled.png"
                alt="Health Care Salt"
                width={400}
                height={500}
                className="drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
          </motion.div>
        </div>

        {/* RED BLUR */}
        <div className="absolute -right-24 top-1/3 h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-red-300/40 blur-3xl" />
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:order-1 order-2"
          >
            <div className="relative w-[220px] sm:w-[260px] lg:w-[340px]">
              <Image
                src="/Images/idea-packet-copy-scaled.png"
                alt="Premium Health Salt"
                width={400}
                height={500}
                className="drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left lg:order-2 order-1"
          >
            <span className="inline-block mb-4 rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700">
              Pure & Trusted
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900">
              Ideal Salt
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Refined with care to preserve purity and taste, bringing healthier
              nutrition to every household.
            </p>
            <Link href="/products">
         <button className="
  mt-7 sm:mt-8 rounded-xl bg-red-600 px-8 py-3
  text-white font-semibold shadow-lg
  transition-all duration-300
  hover:bg-red-700 hover:scale-105
  cursor-pointer
">
  View All Items
</button>
</Link>
          </motion.div>
        </div>

        {/* RED BLUR */}
        <div className="absolute -left-24 top-1/3 h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-red-300/40 blur-3xl" />
      </div>
    </section>
  );
}
