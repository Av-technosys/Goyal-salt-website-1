import React from "react";
import { Download, FileText } from "lucide-react";

export const metadata = {
  title: "Material Contracts & Agreements | Goyal Salt Limited",
  description:
    "View material contracts and agreements of Goyal Salt Limited, including key company deals and documents for investor reference and transparency.",
  alternates: {
    canonical: "https://goyalsaltltd.com/material-contracts-agreements",
  },
};

const documents = [
  { title: "Bankers to the Issue Agreement", pdf: "/Brochure/Bankers-to-the-Issue-Agreement.pdf" },
  { title: "Issue Agreement", pdf: "/Brochure/Issue-Agreement.pdf" },
  { title: "Market Making Agreement", pdf: "/Brochure/Market-Making-Agreement.pdf" },
  { title: "Registrar Agreement", pdf: "/Brochure/Registrar-Agreement.pdf" },
   { title: "Syndicate Agreement", pdf: "/Brochure/Syndicate-Agreement.pdf" },
  { title: "Tripartite Agreement_CDSL", pdf: "/Brochure/Tripartite-Agreement_CDSL.pdf" },
  { title: "Tripartite Agreement_NSDL", pdf: "/Brochure/Tripartite-Agreement_NSDL.pdf" },
  { title: "Underwriting Agreement", pdf: "/Brochure/Underwriting-Agreement.pdf" },
  
 
  
];

const Page = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
         
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
         Material Contracts & Agreements
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
