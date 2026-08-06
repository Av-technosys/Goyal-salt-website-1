"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Ek Chutki Swaad",
    subtitle: "Taste that elevates every meal",
    thumbnail: "/Images/Goyal-Salt-Slider.jpg",
    video: "/Images/vedio1.mp4",
  },
  {
    id: 2,
    title: "Sehat Ka Bharosa",
    subtitle: "Iodine enriched for healthy living",
    thumbnail: "/Images/Untitled-1-01-2-scaled.jpg",
    video: "/Images/vedio2.mp4",
  },
  {
    id: 3,
    title: "Shuddhta Ki Pehchaan",
    subtitle: "Refined & trusted quality",
    thumbnail: "/Images/Untitled-1-02-1-scaled.jpg",
    video: "/Images/vedio3.mp4",
  },
];

export default function BrandVideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl xl:text-5xl font-bold text-gray-900 mb-16"
        >
          Discover the Incredible Taste & Health Benefits of
          <span className="text-red-600"> Goyal Salt</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* MAIN VIDEO (FIXED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* ❌ yahan motion nahi hai */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                controls
                playsInline
                className="w-full h-[420px] object-cover"
              />
            </div>
          </motion.div>

          {/* VIDEO CARDS */}
          <div className="space-y-6">
            {videos.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveVideo(item)}
                className={`w-full flex gap-4 items-center rounded-2xl p-4 border transition
                ${
                  activeVideo.id === item.id
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-red-400"
                }`}
              >
                <div className="relative w-28 h-20 rounded-xl overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.subtitle}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
