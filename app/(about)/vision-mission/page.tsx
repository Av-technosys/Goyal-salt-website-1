export const metadata = {
  title: "Goyal Salt Ltd Vision & Mission | Salt Manufacturers India",
  description:
    "Our vision drives us to be among India’s top salt manufacturers & suppliers, ensuring purity, consistency, and a trusted supply for distributors and clients.",
  alternates: {
    canonical: "https://goyalsaltltd.com/vision-mission",
  },
};


export default function VisionMissionPage() {
  return (
    <section className="bg-white py-16 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
            Vision & Mission
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Driving excellence, innovation, and trust in salt production for a
            healthier tomorrow.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* VISION CARD */}
          <div className="relative bg-gray-50 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition">
            <span className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-3xl" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Vision
            </h2>

            <div className="w-16 h-1 bg-yellow-400 mb-6" />

            <p className="text-gray-700 leading-relaxed mb-5">
              Our vision is to become a globally trusted name in salt production
              by offering high-quality, diverse, and sustainable salt products
              that enhance the health, well-being, and satisfaction of our
              customers, suppliers, and employees.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We aim to lead with innovation, uphold ethical standards, and
              foster a culture of continuous improvement in every step of our
              value chain.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="relative bg-gray-50 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition">
            <span className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-3xl" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Mission
            </h2>

            <div className="w-16 h-1 bg-red-500 mb-6" />

            <p className="text-gray-700 leading-relaxed mb-5">
              Our mission is to consistently deliver premium-quality salt
              products through advanced processing, strict quality control, and
              responsible sourcing practices.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We are committed to building long-term relationships with our
              customers and partners by maintaining transparency, reliability,
              and innovation while contributing positively to society and the
              environment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
