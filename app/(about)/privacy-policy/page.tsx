import {
  ShieldCheck,
  FileText,
  Clock,
  Lock,
  Database,
  UserCheck,
  Cookie,
  Mail,
  MapPin,
  CheckCircle2,
  Globe,
  HelpCircle,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Goyal Salt Limited",
  description:
    "Read Goyal Salt Ltd’s Privacy Policy to understand how we collect, use, and protect your personal information while ensuring data security & transparency.",
  alternates: {
    canonical: "https://goyalsaltltd.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER BADGE */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200/80 text-red-600 shadow-sm tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Legal & Data Protection</span>
          </div>
        </div>

        {/* PAGE HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Privacy <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">Policy</span>
          </h1>

          {/* Date pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-gray-200 shadow-sm text-xs sm:text-sm font-medium text-gray-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-red-600" />
              <span>Effective Date: <strong>January 1, 2025</strong></span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div>
              <span>Last Updated: <strong>January 1, 2025</strong></span>
            </div>
          </div>
        </div>

        {/* MAIN DOCUMENT CONTAINER */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-2xl p-6 sm:p-12 lg:p-14 space-y-12">

          {/* 1. INTRODUCTION */}
          <section id="introduction" className="space-y-4">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <FileText className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Introduction
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Goyal Salt Limited (“we,” “us,” “our,” or “Goyal Salt”) respects your
              privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              goyalsaltltd.com (the “Website”), purchase our products, or interact
              with our services.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium bg-red-50/60 p-4 rounded-xl border border-red-100 text-gray-800">
              By accessing or using our Website, you acknowledge that you have
              read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          {/* 2. INFORMATION WE COLLECT */}
          <section id="information-collected" className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Database className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Information We Collect
              </h2>
            </div>

            {/* Sub 1 */}
            <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                Personal Information You Provide
              </h3>
              <p className="text-gray-700">
                We may collect personal information that you voluntarily provide
                when you register, place orders, submit inquiries, participate in
                promotions, or apply for partnerships.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "Name and contact details",
                  "Company and business information",
                  "Payment and billing details",
                  "Order history and preferences",
                  "Communication preferences",
                  "Any other information you choose to provide",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-800 bg-white p-3 rounded-xl border border-gray-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub 2 */}
            <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Information Collected Automatically
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "IP address and device identifiers",
                  "Browser type and operating system",
                  "Pages visited and time spent",
                  "Referring URLs and clickstream data",
                  "Date and time of access",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-800 bg-white p-3 rounded-xl border border-gray-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. HOW WE USE YOUR INFORMATION */}
          <section id="how-we-use" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <UserCheck className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Process and fulfill orders",
                "Provide customer support",
                "Send order and service communications",
                "Send marketing communications (with consent)",
                "Improve our Website and services",
                "Detect fraud and security threats",
                "Comply with legal obligations",
                "Facilitate business partnerships",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-red-50/50 p-3.5 rounded-xl border border-red-100 text-sm font-medium text-gray-800">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. LEGAL BASIS FOR PROCESSING */}
          <section id="legal-basis" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <ShieldCheck className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Legal Basis for Processing
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {["Consent", "Contract performance", "Legitimate business interests", "Legal obligations"].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-semibold text-sm text-gray-900 shadow-2xs">
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* 5. COOKIES & TRACKING */}
          <section id="cookies" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Cookie className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Cookies and Tracking Technologies
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance user experience
              and analyze Website usage.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {["Essential cookies", "Performance cookies", "Functional cookies", "Marketing cookies"].map((cookie, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 text-xs sm:text-sm font-semibold text-amber-900">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{cookie}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. HOW WE SHARE YOUR INFORMATION */}
          <section id="sharing" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Globe className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                How We Share Your Information
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg bg-gray-50 p-5 rounded-2xl border border-gray-200">
              We do not sell or rent your personal information. We may share it
              with trusted service providers, legal authorities, or in business
              transfers.
            </p>
          </section>

          {/* 7. DATA SECURITY */}
          <section id="data-security" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Lock className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Data Security
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "SSL encryption",
                "Restricted access controls",
                "Regular security audits",
                "Employee training",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/60 font-semibold text-sm text-emerald-950">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8. DATA RETENTION */}
          <section id="data-retention" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Clock className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Data Retention
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Order Records</span>
                <p className="text-lg font-bold text-gray-900 mt-1">7 years</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Marketing Data</span>
                <p className="text-lg font-bold text-gray-900 mt-1">Until consent withdrawn</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Analytics Data</span>
                <p className="text-lg font-bold text-gray-900 mt-1">26 months</p>
              </div>
            </div>
          </section>

          {/* 9. YOUR RIGHTS AND CHOICES */}
          <section id="your-rights" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <UserCheck className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Your Rights and Choices
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Access and correction",
                "Data portability",
                "Deletion requests",
                "Cookie preferences",
                "Withdraw consent",
              ].map((right, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-red-50/40 p-3.5 rounded-xl border border-red-100 font-medium text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 10. CHILDREN'S PRIVACY */}
          <section id="childrens-privacy" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <HelpCircle className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Children’s Privacy
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our Website is not intended for children under 18. We do not
              knowingly collect children’s data.
            </p>
          </section>

          {/* 11. INTERNATIONAL DATA TRANSFERS */}
          <section id="international-transfers" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <Globe className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                International Data Transfers
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Data may be processed in India or other countries with appropriate
              safeguards in place.
            </p>
          </section>

          {/* 12. CHANGES TO THIS PRIVACY POLICY */}
          <section id="changes-to-policy" className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 border-l-4 border-red-600 pl-4 py-0.5">
              <FileText className="w-6 h-6 text-red-600 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Changes to This Privacy Policy
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We may update this policy periodically. Continued use of the
              Website implies acceptance of the updated policy.
            </p>
          </section>

          {/* 13. CONTACT US */}
          <section id="contact-us" className="pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-red-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-red-400 shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                    <p className="text-xs text-gray-300">For privacy inquiries & data requests</p>
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
                  <div className="flex items-center gap-3 pt-2">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@goyalsaltltd.com"
                        className="text-amber-400 font-bold hover:underline"
                      >
                        info@goyalsaltltd.com
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
              By using our Website, you acknowledge that you have read,
              understood, and agree to this Privacy Policy.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}
