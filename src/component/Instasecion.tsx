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
import SaltButton from "./SaltButton";

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
    <section className="bg-white rounded-3xl p-6 sm:p-8 max-w-[1440px] mx-auto my-12 border border-gray-100 shadow-sm">

      {/* ===== TOP HEADER ===== */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* Logo Circle */}
          <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center overflow-hidden bg-white p-1 shadow-sm">
            <Image
              src="/logo.png"
              alt="Goyal Salt"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-bold text-lg text-red-600">Goyal.salt</p>
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              343 posts &nbsp; • &nbsp; 2.7K followers
            </p>
          </div>
        </div>

        {/* Follow SaltButton */}
        <a
          href="https://www.instagram.com/goyal.salt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SaltButton variant="primary" size="sm">
            <span>Follow on Instagram</span>
          </SaltButton>
        </a>
      </div>

      {/* ===== CAROUSEL ===== */}
      <div className="relative px-2">
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
                  <Card className="overflow-hidden rounded-2xl border border-gray-100 shadow-xs">
                    <CardContent className="p-0 aspect-square relative group">
                      <Image
                        src={src}
                        alt={`Instagram post ${index + 1}`}
                        fill
                        className="
                          object-cover 
                          transition-transform duration-500 ease-out
                          group-hover:scale-110
                        "
                      />

                      {/* Overlay with SaltButton */}
                      <div className="
                        absolute inset-0
                        bg-black/0 group-hover:bg-black/40
                        transition-all duration-300
                        flex items-center justify-center p-2
                      ">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <SaltButton variant="white" size="sm">
                            <span>View Post</span>
                          </SaltButton>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Left Right Buttons */}
          <CarouselPrevious className="-left-4 sm:-left-6" />
          <CarouselNext className="-right-4 sm:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default Instasecion;
