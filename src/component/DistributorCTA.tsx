"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import SaltButton from "./SaltButton";

export default function DistributorCTASection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 px-8 sm:px-16 py-14 sm:py-20 text-center shadow-2xl"
        >
          {/* Subtle Ambient Lighting Overlay */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          {/* Category Pill */}
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-4 h-4 text-white" />
            <span>Partnership Network</span>
          </div>

          {/* Heading (Rule #6 Typography Scale) */}
          <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            Become Our Distributor
          </h2>

          {/* Subtitle Paragraph */}
          <p className="relative mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-normal">
            Join the <span className="font-bold text-white underline decoration-white/40 underline-offset-4">Goyal Salt</span> network and together, let’s bring the taste of purity and health to every household in India.
          </p>

          {/* CTA with Universal SaltButton */}
          <div className="relative mt-8 sm:mt-10 flex justify-center">
            <Link href="/contact">
              <SaltButton variant="white" size="lg">
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5 text-red-600" />
              </SaltButton>
            </Link>
          </div>

          {/* Trust Note */}
          <div className="relative mt-6 text-xs sm:text-sm font-medium text-white/80">
            Trusted by thousands of partners & distributors across India 🇮🇳
          </div>
        </motion.div>
      </div>
    </section>
  );
}
