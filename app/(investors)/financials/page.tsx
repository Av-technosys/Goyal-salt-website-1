import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Financials | Goyal Salt Limited",
  description:
    "View the financial details of Goyal Salt Limited, including yearly figures, reports and company records for reference and transparency.",
  alternates: {
    canonical: "https://goyalsaltltd.com/financials",
  },
};

const documents = [
  {
    title: "Audited Financial Statement for the F.Y 2023-2024",
    pdf: "/Brochure/Audited-Financials-Statements-for-the-F.Y.-2023-24.pdf",
  },
  {
    title:
      "Restated Financial Statements for the Financial Year 2020-21, 2021-22 & 2022-23",
    pdf: "/Brochure/Restated-Financial-Statements-for-the-Financial-Year-2020-21-2021-22-2022-23.pdf",
  },
  {
    title: "Financial Results for the Half Year ended 30.09.2024",
    pdf: "/Brochure/Financial-Results-for-the-Half-Year-ended-30.09.2024.pdf",
  },
  {
    title: "Restated Financial Statements for the Financial Year 2020-21",
    pdf: "/Brochure/Restated-Financial-Statements-for-the-Financial-Year-2020-21-2021-22-2022-23 (1).pdf",
  },
  {
    title: "Financial Results for the Half Year and Year ended 31.03.24",
    pdf: "/Brochure/Financial-Result-for-Half-Year-and-Year-ended-March-31st-2024.pdf",
  },
  {
    title: "Audited Financial Statement for the Financial Year 2020-21",
    pdf: "/Brochure/Audited-Financial-Statements-for-the-Financial-Year-2020-21.pdf",
  },
  {
    title: "Financial Results for the year ended 30.09.2023",
    pdf: "/Brochure/Financial-Result-for-the-half-year-ended-30.09.2023.pdf",
  },
  {
    title: "Audited Financial Statement for the Financial Year 2022-23",
    pdf: "/Brochure/Audited-Financials_GSL-22-23.pdf",
  },
  {
    title: "Audited Financial Statement for the F.Y. 2024-2025",
    pdf: "/Brochure/Audited-Financial-Statement-for-the-F.Y.-2024-2025.pdf",
  },
  {
    title: "Financial Results for the Half Year and Year ended 31.03.2025",
    pdf: "/Brochure/Financial-Results-for-the-Half-Year-and-Year-ended-31.03.2025.pdf",
  },
  {
    title: "Financial Results for the Half Year ended 30.09.2025",
    pdf: "/Brochure/Financial-Results-for-the-Half-Year-ended-30.09.2025-1.pdf",
  },
  {
    title: "Financial Results for the Half Year and Year ended 31.03.2026 ",
    pdf: "/Brochure/Financial Results for the Half Year and Year ended 31.03.2026.pdf",
  },
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
            Financials
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
