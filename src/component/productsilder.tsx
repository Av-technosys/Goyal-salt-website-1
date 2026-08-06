"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

const products = [
    { id: 1, name: "Meduplus Salt", image: "/Images/mediplus-copy.png" },
    { id: 2, name: "Goyal Fortuner", image: "/Images/fortuner-salt.png" },
    { id: 3, name: "Goyal Salt", image: "/Images/goyalsalt.png" },
    { id: 4, name: "Goyal Gold", image: "/Images/goyalgold.png" },
    { id: 5, name: "Goyal Premium", image: "/Images/Goyal Premium.webp" },
    { id: 6, name: "Goyal Black Salt", image: "/Images/goyal-black-salt.png" },
    { id: 7, name: "Goyal Pink", image: "/Images/goyal-pink.png" },
   { id: 8, name: "Meduplus Salt", image: "/Images/mediplus-copy.png" },
    { id: 9, name: "Goyal Fortuner", image: "/Images/fortuner-salt.png" },
    { id: 10, name: "Goyal Salt", image: "/Images/goyalsalt.png" },
];

export default function ProductCarousel() {
    return (
        <section className="py-20 sm:py-8 from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Heading */}
                <div className="text-center mb-4">
                    <h1 className="text-3xl sm:text-5xl font-bold text-black">
                        Our Premium Products
                    </h1>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Crafted with purity, trusted by households and industries across India.
                    </p>
                </div>

                <Swiper
                    modules={[EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    centeredSlides
                    grabCursor
                    slidesPerView="auto"
                    loop
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 30,
                        depth: 140,
                        modifier: 1.2,
                        slideShadows: false,
                    }}
                    className="w-full"
                >
                    {products.map((product) => (
                        <SwiperSlide
                            key={product.id}
                            className="max-w-[260px] sm:max-w-[300px]"
                        >
                            <div className="group flex flex-col items-center">

                                {/* Product Card */}
                                <div
                                    className="
                                        relative w-full h-[320px] sm:h-[380px]
                                        rounded-2xl bg-white
                                        shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                                        flex items-center justify-center
                                        transition-all duration-500
                                        group-[.swiper-slide-active]:scale-105
                                        group-[.swiper-slide-active]:shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    {/* Soft highlight */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none" />

                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={200}
                                        height={280}
                                        className="
                                            object-contain transition-transform duration-500
                                            group-[.swiper-slide-active]:scale-110
                                        "
                                    />
                                </div>

                                {/* Product Name */}
                                <h3
                                    className="
                                        mt-5 text-lg sm:text-xl font-semibold text-black    
                                        transition-opacity duration-300
                                         group-[.swiper-slide-active]:opacity-100
                                    "
                                >
                                    {product.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
