"use client";
import { a } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const data = [
  <a href="/about-us" target="_blank" className="hover:text-red-600">Details of Business</a>, 

 <a href="/Brochure/Terms and conditions of appointment of Independent Directors.pdf" target="_blank" className=" hover:text-red-600"> Terms and conditions of appointment of Independent Directors
</a>,

  "Composition of various Committees of the Board of Directors",

  <a href="/Brochure/Code-of-Conduct-for-BOD-SLM.pdf" target="_blank" className=" hover:text-red-600">Code of Conduct of the Board of Directors and Senior Management Personnel</a>,
  
  <a href="/Brochure/Whistle-Blower-Policy.pdf" target="_blank" className=" hover:text-red-600">Details of establishment of Vigil Mechanism / Whistle Blower Policy</a>,

  <a href="/Brochure/Nomination-and-Remuneration-Policy.pdf" target="_blank" className=" hover:text-red-600">Criteria of making payments to Non-Executive Directors, if not disclosed in Annual Report</a>,


  <a href="/Brochure/Policy-on-RPT.pdf" target="_blank" className=" hover:text-red-600">Policy on dealing with Related Party Transactions</a>,

  "Policy for determining ‘Material’ Subsidiaries – Not Applicable",

  <a href="/Brochure/Familirization-programme-for-ID.pdf" target="_blank" className=" hover:text-red-600">
  Details of familiarization programmes imparted to independent directors including the following details<br/>
   (i) Number of programmes attended by independent directors (during the year and on a cumulative basis till date);<br/>
   (ii) Number of hours spent by independent directors in such programmes (during the year and on cumulative basis till date); <br/>
   (iii) Other relevant details</a>,


  <a href="/investor-grievance" target="_blank" className="hover:text-red-600">The email address for grievance redressal and other relevant details</a>,


  <a href="/investor-grievance" target="_blank" className="hover:text-red-600">Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances</a>,

  <>
  Financial Information including:
  <br />(i) Notice of meeting of the board of directors where financial results shall be discussed;
  <br />(ii) Financial results, on conclusion of the meeting of the board of directors where the financial results were approved;
  <br />(iii){" "}
  <a
    href="/annual-report"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-red-600"
  >
    Complete copy of the annual report including balance sheet, profit and loss account, directors report, corporate governance report etc.
  </a>
</>,


   
   <a href="/governance/shareholding-pattern" target="_blank" className="hover:text-red-600">Shareholding Pattern</a>,


  " Details of agreements entered into with the media companies and/or their associates, etc:No agreement entered with Media Company",
  
  <>
  Schedule of analysts or institutional investors meet and presentations made by the listed entity to analysts or institutional investors.<br/>
  Audio or video recordings and transcripts of post earnings/quarterly calls, by whatever name called, conducted physically or through digital means, simultaneously with submission to the recognized stock exchange(s), in the following manner.<br/>
  (i) The presentation and the audio/video recordings shall be promptly made available on the website and in any case, before the next trading day or within twenty-four hours from the conclusion of such calls, whichever is earlier;<br/>
  (ii) the transcripts of such calls shall be made available on the website within five working days of the conclusion of such calls: No such calls or meet has been held till date. Will be intimated if we hold in future;<br/>
 
</>,


   
  " New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change:Not Applicable",

  `Items published in newspaper:
   (a) inancial results, as specified in regulation 33, along with the modified opinion(s) or reservation(s), if any, expressed by the auditor: Not Applicable;
   (b) notices given to shareholders by advertisement`,

  "All credit ratings obtained by the entity for all its outstanding instruments, updated immediately as and when there is any revision in any of the ratings: No ratings obtained till date. Further, it will be intimated if obtained in future",

  "Separate audited financial statements of each subsidiary of the listed entity in respect of a relevant financial year, uploaded at least 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year: Not Applicable",

  "Secretarial Compliance Report: Not Applicable",

  
  <a href="/Brochure/Policy-for-determination-of-materiality-of-information-or-event.pdf" target="_blank" className=" hover:text-red-600">Disclosure of the policy for determination of materiality of events or information required under clause (ii), sub-regulation (4) of regulation 30 of these regulations</a>,


   <a href="/Brochure/Policy-for-determination-of-materiality-of-information-or-event (1).pdf" target="_blank" className=" hover:text-red-600">Disclosure of contact details of key managerial personnel who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange(s) as required under sub-regulation (5) of regulation 30 of these regulations</a>,


  "All such events or information which has been disclosed to stock exchange(s) under regulation 30 of LODR",


   <a href="/Brochure/Statement-of-Deviation_GSL.pdf" target="_blank" className=" hover:text-red-600">Statements of deviation(s) or variation(s)</a>,


  " Dividend Distribution Policy by listed entities based on market capitalization-Not Applicable",


    <a href="/annual-return" target="_blank" className="hover:text-red-600">Annual return as provided under section 92 of the Companies Act, 2013 and the rules made thereunder</a>,
     <a href="/Brochure/Memorandum of Association and Articles of Association of the Company.pdf" target="_blank" className="hover:text-red-600">Upload Memorandum of Association and Articles of Association of the Company</a>,
];

const Durform = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-red-600 mb-6">
          Disclosure under Regulation 46 of LODR
        </h1>

        {/* Table */}
        <div className="border border-gray-300 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-gray-300 px-3 py-2 w-20 text-left">
                  Sl. No.
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Particulars as per Regulation 46 of LODR
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">
                    {index + 1}.
                  </td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-pre-line">
                    {item}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Durform;
