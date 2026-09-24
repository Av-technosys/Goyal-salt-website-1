import React from 'react'
import { 
  Sparkles,
} from "lucide-react";

function Trustedmanufacturer() {
  return (
    <div className="max-w-[1440px] mx-auto my-20 px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-3">
            <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600">
              Pure & Unmatched Quality
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
            Trusted Bulk Salt <span className="text-red-600 font-extrabold">Manufacturer & Supplier in India</span>
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl">
             
 	
Goyal Salt manufactures and supplies high-purity bulk salt for industrial, chemical, water treatment, and food processing applications. With consistent quality, competitive pricing, and reliable pan-India delivery, we are your trusted partner for all bulk salt requirements.
          </p>
        </div>
      </div>
  )
}

export default Trustedmanufacturer