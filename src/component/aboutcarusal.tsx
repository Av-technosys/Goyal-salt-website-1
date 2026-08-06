"use client"

import { motion } from "framer-motion"
import {
  IconBuildingFactory2,
  IconShirt,
  IconRecycle,
  IconMedicalCross,
} from "@tabler/icons-react"

const items = [
  { title: "Electrolysis Metal Industry", icon: <IconBuildingFactory2 size={34} /> },
  { title: "Textile Industry", icon: <IconShirt size={34} /> },
  { title: "Rubber Industry", icon: <IconRecycle size={34} /> },
  { title: "Pharmaceutical Industry", icon: <IconMedicalCross size={34} /> },
  { title: "Washing Powder Industry", icon: <IconRecycle size={34} /> },
  { title: "Electrolysis Metal Industry", icon: <IconBuildingFactory2 size={34} /> },
  { title: "Textile Industry", icon: <IconShirt size={34} /> },
  { title: "Rubber Industry", icon: <IconRecycle size={34} /> },
]

const CARD_HEIGHT = 96
const CARD_WIDTH = 300

const AboutCarusal = () => {
  return (
    <section className="w-full rounded-2xl bg-green-600 py-16  sm:py-20 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Importance Of Salt in Various Industries
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-xl">
            Our modern plant uses advanced technology and infrastructure for salt
            refining and strict quality checks to deliver top products.
          </p>
        </div>

       
        {/* ================= MOBILE HORIZONTAL CAROUSEL ================= */}
<div className="lg:hidden overflow-hidden">
  <motion.div
    className="flex gap-4"
    animate={{ x: [0, -(items.length * CARD_WIDTH)] }}
    transition={{
      repeat: Infinity,
      duration: 30, // 🔥 pehle 14 tha → ab slow & smooth
      ease: "linear",
    }}
  >
    {[...items, ...items].map((item, index) => (
      <div
        key={index}
        className="min-w-[260px] bg-white rounded-2xl px-6 py-6 flex items-center gap-4 shadow-lg"
      >
        <div className="text-green-600">{item.icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">
          {item.title}
        </h3>
      </div>
    ))}
  </motion.div>
</div>


        {/* ================= DESKTOP DOUBLE VERTICAL SLIDERS ================= */}
        <div className="hidden lg:flex gap-6 justify-end h-[320px] overflow-hidden">

          {/* SLIDER 1 – UP TO DOWN */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [0, -(items.length * CARD_HEIGHT)] }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
            >
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="w-[380px] bg-white rounded-2xl px-6 py-6 flex items-center gap-4 shadow-lg"
                >
                  <div className="text-green-600">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>

          {/* SLIDER 2 – DOWN TO UP */}
          {/* <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [-(items.length * CARD_HEIGHT), 0] }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
            >
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="w-[280px] bg-white rounded-2xl px-6 py-6 flex items-center gap-4 shadow-lg"
                >
                  <div className="text-green-600">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default AboutCarusal
