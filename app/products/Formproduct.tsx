"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import OrderPopup from "@/src/component/OrderPopup";

const products = [
  {
    image: "/Images/iodised.png",
    title: "Iodised Salt",
    description:
      "Bring Health to Your Table: Enjoy the purity and perfect taste of Goyal Iodised Salt. Each grain is fortified with iodine to support your family’s health, making it one of the best choices for everyday cooking. Get ready for a pure, healthy, and flavorful meal every time!",
    note:
      "Meets BIS standards for daily household consumption.",
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
      "Smart Choice for Taste: Goyal Idea Salt is refined, free-flowing, and rich in iodine, adding healthy flavor to every recipe. Its smooth texture makes it easy to use, while its quality ensures consistent results. An idea salt for smart households that value both health and flavor in cooking.",
    note:
      "Meets BIS standards for daily household consumption.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function Formproduct() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openOrderPopup = (productName: string) => {
    setSelectedProduct(productName);
    setOpen(true);
  };

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-white via-red-50/25 to-white">
      <section className="relative overflow-hidden border-b border-red-100/80 bg-[radial-gradient(circle_at_20%_10%,rgba(254,226,226,0.9),transparent_32%),linear-gradient(135deg,#ffffff_0%,#fff7ed_48%,#fee2e2_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Pure Taste, Trusted Quality</span>
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Our <span className="text-red-600">Products</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-gray-700 sm:text-lg">
              Goyal Salt is proud to bring you a wide range of premium salts that have become a trusted choice for households and businesses across the country. As one of the leading names in the salt industry, our products deliver the perfect balance of purity, taste, and health.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-700"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#product-range"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-white/80 px-7 py-3.5 text-sm font-bold text-red-600 shadow-sm transition hover:border-red-300 hover:bg-red-50"
              >
                Our Products
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="relative min-h-[360px] lg:col-span-7 lg:min-h-[500px]"
          >
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-200/35 blur-3xl sm:h-96 sm:w-96" />
            <div className="absolute bottom-8 left-0 right-0 mx-auto h-10 max-w-xl rounded-full bg-red-950/10 blur-xl" />

           

            <div className="absolute bottom-0 right-0 h-[260px] w-[68%] sm:h-[360px] lg:h-[430px]">
              <Image
                src="/Images/allsalt.png"
                alt="Goyal Salt Range"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
        >
          <div className="lg:col-span-4">
            <p className="text-sm font-bold uppercase tracking-wider text-red-600">
              Pure Taste, Trusted Quality
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Our Products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-gray-700 lg:col-span-8">
            <p>
              Goyal Salt is proud to bring you a wide range of premium salts that have become a trusted choice for households and businesses across the country. As one of the leading names in the salt industry, our products deliver the perfect balance of purity, taste, and health.
            </p>
            <p>
              From everyday refined iodized salt to specialty salts crafted for wellness and culinary delight, we offer a spectrum of products that meet diverse needs. Known for our commitment to quality and excellence, Goyal Salt promises not just an ingredient, but a healthy and flavorful addition to every meal.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="product-range" className="bg-gradient-to-b from-white via-red-50/35 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
       

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: Math.min(index * 0.04, 0.2) }}
                viewport={{ once: true, amount: 0.2 }}
                className="group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
                  <div className="absolute h-40 w-40 rounded-full bg-red-200/35 blur-2xl transition duration-500 group-hover:scale-125" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={230}
                    height={280}
                    className="relative z-10 max-h-[220px] w-auto object-contain drop-shadow-xl transition duration-500 group-hover:scale-110"
                    priority={index < 3}
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-2xl font-black tracking-tight text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-start gap-2 rounded-md border border-red-100 bg-red-50/70 p-3 text-sm font-semibold leading-6 text-gray-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <span>{item.note}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openOrderPopup(item.title)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-red-500/20 transition hover:bg-red-700"
                  >
                    ORDER NOW
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
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
