"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  IconMenu2,
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconTrendingUp,
} from "@tabler/icons-react";
import MobileDrawer from "./Drawer";
import SaltButton from "./SaltButton";

/* ---------- Nav Item (Desktop) ---------- */
const NavItem = ({
  label,
  children,
  isActive = false,
}: {
  label: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => (
  <div className="relative group py-2">
    <button
      type="button"
      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-red-50 text-red-600 font-semibold"
          : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
      }`}
    >
      <span>{label}</span>
      <IconChevronDown
        size={14}
        className="transition-transform duration-300 group-hover:rotate-180 text-gray-400 group-hover:text-red-600"
      />
    </button>

    {/* Hover bridge to keep dropdown open smoothly */}
    <div className="absolute left-0 top-full h-2 w-full"></div>

    {/* Dropdown Container */}
    <div
      className="absolute left-0 top-[calc(100%+4px)] hidden group-hover:block bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[260px] z-50 overflow-hidden transform origin-top-left transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      style={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(220, 38, 38, 0.08)",
      }}
    >
      <div className="p-2 space-y-0.5">{children}</div>
    </div>
  </div>
);

/* ---------- Dropdown Link ---------- */
const DropdownLink = ({
  href,
  label,
  target,
  rel,
}: {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 group/item ${
        isActive
          ? "bg-red-50 text-red-600 font-semibold"
          : "text-gray-700 hover:bg-red-50/80 hover:text-red-600 font-medium"
      }`}
    >
      <span>{label}</span>
      {target === "_blank" && (
        <IconExternalLink
          size={14}
          className="opacity-50 group-hover/item:opacity-100 transition-opacity"
        />
      )}
    </Link>
  );
};

