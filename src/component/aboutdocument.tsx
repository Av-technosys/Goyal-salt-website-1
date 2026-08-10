"use client";
import React from "react";
import Image from "next/image";

const AboutDocument = () => {
  return (
    <section className="about-certificates-ui">
      <div className="about-shell-ui">
        
        {/* Heading */}
        <div className="about-certificates-ui__heading">
          <h2 className="text-4xl font-bold text-gray-900">
            Certificates
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our modern plant uses advanced technology and infrastructure for salt refining
            and strict quality checks to deliver top products.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="about-certificates-ui__grid">
          
          {/* Certificate 1 */}
          <div className="about-certificates-ui__certificate">
            <div>
              <Image
                src="/Images/document1.jpg"
                alt="ISO Certificate"
                width={300}
                height={300}
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="about-certificates-ui__certificate">
            <div>
              <Image
                src="/Images/document2.jpg"
                alt="HACCP Certificate"
                width={300}
                height={300}
                className="rounded-lg object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDocument;
