"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import {
  IconMenu2,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import MobileDrawer from "./Drawer";

/* ---------- Nav Item (Desktop) ---------- */
const NavItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="relative group whitespace-nowrap">
    <div className="flex items-center gap-1 cursor-pointer text-white font-medium tracking-wide ">
      {label}
      <IconChevronDown
        size={14}
        className="transition-transform duration-200 group-hover:rotate-180"
      />
    </div>

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    <div className="absolute left-0 top-full h-4 w-full"></div>

    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl min-w-[260px] z-50 rounded-sm">
      <div className="py-2">{children}</div>
    </div>
  </div>
);

/* ---------- Dropdown Link ---------- */
const DropdownLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="block px-6 py-2 text-sm text-gray-800 
             hover:bg-red-500/30 hover:text-red-600 
             transition whitespace-nowrap"
  >
    {label}
  </Link>
);

/* ---------- Navbar ---------- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        key={pathname}
        className="bg-red-600 w-full shadow-md relative z-10"
      >
        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="flex items-center h-24">
            {/* Logo */}
            <Link href="/" className="z-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Goyal Salt"
                width={100}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              className="ml-auto md:hidden text-white"
            >
              <IconMenu2 size={32} />
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-5 absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-sm">
              <Link href="/" className="text-white font-medium">
                Home
              </Link>

              <NavItem label="About">
                <DropdownLink href="/about-us" label="About Us" />
                <DropdownLink
                  href="/history-our-achievement"
                  label="History & Our Achievements"
                />
                <DropdownLink href="/directors" label="Directors" />
                <DropdownLink href="/chairman-desk" label="Chairman’s Desk" />
                <DropdownLink href="/message-from-md" label="Message from MD" />
                <DropdownLink href="/vision-mission" label="Vision & Mission" />
                <DropdownLink href="/privacy-policy" label="Privacy Policy" />
              </NavItem>

              <NavItem label="Who We Are">
                <DropdownLink href="/journey" label="Journey" />
                <DropdownLink href="/infrastructures" label="Infrastructures" />
                <DropdownLink href="/quality-control" label="Quality Control" />
                <DropdownLink
                  href="/why-goyal-salt"
                  label="Why Goyal Salt Ltd ?"
                />
              </NavItem>

              <Link href="/products" className="text-white font-medium">
                Products
              </Link>

              <NavItem label="Investors">
                <DropdownLink href="/annual-return" label="Annual Return" />
                <DropdownLink href="/annual-report" label="Annual Report" />
                <DropdownLink href="/csr-document" label="CSR" />
                <DropdownLink
                  href="/dur-46-lodr"
                  label="Disclosure under Regulation 46 of LODR"
                />
                <DropdownLink href="/financials" label="Financials" />
                <div className="relative group/governance">
                  <div className="flex items-center justify-between px-5 py-2 text-sm  cursor-pointer hover:bg-gray-100">
                    Governance
                    <IconChevronRight size={16} />
                  </div>

                  <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover/governance:opacity-100 group-hover/governance:visible transition-all">
                    <DropdownLink
                      href="/governance/codes-policies"
                      label="Codes & Policies"
                    />
                    <DropdownLink
                      href="/governance/committees"
                      label="Committees"
                    />
                    <DropdownLink
                      href="/governance/shareholding-pattern"
                      label="Shareholding Pattern"
                    />
                  </div>
                </div>
                <DropdownLink
                  href="/investor-grievance"
                  label="Investor Grievance"
                />

                <div className="relative group/listing">
                  {/* Listing Compliance */}
                  <div className="flex items-center justify-between px-5 py-2 text-sm cursor-pointer hover:bg-gray-100">
                    Listing Compliance
                    <IconChevronRight size={16} />
                  </div>

                  {/* hover bridge */}
                  <div className="absolute left-full top-0 w-4 h-full"></div>

                  {/* FY container */}
                  <div
                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-xl
               opacity-0 invisible
               group-hover/listing:opacity-100
               group-hover/listing:visible
               transition-all"
                  >
                    {/* ================= FY 2023-24 ================= */}
                    <div className="relative group/fy">
                      <div className="flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                        F.Y. 2023-24
                        <IconChevronRight size={14} />
                      </div>

                      <div className="absolute left-full top-0 w-4 h-full"></div>

                      <div
                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl
                   opacity-0 invisible
                   group-hover/fy:opacity-100
                   group-hover/fy:visible
                   transition-all"
                      >
                        <DropdownLink
                          href="/listing-compliance/2023-24/q3"
                          label="Quarter 3"
                        />
                        <DropdownLink
                          href="/listing-compliance/2023-24/q4"
                          label="Quarter 4"
                        />
                      </div>
                    </div>

                    {/* ================= FY 2024-25 ================= */}
                    <div className="relative group/fy2">
                      <div className="flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                        F.Y. 2024-25
                        <IconChevronRight size={14} />
                      </div>

                      <div className="absolute left-full top-0 w-4 h-full"></div>

                      <div
                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl
                   opacity-0 invisible
                   group-hover/fy2:opacity-100
                   group-hover/fy2:visible
                   transition-all"
                      >
                        <DropdownLink
                          href="/listing-compliance/2024-25/q1"
                          label="Quarter 1"
                        />
                        <DropdownLink
                          href="/listing-compliance/2024-25/q2"
                          label="Quarter 2"
                        />
                        <DropdownLink
                          href="/listing-compliance/2024-25/q3"
                          label="Quarter 3"
                        />
                        <DropdownLink
                          href="/listing-compliance/2024-25/q4"
                          label="Quarter 4"
                        />
                      </div>
                    </div>

                    {/* ================= FY 2025-26 ================= */}
                    <div className="relative group/fy3">
                      <div className="flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                        F.Y. 2025-26
                        <IconChevronRight size={14} />
                      </div>

                      <div className="absolute left-full top-0 w-4 h-full"></div>

                      <div
                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl
                   opacity-0 invisible
                   group-hover/fy3:opacity-100
                   group-hover/fy3:visible
                   transition-all"
                      >
                        <DropdownLink
                          href="/listing-compliance/2025-26/q1"
                          label="Quarter 1"
                        />
                        <DropdownLink
                          href="/listing-compliance/2025-26/q2"
                          label="Quarter 2"
                        />
                        <DropdownLink
                          href="/listing-compliance/2025-26/q3"
                          label="Quarter 3"
                        />
                        <DropdownLink
                          href="/listing-compliance/2025-26/q4"
                          label="Quarter 4"
                        />
                      </div>
                    </div>

                    <div className="relative group/fy3">
                      <div className="flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                        F.Y. 2026-27
                        <IconChevronRight size={14} />
                      </div>

                      <div className="absolute left-full top-0 w-4 h-full"></div>

                      <div
                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl
                   opacity-0 invisible
                   group-hover/fy3:opacity-100
                   group-hover/fy3:visible
                   transition-all"
                      >
                        <DropdownLink
                          href="/listing-compliance/2026-27/q1"
                          label="Quarter 1"
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>

                <DropdownLink
                  href="/material-contracts-agreements"
                  label="Material Contracts and Agreements"
                />

                <div className="relative group/notices">
                  {/* Parent Item */}
                  <div className="flex items-center justify-between px-5 py-2 text-sm cursor-pointer hover:bg-gray-100">
                    Notices and Announcements
                    <IconChevronRight size={16} />
                  </div>

                  {/* Hover bridge */}
                  <div className="absolute left-full top-0 w-4 h-full"></div>

                  {/* Dropdown */}
                  <div
                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-xl
               opacity-0 invisible
               group-hover/notices:opacity-100
               group-hover/notices:visible
               transition-all"
                  >
                    {/* AGM Disclosures */}
                    <div className="relative group/agm">
                      <div className="flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                        AGM Disclosures
                        <IconChevronRight size={14} />
                      </div>

                      <div className="absolute left-full top-0 w-4 h-full"></div>

                      <div
                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl
                   opacity-0 invisible
                   group-hover/agm:opacity-100
                   group-hover/agm:visible
                   transition-all"
                      >
                        <DropdownLink
                          href="/notices-announcements/agm/2024-25"
                          label="F.Y. 2024-25"
                        />
                        <DropdownLink
                          href="/notices-announcements/agm/2023-24"
                          label="F.Y. 2023-24"
                        />
                      </div>
                    </div>

                    {/* Board Meetings */}
                    <div className="relative group/board">
                      <div className="flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                        Board Meetings Disclosure
                        <IconChevronRight size={14} />
                      </div>

                      <div className="absolute left-full top-0 w-4 h-full"></div>

                      <div
                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl
                   opacity-0 invisible
                   group-hover/board:opacity-100
                   group-hover/board:visible
                   transition-all"
                      >
                        <DropdownLink
                          href="/notices-announcements/board-meetings-disclosure/2026-27"
                          label="F.Y. 2026-27"
                        />
                        <DropdownLink
                          href="/notices-announcements/board-meetings-disclosure/2025-26"
                          label="F.Y. 2025-26"
                        />
                        <DropdownLink
                          href="/notices-announcements/board-meetings-disclosure/2024-25"
                          label="F.Y. 2024-25"
                        />
                        <DropdownLink
                          href="/notices-announcements/board-meetings-disclosure/2023-24"
                          label="F.Y. 2023-24"
                        />
                      </div>
                    </div>

                    {/* Direct Links */}
                    <DropdownLink
                      href="/notices-announcements/disclosures-under-regulation-30"
                      label="Disclosures Under Regulation 30"
                    />
                    <DropdownLink
                      href="/notices-announcements/investors-meet-disclosure"
                      label="Investors Meet Disclosure"
                    />
                    <DropdownLink
                      href="/notices-announcements/others"
                      label="Others"
                    />
                  </div>
                </div>
              </NavItem>

              <Link href="/offer-documents" className="text-white font-medium">
                Offer Documents
              </Link>
              <Link href="/csr" className="text-white font-medium">
                CSR
              </Link>
              <Link href="/gallery" className="text-white font-medium">
                Gallery
              </Link>
              <Link
                href="https://www.nseindia.com/get-quote/equity/GOYALSALT/Goyal-Salt-Limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium"
              >
                NSE
              </Link>

              <Link href="/contact" className="text-white font-medium">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* ---------- Mobile Drawer (TOP LEFT → LEFT SLIDE) ---------- */}
      <MobileDrawer open={open} setOpen={setOpen} />
    </>
  );
}