/* ---------- Navbar Component ---------- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAboutActive = [
    "/about-us",
    "/history-our-achievement",
    "/directors",
    "/chairman-desk",
    "/message-from-md",
    "/vision-mission",
    "/privacy-policy",
  ].includes(pathname);

  const isWhoWeAreActive = [
    "/journey",
    "/infrastructures",
    "/quality-control",
    "/why-goyal-salt",
  ].includes(pathname);

  const isInvestorsActive =
    pathname.startsWith("/annual-") ||
    pathname.startsWith("/governance") ||
    pathname.startsWith("/listing-compliance") ||
    pathname.startsWith("/notices-announcements") ||
    ["/csr-document", "/dur-46-lodr", "/financials", "/investor-grievance", "/material-contracts-agreements"].includes(pathname);

  return (
    <>
      <header
        key={pathname}
        className={`sticky top-0 w-full z-40 transition-all duration-300 bg-white ${
          scrolled
            ? "shadow-lg border-b border-gray-100 bg-white/95 backdrop-blur-md"
            : "border-b border-gray-100 shadow-sm"
        }`}
      >
        {/* Top Mini Red Accent Line */}
        <div className="h-1 bg-red-600 w-full"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-3 transition-transform hover:scale-[1.02] duration-200 py-1"
            >
              <Image
                src="/logo.png"
                alt="Goyal Salt Logo"
                width={120}
                height={60}
                priority
                className="object-contain max-h-14 w-auto"
              />
            </Link>

            {/* Desktop Menu Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-sm font-medium">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-red-50 text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <NavItem label="About" isActive={isAboutActive}>
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

              {/* Who We Are Dropdown */}
              <NavItem label="Who We Are" isActive={isWhoWeAreActive}>
                <DropdownLink href="/journey" label="Journey" />
                <DropdownLink href="/infrastructures" label="Infrastructures" />
                <DropdownLink href="/quality-control" label="Quality Control" />
                <DropdownLink
                  href="/why-goyal-salt"
                  label="Why Goyal Salt Ltd ?"
                />
              </NavItem>

              {/* Products Direct Link */}
              <Link
                href="/products"
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  pathname === "/products"
                    ? "bg-red-50 text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
                }`}
              >
                Products
              </Link>

              {/* Investors Multi-level Dropdown */}
              <NavItem label="Investors" isActive={isInvestorsActive}>
                <DropdownLink href="/annual-return" label="Annual Return" />
                <DropdownLink href="/annual-report" label="Annual Report" />
                <DropdownLink href="/csr-document" label="CSR" />
                <DropdownLink
                  href="/dur-46-lodr"
                  label="Disclosure under Regulation 46 of LODR"
                />
                <DropdownLink href="/financials" label="Financials" />

                {/* Governance Flyout */}
                <div className="relative group/governance">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium cursor-pointer transition-all">
                    <span>Governance</span>
                    <IconChevronRight size={15} className="text-gray-400 group-hover/governance:text-red-600" />
                  </div>

                  {/* Bridge */}
                  <div className="absolute left-full top-0 w-3 h-full"></div>

                  <div className="absolute left-full top-0 ml-1.5 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/governance:block z-50 animate-in fade-in slide-in-from-left-2">
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

                {/* Listing Compliance Flyout */}
                <div className="relative group/listing">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium cursor-pointer transition-all">
                    <span>Listing Compliance</span>
                    <IconChevronRight size={15} className="text-gray-400 group-hover/listing:text-red-600" />
                  </div>

                  {/* Hover bridge */}
                  <div className="absolute left-full top-0 w-3 h-full"></div>

                  <div className="absolute left-full top-0 ml-1.5 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/listing:block z-50 animate-in fade-in slide-in-from-left-2 space-y-1">
                    {/* FY 2023-24 */}
                    <div className="relative group/fy">
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        <span>F.Y. 2023-24</span>
                        <IconChevronRight size={14} className="text-gray-400 group-hover/fy:text-red-600" />
                      </div>
                      <div className="absolute left-full top-0 w-3 h-full"></div>
                      <div className="absolute left-full top-0 ml-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/fy:block z-50 animate-in fade-in slide-in-from-left-2">
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

                    {/* FY 2024-25 */}
                    <div className="relative group/fy2">
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        <span>F.Y. 2024-25</span>
                        <IconChevronRight size={14} className="text-gray-400 group-hover/fy2:text-red-600" />
                      </div>
                      <div className="absolute left-full top-0 w-3 h-full"></div>
                      <div className="absolute left-full top-0 ml-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/fy2:block z-50 animate-in fade-in slide-in-from-left-2">
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

                    {/* FY 2025-26 */}
                    <div className="relative group/fy3">
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        <span>F.Y. 2025-26</span>
                        <IconChevronRight size={14} className="text-gray-400 group-hover/fy3:text-red-600" />
                      </div>
                      <div className="absolute left-full top-0 w-3 h-full"></div>
                      <div className="absolute left-full top-0 ml-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/fy3:block z-50 animate-in fade-in slide-in-from-left-2">
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

                    {/* FY 2026-27 */}
                    <div className="relative group/fy4">
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        <span>F.Y. 2026-27</span>
                        <IconChevronRight size={14} className="text-gray-400 group-hover/fy4:text-red-600" />
                      </div>
                      <div className="absolute left-full top-0 w-3 h-full"></div>
                      <div className="absolute left-full top-0 ml-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/fy4:block z-50 animate-in fade-in slide-in-from-left-2">
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

                {/* Notices & Announcements Flyout */}
                <div className="relative group/notices">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium cursor-pointer transition-all">
                    <span>Notices and Announcements</span>
                    <IconChevronRight size={15} className="text-gray-400 group-hover/notices:text-red-600" />
                  </div>

                  <div className="absolute left-full top-0 w-3 h-full"></div>

                  <div className="absolute left-full top-0 ml-1.5 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/notices:block z-50 animate-in fade-in slide-in-from-left-2 space-y-1">
                    {/* AGM Disclosures */}
                    <div className="relative group/agm">
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        <span>AGM Disclosures</span>
                        <IconChevronRight size={14} className="text-gray-400 group-hover/agm:text-red-600" />
                      </div>
                      <div className="absolute left-full top-0 w-3 h-full"></div>
                      <div className="absolute left-full top-0 ml-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/agm:block z-50 animate-in fade-in slide-in-from-left-2">
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
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer">
                        <span>Board Meetings Disclosure</span>
                        <IconChevronRight size={14} className="text-gray-400 group-hover/board:text-red-600" />
                      </div>
                      <div className="absolute left-full top-0 w-3 h-full"></div>
                      <div className="absolute left-full top-0 ml-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover/board:block z-50 animate-in fade-in slide-in-from-left-2">
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

              {/* Offer Documents Direct Link */}
              <Link
                href="/offer-documents"
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  pathname === "/offer-documents"
                    ? "bg-red-50 text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
                }`}
              >
                Offer Documents
              </Link>

              {/* CSR Direct Link */}
              <Link
                href="/csr"
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  pathname === "/csr"
                    ? "bg-red-50 text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
                }`}
              >
                CSR
              </Link>

              {/* Gallery Direct Link */}
              <Link
                href="/gallery"
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  pathname === "/gallery"
                    ? "bg-red-50 text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
                }`}
              >
                Gallery
              </Link>

              {/* NSE Live Pill Badge */}
              <Link
                href="https://www.nseindia.com/get-quote/equity/GOYALSALT/Goyal-Salt-Limited"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-all duration-200 text-xs shadow-sm ml-1"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>NSE</span>
                <IconTrendingUp size={14} className="text-emerald-600" />
              </Link>

              {/* Red Contact Us Button with Salt Sprinkle Effect */}
              <div className="ml-2">
                <Link href="/contact">
                  <SaltButton variant="primary" size="md">
                    <span>Contact Us</span>
                  </SaltButton>
                </Link>
              </div>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="https://www.nseindia.com/get-quote/equity/GOYALSALT/Goyal-Salt-Limited"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-2.5 py-1 rounded-full text-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>NSE</span>
              </Link>

              <button
                onClick={() => setOpen(true)}
                aria-label="Open Navigation Menu"
                className="p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20"
              >
                <IconMenu2 size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Mobile Drawer Navigation ---------- */}
      <MobileDrawer open={open} setOpen={setOpen} />
    </>
  );
}
