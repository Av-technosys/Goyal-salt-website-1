"use client";

import { useRef } from "react";
import Image from "next/image";

export default function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section 
      className="relative w-full overflow-hidden bg-gray-950 group/hero"
    >
      {/* Background Ambient Blur to Fill Edge-to-Edge seamlessly on Ultra-Wide Monitors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <Image
          src="/Images/Goyal-Salt-Slider.jpg"
          alt=""
          fill
          className="object-cover blur-3xl scale-125"
        />
      </div>

      {/* Main Hero Video Player */}
      <div className="relative w-full h-[320px] sm:h-[460px] md:h-[560px] lg:h-[680px] xl:h-[760px] flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src="/Images/vedio1.mp4"
          poster="/Images/Goyal-Salt-Slider.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover relative z-10 pointer-events-none"
        />

        {/* Cinematic Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-15 pointer-events-none" />

        {/* Top Brand Identity Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20 flex items-center gap-2 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
           
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Goyal Salt Brand FilmRequest a Call Back
Fill out the form below and our team will reach out to you shortly.


            </span>
          </div>
        </div>

        {/* Active Video Overlay (Left Middle, No Box, Larger Text) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 z-20 text-white flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 sm:h-4 sm:w-4 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)]"></span>
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
              Ek Chutki Swaad
            </h3>
          </div>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-100 font-bold ml-6 sm:ml-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-sm sm:max-w-md">
            Taste that elevates every meal across India
          </p>
        </div>

      </div>
    </section>
  );
}
