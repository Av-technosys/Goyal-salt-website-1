import React from "react";
import { Download, FileText } from "lucide-react";

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
    title: "Regulation 30_Performance Update for the  Year Ended 31 March 2026",
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
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
            Disclosures under Regulation 30
          </h1>
          <p className="mt-4 text-xl text-black max-w-xl mx-auto">
            View our latest investor documents and financial reports.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f6efe3]">
                  <FileText
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#c9a24d]"
                  />
                </div>

                <Download
                  size={22}
                  strokeWidth={1.5}
                  className="text-gray-400 hover:text-[#0f172a] transition"
                />
              </div>

              <h3 className="font-serif text-lg font-semibold text-[#0f172a]">
                {doc.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
