"use client";

import React, { useState } from "react";
import { Download, FileText, Search, X, ArrowRight, ShieldCheck, Mail, FileCheck } from "lucide-react";

interface OfferDocument {
  title: string;
  pdf: string;
  typeBadge?: string;
}

interface OfferDocumentsClientProps {
  documents: OfferDocument[];
}

export default function OfferDocumentsClient({ documents }: OfferDocumentsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section className="min-h-screen bg-slate-50/60 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Section */}
        <div className="relative overflow-hidden bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm mb-12">
          {/* Ambient Background Gradient */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-200/80">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Investor Relations &bull; Statutory Filings</span>
            </div>

            {/* Title - Exact Quality Control & Directors Font Size */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Offer <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Documents</span>
            </h1>

            {/* Subtitle - Exact Quality Control & Directors Font Size */}
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl font-medium leading-relaxed">
              View our latest investor documents, statutory filings, and official records for investor reference and regulatory transparency.
            </p>
            <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />

            {/* Stat Pill Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200/60 px-3.5 py-1.5 rounded-xl">
                <FileCheck className="w-4 h-4 text-red-500" />
                <span>{documents.length} Official Documents</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200/60 px-3.5 py-1.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Verified Compliance</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200/60 px-3.5 py-1.5 rounded-xl">
                <Download className="w-4 h-4 text-amber-500" />
                <span>PDF Format</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold font-serif text-gray-900">
              Document Archive
            </h2>
            <p className="text-sm text-gray-500">
              Showing {filteredDocuments.length} of {documents.length} statutory offer documents
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search document title..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Document Cards Grid */}
        {filteredDocuments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDocuments.map((doc, index) => (
              <a
                key={index}
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Subtle Card Accent Top Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Icon + Format Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-600 text-red-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <FileText className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 group-hover:bg-red-50 group-hover:text-red-600 px-2.5 py-1 rounded-full transition-colors duration-300">
                      PDF Document
                    </span>
                  </div>

                  {/* Document Title */}
                  <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-snug mb-4">
                    {doc.title}
                  </h3>
                </div>

                {/* Bottom Row Action Links */}
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
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center my-8">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">No documents found</h3>
            <p className="text-sm text-gray-500 mb-4">
              No offer document matched &quot;{searchTerm}&quot;.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-xs font-semibold rounded-xl hover:bg-red-700 transition cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Investor Assistance Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-medium mb-3">
                <span>Investor Queries & Grievances</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Need physical copies or statutory details?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                For investor assistance, share registry information, or official disclosures, please write to our investor relations desk.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:investor.grievances@goyalsalt.in"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Investor Relations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
