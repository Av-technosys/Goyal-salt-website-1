"use client";
import React from "react";
import Image from "next/image";

const AboutDocument = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Certificates
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our modern plant uses advanced technology and infrastructure for salt refining
            and strict quality checks to deliver top products.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Certificate 1 */}
          <div className="flex justify-center">
            <div className="border rounded-xl shadow-lg p-4 hover:shadow-xl transition overflow-hidden">
              <Image
                src="/Images/document1.jpg"
                alt="ISO Certificate"
                width={300}
                height={300}
                className="rounded-lg object-contain transition-transform duration-500 ease-in-out hover:scale-150"
              />
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="flex justify-center">
            <div className="border rounded-xl shadow-lg p-4 hover:shadow-xl transition overflow-hidden">
              <Image
                src="/Images/document2.jpg"
                alt="HACCP Certificate"
                width={300}
                height={300}
                className="rounded-lg object-contain transition-transform duration-500 ease-in-out hover:scale-150"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDocument;
