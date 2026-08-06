"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import OrderPopup from "@/src/component/OrderPopup";


const products = [
    {
      image: "/Images/iodised.png",
      title: "Iodised Salt",
      description:
        "Bring Health to Your Table: Enjoy the purity and perfect taste of Goyal Iodised Salt. Each grain is fortified with iodine to support your family’s health, making it one of the best choices for everyday cooking. Get ready for a pure, healthy, and flavorful meal every time!",
      note:
        "Hand-mined and unrefined, preserving natural trace minerals.",
    },
    {
      image: "/Images/gold.png",
      title: "Goyal Gold",
      description:
        "Everyday Goodness: A trusted choice for households, Goyal Gold Refined Iodised Salt brings purity, free flow, and perfect taste to every meal. Carefully processed and enriched with essential iodine, it ensures your family’s health while enhancing flavors. From daily curries to festive feasts, Goyal Gold makes every dish wholesome and delicious.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
     {
      image: "/Images/premium1.png",
      title: "Goyal Premium",
      description:
        "Premium Purity: Enriched with essential iodine, Goyal Premium Salt delivers refined quality and flavor, crafted for those who choose only the best. Its fine crystals blend seamlessly into every recipe, making meals healthier and tastier. A perfect companion for families who value excellence in both nutrition and taste.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
     {
      image: "/Images/black.png",
      title: "Goyal Black Salt",
      description:
        "Natural Flavor Boost: Known for its unique taste and digestive benefits, Goyal Black Salt adds a natural zing to snacks, salads, and traditional dishes. Its earthy aroma and tangy flavor make it a favorite in Indian kitchens. More than just seasoning, it’s a time-tested ingredient for both health and flavor.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
     {
      image: "/Images/pink.png",
      title: "Goyal Pink Salt",
      description:
        "Himalayan Wellness: Rich in natural minerals, Goyal Pink Salt enhances both flavor and health, making it a perfect choice for mindful living. Its beautiful pink crystals are not just visually appealing but also packed with natural goodness. A versatile salt for cooking, seasoning, and even wellness practices",
      note:
        "Meets BIS standards for daily household consumption.",
    },
     {
      image: "/Images/medi.png",
      title: "Mediplus Salt",
      description:
        "Double the Care: Fortified with iodine and iron, Goyal Mediplus Salt supports overall health while making meals tasty and nutritious. It helps prevent deficiencies while maintaining the authentic flavor of your food. Designed especially for health-conscious families, Mediplus Salt brings both taste and care to your kitchen.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
     {
      image: "/Images/fortune.png",
      title: "Fortuner Salt",
      description:
        "Strong & Pure: Goyal Fortuner Salt is refined, free-flowing, and packed with iodine, making it the perfect partner for healthy daily cooking. Its superior quality ensures consistency in taste, while its purity makes every meal safer. Whether for home kitchens or professional chefs, Fortuner Salt is the dependable choice.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
    {
      image: "/Images/health.png",
      title: "Health Care Salt",
      description:
        "Health in Every Pinch: Specially refined and iodised, Goyal Health Care Salt ensures purity and essential nutrition for your family’s well-being. It dissolves easily, spreads evenly, and keeps your meals tasty and balanced. With a focus on both taste and health, it’s the salt your family deserves every day.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
     {
      image: "/Images/idea.png",
      title: "Idea Salt",
      description:
        "Smart Choice for Taste: Goyal Idea Salt is refined, free-flowing, and rich in iodine, adding healthy flavor to every recipe. Its smooth texture makes it easy to use, while its quality ensures consistent results. An ideal salt for smart households that value both health and flavor in cooking.",
      note:
        "Meets BIS standards for daily household consumption.",
    },
  ];
  

export default function Formproduct() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  return (
    <main className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="relative w-full lg:w-1/2 h-[220px] lg:h-[360px]">
              <Image
                src="/Images/productvector.png"
                alt="Goyal Salt Products"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative w-full lg:w-1/2 h-[220px] lg:h-[360px]">
              <Image
                src="/Images/allsalt.png"
                alt="Goyal Salt Range"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
     {/* ================= CONTENT SECTION ================= */}
<section className="py-16 px-6 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >
    {/* Heading */}
    <h1 className="text-[52px] font-extrabold text-red-500 mb-2 ">
      Our Products
    </h1>

    {/* Sub Heading */}
    <p className="text-[20px] font-medium text-black mb-4 ">
      Pure Taste, Trusted Quality
    </p>

    {/* Paragraph 1 */}
    <p className="text-[18px] leading-[1.8] text-black mb-5">
      Goyal Salt is proud to bring you a wide range of premium salts that have become a trusted choice for households and businesses across the country. As one of the leading names in the salt industry, our products deliver the perfect balance of purity, taste, and health.
    </p>

    {/* Paragraph 2 */}
    <p className="text-[18px] leading-[1.6] text-black mb-5">
      From everyday refined iodized salt to specialty salts crafted for wellness and culinary delight, we offer a spectrum of products that meet diverse needs. Known for our commitment to quality and excellence, Goyal Salt promises not just an ingredient, but a healthy and flavorful addition to every meal.
    </p>

    {/* CTA */}
    <Link href="/contact">
      <button className="rounded-xl bg-red-600 px-8 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105">
        Enquire Now
      </button>
    </Link>
  </motion.div>
</section>



      {/* ================= PRODUCT CARDS ================= */}
      <section className="w-full py-20 bg-gradient-to-r from-pink-50 via-white to-pink-100">
        <div className="max-w-6xl mx-auto px-6 space-y-32">

          {products.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}
              >
                {/* IMAGE CARD */}
                {/* IMAGE CARD */}
<div className={`flex justify-center ${reverse ? "lg:order-2" : ""}`}>
  <div className="relative bg-pink-100 rounded-3xl w-full max-w-md pt-32 pb-10 px-6 text-center">
    
    {/* IMAGE */}
    <motion.div
      whileHover={{ y: -16, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className="absolute -top-24 left-1/2 -translate-x-1/2 cursor-pointer"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={220}
        height={300}
        className="drop-shadow-xl"
      />
    </motion.div>

  </div>
</div>


                {/* CONTENT */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <h2 className="text-pink-500 text-4xl  mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedProduct(item.title);
                      setOpen(true);
                    }}
                    className="border border-red-600 text-red-500 px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition"
                  >
                    ORDER NOW
                  </button>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>
      <OrderPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        productName={selectedProduct}
      />

    </main>
  );
}
