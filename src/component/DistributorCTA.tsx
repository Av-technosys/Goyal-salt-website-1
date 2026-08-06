"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function DistributorCTASection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[56px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-10 sm:px-20 py-20 text-center shadow-2xl"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-300/40 rounded-full blur-3xl" />

          {/* Content */}
          <h2 className="relative text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900">
            Become Our Distributor
          </h2>

          <p className="relative mt-8 text-lg sm:text-xl xl:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Join the <span className="font-semibold">Goyal Salt</span> network and
            together, let’s bring the taste of
            <span className="text-green-800 font-semibold"> purity</span> and
            <span className="text-green-800 font-semibold"> health</span> to
            every household in India.
          </p>

          {/* CTA */}
              <Link href="/contact">
          <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="
    relative mt-12 inline-flex items-center gap-3
    rounded-full bg-green-700 px-10 py-4
    text-lg font-semibold text-white shadow-xl
    hover:bg-green-800 transition
    cursor-pointer
  "
>
  Contact Us
  <span className="text-xl">→</span>
</motion.button>

          </Link>

          {/* Small trust note */}
          <div className="relative mt-8 text-sm text-gray-700">
            Trusted by thousands of partners across India 🇮🇳
          </div>
        </motion.div>
      </div>
    </section>
  );
}
