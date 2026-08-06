"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Fromcsr() {
  return (
    <section className="w-full bg-white">

      {/* ===== HERO IMAGE ===== */}
      <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[460px]">
        <Image
          src="/Images/csr.jpg"
          alt="Corporate Social Responsibility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute inset-0 flex mx-auto text-center items-center justify-center text-white text-3xl sm:text-5xl font-extrabold tracking-wide">
          Corporate Social Responsibility
        </h1>
      </div>

      {/* ===== INTRO CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Goyal Salt is at the forefront of environmentally responsible
            practices. We create, deliver, and share value with our
            stakeholders—working towards a sustainable and inclusive society.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Our CSR initiatives are aligned with Schedule VII of the Companies
            Act, 2013 and are monitored by a dedicated CSR Committee to ensure
            long-term social impact.
          </p>
        </motion.div>
      </div>

      {/* ===== IMAGE GALLERY ===== */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our CSR Initiatives in Action
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/Images/csr1.jpg",
              "/Images/csr2.jpg",
              "/Images/csr3.jpg",
              "/Images/csr4.jpg",
              "/Images/csr5.jpg",
              "/Images/csr6.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <Image
                  src={img}
                  alt="CSR Activity"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[260px] transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== IMPACT TEXT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Creating Sustainable Impact
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            In a nutshell, we balance business success with social and
            environmental responsibility. Goyal Salt remains committed to
            supporting economically, socially, and physically challenged
            communities—empowering them towards sustainable livelihoods.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
