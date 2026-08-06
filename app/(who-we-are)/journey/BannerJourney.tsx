import React from "react";
import Image from "next/image";

const BannerJourney = () => {
  return (
    <section className="w-full py-10 md:py-12 flex flex-col items-center gap-6 md:gap-8">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 text-center">
        Our Journey
      </h1>

      {/* Image */}
      <div className="w-full  ">
        <Image
          src="/Images/journey.jpg"
          alt="Our Journey"
          width={1600}
          height={800}
          className="w-full h-[220px] sm:h-[300px] md:h-auto rounded-xl object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default BannerJourney;
