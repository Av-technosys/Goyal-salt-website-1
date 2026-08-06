"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Images = [
  "/Images/about1.jpg",
  "/Images/about2.jpg",
  "/Images/about3.jpg",
]

const AboutBanner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )

  return (
    <section className="w-full py-16 sm:py-16 lg:py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-serif font-semibold mb-4">
            About Goyal Salt Limited
          </h1>

          <h3 className="text-lg font-semibold tracking-widest text-gray-800 mb-6">
            A TRUSTED NAME IN SALT MANUFACTURING
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            Goyal Salt Limited was incorporated in the year 2010 under the name
            “Goyal Salt Pvt. Ltd.” and has grown into one of the largest
            manufacturers and dealers of Sodium Chloride (NaCl) in India.
            <br />
            With a strong commitment to quality, consistency, and customer
            satisfaction, the company specializes in manufacturing all varieties
            of salt, catering to diverse industrial, commercial, and consumer
            needs. Backed by modern infrastructure and efficient processes,
            Goyal Salt Limited continues to set high standards in salt production
            while ensuring purity and reliability in every grain.
            <br />
            Driven by innovation and excellence, the company has established
            itself as a trusted partner across industries, steadily strengthening
            its presence in the Indian salt market.
          </p>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {Images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2"
                >
                  <div className="overflow-hidden rounded-xl px-2">
                    <Image
                      src={src}
                      alt="Salt Refinery"
                      width={800}
                      height={500}
                      className="w-full h-[350px] object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  )
}

export default AboutBanner
