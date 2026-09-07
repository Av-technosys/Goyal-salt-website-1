"use client";
import React from "react";

const data = [
  <a key="1" href="/about-us" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Details of Business</a>, 

  <a key="2" href="/Brochure/Terms and conditions of appointment of Independent Directors.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors"> Terms and conditions of appointment of Independent Directors</a>,

  "Composition of various Committees of the Board of Directors",

  <a key="3" href="/Brochure/Code-of-Conduct-for-BOD-SLM.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Code of Conduct of the Board of Directors and Senior Management Personnel</a>,
  
  <a key="4" href="/Brochure/Whistle-Blower-Policy.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Details of establishment of Vigil Mechanism / Whistle Blower Policy</a>,

  <a key="5" href="/Brochure/Nomination-and-Remuneration-Policy.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Criteria of making payments to Non-Executive Directors, if not disclosed in Annual Report</a>,

  <a key="6" href="/Brochure/Policy-on-RPT.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Policy on dealing with Related Party Transactions</a>,

  "Policy for determining ‘Material’ Subsidiaries – Not Applicable",

  <a key="7" href="/Brochure/Familirization-programme-for-ID.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">
  Details of familiarization programmes imparted to independent directors including the following details<br/>
   (i) Number of programmes attended by independent directors (during the year and on a cumulative basis till date);<br/>
   (ii) Number of hours spent by independent directors in such programmes (during the year and on cumulative basis till date); <br/>
   (iii) Other relevant details</a>,

  <a key="8" href="/investor-grievance" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">The email address for grievance redressal and other relevant details</a>,

  <a key="9" href="/investor-grievance" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances</a>,

  <React.Fragment key="10">
  Financial Information including:
  <br />(i) Notice of meeting of the board of directors where financial results shall be discussed;
  <br />(ii) Financial results, on conclusion of the meeting of the board of directors where the financial results were approved;
  <br />(iii){" "}
  <a
    href="/annual-report"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-900 hover:text-red-600 font-medium transition-colors"
  >
    Complete copy of the annual report including balance sheet, profit and loss account, directors report, corporate governance report etc.
  </a>
  </React.Fragment>,

  <a key="11" href="/governance/shareholding-pattern" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Shareholding Pattern</a>,

  " Details of agreements entered into with the media companies and/or their associates, etc:No agreement entered with Media Company",
  
  <React.Fragment key="12">
  Schedule of analysts or institutional investors meet and presentations made by the listed entity to analysts or institutional investors.<br/>
  Audio or video recordings and transcripts of post earnings/quarterly calls, by whatever name called, conducted physically or through digital means, simultaneously with submission to the recognized stock exchange(s), in the following manner.<br/>
  (i) The presentation and the audio/video recordings shall be promptly made available on the website and in any case, before the next trading day or within twenty-four hours from the conclusion of such calls, whichever is earlier;<br/>
  (ii) the transcripts of such calls shall be made available on the website within five working days of the conclusion of such calls: No such calls or meet has been held till date. Will be intimated if we hold in future;<br/>
  </React.Fragment>,

  " New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change:Not Applicable",

  `Items published in newspaper:
   (a) inancial results, as specified in regulation 33, along with the modified opinion(s) or reservation(s), if any, expressed by the auditor: Not Applicable;
   (b) notices given to shareholders by advertisement`,

  "All credit ratings obtained by the entity for all its outstanding instruments, updated immediately as and when there is any revision in any of the ratings: No ratings obtained till date. Further, it will be intimated if obtained in future",

  "Separate audited financial statements of each subsidiary of the listed entity in respect of a relevant financial year, uploaded at least 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year: Not Applicable",

  "Secretarial Compliance Report: Not Applicable",

  <a key="13" href="/Brochure/Policy-for-determination-of-materiality-of-information-or-event.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Disclosure of the policy for determination of materiality of events or information required under clause (ii), sub-regulation (4) of regulation 30 of these regulations</a>,

  <a key="14" href="/Brochure/Policy-for-determination-of-materiality-of-information-or-event (1).pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Disclosure of contact details of key managerial personnel who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange(s) as required under sub-regulation (5) of regulation 30 of these regulations</a>,

  "All such events or information which has been disclosed to stock exchange(s) under regulation 30 of LODR",

  <a key="15" href="/Brochure/Statement-of-Deviation_GSL.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Statements of deviation(s) or variation(s)</a>,

  " Dividend Distribution Policy by listed entities based on market capitalization-Not Applicable",

  <a key="16" href="/annual-return" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Annual return as provided under section 92 of the Companies Act, 2013 and the rules made thereunder</a>,

  <a key="17" href="/Brochure/Memorandum of Association and Articles of Association of the Company.pdf" target="_blank" className="text-gray-900 hover:text-red-600 font-medium transition-colors">Upload Memorandum of Association and Articles of Association of the Company</a>,
];

const Durform = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading & Subheading - Exact Quality Control & Directors Font Size */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Disclosure under <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Regulation 46 of LODR</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Statutory disclosures, corporate governance details, and official company records under SEBI LODR Regulation 46.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Table Container */}
        <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white font-serif text-sm">
                  <th className="py-4 px-6 w-20 font-bold border-b border-gray-800">
                    Sl. No.
                  </th>
                  <th className="py-4 px-6 font-bold border-b border-gray-800">
                    Particulars as per Regulation 46 of LODR
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-red-50/30 transition-colors duration-150">
                    <td className="py-4 px-6 font-semibold text-gray-500 align-top">
                      {index + 1}.
                    </td>
                    <td className="py-4 px-6 whitespace-pre-line text-gray-800 leading-relaxed align-top">
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Durform;
