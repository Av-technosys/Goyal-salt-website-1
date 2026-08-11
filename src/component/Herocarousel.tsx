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
              Goyal Salt Brand Film


            </span>
          </div>
        </div>

        {/* Bottom Right Rounded Badge: Ek Chutki Swaad */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,1)]"></span>
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Ek Chutki Swaad
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-medium hidden sm:inline">
                Taste that elevates every meal
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
