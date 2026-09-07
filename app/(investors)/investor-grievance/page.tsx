import React from "react";
import {
  ShieldCheck,
  Building2,
  MapPin,
  Factory,
  UserCheck,
  Mail,
  Phone,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Investor Grievance | Goyal Salt Limited",
  description:
    "Find details on how investors can raise grievances or complaints with Goyal Salt Limited and get support related to shares, reports and disclosures.",
  alternates: {
    canonical: "https://goyalsaltltd.com/investor-grievance ",
  },
};

export default function InvestorGrievancePage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BADGE */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-sm tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Investor Relations & Corporate Governance</span>
          </div>
        </div>

        {/* PAGE HEADER - Exact Quality Control & Directors Font Size */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Investor <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Grievance</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Contact details and official touchpoints for investor queries, grievance redressal, share registry, and corporate compliance.
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* MAIN DOCUMENT CONTAINER */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-2xl p-6 sm:p-12 lg:p-14 space-y-12">

          {/* 1. INVESTOR GRIEVANCE CONTACT (FEATURED OFFICER SECTION) */}
          <section id="grievance-officer" className="space-y-6">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <UserCheck className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                For Investor Queries and Grievance Redressal
              </h2>
            </div>

            <div className="bg-red-50/70 p-6 sm:p-8 rounded-2xl border border-red-100 space-y-4">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-red-200">
                  Compliance Officer
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-3">
                  Mr. Gourishankar Boosar
                </h3>
                <p className="text-base font-semibold text-gray-700 mt-1">
                  Company Secretary & Compliance Officer
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+919116544418"
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs hover:border-red-300 transition-colors min-w-0"
                >
                  <Phone className="w-5 h-5 text-red-600 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs text-gray-500 font-medium block">Direct Phone</span>
                    <span className="text-sm font-bold text-gray-900">+91 91165 44418</span>
                  </div>
                </a>

                <a
                  href="mailto:investor.grievances@goyalsalt.in"
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs hover:border-red-300 transition-colors min-w-0"
                >
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs text-gray-500 font-medium block">Official Grievance Email</span>
                    <span className="text-sm font-bold text-red-600 hover:underline break-all sm:break-normal">investor.grievances@goyalsalt.in</span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* 2. COMPANY DETAILS & REGISTERED OFFICE */}
          <section id="registered-office" className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Building2 className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Registered & Corporate Office
              </h2>
            </div>

            <div className="bg-gray-50/80 p-6 sm:p-8 rounded-2xl border border-gray-100 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Goyal Salt Limited
                </h3>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  CIN: L24298RJ2010PLC033409
                </p>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200/80">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Plot No. 229–230, Guru Jambeshwar Nagar, <br />
                  Lane No. 7, Gandhi Path, Vaishali Nagar, <br />
                  Jaipur – 302021, Rajasthan
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 text-sm">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Phone: <strong className="text-gray-900">+91 75680 18883</strong></span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 text-sm min-w-0">
                  <Mail className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="min-w-0 break-all">Email: <a href="mailto:info@goyalsalt.in" className="text-red-600 font-bold hover:underline">info@goyalsalt.in</a></span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. REGISTRAR & TRANSFER AGENTS (RTA) */}
          <section id="rta-details" className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <FileText className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Registrar & Transfer Agents
              </h2>
            </div>

            <div className="bg-gray-50/80 p-6 sm:p-8 rounded-2xl border border-gray-100 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                M/s Bigshare Services Private Limited
              </h3>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200/80">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Office No. S6–2, 6th Floor, Pinnacle Business Park, <br />
                  Mahakali Caves Road, Andheri (E), <br />
                  Mumbai – 400093, Maharashtra
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 text-sm">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Phone: <strong className="text-gray-900">+91-22-62638289</strong></span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 text-sm min-w-0">
                  <Mail className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="min-w-0 break-all">Email: <a href="mailto:admission@bigshareonline.com" className="text-red-600 font-bold hover:underline">admission@bigshareonline.com</a></span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. FACTORY & ADMINISTRATIVE OFFICE */}
          <section id="factory-offices" className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Factory className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Factory & Administrative Office
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Unit I */}
              <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                    Unit I
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed bg-white p-4 rounded-xl border border-gray-200/80">
                  Survey No. 546, Near Biyani Petrol Pump, <br />
                  Mohanpura Bypass Road, Nawa City, <br />
                  Distt: Nagaur – 341509, Rajasthan
                </p>
              </div>

              {/* Unit II */}
              <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                    Unit II
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed bg-white p-4 rounded-xl border border-gray-200/80">
                  Survey No. 416, Village – Chirai Moti, <br />
                  Taluka – Bhachau, District – Kutch, <br />
                  Gujarat – 370140
                </p>
              </div>
            </div>
          </section>

          {/* 5. CONTACT US DARK GRADIENT CARD */}
          <section id="contact-banner" className="pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-red-400 shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Need Investor Support?</h2>
                    <p className="text-xs text-gray-300">Get in touch with our Investor Desk</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-200">
                  <p className="font-bold text-lg text-white">
                    Goyal Salt Limited
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Plot No. 229–230, Guru Jambeshwar Nagar, <br />
                      Lane No. 7, Gandhi Path, Vaishali Nagar, <br />
                      Jaipur, Rajasthan – 302021, India
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-2 min-w-0">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                    <p className="min-w-0 break-all">
                      Email:{" "}
                      <a
                        href="mailto:investor.grievances@goyalsalt.in"
                        className="text-amber-400 font-bold hover:underline"
                      >
                        investor.grievances@goyalsalt.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ACKNOWLEDGMENT */}
          <section className="pt-6 border-t border-gray-100 text-center">
            <p className="text-sm font-medium text-gray-500">
              For any unresolved queries, investors may also reach out to the Compliance Officer directly.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}
