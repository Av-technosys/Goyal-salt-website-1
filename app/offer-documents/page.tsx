import React from "react";
import OfferDocumentsClient from "./OfferDocumentsClient";

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
  return <OfferDocumentsClient documents={documents} />;
};

export default Page;
