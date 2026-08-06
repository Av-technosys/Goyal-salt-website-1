import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Offer Documents | Goyal Salt Limited",
  description:
    "View the offer documents of Goyal Salt Limited, including important company information, filings and records for investor and public reference.",
  alternates: {
    canonical: "https://goyalsaltltd.com/offer-documents",
  },
};

const documents = [
  { title: "Prospectus", pdf: "/Brochure/Prospectus.pdf" },
  { title: "Red Herring Prospectus", pdf: "/Brochure/Red Herring Prospectus.pdf" },
  { title: "Draft Red Herring Prospectus", pdf: "/Brochure/Draft Red Herring Prospectus.pdf" },
  { title: "IPO Investor Presentation", pdf: "/Brochure/IPO Investor Presentation.pdf" },
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
         
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
            Offer Documents
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
