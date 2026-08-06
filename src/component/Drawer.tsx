"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IconX, IconChevronDown } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  Drawer as UIDrawer,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";


interface MobileDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileDrawer = ({ open, setOpen }: MobileDrawerProps) => {
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);
  const [governanceOpen, setGovernanceOpen] = useState(false);
  const [listingOpen, setListingOpen] = useState(false);
const [openFY, setOpenFY] = useState<string | null>(null);
const [noticeOpen, setNoticeOpen] = useState(false);
const [agmOpen, setAgmOpen] = useState(false);
const [boardMeetingOpen, setBoardMeetingOpen] = useState(false);

useEffect(() => {
  if (open) {
    setOpen(false);
  }
}, [pathname]);


  return (
    <UIDrawer open={open} direction="left" onOpenChange={setOpen}>
     <DrawerContent
  className="
    fixed left-0 top-0 h-screen
    w-[80%] max-w-sm
    rounded-none
    flex flex-col
    data-[state=open]:slide-in-from-left
    data-[state=closed]:slide-out-to-left
    duration-300
  "
>

        {/* Header */}
        <DrawerHeader className="relative border-b h-14">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <IconX size={22} />
          </button>
        </DrawerHeader>

        {/* Navigation */}
      <nav className="flex flex-col text-sm overflow-y-auto flex-1 overscroll-contain">


          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b"
          >
            Home
          </Link>

          {/* About */}
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex justify-between items-center px-4 py-3 border-b font-medium"
          >
            About
            <IconChevronDown
              size={16}
              className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
            />
          </button>

          {aboutOpen && (
  <div className="bg-gray-50">
    <Link href="/about-us" className="block px-6 py-2">
      About Us
    </Link>

    <Link href="/history-our-achievement" className="block px-6 py-2">
      History & Our Achievements
    </Link>

    <Link href="/directors" className="block px-6 py-2">
      Directors
    </Link>

    <Link href="/chairman-desk" className="block px-6 py-2">
      Chairman’s Desk
    </Link>

    <Link href="/message-from-md" className="block px-6 py-2">
      Message from MD
    </Link>

    <Link href="/vision-mission" className="block px-6 py-2">
      Vision & Mission
    </Link>

    <Link href="/privacy-policy" className="block px-6 py-2">
      Privacy Policy
    </Link>
  </div>
)}
  

          {/* Who We Are */}
          <button
            onClick={() => setWhoOpen(!whoOpen)}
            className="flex justify-between items-center px-4 py-3 border-b font-medium"
          >
            Who We Are
            <IconChevronDown
              size={16}
              className={`transition-transform ${whoOpen ? "rotate-180" : ""}`}
            />
          </button>

          {whoOpen && (
            <div className="bg-gray-50">
              <Link
                href="/journey"
                onClick={() => setOpen(false)}
                className="block px-6 py-2"
              >
                Journey
              </Link>
              <Link
                href="/infrastructures"
                onClick={() => setOpen(false)}
                className="block px-6 py-2"
              >
                Infrastructures
              </Link>
              <Link
                href="/quality-control"
                onClick={() => setOpen(false)}
                className="block px-6 py-2"
              >
                Quality Control
              </Link>
              <Link
              href="/why-goyal-salt"
              onClick={() => setOpen(false)}
              className="block px-6 py-2"
              >
  Why Goyal Salt Ltd ?
</Link>
            </div>
          )}

          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b"
          >
            
Products
          </Link>

          {/* Investors */}
          <button
            onClick={() => setInvestorOpen(!investorOpen)}
            className="flex justify-between items-center px-4 py-3 border-b font-medium"
          >
            Investors
            <IconChevronDown
              size={16}
              className={`transition-transform ${investorOpen ? "rotate-180" : ""}`}
            />
          </button>

          {investorOpen && (
  <div className="bg-gray-50">

    <Link href="/annual-return" className="block px-6 py-2">
      Annual Return
    </Link>

    <Link href="/annual-report" className="block px-6 py-2">
      Annual Report
    </Link>

    <Link href="/csr-document" className="block px-6 py-2">
      CSR
    </Link>

    <Link href="/dur-46-lodr" className="block px-6 py-2">
      Disclosure Under Regulation 46 of LODR
    </Link>

    <Link href="/financials" className="block px-6 py-2">
      Financials
    </Link>

    {/* Governance */}
    <button
      onClick={() => setGovernanceOpen(!governanceOpen)}
      className="flex justify-between items-center w-full px-6 py-2 font-medium"
    >
      Governance
      <IconChevronDown
        size={14}
        className={`transition-transform ${
          governanceOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {governanceOpen && (
      <div className="bg-gray-100 ml-4">
        <Link href="/governance/codes-policies" className="block px-6 py-2">
          Codes & Policies
        </Link>

        <Link href="/governance/committees" className="block px-6 py-2">
          Committees
        </Link>

        <Link href="/governance/shareholding-pattern" className="block px-6 py-2">
          Shareholding Pattern
        </Link>
      </div>
    )}

    <Link href="/investor-grievance" className="block px-6 py-2">
      Investor Grievance
    </Link>

   {/* Listing Compliance */}
<button
  onClick={() => setListingOpen(!listingOpen)}
  className="flex justify-between items-center w-full px-6 py-2 font-medium"
>
  Listing Compliance
  <IconChevronDown
    size={14}
    className={`transition-transform ${
      listingOpen ? "rotate-180" : ""
    }`}
  />
</button>

{listingOpen && (
  <div className="bg-gray-100 ml-4">

    {/* FY 2023-24 */}
    <button
      onClick={() =>
        setOpenFY(openFY === "2023-24" ? null : "2023-24")
      }
      className="flex justify-between items-center w-full px-6 py-2"
    >
      F.Y. 2023-24
      <IconChevronDown
        size={14}
        className={`transition-transform ${
          openFY === "2023-24" ? "rotate-180" : ""
        }`}
      />
    </button>

    {openFY === "2023-24" && (
      <div className="bg-gray-200 ml-4">
        <Link href="/listing-compliance/2023-24/q1" className="block px-6 py-2">Quarter 1</Link>
        <Link href="/listing-compliance/2023-24/q2" className="block px-6 py-2">Quarter 2</Link>
        <Link href="/listing-compliance/2023-24/q3" className="block px-6 py-2">Quarter 3</Link>
        <Link href="/listing-compliance/2023-24/q4" className="block px-6 py-2">Quarter 4</Link>
      </div>
    )}

    {/* FY 2024-25 */}
    <button
      onClick={() =>
        setOpenFY(openFY === "2024-25" ? null : "2024-25")
      }
      className="flex justify-between items-center w-full px-6 py-2 "
    >
      F.Y. 2024-25
      <IconChevronDown
        size={14}
        className={`transition-transform ${
          openFY === "2024-25" ? "rotate-180" : ""
        }`}
      />
    </button>

    {openFY === "2024-25" && (
      <div className="bg-gray-200 ml-4">
        <Link href="/listing-compliance/2024-25/q3" className="block px-6 py-2">
          Quarter 3
        </Link>
        <Link href="/listing-compliance/2024-25/q4" className="block px-6 py-2">
          Quarter 4
        </Link>
      </div>
    )}

   
<button
  onClick={() =>
    setOpenFY(openFY === "2025-26" ? null : "2025-26")
  }
  className="flex justify-between items-center w-full px-6 py-2"
>
  F.Y. 2025-26
  <IconChevronDown
    size={14}
    className={`transition-transform ${
      openFY === "2025-26" ? "rotate-180" : ""
    }`}
  />
</button>

{openFY === "2025-26" && (
  <div className="bg-gray-200 ml-4">
    <Link
      href="/listing-compliance/2025-26/q1"
      className="block px-6 py-2"
    >
      Quarter 1
    </Link>

    <Link
      href="/listing-compliance/2025-26/q2"
      className="block px-6 py-2"
    >
      Quarter 2
    </Link>
    <Link
      href="/listing-compliance/2025-26/q3"
      className="block px-6 py-2"
    >
      Quarter 3
    </Link>
  </div>
)}


  </div>
)}



    <Link href="/material-contracts-agreements" className="block px-6 py-2">
      Material Contracts & Agreements
    </Link>

   {/* Notices & Announcements */}
<button
  onClick={() => setNoticeOpen(!noticeOpen)}
  className="flex justify-between items-center w-full px-6 py-2 font-medium"
>
  Notices & Announcements
  <IconChevronDown
    size={14}
    className={`transition-transform ${noticeOpen ? "rotate-180" : ""}`}
  />
</button>

{noticeOpen && (
  <div className="bg-gray-100 ml-4">

    {/* AGM Disclosures */}
    <button
      onClick={() => setAgmOpen(!agmOpen)}
      className="flex justify-between items-center w-full px-6 py-2"
    >
      AGM Disclosures
      <IconChevronDown
        size={14}
        className={`transition-transform ${agmOpen ? "rotate-180" : ""}`}
      />
    </button>

    {agmOpen && (
      <div className="bg-gray-200 ml-4">
        <Link
          href="/notices-announcements/agm/2024-25"
          className="block px-6 py-2"
        >
          F.Y. 2024-25
        </Link>

        <Link
          href="/notices-announcements/agm/2023-24"
          className="block px-6 py-2"
        >
          F.Y. 2023-24
        </Link>
      </div>
    )}

   {/* Board Meetings Disclosure */}
<button
  onClick={() => setBoardMeetingOpen(!boardMeetingOpen)}
  className="flex justify-between items-center w-full px-6 py-2"
>
  Board Meetings Disclosure
  <IconChevronDown
    size={14}
    className={`transition-transform ${
      boardMeetingOpen ? "rotate-180" : ""
    }`}
  />
</button>

{boardMeetingOpen && (
  <div className="bg-gray-200 ml-4">
    <Link
      href="/notices-announcements/board-meetings-disclosure/2025-26"
      className="block px-6 py-2"
    >
      F.Y. 2025-26
    </Link>

    <Link
      href="/notices-announcements/board-meetings-disclosure/2024-25"
      className="block px-6 py-2"
    >
      F.Y. 2024-25
    </Link>

    <Link
      href="/notices-announcements/board-meetings-disclosure/2023-24"
      className="block px-6 py-2"
    >
      F.Y. 2023-24
    </Link>
  </div>
)}


    <Link
      href="/notices-announcements/disclosures-under-regulation-30"
      className="block px-6 py-2"
    >
      Disclosures Under Regulation 30
    </Link>

    <Link
      href="/notices-announcements/investors-meet-disclosure"
      className="block px-6 py-2"
    >
      Investors Meet Disclosure
    </Link>

    <Link
      href="/notices-announcements/others"
      className="block px-6 py-2"
    >
      Others
    </Link>
  </div>
)}

  </div>
)}

          <Link
            href="/offer-documents"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b"
          >
           Offer Documents
          </Link>

              <Link
            href="/csr"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b"
          >
           CSR
          </Link>

      <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b"
          >
           Gallery
          </Link>

        <Link
  href="https://www.nseindia.com/get-quote/equity/GOYALSALT/Goyal-Salt-Limited"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
  className="px-4 py-3 border-b block"
>
  NSE
</Link>

          
         <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-3"
          >
            Contact Us
          </Link>
        </nav>
      </DrawerContent>
    </UIDrawer>
  );
};

export default MobileDrawer;
