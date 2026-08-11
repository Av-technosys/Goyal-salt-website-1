"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  TrendingUp 
} from "lucide-react";

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup smoothly on load
    const timer = setTimeout(() => {
      setOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent 
        showCloseButton={false}
        className="
          max-w-[94vw]
          sm:max-w-[88vw]
          md:max-w-[820px]
          p-0
          overflow-hidden
          rounded-3xl
          sm:rounded-[32px]
          border border-red-100/90
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.35)]
        "
      >
        {/* Accessible Dialog Title & Description */}
        <DialogTitle className="sr-only">Become a Goyal Salt Distributor</DialogTitle>
        <DialogDescription className="sr-only">
          Partner with one of India's trusted salt brands. Apply for distributorship and grow your business today.
        </DialogDescription>

        {/* Custom Premium Close Button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="
            absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-50
            w-9 h-9 sm:w-10 sm:h-10 rounded-full
            bg-white/90 hover:bg-red-50 backdrop-blur-md
            border border-gray-200/80 hover:border-red-200
            text-gray-600 hover:text-red-600
            flex items-center justify-center
            shadow-md hover:shadow-lg
            transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer
          "
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 relative overflow-hidden">
          
          {/* ==================================================== */}
          {/* LEFT SIDE: Visual Mockup Showcase (5 cols)           */}
          {/* ==================================================== */}
          <div className="
            md:col-span-5
            relative flex flex-col items-center justify-center
            bg-gradient-to-br from-red-500/15 via-rose-500/5 to-amber-500/10
            p-6 sm:p-8 md:p-6
            border-b md:border-b-0 md:border-r border-red-100/60
            overflow-hidden
          ">
            {/* Ambient Background Glow Circles */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="self-start mb-2 sm:mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-red-200/80 text-red-700 text-[11px] font-bold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                <span>Certified Purity</span>
              </div>
            </div>

            {/* Product Range Image */}
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] my-1 flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <Image
                src="/Images/popup.png"
                alt="Goyal Salt Products Range"
                fill
                sizes="(max-width: 768px) 300px, 350px"
                className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>

            {/* Bottom Floating Tagline */}
            <div className="mt-2 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-950/85 backdrop-blur-md text-amber-300 text-[10.5px] sm:text-[11px] font-semibold shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>100% Vacuum Refined & Iodised</span>
              </span>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT SIDE: Offer Details & CTA Action (7 cols)      */}
          {/* ==================================================== */}
          <div className="
            md:col-span-7
            flex flex-col justify-between
            p-6 sm:p-8 md:p-9
            bg-white
          ">
            <div>
              {/* Category Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
                <span>Distributorship Partnership</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-[28px] font-black leading-tight text-gray-950 tracking-tight">
                Become a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-600 to-rose-600">
                  Goyal Salt
                </span>{" "}
                Distributor!
              </h2>

              {/* Subtitle description */}
              <p className="mt-2.5 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                Partner with India’s trusted salt brand. Expand your trade business with our premium salt range, high profit margins, and reliable nationwide supply.
              </p>

              {/* Trust Value Points */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>High Profit Margins & Trade Incentives</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PAN-India Supply Stability & Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trusted by Millions of Indian Kitchens</span>
                </div>
              </div>
            </div>

            {/* Actions & Support Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link 
                href="/contact" 
                onClick={() => setOpen(false)}
                className="
                  inline-flex items-center justify-center gap-2.5
                  px-6 py-3 rounded-full
                  bg-red-600 hover:bg-red-700
                  text-white font-extrabold text-sm
                  shadow-[0_8px_20px_rgba(220,38,38,0.35)] hover:shadow-[0_12px_24px_rgba(220,38,38,0.45)]
                  transition-all duration-200 transform hover:scale-[1.02] active:scale-95 group cursor-pointer
                "
              >
                <span>Apply For Distributorship</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+917568018883"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-red-600 transition-colors self-center sm:self-auto"
              >
                <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                <span>+91-7568018883</span>
              </a>
            </div>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
