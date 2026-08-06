import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Q4 FY 2023–24 Investor Disclosures | Goyal Salt Limited ",
  description:
    "Browse Goyal Salt Limited’s Q4 FY 2023–24 investor disclosures, including quarterly highlights, financial reports, and regulatory compliance documents.",
  alternates: {
    canonical: "https://goyalsaltltd.com/listing-compliance/2023-24/q4",
  },
};

const documents = [
  {
    title: "Annual Secretarial Compliance Report-Non Applicability",
    pdf: "/Brochure/Annual-Secretarial-Compliance-Report-Non-Applicability.pdf",
  },
  {
    title: "Certificate under Regulation 7(3)",
    pdf: "/Brochure/Certificate-under-Regulation-73.pdf",
  },
  {
    title: "Certificate under Regulation 40(10)",
    pdf: "/Brochure/Certificate-under-Regulation-4010.pdf",
  },
  {
    title:
      "Certificate under SEBI (Depositories and Participants) Regulations, 2018",
    pdf: "/Brochure/Certificate-under-SEBI-Depositories-and-Participants-Regulations-2018-1-1.pdf",
  },
  {
    title: "Disclosure under Regulation 31(4)",
    pdf: "/Brochure/Disclosure-under-Regulation-314.pdf",
  },
  {
    title: "Financial Result H2 & F.Y. 2023-24",
    pdf: "/Brochure/Financial-Result-H2-F.Y.-2023-24.pdf",
  },

  {
    title: "Initial Disclosure-Non Applicability",
    pdf: "/Brochure/Initial-Disclosure-Non-Applicability.pdf",
  },
  {
    title: "Non-Applicability of Regulation 27(2)",
    pdf: "/Brochure/Non-Applicability-of-Regulation-272-4.pdf",
  },
  {
    title: "Reconciliation of Share Capital & Audit Report under Regulation 76",
    pdf: "/Brochure/Reconciliation-of-Share-Capital-Audit-Report-under-Regulation-76-4.pdf",
  },
  {
    title: "RPT-Non Applicability",
    pdf: "/Brochure/RPT-Non-Applicability.pdf",
  },

  {
    title: "SDD Compliance Certificate",
    pdf: "/Brochure/SDD-Compliance-Certificate-1-1.pdf",
  },

  {
    title: "Shareholing Patter as on 31.03.2024",
    pdf: "/Brochure/Shareholing-Patter-as-on-31.03.2024.pdf",
  },
  {
    title: "Statement of Grievance Redressal Mechanism under Regulation 13(3)",
    pdf: "/Brochure/Statement-of-Grievance-Redressal-Mechanism-under-Regulation-133.pdf",
  },

  {
    title: "Trading Window Closure for the period ended 31.03.2024",
    pdf: "/Brochure/Trading-Window-Closure-for-the-period-ended-31.03.2024.pdf",
  },
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
            F.Y. 2023-24 - Quarter 4
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
