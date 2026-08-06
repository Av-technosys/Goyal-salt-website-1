"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const instaPosts = [
  "/Images/insta1.jpg",
  "/Images/insta2.jpg",
  "/Images/insta3.jpg",
  "/Images/insta4.jpg",
  "/Images/insta5.jpg",
  "/Images/insta6.jpg",
  "/Images/insta7.jpg",
  "/Images/insta8.jpg",
  "/Images/insta9.jpg",
  "/Images/insta10.jpg",
  "/Images/insta11.jpg",
];

const Instasecion = () => {
  return (
    <section className="bg-white rounded-[40px] p-6">

      {/* ===== TOP HEADER ===== */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* Logo Circle */}
          <div className="w-14 h-14 rounded-full border-2 border-pink-500 flex items-center justify-center overflow-hidden bg-white">
            <Image
              src="/logo.png"   // apna logo path
              alt="Goyal Salt"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Text */}
          {/* Text */}
<div>
  <p className="font-bold text-lg text-red-500">Goyal.salt</p>
  <p className="text-sm font-semibold text-black">
    343 posts &nbsp; • &nbsp; 2.7K followers
  </p>
</div>

        </div>

        {/* Follow Button */}
        <a
          href="https://www.instagram.com/goyal.salt/"
          target="_blank"
          className="flex items-center gap-2 bg-[#0095f6] text-white px-5 py-2 rounded-lg text-sm font-medium"
        >
          Follow
        </a>
      </div>

      {/* ===== CAROUSEL ===== */}
      <div className="relative">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {instaPosts.map((src, index) => (
              <CarouselItem
  key={index}
  className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
>
  <a
    href="https://www.instagram.com/goyal.salt/"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-0 aspect-square relative group">
        <Image
          src={src}
          alt={`Instagram post ${index + 1}`}
          fill
          className="
            object-cover 
            transition-transform duration-300 ease-out
            group-hover:scale-110
          "
        />

        {/* Insta overlay with button */}
<div
  className="
    absolute inset-0
    bg-black/0 group-hover:bg-black/30
    transition
    flex items-center justify-center
  "
>
  <button
    className="
      opacity-0 group-hover:opacity-100
      transition
      bg-white text-black
      px-5 py-2
      rounded-full
      text-sm font-semibold
      shadow-lg
      hover:bg-[#0095f6] hover:text-white
    "
  >
    View on Instagram
  </button>
</div>

      </CardContent>
    </Card>
  </a>
</CarouselItem>

            ))}
          </CarouselContent>

          {/* Left Right Buttons (side me) */}
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default Instasecion;
