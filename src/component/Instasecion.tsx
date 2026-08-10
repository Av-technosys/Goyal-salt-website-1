"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Heart, 
  ExternalLink, 
  BadgeCheck, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="max-w-[1440px] mx-auto my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
      
      {/* MAIN CONTAINER WITH GLASSMORPHIC CARD & AMBIENT GLOW */}
      <div className="relative bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-xl shadow-slate-100/80 overflow-hidden">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rose-500/10 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 via-rose-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* ===== TOP HEADER PROFILE SECTION ===== */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-gray-100">
          
          {/* Profile Identity */}
          <div className="flex items-center gap-4">
            
            {/* Instagram Gradient Ring Avatar */}
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Goyal Salt"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              
              {/* Instagram Mini Floating Icon */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 text-white flex items-center justify-center shadow-xs border-2 border-white">
                <Instagram size={11} />
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight">
                  Goyal.salt
                </h3>
                <BadgeCheck className="w-5 h-5 text-red-600 fill-red-50 shrink-0" />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs sm:text-sm font-semibold text-gray-600">
                  343 posts
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600">
                  2.7K followers
                </span>
              </div>
            </div>

          </div>

          {/* Action Buttons & Carousel Navigation */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            
            {/* Custom Carousel Arrows */}
            <div className="flex items-center gap-1.5 mr-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200/80 hover:border-red-200 text-gray-700 hover:text-red-600 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={scrollNext}
                aria-label="Next slide"
                className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-200/80 hover:border-red-200 text-gray-700 hover:text-red-600 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Follow on Instagram CTA Button */}
            <a
              href="https://www.instagram.com/goyal.salt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SaltButton variant="primary" size="md">
                <Instagram size={16} />
                <span>Follow on Instagram</span>
              </SaltButton>
            </a>

          </div>
        </div>

        {/* ===== CAROUSEL POSTS GRID ===== */}
        <div className="relative mt-6 sm:mt-8">
          <Carousel 
            setApi={setApi}
            opts={{ 
              align: "start",
              loop: true 
            }}
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {instaPosts.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 sm:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4"
                >
                  <a
                    href="https://www.instagram.com/goyal.salt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative"
                  >
                    {/* Post Card */}
                    <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-xs group-hover:shadow-xl group-hover:border-red-200 transition-all duration-500 group-hover:-translate-y-1">
                      
                      {/* Image */}
                      <Image
                        src={src}
                        alt={`Goyal Salt Instagram Post ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />

                      {/* Top Right Corner Instagram Watermark Badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                        <Instagram size={14} />
                      </div>

                      {/* Interactive Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-2xs transition-all duration-300 flex flex-col justify-between p-4 sm:p-5">
                        
                        {/* Top Tag */}
                        <div className="flex items-center justify-between text-white">
                          <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Sparkles size={12} className="text-amber-300" />
                            Goyal Salt
                          </span>
                          <ExternalLink size={16} className="text-white/80" />
                        </div>

                        {/* Center Action */}
                        <div className="flex items-center justify-center gap-4 text-white">
                          <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold">
                            <Heart size={14} className="text-rose-400 fill-rose-400" />
                            <span>Like</span>
                          </div>
                        </div>

                        {/* Bottom CTA Pill */}
                        <div className="text-center">
                          <span className="inline-block w-full py-2 rounded-xl bg-white text-gray-900 text-xs font-bold shadow-md group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                            View on Instagram
                          </span>
                        </div>

                      </div>

                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Instasecion;
