"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductInfoSection() {
    return (
        <section className="py-6 sm:py-20 lg:py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    {/* Brand Glow */}
                    <div className="
                        absolute -z-10
                        w-[260px] h-[260px]
                        sm:w-[320px] sm:h-[320px]
                        lg:w-[420px] lg:h-[420px]
                        bg-orange-100 rounded-full blur-3xl
                    " />

                    <Image
                        src="/Images/Untitled-5-scaled.png"
                        alt="Goyal Salt Products"
                        width={520}
                        height={520}
                        className="
                            object-contain
                            w-[240px] sm:w-[360px] lg:w-[520px]
                        "
                        priority
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                >
                    <h2 className="
                        text-2xl sm:text-3xl lg:text-5xl
                        font-semibold text-gray-900 mb-4 sm:mb-6
                    ">
                        Ready for Instant and Healthy Use
                    </h2>

                    <p className="
                        text-base sm:text-lg text-gray-600
                        leading-relaxed mb-8 sm:mb-10
                        max-w-xl mx-auto lg:mx-0
                    ">
                       Experience the natural taste and wellness of premium-quality salt, sourced directly from mineral-rich regions. Whether it rock salt, black salt, or iodized varieties – our products are carefully processed to retain their purity and essential nutrients.
                    </p>

                    {/* FEATURES */}
                    <div className="
                        grid grid-cols-1 sm:grid-cols-2
                        gap-y-4 sm:gap-y-6 gap-x-10
                        mb-10 sm:mb-12
                        text-left
                    ">
                        {[
                            "100% Natural and Unrefined",
                            "Rich in Essential Minerals",
                            "Moisture Free and Fresh",
                            "No Harmful Additives",
                        ].map((item, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="
                                    text-base sm:text-lg
                                    font-medium text-gray-800
                                    flex items-center gap-3
                                "
                            >
                                <span className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0" />
                                {item}
                            </motion.p>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link href="https://goyalsaltltd.com/about-us">
                   <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    mt-5 sm:mt-1 rounded-xl bg-red-600 px-8 py-3
    text-white font-semibold shadow-lg
    transition-all duration-300
    hover:bg-red-700 hover:scale-105
    cursor-pointer
  "
>
  About Us
</motion.button>

                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
