"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";

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
      ">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute right-4 top-4 z-50
            rounded-full  
        
          "
        >
          
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">

          {/* IMAGE */}
          <div className="
            flex items-center justify-center
            bg-pink-50
            px-6 py-6
            md:px-12 md:py-8
          ">
            <Image
              src="/Images/popup.png"
              alt="Goyal Salt Products"
              width={420}
              height={420}
              className="w-full max-w-[280px] md:max-w-none object-contain"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="
            flex flex-col justify-center
            px-6 py-7
            text-center
            md:text-left
            md:px-12 md:py-8
          ">
            
            <h2
  className="
    text-[24px]
    md:text-[34px]
    font-bold
    leading-snug
  "
>
  <span className="block">Become a</span>
  <span className="block">
    <span className="text-red-600">Goyal Salt</span> Distributor!
  </span>
</h2>


            <p className="
              mt-4
              text-[14px]
              md:text-[15.5px]
              leading-relaxed
              text-gray-600
            ">
              Partner with one of India’s trusted salt brands. Grow your
              business with our premium-quality salt range and become a
              part of a strong nationwide distribution network.
            </p>
            <Link href="/contact">
            <Button
  className="
    mt-6
    w-full
    md:w-fit
    self-center md:self-start
    rounded-full
    bg-red-600
    px-10 py-5
    text-base font-semibold
    hover:bg-red-700
    cursor-pointer
  "
>
  Enquire Now
</Button>
</Link>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
