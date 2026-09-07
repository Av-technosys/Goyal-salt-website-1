import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AGM Notices & Announcements 2024–25 | Goyal Salt Limited",
  description:
    "View the Annual General Meeting (AGM) notices and official announcements for FY 2024–25 from Goyal Salt Limited, including shareholder information.",
  alternates: {
    canonical: "https://goyalsaltltd.com/notices-announcements/agm/2024-25",
  },
};

const documents = [
  { title: "GSL_Notice of 15th AGM 2025", pdf: "/Brochure/GSL_Notice-of-15th-AGM.pdf" },
  { title: "Newspaper Publication_15th AGM", pdf: "/Brochure/Newspaper-Publication_15th-AGM.pdf" },
  { title: "Proceeding of AGM dated 26.09.2025", pdf: "/Brochure/Proceeding-of-AGM-dated-26.09.2025.pdf" },
  { title: "Voting Result and Scrutinizer's Report", pdf: "/Brochure/Voting-Result-and-Scrutinizers-Report.pdf" },
];

const Page = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            AGM <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">F.Y. 2024–25</span>
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
