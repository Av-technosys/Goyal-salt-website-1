import React from "react";

export const metadata = {
  title: "Investor Grievance | Goyal Salt Limited",
  description:
    "Find details on how investors can raise grievances or complaints with Goyal Salt Limited and get support related to shares, reports and disclosures.",
  alternates: {
    canonical: "https://goyalsaltltd.com/investor-grievance ",
  },
};

const page = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* PAGE HEADER */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600">
            Investor Grievance
          </h1>
        </header>

        {/* CONTENT */}
        <div className="space-y-8 text-gray-700  leading-relaxed text-sm sm:text-base">

          <div>
            <p className="font-semibold text-red-600">
              Goyal Salt Limited
            </p>
            <p className="text-sm">
              <strong>CIN:</strong> L24298RJ2010PLC033409
            </p>
          </div>

          {/* REGISTERED OFFICE */}
          <section>
            <h2 className="font-semibold text-red-600 mb-2">
              Registered & Corporate Office
            </h2>
            <p>
              Plot No. 229–230, Guru Jambeshwar Nagar, <br />
              Lane No. 7, Gandhi Path, Vaishali Nagar, <br />
              Jaipur – 302021, Rajasthan
            </p>
          </section>

          {/* FACTORY OFFICE */}
          <section>
            <h2 className="font-semibold text-red-600 mb-2">
              Factory & Administrative Office
            </h2>

            <p className="mt-2 font-medium">Unit I</p>
            <p>
              Survey No. 546, Near Biyani Petrol Pump, <br />
              Mohanpura Bypass Road, Nawa City, <br />
              Distt: Nagaur – 341509, Rajasthan
            </p>

            <p className="mt-3 font-medium">Unit II</p>
            <p>
              Survey No. 416, Village – Chirai Moti, <br />
              Taluka – Bhachau, District – Kutch, <br />
              Gujarat – 370140
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <p>
              Phone: <strong>+91 75680 18883</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@goyalsalt.in"
                className="text-red-600 font-medium hover:underline"
              >
                info@goyalsalt.in
              </a>
            </p>
          </section>

          {/* RTA */}
          <section>
            <h2 className="font-semibold text-red-600 mb-2">
              Registrar & Transfer Agents
            </h2>
            <p className="font-medium">
              M/s Bigshare Services Private Limited
            </p>
            <p>
              Office No. S6–2, 6th Floor, Pinnacle Business Park, <br />
              Mahakali Caves Road, Andheri (E), <br />
              Mumbai – 400093, Maharashtra
            </p>
            <p className="mt-2">
              Phone: +91-22-62638289
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:admission@bigshareonline.com"
                className="text-red-600 font-medium hover:underline"
              >
                admission@bigshareonline.com
              </a>
            </p>
          </section>

          {/* INVESTOR GRIEVANCE CONTACT */}
          <section>
            <h2 className="font-semibold text-red-600 mb-2">
              For Investor Queries and Grievance Redressal
            </h2>
            <p className="font-medium">
              Mr. Gourishankar Boosar
            </p>
            <p>
              Company Secretary & Compliance Officer
            </p>
            <p className="mt-2">
              Phone: +91 91165 44418
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:investor.grievances@goyalsalt.in"
                className="text-red-600 font-medium hover:underline"
              >
                investor.grievances@goyalsalt.in
              </a>
            </p>
          </section>

        </div>
      </div>
    </section>
  );
};

export default page;
