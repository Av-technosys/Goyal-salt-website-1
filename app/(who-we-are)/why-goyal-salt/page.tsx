import Link from "next/link";

export const metadata = {
  title: "Why Choose Goyal Salt Ltd – Leading Salt Suppliers in India",
  description:
    "Goyal Salt Ltd offers premium salt manufacturing in India, trusted by distributors & suppliers for purity, consistency, and efficient supply. Call us today. ",
  alternates: {
    canonical: "https://goyalsaltltd.com/why-goyal-salt",
  },
};
const reasons = [
  { id: "01", title: "More than 14 Years of Experience" },
  { id: "02", title: "Product Customization" },
  { id: "03", title: "Research & Development Mastery" },
  { id: "04", title: "Strong Supply Chain Management" },
  { id: "05", title: "Customer Centric Approach" },
  { id: "06", title: "State of the Art Technology" },
  { id: "07", title: "Effective Control on Raw Salt Procurement" },
  { id: "08", title: "One of the Largest Salt Manufacturer in India" },
];


export default function WhyGoyalSalt() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-16">
          Why Goyal Salt Ltd?
        </h1>

        {/* ================= REASONS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl font-bold text-green-600 mb-3">
                {item.id}
              </div>
              <p className="text-gray-800 font-semibold text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ================= DOWNLOAD BUTTON ================= */}
        <div className="flex justify-center mb-20">
          <Link
            href="/Brochure/Brochure.pdf"
            target="_blank"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
          >
            Download Brochure
          </Link>
        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="max-w-4xl space-y-10">
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              INTEGRITY
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Goyal Salt Ltd. believes in doing the right thing. Since our
              incorporation, we have maintained the highest level of moral and
              ethical values in every sphere of our work through habitual
              integrity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              HIGH-QUALITY STANDARDS
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We have consistently offered the highest standards of quality,
              ensuring cost-effectiveness and long-term value for our clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              LEADERSHIP
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We create our own path to success. Goyal Salt Ltd. leads the market
              through innovation, operational excellence, and profitable
              solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
