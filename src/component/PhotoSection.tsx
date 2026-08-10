"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: "landscape" | "portrait";
}

const galleryImages: GalleryItem[] = [
  { id: 1, src: "/Images/gallery1.jpg", alt: "Goyal Salt Press & Activities", type: "landscape" },
  { id: 2, src: "/Images/gallery2.jpg", alt: "Goyal Salt Media Coverage", type: "portrait" },
  { id: 3, src: "/Images/gallery8.jpg", alt: "Goyal Salt News Highlight", type: "portrait" },
  { id: 4, src: "/Images/gallery3.jpg", alt: "Goyal Salt Event & Operations", type: "landscape" },
  { id: 5, src: "/Images/gallery7.jpg", alt: "Goyal Salt Corporate Achievement", type: "portrait" },
  { id: 6, src: "/Images/gallery4.jpg", alt: "Goyal Salt Facility & Operations", type: "landscape" },
  { id: 7, src: "/Images/gallery5.jpg", alt: "Goyal Salt Community Initiatives", type: "landscape" },
  { id: 8, src: "/Images/gallery9.jpg", alt: "Goyal Salt News Publication", type: "landscape" },
  { id: 9, src: "/Images/gallery6.jpg", alt: "Goyal Salt Corporate Gathering", type: "landscape" },
  { id: 10, src: "/Images/qualitylab.jpg", alt: "Goyal Salt Quality Testing Lab", type: "landscape" },
  { id: 11, src: "/Images/about1.jpg", alt: "Goyal Salt Production Unit", type: "landscape" },
  { id: 12, src: "/Images/csr1.jpg", alt: "Goyal Salt CSR Initiatives", type: "landscape" },
];

const PhotoSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0));
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      {/* Subtle Ambient Red Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-xs mb-4"
          >
            <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Visual Highlights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight max-w-3xl"
          >
            Our <span className="text-red-600 font-extrabold">Media & Activity</span> Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            Explore media coverage, newspaper publications, corporate milestones, and moments from Goyal Salt Limited.
          </motion.p>
        </div>

        {/* Seamless Masonry Column Grid - Zero Blank Spaces */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-6 space-y-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="
                break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer
                bg-white border border-gray-200 shadow-md hover:shadow-2xl
                transition-all duration-300 hover:-translate-y-1
              "
            >
              {/* Image Container with Dynamic Aspect Ratio */}
              <div className={`relative w-full ${item.type === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"} bg-gray-50 flex items-center justify-center`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Darkening Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
                  {/* Floating View Icon Button */}
                  <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-gray-900 shadow-xl font-bold text-xs">
                    <Maximize2 size={14} className="text-red-600" />
                    <span>View Image</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 select-none"
            onClick={handleClose}
          >
            {/* Top Bar Controls */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between z-20 pb-3 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white bg-red-600 px-3 py-1 rounded-full shadow-sm">
                  {selectedIndex + 1} / {galleryImages.length}
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium hidden sm:inline ml-2 truncate max-w-md">
                  {galleryImages[selectedIndex].alt}
                </span>
              </div>

              <button
                onClick={handleClose}
                aria-label="Close Lightbox"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-200 border border-white/15 cursor-pointer hover:scale-105 active:scale-95"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Center Image Container */}
            <div 
              className="relative w-full flex-1 max-w-5xl max-h-[80vh] flex items-center justify-center my-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous Image"
                className="absolute left-2 sm:-left-6 lg:-left-12 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-red-600 text-white border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Display Image */}
              <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full max-h-[75vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
                  >
                    <Image
                      src={galleryImages[selectedIndex].src}
                      alt={galleryImages[selectedIndex].alt}
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next Image"
                className="absolute right-2 sm:-right-6 lg:-right-12 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-red-600 text-white border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div 
              className="w-full max-w-4xl z-20 flex flex-col items-center gap-2 pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1.5 px-3 no-scrollbar">
                {galleryImages.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(i)}
                    className={`
                      relative w-12 h-9 sm:w-14 sm:h-10 rounded-md overflow-hidden shrink-0 border transition-all duration-200 cursor-pointer
                      ${selectedIndex === i 
                        ? "border-red-500 scale-110 ring-2 ring-red-500/60" 
                        : "border-white/20 opacity-40 hover:opacity-100"}
                    `}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoSection;
