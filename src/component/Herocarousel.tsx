"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/Images/goyal-banner1.jpg",
    alt: "Goyal Salt Premium Refined & Iodised Salt",
  },
  {
    id: 2,
    image: "/Images/goyal-banner2.jpg",
    alt: "Purity & Nutrition in Every Grain",
  },
  {
    id: 3,
    image: "/Images/goyal-banner3.jpg",
    alt: "Trusted Salt Manufacturer & Exporter",
  },
];

export default function HeroCarousel() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full overflow-hidden bg-gray-950 group/hero">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[620px] xl:h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="relative w-full h-full overflow-hidden">

              {/* Ambient Blurred Background Layer to Eliminate Any Edge Gaps */}
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover blur-2xl scale-110 opacity-70 pointer-events-none"
              />

              {/* Main Full-Width Edge-to-Edge Banner */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover object-[center_35%] w-full h-full relative z-10"
              />

              {/* Soft Ambient Overlay for high visual elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5 z-15 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows with Glassmorphic Styling */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous Hero Slide"
        className="
          absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 sm:w-12 sm:h-12 rounded-full
          bg-white/75 hover:bg-red-600 backdrop-blur-md border border-white/40
          text-gray-900 hover:text-white shadow-lg
          flex items-center justify-center transition-all duration-300
          opacity-0 group-hover/hero:opacity-100 hover:scale-110 active:scale-95
        "
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next Hero Slide"
        className="
          absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 sm:w-12 sm:h-12 rounded-full
          bg-white/75 hover:bg-red-600 backdrop-blur-md border border-white/40
          text-gray-900 hover:text-white shadow-lg
          flex items-center justify-center transition-all duration-300
          opacity-0 group-hover/hero:opacity-100 hover:scale-110 active:scale-95
        "
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>
    </section>
  );
}
