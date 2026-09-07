import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Codes & Policies | Goyal Salt Limited",
  description:
    "Read the codes and policies of Goyal Salt Limited, including company rules, guidelines, and governance documents for transparency and compliance.",
  alternates: {
    canonical: "https://goyalsaltltd.com/governance/codes-policies",
  },
};

const documents = [
  { title: "Policy on Related Party Transaction", pdf: "/Brochure/Policy-on-Related-Party-Transaction-1.pdf" },
  { title: "Policy for determination of materiality of information or event", pdf: "/Brochure/Policy-for-determination-of-materiality-of-information-or-event.pdf" },
  { title: "Archival Policy", pdf: "/Brochure/Archival-Policy.pdf" },
  { title: "CSR Policy_GSL", pdf: "/Brochure/CSR-Policy_GSL.pdf" },
  { title: "Code of Conduct for BOD & SLM", pdf: "/Brochure/Code-of-Conduct-for-BOD-SLM.pdf" },
  { title: "Familirization programme for ID", pdf: "/Brochure/Familirization-programme-for-ID.pdf" },
  { title: "Insider Trading Policy", pdf: "/Brochure/Insider-Trading-Policy.pdf" },
  { title: "Nomination and Remuneration Policy", pdf: "/Brochure/Nomination-and-Remuneration-Policy.pdf" },
  { title: "Policy for determination of materiality of information or event", pdf: "/Brochure/Policy-for-determination-of-materiality-of-information-or-event (1).pdf" },
  { title: "POLICY FOR REDRESSAL OF SEXUAL Harrasment at Workplace", pdf: "/Brochure/POLICY-FOR-REDRESSAL-OF-SEXUAL-Harrasment-at-Workplace.pdf" },
  { title: "Policy on Preservation of Documents", pdf: "/Brochure/Policy-on-Preservation-of-Documents.pdf" },
  { title: "Risk Management Policy", pdf: "/Brochure/Risk-Management-Policy.pdf" },
  { title: "Terms and Conditions for appointment of IDs", pdf: "/Brochure/Terms-and-Conditions-for-appointment-of-IDs.pdf" },
  { title: "Whistle Blower Policy", pdf: "/Brochure/Whistle-Blower-Policy.pdf" },
  { title: "Policy of Insider Trading", pdf: "/Brochure/Policy-for-Insider-Trading.pdf" },
  { title: "Policy of Material Events", pdf: "/Brochure/Policy-for-Material-events.pdf" },
];

const Page = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Subheading - Exact Quality Control & Directors Font Size */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Codes & <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Policies</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            View our latest investor documents and financial reports.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-600 text-red-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                    <FileText className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 group-hover:bg-red-50 group-hover:text-red-600 px-2.5 py-1 rounded-full transition-colors duration-300">
                    PDF Document
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-snug mb-4">
                  {doc.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 group-hover:text-red-600 transition-colors">
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-red-50 text-gray-400 group-hover:text-red-600 flex items-center justify-center transition-colors">
                  <Download className="w-4 h-4 stroke-[2]" />
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
