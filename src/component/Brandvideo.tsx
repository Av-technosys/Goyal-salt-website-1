"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Video, Sparkles, CheckCircle2 } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Ek Chutki Swaad",
    subtitle: "Taste that elevates every meal",
    thumbnail: "/Images/Goyal-Salt-Slider.jpg",
    video: "/Images/vedio1.mp4",
    tag: "Brand Film 01",
  },
  {
    id: 2,
    title: "Sehat Ka Bharosa",
    subtitle: "Iodine enriched for healthy living",
    thumbnail: "/Images/Untitled-1-01-2-scaled.jpg",
    video: "/Images/vedio2.mp4",
    tag: "Brand Film 02",
  },
  {
    id: 3,
    title: "Shuddhta Ki Pehchaan",
    subtitle: "Refined & trusted quality",
    thumbnail: "/Images/Untitled-1-02-1-scaled.jpg",
    video: "/Images/vedio3.mp4",
    tag: "Brand Film 03",
  },
];

export default function BrandVideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-red-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADING SECTION (Rule #6 Typography Scale) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-4">
            <Video className="w-4 h-4 text-red-600" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Brand Commercials
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug"
          >
            Discover the Incredible Taste & Health Benefits of{" "}
            <span className="text-red-600 font-extrabold">Goyal Salt</span>
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Click any small video on the right to switch the main video player.
          </p>
        </div>

        {/* SIDE-BY-SIDE VIDEO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* MAIN BIG VIDEO (LEFT - 8 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gray-950 border border-gray-200 shadow-2xl group">
              
              {/* Active Video Glassmorphic Badge Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 bg-black/70 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl text-white flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold leading-none">{activeVideo.title}</p>
                  <p className="text-[10px] sm:text-xs text-gray-300 font-medium mt-0.5">{activeVideo.subtitle}</p>
                </div>
              </div>

              {/* Main Player */}
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                controls
                autoPlay
                muted
                playsInline
                className="w-full h-[280px] sm:h-[420px] lg:h-[500px] object-cover"
              />
            </div>
          </motion.div>


          {/* SMALL SIDE VIDEOS LIST (RIGHT - 4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between px-1 pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                <Sparkles size={14} className="text-red-600" />
                <span>More Commercials</span>
              </span>
              <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                {videos.length} Videos
              </span>
            </div>

            {videos.map((item) => {
              const isSelected = activeVideo.id === item.id;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveVideo(item)}
                  className={`w-full flex items-center gap-3.5 p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-red-500 bg-red-50/70 shadow-md ring-1 ring-red-500/20"
                      : "border-gray-200/80 bg-white hover:bg-gray-50 hover:border-red-200"
                  }`}
                >
                  {/* Small Video Thumbnail */}
                  <div className="relative w-32 h-20 rounded-xl overflow-hidden shrink-0 border border-gray-200 bg-gray-900 group">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Play Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                      isSelected ? "bg-red-600/40" : "bg-black/35 hover:bg-black/50"
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ${
                        isSelected ? "bg-red-600 text-white scale-110" : "bg-white text-gray-900"
                      }`}>
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded-md text-[9px] font-bold text-white uppercase tracking-wider">
                      {item.tag}
                    </div>
                  </div>

                  {/* Video Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {item.title}
                      </p>
                      {isSelected && (
                        <CheckCircle2 size={14} className="text-red-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-gray-600 truncate mt-1 font-normal">
                      {item.subtitle}
                    </p>
                    {isSelected && (
                      <span className="inline-block mt-1 text-[10px] font-bold text-red-600 uppercase tracking-wider">
                        ● Now Playing
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
