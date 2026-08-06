import React from "react";
import { Download, FileText } from "lucide-react";


export const metadata = {
  title: "Other Disclosures | Goyal Salt Limited",
  description:
    "Find other important disclosures and documents of Goyal Salt Limited, providing official company information for investors, stakeholders, and public reference.",
  alternates: {
    canonical: "https://goyalsaltltd.com/notices-announcements/others",
  },
};


const documents = [
  { title: "Statement of Deviation_31.03.2024", pdf: "/Brochure/Statement-of-Deviation_GSL.pdf" },
  { title: "Intimation of BM_29.03.2025", pdf: "/Brochure/Intimation-of-BM_29.03.2025.pdf" },
  { title: "Outcome of BM_05.11.2024", pdf: "/Brochure/Outcome-of-BM_05.11.2024.pdf" },
  { title: "Intimation of BM_05.11.2024", pdf: "/Brochure/Intimation-of-BM_05.11.2024.pdf" },
   { title: "Declaration for Unmodified Opinion in respect of Standalone Audited Financial Results", pdf: "/Brochure/Declaration-for-Unmodified-Opinion-in-respect-of-Standalone-Audited-Financial-Results.pdf" },
  { title: "Reply to NSE for Price Movement", pdf: "/Brochure/Reply-to-NSE-for-Price-Movement.pdf" },
   { title: "Reply to NSE seeking Clarification on Appointment of ID Mr. Narendra Dev Garg", pdf: "/Brochure/Reply-to-NSE-seeking-Clarification-on-Appointment-of-ID-Mr.-Narendra-Dev-Garg.pdf" },
  
  
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
         
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
           Others
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
