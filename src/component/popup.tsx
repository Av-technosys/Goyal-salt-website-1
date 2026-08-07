"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import SaltButton from "./SaltButton";

const Popup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="
        max-w-[92vw]
        md:max-w-[85vw]
        xl:max-w-[800px]
        p-0
        overflow-hidden
        rounded-2xl
        md:rounded-[28px]
        border border-gray-100
      ">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute right-4 top-4 z-50
            w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-600 hover:text-red-600 flex items-center justify-center transition-colors
          "
        >
          <IconX size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">

          {/* IMAGE */}
          <div className="
            flex items-center justify-center
            bg-red-50/50
            px-6 py-6
            md:px-12 md:py-8
          ">
            <Image
              src="/Images/popup.png"
              alt="Goyal Salt Products"
              width={420}
              height={420}
              className="w-full max-w-[280px] md:max-w-none object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="
            flex flex-col justify-center
            px-6 py-7
            text-center
            md:text-left
            md:px-10 md:py-8
          ">
            
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-gray-900">
              <span className="block">Become a</span>
              <span className="block">
                <span className="text-red-600 font-extrabold">Goyal Salt</span> Distributor!
              </span>
            </h2>

            <p className="
              mt-4
              text-xs sm:text-sm
              leading-relaxed
              text-gray-600
              font-normal
            ">
              Partner with one of India’s trusted salt brands. Grow your
              business with our premium-quality salt range and become a
              part of a strong nationwide distribution network.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <SaltButton variant="primary" size="md">
                  <span>Enquire Now</span>
                </SaltButton>
              </Link>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
