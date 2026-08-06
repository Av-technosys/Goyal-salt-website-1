import React from "react";
import { Download, FileText } from "lucide-react";

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
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
         
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-3 text-red-500">
           Codes & Policies
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
