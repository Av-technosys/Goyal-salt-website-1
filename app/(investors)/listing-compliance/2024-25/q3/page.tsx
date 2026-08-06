import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Q3 FY 2024–25 Investor Disclosures | Goyal Salt Limited ",
  description:
    "Explore Goyal Salt Limited’s Q3 FY 2024–25 investor disclosures, including quarterly highlights, financial results, and statutory compliance documents.",
  alternates: {
    canonical: "https://goyalsaltltd.com/listing-compliance/2024-25/q3",
  },
};

const documents = [
  {
    title: "Integrated Filing (Governance)",
    pdf: "/Brochure/Integrated-Filing-Governance.pdf",
  },
  {
    title: "IIntegrated Filing (Financial)",
    pdf: "/Brochure/IIntegrated-Filing-Financial.pdf",
  },
  {
    title:
      "Certificate under SEBI (Depositories and Participants) Regulations, 2018",
    pdf: "/Brochure/Certificate-under-SEBI-Depositories-and-Participants-Regulations-2018-2.pdf",
  },
  {
    title: "Statement of Grievance Redressal Mechanism under Regulation 13(3)",
    pdf: "/Brochure/Statement-of-Grievance-Redressal-Mechanism-under-Regulation-133-2.pdf",
  },
  {
    title: "Reconciliation of Share Capital Audit Report under Regulation 76",
    pdf: "/Brochure/Reconciliation-of-Share-Capital-Audit-Report-under-Regulation-76.pdf",
  },
  {
    title: "Non-Applicability of Regulation 27(2)",
    pdf: "/Brochure/Non-Applicability-of-Regulation-272-2.pdf",
  },
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
            F.Y. 2024-25 - Quarter 3
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
