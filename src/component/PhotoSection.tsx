"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Images = [
  { src: "/Images/gallery1.jpg", type: "landscape" },
  { src: "/Images/gallery2.jpg", type: "portrait" },
  { src: "/Images/gallery8.jpg", type: "portrait" },
  { src: "/Images/gallery3.jpg", type: "landscape" },
  { src: "/Images/gallery7.jpg", type: "portrait" },
  { src: "/Images/gallery4.jpg", type: "landscape" },
  { src: "/Images/gallery5.jpg", type: "landscape" },
   { src: "/Images/gallery9.jpg", type: "landscape" },
  { src: "/Images/gallery6.jpg", type: "landscape" },
  
]

const PhotoSection = () => {
  return (
    <section className="w-full bg-red-500/20 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black text-center mb-16"
        >
          Visual Gallery
        </motion.h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-6">

          {Images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl group
                ${img.type === "portrait" ? "row-span-2" : "row-span-1"}
              `}
            >
              <Image
  src={img.src}
  alt="gallery image"
  fill
  className="object-contain bg-white transition-transform duration-700 group-hover:scale-105"
/>


              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default PhotoSection
