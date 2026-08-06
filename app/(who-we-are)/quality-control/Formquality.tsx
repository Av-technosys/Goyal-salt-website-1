"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const licenses = [
  "IS: 7224 for Iodised Salt from BIS",
  "IS: 16232 for Double Fortified Salt from BIS",
  "FOSTAC – Food Safety Training & Certification (FSSAI)",
  "ISO 22000:2018 Certification",
  "License under FSS Act, 2006 from FSSAI, New Delhi",
];

export default function Formquality() {
  return (
    <section className="bg-[#fafafa] py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/Images/qualitylab.jpg" // replace with your image
              alt="Quality Lab"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#7a5a3a] leading-tight">
              World-Class Quality  
              <br /> Testing Laboratory
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We have a well-equipped laboratory with qualified technicians and
              a team of highly trained chemists. They ensure round-the-clock
              monitoring of production quality to maintain consistent excellence.
            </p>
              <p className="mt-5 text-sm text-gray-700 leading-relaxed">
            For quality testing purposes, random samples are drawn from various
            points of the online production line every 15 minutes. Only after
            meeting all quality parameters is a batch approved for packaging.
          </p>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Our state-of-the-art, fully automated and highly technical plant is
            supported by a dedicated R&D team that continuously works towards
            improving product quality and customization for complete customer
            satisfaction.
          </p>
          </div>
        </div>


        {/* ================= LICENSES SECTION ================= */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Licenses & Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {licenses.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TRAINING NOTE ================= */}
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h4 className="text-2xl font-semibold text-gray-900 mb-14">
            Continuous Training & Compliance
          </h4>

          <p className="text-sm  text-red-700 leading-relaxed">
            Our team regularly undergoes training and certification programs
            conducted by FSSAI and BIS to stay aligned with the latest food safety
            standards and best industry practices.
          </p>
        </div>

      </div>
    </section>
  );
}
