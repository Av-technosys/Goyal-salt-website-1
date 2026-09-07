import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Disclosures Under Regulation 30 | Goyal Salt Limited",
  description:
    "Access disclosures under Regulation 30 by Goyal Salt Limited, including key company updates, events and official information for investors and public reference.",
  alternates: {
    canonical:
      "https://goyalsaltltd.com/notices-announcements/disclosures-under-regulation-30",
  },
};

const documents = [
  {
    title: "Regulation 30_Incorporation of Wholly Owned Subsidiary Company",
    pdf: "/Brochure/Regulation 30_Incorporation of Wholly Owned Subsidiary Company.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Incorporation of Wholly Owned Subsidiary Company",
    pdf: "/Brochure/Regulation 30_Intimation for Incorporation of Wholly Owned Subsidiary Company.pdf",
  },
  {
    title: "Regulation 30_Product Launch Disclosure_Goyal Gold Salt_23.04.2025",
    pdf: "/Brochure/Regulation-30_Product-Launch-Disclosure_Goyal-Gold-Salt_23.04.2025.pdf",
  },
  {
    title: "Intimation for Inauguration of Chirai Moti Facility_21.04.2025",
    pdf: "/Brochure/Intimation-for-Inauguration-of-Chirai-Moti-Facility_21.04.2025.pdf",
  },
  {
    title: "Regulation 30_BIS Approval_27.03.2025",
    pdf: "/Brochure/Regulation-30_BIS-Approval.pdf",
  },
  {
    title:
      "Press Release_Goyal Salt to Double the Turnover in 2 Years to 300 Cr_21.03.2025",
    pdf: "/Brochure/Press-Release_Goyal-Salt-to-Double-the-Turnover-in-2-Years-to-300-Cr.pdf",
  },
  {
    title: "Regulation 30_Credit Rating from CRISIL Ratings_05.03.2025",
    pdf: "/Brochure/Regulation-30_Credit-Rating-from-CRISIL-Ratings.pdf",
  },
  {
    title:
      "Regulation 30_Product Launch Disclosure_Goyal Himalayan Pink Salt_24.02.2025",
    pdf: "/Brochure/Regulation-30_Product-Launch-Disclosure_Goyal-Himalayan-Pink-Salt_24.02.2025.pdf",
  },
  {
    title: "Regulation 30_Regarding Television Commercial (TVC)_24.02.2025",
    pdf: "/Brochure/Regulation-30_Regarding-Television-Commercial-TVC_24.02.2025.pdf",
  },
  {
    title: "Press Release_Sales for 9 Months in FY2024-25_20.02.2025",
    pdf: "/Brochure/Press-Release_Sales-for-9-Months-in-FY2024-25_20.02.2025.pdf",
  },
  {
    title:
      "Press Release_Goyal Salt strengthens Brand in Tier 1-6 cities_16.01.2025",
    pdf: "/Brochure/Press-Release_Goyal-Salt-strengthens-Brand-in-Tier-1-6-cities_16.01.2025-1.pdf",
  },
  {
    title:
      "Press Release_Goyal Salt Eyes western and eastern market expansion with Gandhidham Plant_02.01.2025",
    pdf: "/Brochure/Press-Release_Goyal-Salt-Eyes-western-and-eastern-market-expansion-with-Gandhidham-Plant_02.01.2025.pdf",
  },
  {
    title:
      "Regulation 30_Product Launch Disclosure_Goyal Black Salt_18.12.2024",
    pdf: "/Brochure/Regulation-30_Product-Launch-Disclosure_Goyal-Black-Salt_18.12.2024.pdf",
  },
  {
    title:
      "Press Release_Goyal Salt to set up large plant in Gandhidham with an Investment of Rs. 80 Cr_11.12.2024",
    pdf: "/Brochure/Press-Release_Goyal-Salt-to-set-up-large-plant-in-Gandhidham-with-an-Investment-of-Rs.-80-Cr_11.12.2024.pdf",
  },
  {
    title: "Completion of Jharkhand Government's Tender Offer",
    pdf: "/Brochure/Regulation-30_Completion-of-Jharkhand-Govt.-Tender-Offer.pdf",
  },
  {
    title: "Press Release_H.Y.1 FY 2024-25",
    pdf: "/Brochure/Regulation-30_Press-Release-H1_F.Y.2024-25.pdf",
  },
  {
    title: "Regulation 30_Availing Credit Facility",
    pdf: "/Brochure/Regulation-30_Availing-Credit-Facility.pdf",
  },
  {
    title: "Regulation 30_Jharkhand Work Order",
    pdf: "/Brochure/Regulation-30_Jharkhand-Work-Order.pdf",
  },
  {
    title: "Regulation 30_Product Launch Disclosure",
    pdf: "/Brochure/Regulation-30_Product-Launch-Disclosure.pdf",
  },
  {
    title: "Regulation 30_Highest Purchase Disclosure",
    pdf: "/Brochure/Regulation-30_Highest-Purchase-Disclosure.pdf",
  },
  {
    title: "Regulation 30_Re-appointment of Statutory Auditor",
    pdf: "/Brochure/Regulation-30_Re-appointment-of-Statutory-Auditor.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Appointment of Internal Auditor for the F.Y. 2024-25",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Internal-Auditor-for-the-F.Y.-2024-25.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Appointment of Secretarial Auditor for the F.Y. 2024-25",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-for-the-F.Y.-2024-25.pdf",
  },
  {
    title: "Regulation 30_Reconsitution of Committees",
    pdf: "/Brochure/Regulation-30_Reconsitution-of-Committees.pdf",
  },
  {
    title:
      "Regulation 30_Appointment of Mr. Narendra Dev Garg as Independent Director",
    pdf: "/Brochure/Regulation-30_Appointment-of-Mr.-Narendra-Dev-Garg-as-Independent-Director.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Expansion of New Unit of the Company at Chirai Moti",
    pdf: "/Brochure/Regulation-30_Intimation-for-Expansion-of-New-Unit-of-the-Company-at-Chirai-Moti.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Appointment of Internal Auditor for the F.Y. 2023-24",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Internal-Auditor-for-the-F.Y.-2023-24.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Appointment of Secretarial Auditor for the F.Y. 2023-24",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-for-the-F.Y.-2023-24.pdf",
  },
  {
    title:
      "Regulation 30_Resignation of Mr. Alpesh Fatehsingh Purohit from the Post of Independent Director",
    pdf: "/Brochure/Regulation-30_Resignation-of-Mr.-Alpesh-Fatehsingh-Purohit-from-the-Post-of-Independent-Director.pdf",
  },
  {
    title: "Regulation 30_Intimation for Resignation of Company Secretary",
    pdf: "/Brochure/Regulation-30_Intimation-for-Resignation-of-Company-Secretary.pdf",
  },
  {
    title: "Regulation 30_Intimation for Appointment of Company Secretary",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Company-Secretary.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Appointment of Internal Auditor for the F.Y. 2025-26",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Internal-Auditor-for-the-F.Y.-2025-26.pdf",
  },
  {
    title: "Regulation 30_Intimation for Appointment of Secretarial Auditor",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-1.pdf",
  },
  {
    title: "Regulation 30_Intimation for Appointment of Secretarial Auditor",
    pdf: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor.pdf",
  },
  {
    title: "Regulation 30_Chhattisgarh Work Order",
    pdf: "/Brochure/Regulation-30_Chhattisgarh-Work-Order.pdf",
  },
  {
    title:
      "Regulation 30_Performance Update for the Six Month Period Ended September 30, 2025",
    pdf: "/Brochure/Regulation-30_Performance-Update-for-the-Six-Month-Period-Ended-September-30-2025.pdf",
  },
  {
    title:
      "Regulation 30_Intimation for Expansion of New Unit of the Company at Bharuch, Gujarat",
    pdf: "/Brochure/Regulation-30_Intimation-for-Expansion-of-New-Unit-of-the-Company-at-Bharuch-Gujarat.pdf",
  },
  {
    title:
      "Regulation 30_Performance Update for the Nine Month Period Ended December 31, 2025",
    pdf: "/Brochure/Regulation-30_Performance-Update-for-the-Nine-Month-Period-Ended-December-31-2025.pdf",
  },
  {
    title: "Regulation 30_Performance Update for the  Year Ended 31 March 2026",
    pdf: "/Brochure/Regulation 30_Performance Update for the  Year Ended 31 March 2026.pdf",
  },
  {
    title: "Regulation 30_Intimation for Appointment of Internal Auditor for the F.Y. 2026-27",
    pdf: "/Brochure/Regulation 30_Intimation for Appointment of Internal Auditor for the F.Y. 2026-27.pdf",
  },
  {
    title: "Regulation 30_Intimation for Incorporation of Subsidiary Company",
    pdf: "/Brochure/Regulation 30_Intimation for Incorporation of Subsidiary Company.pdf",
  },
  {
    title: "Regulation 30_Incorporation of Subsidiary Company",
    pdf: "/Brochure/Regulation 30_Incorporation of Subsidiary Company.pdf",
  },
  {
    title: "Regulation 30_Acquisition of Shares of Subsidiary Company",
    pdf: "/Brochure/Regulation 30_Acquisition of Shares of Subsidiary Company.pdf",
  },
];

const Page = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Disclosures Under <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Regulation 30</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            View our latest investor documents and financial reports.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 group-hover:bg-red-600 text-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FileText className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
                    PDF Document
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2 leading-snug">
                  {doc.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-red-600">
                <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-200">
                  View
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-red-50 flex items-center justify-center text-gray-400 group-hover:text-red-600 transition-colors">
                  <Download className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
