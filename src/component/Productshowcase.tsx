"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const features = [
  {
    title: "Healthy Rock Salt",
    desc: "Naturally sourced and mineral-rich, supporting digestion and immunity.",
    position: "left-top",
     href: "/products",
  },
  {
    title: "Refined Iodised Salt",
    desc: "Free-flowing, double-purified salt for balanced thyroid health.",
    position: "left-middle",
     href: "/products",
  },
  {
    title: "Black Salt",
    desc: "Tangy Indian favourite aiding metabolism and gut health.",
    position: "left-bottom",
     href: "/products",
  },
  {
    title: "Double Fortified Salt",
    desc: "Infused with iron & iodine to combat anemia.",
    position: "right-top",
     href: "/products",
  },
  {
    title: "Salt for Wellness & Care",
    desc: "Curated for wellness-focused and low-sodium diets.",
    position: "right-middle",
     href: "/products",
  },
  {
    title: "Natural Himalayan Salt",
    desc: "Harvested from Himalayas with 84+ trace minerals.",
    position: "right-bottom",
     href: "/products",
  },
];

export default function SaltProductsShowcase() {
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl xl:text-5xl font-bold text-green-700 mb-20"
        >
          Pure & Healthier Salt Products for Every Home
        </motion.h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-16">
            {features.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <Link href={item.href}>
                <button className="mt-3 text-green-700 font-semibold hover:underline">
                  Know More →
                </button></Link>
              </motion.div>
            ))}
          </div>

          {/* CENTER PRODUCT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute 
  w-72 h-72 sm:w-96 sm:h-96 
  bg-green-100 
  opacity-40 sm:opacity-100 
  rounded-full blur-3xl" 
/>

            <Image
              src="/Images/Untitled-5-scaled.png"
              alt="Goyal Salt Products"
              width={420}
              height={420}
              className="relative z-10"
            />
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="space-y-16 text-right">
            {features.slice(3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                  <Link href={item.href}>
                <button className="mt-3 text-green-700 font-semibold hover:underline">
                  Know More →
                </button></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
