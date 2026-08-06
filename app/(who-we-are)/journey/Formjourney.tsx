"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



const Formjourney = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const items = [
    {
      title: "1975 – Joined Family Business",
      desc:
        "The family legacy began in 1975, late Mr. Kunj Bihari joined family business medical store at 15 years of age, marking the foundation of what would grow into a large-scale enterprise.",
    },
    {
      title: "1980 – New Medical Store",
      desc: "Diversification started with the opening of a medical store, reflecting the entrepreneurial spirit.",
    },
    {
      title: "1985 – First Iodised Salt Plant",
      desc: "Started North India's first Iodised Salt plant under the name of “M/s Goyal Iodised Salt Works” at Nawa.",
    },
    {
      title: "2005 – Rajesh & Pramesh Joined",
      desc: "Mr. Rajesh Goyal and Mr. Pramesh Goyal joined the business with new ideas and added strength to the Company.",
    },
    {
      title: "2009 – Salt Washery Established",
      desc: "Established Rajasthan's one of the largest Salt Washery.",
    },
    {
      title: "2010 – Lokesh Joined Business",
      desc: "Mr. Lokesh Goyal also joined the family business under the guidance of Mr. K B Goyal Ji and his brothers.",
    },
    {
      title: "2011 – Goyal Salt Pvt. Ltd.",
      desc: "The foundation of M/s Goyal Salt Private Limited was set up and Triple Refined Free Flow Salt refinery was started with commercial production.",
    },
    {
      title: "2015 – Capacity 2.5 Lakh MT",
      desc: "Increased the production capacity to 2,50,000 MT of refined salt per annum.",
    },
    {
      title: "2016 – Gujarat Expansion",
      desc: "Promoters of GSL entered a new venture namely M/s Shree Shakambhar Chemfood Industries, Santhalpur, Gujarat, with a capacity of 2,50,000 MT per annum of refined salt.",
    },
    {
      title: "2023 – Phalodi Salt Refinery",
      desc: "Promoters of GSL entered into another salt refinery venture at Phalodi, Rajasthan with a capacity of 100,000 MT per annum.",
    },
    {
      title: "2025 – India’s Largest Salt Refinery",
      desc: "Launched India's largest Salt Refinery with an investment of Rs. 80 Crore at Chirai Moti, Gujarat.",
    },
  ];

  return (
    <div>
      

      <section
        ref={containerRef}
        className="relative max-w-5xl mx-auto py-16 sm:py-20 px-4 sm:px-0"
      >
        {/* LINE */}
        <div
          className="absolute"
          style={{
            left: "1.25rem",
            top: "4.5rem",
            height: "calc(100% - 9rem)",
          }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300" />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[4px] bg-red-600 origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-14 sm:space-y-20 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-24 lg:pl-40 pr-2 sm:pr-10"
            >
              <div
                className="absolute top-6 sm:top-1/2 sm:-translate-y-1/2
                left-[1.25rem] -translate-x-1/2
                h-3 w-3 sm:h-4 sm:w-4
                bg-red-600 rounded-full z-10"
              />

              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="h-28 w-28 rounded-lg overflow-hidden shrink-0">
                  <img
                    src="/logo.png"
                    alt="Journey"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-red-600 font-bold text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Formjourney;
