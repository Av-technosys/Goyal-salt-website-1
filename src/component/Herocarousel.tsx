"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/Images/Goyal-Salt-Slider.jpg",
  },
  {
    id: 2,
    image: "/Images/Untitled-1-01-2-scaled.jpg",
  },
  {
    id: 3,
    image: "/Images/Untitled-1-02-1-scaled.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-64 lg:h-screen bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="lg:h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-65 lg:h-[110vh]">
              <Image
                src={slide.image}
                alt="Hero Slide"
                fill
                priority
                className="object-fit "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
