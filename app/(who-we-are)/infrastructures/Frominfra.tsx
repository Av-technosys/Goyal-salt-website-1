"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Frominfra() {
  return (
    <section className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/Images/infrastructure.png" // replace
            alt="Salt Infrastructure"
            width={500}
            height={520}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Investment in Infrastructure is the Backbone of Growth
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Investment in infrastructure is a long-term requirement for growth,
            stability, and sustainability of the company. It ensures smooth
            access to resources and uninterrupted production.
          </p>
        </motion.div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <p className="text-gray-700 text-lg leading-relaxed">
            Goyal Salt has three factory premises. Two units are located in
            Nawa City—one for refined free-flow salt and another for refined
            half-dry salt production. The half-dry unit covers 2 acres, while
            the free-flow unit spans 13 acres.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Unit III is located in Gandhidham near Kutch, spread across 12 acres,
            with a production capacity of <strong>4,50,000 MT per annum</strong>.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            The company also operates spacious go-downs for raw salt and finished
            products, four silent diesel generator sets, separate labour
            quarters, and a <strong>1000 KVA solar plant</strong>. Another 2000 KVA
            solar plant is planned for Gandhidham.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Manpower remains our strongest asset, with dedicated teams across
            quality control, production, R&D, maintenance, finance, and
            operations.
          </p>

        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { label: "Factory Units", value: "3+" },
            { label: "Annual Capacity", value: "6,60,000 MT" },
            { label: "Land Area", value: "700 Bighas" },
            { label: "Retail Presence", value: "5000+ Outlets" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-green-600">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Infrastructure Facilities
          </h2>

          <div >
            {[
              "/Images/infra1.png",
             
            ].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-md group"
              >
                <Image
                  src={img}
                  alt="Infrastructure"
                  width={1000}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}