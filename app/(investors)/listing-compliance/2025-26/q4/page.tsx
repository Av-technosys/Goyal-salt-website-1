import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Q4 FY 2025–26 Investor Disclosures | Goyal Salt Limited",
  description:
    "Access Goyal Salt Limited’s Q4 FY 2025–26 investor disclosures, quarterly highlights, financial results, and compliance documents for regulators and stakeholders.",
  alternates: {
    canonical: "https://goyalsaltltd.com/listing-compliance/2025-26/q4",
  },
};

const documents = [
  {
    title: "Upload Trading Window Closure for the period ended 31.03.2026",
    pdf: "/Brochure/Trading Window Closure for the period ended 31.03.2026.pdf",
  },
  {
    title:
      "Certificate under SEBI (Depositories and Participants) Regulations, 2018",
    pdf: "/Brochure/Certificate under SEBI (Depositories and Participants) Regulations, 2026.pdf",
  },
  {
    title: "Non-Applicability of Regulation 27(2)",
    pdf: "/Brochure/Non-Applicability of Regulation 27(3).pdf",
  },
  {
    title: "Integarted Filing-Governance ",
    pdf: "/Brochure/Integarted Filing-Governance.pdf",
  },
  {
    title: " Non-Applicability of Initial Disclosure of Large Corporate",
    pdf: "/Brochure/Non-Applicability of Initial Disclosure of Large Corporate.pdf",
  },
  {
    title:
      "Non-Applicability of Annual Secretarial Compliance Report for the year ended 31.03.2026",
    pdf: "/Brochure/Non-Applicability of Annual Secretarial Compliance Report for the year ended 31.03.2026.pdf",
  },
  {
    title:
      "Reconciliation of Share Capital Audit Report under Regulation 76",
    pdf: "/Brochure/Reconciliation of Share Capital Audit Report under Regulation 76(1).pdf",
  },
   {
    title:
      "SDD Compliance Certificate for the financial year ended 31st March 2026",
    pdf: "/Brochure/SDD Compliance Certificate for the financial year ended 31st March 2026.pdf",
  },
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl  font-semibold mt-3 text-red-500">
            F.Y. 2025-26 - Quarter 4
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
