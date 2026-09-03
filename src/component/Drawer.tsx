"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IconX, IconChevronDown, IconExternalLink } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import {
  Drawer as UIDrawer,
  DrawerContent,
} from "@/components/ui/drawer";

const isSamePage = (currentPath: string, targetHref: string) => {
  if (!targetHref) return false;
  const cleanHref = targetHref.split("?")[0].split("#")[0];
  const cleanPath = currentPath.split("?")[0].split("#")[0];
  return (
    cleanPath === cleanHref ||
    cleanPath.replace(/\/$/, "") === cleanHref.replace(/\/$/, "")
  );
};

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

  const handleLinkClick = (href: string, target?: string) => {
    setOpen(false);
    if (target !== "_blank" && isSamePage(pathname, href)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActiveLink = (href: string) => isSamePage(pathname, href);

  return (
    <UIDrawer open={open} direction="left" onOpenChange={setOpen}>
      <DrawerContent
        className="
          fixed left-0 top-0 h-screen
          w-[85%] max-w-sm
          rounded-none bg-white
          flex flex-col z-50
          border-r border-gray-200 shadow-2xl
          data-[state=open]:slide-in-from-left
          data-[state=closed]:slide-out-to-left
          duration-300
        "
      >
        {/* Custom Header Row with Logo on Left and Cross Button on Right */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white shrink-0">
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Goyal Salt Logo"
              width={105}
              height={50}
              className="object-contain max-h-12 w-auto"
            />
          </Link>

          {/* Close/Cross Button strictly on the right side in line with Logo */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors focus:outline-none shrink-0"
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Navigation Content */}
        <nav className="flex flex-col text-sm overflow-y-auto flex-1 overscroll-contain p-4 space-y-1 divide-y divide-gray-100">
          
          {/* Home */}
          <div className="pb-1">
            <Link
              href="/"
              onClick={() => handleLinkClick("/")}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                isActiveLink("/")
                  ? "bg-red-600 text-white font-semibold shadow-md"
                  : "text-gray-800 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <span>Home</span>
            </Link>
          </div>

          {/* About Accordion */}
          <div className="py-1">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between items-center w-full px-4 py-3 rounded-xl font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <span>About</span>
              <IconChevronDown
                size={18}
                className={`transition-transform duration-200 text-gray-400 ${
                  aboutOpen ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-red-500 space-y-1">
                <Link
                  href="/about-us"
                  onClick={() => handleLinkClick("/about-us")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/about-us")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/history-our-achievement"
                  onClick={() => handleLinkClick("/history-our-achievement")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/history-our-achievement")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  History & Our Achievements
                </Link>

                <Link
                  href="/directors"
                  onClick={() => handleLinkClick("/directors")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/directors")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Directors
                </Link>

                <Link
                  href="/chairman-desk"
                  onClick={() => handleLinkClick("/chairman-desk")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/chairman-desk")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Chairman’s Desk
                </Link>

                <Link
                  href="/message-from-md"
                  onClick={() => handleLinkClick("/message-from-md")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/message-from-md")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Message from MD
                </Link>

                <Link
                  href="/vision-mission"
                  onClick={() => handleLinkClick("/vision-mission")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/vision-mission")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Vision & Mission
                </Link>

                <Link
                  href="/privacy-policy"
                  onClick={() => handleLinkClick("/privacy-policy")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/privacy-policy")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          {/* Who We Are Accordion */}
          <div className="py-1">
            <button
              onClick={() => setWhoOpen(!whoOpen)}
              className="flex justify-between items-center w-full px-4 py-3 rounded-xl font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <span>Who We Are</span>
              <IconChevronDown
                size={18}
                className={`transition-transform duration-200 text-gray-400 ${
                  whoOpen ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            {whoOpen && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-red-500 space-y-1">
                <Link
                  href="/journey"
                  onClick={() => handleLinkClick("/journey")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/journey")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Journey
                </Link>

                <Link
                  href="/infrastructures"
                  onClick={() => handleLinkClick("/infrastructures")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/infrastructures")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Infrastructures
                </Link>

                <Link
                  href="/quality-control"
                  onClick={() => handleLinkClick("/quality-control")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/quality-control")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Quality Control
                </Link>

                <Link
                  href="/why-goyal-salt"
                  onClick={() => handleLinkClick("/why-goyal-salt")}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActiveLink("/why-goyal-salt")
                      ? "text-red-600 font-semibold bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  Why Goyal Salt Ltd ?
                </Link>
              </div>
            )}
          </div>

          {/* Products Direct */}
          <div className="py-1">
            <Link
              href="/products"
              onClick={() => handleLinkClick("/products")}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                isActiveLink("/products")
                  ? "bg-red-600 text-white font-semibold shadow-md"
                  : "text-gray-800 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <span>Products</span>
            </Link>
          </div>

          {/* Investors Accordion */}
          <div className="py-1">
            <button
              onClick={() => setInvestorOpen(!investorOpen)}
              className="flex justify-between items-center w-full px-4 py-3 rounded-xl font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <span>Investors</span>
              <IconChevronDown
                size={18}
                className={`transition-transform duration-200 text-gray-400 ${
                  investorOpen ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            {investorOpen && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-red-500 space-y-1">
                <Link
                  href="/annual-return"
                  onClick={() => handleLinkClick("/annual-return")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  Annual Return
                </Link>

                <Link
                  href="/annual-report"
                  onClick={() => handleLinkClick("/annual-report")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  Annual Report
                </Link>

                <Link
                  href="/csr-document"
                  onClick={() => handleLinkClick("/csr-document")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  CSR
                </Link>

                <Link
                  href="/dur-46-lodr"
                  onClick={() => handleLinkClick("/dur-46-lodr")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  Disclosure Under Regulation 46 of LODR
                </Link>

                <Link
                  href="/financials"
                  onClick={() => handleLinkClick("/financials")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  Financials
                </Link>

                {/* Governance Nested Accordion */}
                <button
                  onClick={() => setGovernanceOpen(!governanceOpen)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                >
                  <span>Governance</span>
                  <IconChevronDown
                    size={14}
                    className={`transition-transform ${
                      governanceOpen ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                </button>

                {governanceOpen && (
                  <div className="ml-3 pl-2 border-l border-red-300 space-y-1">
                    <Link
                      href="/governance/codes-policies"
                      onClick={() => handleLinkClick("/governance/codes-policies")}
                      className="block px-3 py-1.5 rounded-md text-[11px] text-gray-500 hover:text-red-600"
                    >
                      Codes & Policies
                    </Link>

                    <Link
                      href="/governance/committees"
                      onClick={() => handleLinkClick("/governance/committees")}
                      className="block px-3 py-1.5 rounded-md text-[11px] text-gray-500 hover:text-red-600"
                    >
                      Committees
                    </Link>

                    <Link
                      href="/governance/shareholding-pattern"
                      onClick={() => handleLinkClick("/governance/shareholding-pattern")}
                      className="block px-3 py-1.5 rounded-md text-[11px] text-gray-500 hover:text-red-600"
                    >
                      Shareholding Pattern
                    </Link>
                  </div>
                )}

                <Link
                  href="/investor-grievance"
                  onClick={() => handleLinkClick("/investor-grievance")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  Investor Grievance
                </Link>

                {/* Listing Compliance Nested Accordion */}
                <button
                  onClick={() => setListingOpen(!listingOpen)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                >
                  <span>Listing Compliance</span>
                  <IconChevronDown
                    size={14}
                    className={`transition-transform ${
                      listingOpen ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                </button>

                {listingOpen && (
                  <div className="ml-3 pl-2 border-l border-red-300 space-y-1">
                    {/* FY 2023-24 */}
                    <button
                      onClick={() =>
                        setOpenFY(openFY === "2023-24" ? null : "2023-24")
                      }
                      className="flex justify-between items-center w-full px-3 py-1.5 rounded-md text-[11px] text-gray-600 hover:text-red-600"
                    >
                      <span>F.Y. 2023-24</span>
                      <IconChevronDown
                        size={12}
                        className={`transition-transform ${
                          openFY === "2023-24" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openFY === "2023-24" && (
                      <div className="ml-2 pl-2 space-y-1">
                        <Link
                          href="/listing-compliance/2023-24/q1"
                          onClick={() => handleLinkClick("/listing-compliance/2023-24/q1")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 1
                        </Link>
                        <Link
                          href="/listing-compliance/2023-24/q2"
                          onClick={() => handleLinkClick("/listing-compliance/2023-24/q2")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 2
                        </Link>
                        <Link
                          href="/listing-compliance/2023-24/q3"
                          onClick={() => handleLinkClick("/listing-compliance/2023-24/q3")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 3
                        </Link>
                        <Link
                          href="/listing-compliance/2023-24/q4"
                          onClick={() => handleLinkClick("/listing-compliance/2023-24/q4")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 4
                        </Link>
                      </div>
                    )}

                    {/* FY 2024-25 */}
                    <button
                      onClick={() =>
                        setOpenFY(openFY === "2024-25" ? null : "2024-25")
                      }
                      className="flex justify-between items-center w-full px-3 py-1.5 rounded-md text-[11px] text-gray-600 hover:text-red-600"
                    >
                      <span>F.Y. 2024-25</span>
                      <IconChevronDown
                        size={12}
                        className={`transition-transform ${
                          openFY === "2024-25" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openFY === "2024-25" && (
                      <div className="ml-2 pl-2 space-y-1">
                        <Link
                          href="/listing-compliance/2024-25/q3"
                          onClick={() => handleLinkClick("/listing-compliance/2024-25/q3")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 3
                        </Link>
                        <Link
                          href="/listing-compliance/2024-25/q4"
                          onClick={() => handleLinkClick("/listing-compliance/2024-25/q4")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 4
                        </Link>
                      </div>
                    )}

                    {/* FY 2025-26 */}
                    <button
                      onClick={() =>
                        setOpenFY(openFY === "2025-26" ? null : "2025-26")
                      }
                      className="flex justify-between items-center w-full px-3 py-1.5 rounded-md text-[11px] text-gray-600 hover:text-red-600"
                    >
                      <span>F.Y. 2025-26</span>
                      <IconChevronDown
                        size={12}
                        className={`transition-transform ${
                          openFY === "2025-26" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openFY === "2025-26" && (
                      <div className="ml-2 pl-2 space-y-1">
                        <Link
                          href="/listing-compliance/2025-26/q1"
                          onClick={() => handleLinkClick("/listing-compliance/2025-26/q1")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 1
                        </Link>
                        <Link
                          href="/listing-compliance/2025-26/q2"
                          onClick={() => handleLinkClick("/listing-compliance/2025-26/q2")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 2
                        </Link>
                        <Link
                          href="/listing-compliance/2025-26/q3"
                          onClick={() => handleLinkClick("/listing-compliance/2025-26/q3")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          Quarter 3
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                <Link
                  href="/material-contracts-agreements"
                  onClick={() => handleLinkClick("/material-contracts-agreements")}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
                >
                  Material Contracts & Agreements
                </Link>

                {/* Notices & Announcements Accordion */}
                <button
                  onClick={() => setNoticeOpen(!noticeOpen)}
                  className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                >
                  <span>Notices & Announcements</span>
                  <IconChevronDown
                    size={14}
                    className={`transition-transform ${
                      noticeOpen ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                </button>

                {noticeOpen && (
                  <div className="ml-3 pl-2 border-l border-red-300 space-y-1">
                    {/* AGM Disclosures */}
                    <button
                      onClick={() => setAgmOpen(!agmOpen)}
                      className="flex justify-between items-center w-full px-3 py-1.5 rounded-md text-[11px] text-gray-600 hover:text-red-600"
                    >
                      <span>AGM Disclosures</span>
                      <IconChevronDown
                        size={12}
                        className={`transition-transform ${
                          agmOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {agmOpen && (
                      <div className="ml-2 pl-2 space-y-1">
                         <Link
                          href="/notices-announcements/agm/2025-26"
                          onClick={() => handleLinkClick("/notices-announcements/agm/2025-26")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          F.Y. 2025-26
                        </Link>
                        <Link
                          href="/notices-announcements/agm/2024-25"
                          onClick={() => handleLinkClick("/notices-announcements/agm/2024-25")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          F.Y. 2024-25
                        </Link>
                        <Link
                          href="/notices-announcements/agm/2023-24"
                          onClick={() => handleLinkClick("/notices-announcements/agm/2023-24")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          F.Y. 2023-24
                        </Link>
                      </div>
                    )}

                    {/* Board Meetings */}
                    <button
                      onClick={() => setBoardMeetingOpen(!boardMeetingOpen)}
                      className="flex justify-between items-center w-full px-3 py-1.5 rounded-md text-[11px] text-gray-600 hover:text-red-600"
                    >
                      <span>Board Meetings Disclosure</span>
                      <IconChevronDown
                        size={12}
                        className={`transition-transform ${
                          boardMeetingOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {boardMeetingOpen && (
                      <div className="ml-2 pl-2 space-y-1">
                        <Link
                          href="/notices-announcements/board-meetings-disclosure/2025-26"
                          onClick={() => handleLinkClick("/notices-announcements/board-meetings-disclosure/2025-26")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          F.Y. 2025-26
                        </Link>
                        <Link
                          href="/notices-announcements/board-meetings-disclosure/2024-25"
                          onClick={() => handleLinkClick("/notices-announcements/board-meetings-disclosure/2024-25")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          F.Y. 2024-25
                        </Link>
                        <Link
                          href="/notices-announcements/board-meetings-disclosure/2023-24"
                          onClick={() => handleLinkClick("/notices-announcements/board-meetings-disclosure/2023-24")}
                          className="block text-[11px] text-gray-500 hover:text-red-600 py-0.5"
                        >
                          F.Y. 2023-24
                        </Link>
                      </div>
                    )}

                    <Link
                      href="/notices-announcements/disclosures-under-regulation-30"
                      onClick={() => handleLinkClick("/notices-announcements/disclosures-under-regulation-30")}
                      className="block px-3 py-1.5 rounded-md text-[11px] text-gray-500 hover:text-red-600"
                    >
                      Disclosures Under Regulation 30
                    </Link>

                    <Link
                      href="/notices-announcements/investors-meet-disclosure"
                      onClick={() => handleLinkClick("/notices-announcements/investors-meet-disclosure")}
                      className="block px-3 py-1.5 rounded-md text-[11px] text-gray-500 hover:text-red-600"
                    >
                      Investors Meet Disclosure
                    </Link>

                    <Link
                      href="/notices-announcements/others"
                      onClick={() => handleLinkClick("/notices-announcements/others")}
                      className="block px-3 py-1.5 rounded-md text-[11px] text-gray-500 hover:text-red-600"
                    >
                      Others
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Offer Documents */}
          <div className="py-1">
            <Link
              href="/offer-documents"
              onClick={() => handleLinkClick("/offer-documents")}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                isActiveLink("/offer-documents")
                  ? "bg-red-600 text-white font-semibold shadow-md"
                  : "text-gray-800 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <span>Offer Documents</span>
            </Link>
          </div>

          {/* CSR */}
          <div className="py-1">
            <Link
              href="/csr"
              onClick={() => handleLinkClick("/csr")}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                isActiveLink("/csr")
                  ? "bg-red-600 text-white font-semibold shadow-md"
                  : "text-gray-800 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <span>CSR</span>
            </Link>
          </div>

          {/* Gallery */}
          <div className="py-1">
            <Link
              href="/gallery"
              onClick={() => handleLinkClick("/gallery")}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                isActiveLink("/gallery")
                  ? "bg-red-600 text-white font-semibold shadow-md"
                  : "text-gray-800 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              <span>Gallery</span>
            </Link>
          </div>

          {/* NSE External Link */}
          <div className="py-1">
            <Link
              href="https://www.nseindia.com/get-quote/equity/GOYALSALT/Goyal-Salt-Limited"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick("https://www.nseindia.com/get-quote/equity/GOYALSALT/Goyal-Salt-Limited", "_blank")}
              className="flex items-center justify-between px-4 py-3 rounded-xl font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/60 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>NSE Stock Quote</span>
              </div>
              <IconExternalLink size={16} />
            </Link>
          </div>

          {/* Red Contact Us Direct Button */}
          <div className="pt-2 pb-4">
            <Link
              href="/contact"
              onClick={() => handleLinkClick("/contact")}
              className="flex items-center justify-center w-full py-3 px-4 rounded-xl font-bold bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </DrawerContent>
    </UIDrawer>
  );
};

export default MobileDrawer;
