"use client";

import { motion } from "framer-motion";
import {
  IconBuildingFactory2,
  IconShirt,
  IconRecycle,
  IconMedicalCross,
} from "@tabler/icons-react";

const items = [
  { title: "Electrolysis Metal Industry", icon: <IconBuildingFactory2 size={34} /> },
  { title: "Textile Industry", icon: <IconShirt size={34} /> },
  { title: "Rubber Industry", icon: <IconRecycle size={34} /> },
  { title: "Pharmaceutical Industry", icon: <IconMedicalCross size={34} /> },
  { title: "Washing Powder Industry", icon: <IconRecycle size={34} /> },
  { title: "Electrolysis Metal Industry", icon: <IconBuildingFactory2 size={34} /> },
  { title: "Textile Industry", icon: <IconShirt size={34} /> },
  { title: "Rubber Industry", icon: <IconRecycle size={34} /> },
];

const CARD_HEIGHT = 96;
const CARD_WIDTH = 300;

const ImportanceOfSalt = () => {
  return (
    <section className="about-industries-ui">
      <div className="about-shell-ui about-industries-ui__inner">
        <div className="about-industries-ui__copy">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug tracking-tight">
            Importance Of Salt in Various Industries
          </h2>
          <p className="text-sm sm:text-base opacity-90 max-w-xl leading-relaxed">
            Our modern plant uses advanced technology and infrastructure for salt
            refining and strict quality checks to deliver top products.
          </p>
        </div>

        <div className="about-industries-ui__rail lg:hidden overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -(items.length * CARD_WIDTH)] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="about-industries-ui__card min-w-[260px]"
              >
                <div className="text-green-600">{item.icon}</div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="about-industries-ui__desktop-rail hidden lg:flex">
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
                  className="about-industries-ui__card w-[310px]"
                >
                  <div className="text-green-600">{item.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceOfSalt;
