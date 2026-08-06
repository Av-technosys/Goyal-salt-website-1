import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Board Meetings Disclosure FY 2023–24 | Goyal Salt Limited   ",
  description:
    "Access Goyal Salt Limited’s Board Meetings disclosure for FY 2023–24, including notices, outcomes, and regulatory filings for shareholder information. ",
  alternates: {
    canonical: "https://goyalsaltltd.com/notices-announcements/board-meetings-disclosure/2023-24",
  },
};

const documents = [
  { title: "Intimation of BM_10.11.2023", pdf: "/Brochure/Intimation-of-BM_10.11.2023.pdf" },
  { title: "Intimation of BM_18.03.2024", pdf: "/Brochure/Intimation-of-BM_18.03.2024.pdf" },
  { title: "Intimation of BM_22.03.2024", pdf: "/Brochure/Intimation-of-BM_22.03.2024.pdf" },
  { title: "Intimation of BM_27.01.2024", pdf: "/Brochure/Intimation-of-BM_27.01.2024.pdf" },
   { title: "Outcome of BM_10.11.2023", pdf: "/Brochure/Outcome-of-BM_10.11.2023.pdf" },
  { title: "Outcome of BM_18.03.2024", pdf: "/Brochure/Outcome-of-BM_18.03.2024.pdf" },
  { title: "Outcome of BM_22.03.2024", pdf: "/Brochure/Outcome-of-BM_22.03.2024.pdf" },
  { title: "Outcome of BM_27.01.2024", pdf: "/Brochure/Outcome-of-BM_27.01.2024.pdf" },
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">  
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
         
          <h1 className="text-4xl md:text-5xl  font-semibold mt-3 text-red-500">
           Board Meetings Disclosure F.Y. 2023-24
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
                  <FileText size={22} strokeWidth={1.5} className="text-[#c9a24d]" />
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
