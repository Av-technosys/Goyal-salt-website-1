"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  RotateCcw 
} from "lucide-react";

export default function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-gray-950 group/hero"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
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
          muted={isMuted}
          playsInline
          preload="auto"
          className="w-full h-full object-cover relative z-10"
        />

        {/* Cinematic Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-15 pointer-events-none" />

        {/* Top Brand Identity Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20 flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Goyal Salt Brand Film
            </span>
          </div>
        </div>

        {/* Bottom Floating Interactive Control Bar */}
        <div className="absolute bottom-6 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 z-20 flex items-center justify-between pointer-events-auto">
          
          {/* Title Text Badge */}
          <div className="bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-white shadow-xl max-w-xs sm:max-w-md">
            <p className="text-xs sm:text-sm font-extrabold leading-tight text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Ek Chutki Swaad
            </p>
            <p className="text-[10px] sm:text-xs text-gray-300 font-medium mt-0.5 truncate">
              Taste that elevates every meal across India
            </p>
          </div>

          {/* Quick Action Buttons (Play/Pause, Mute/Unmute, Restart) */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-md border border-white/20 p-1.5 sm:p-2 rounded-2xl shadow-xl">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5 fill-current" />}
            </button>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              className={`
                w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95
                ${isMuted ? "bg-white/15 hover:bg-white/30 text-white" : "bg-red-600 text-white shadow-lg shadow-red-600/30"}
              `}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Restart Video Button */}
            <button
              onClick={handleRestart}
              aria-label="Restart Video"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              <RotateCcw size={16} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
