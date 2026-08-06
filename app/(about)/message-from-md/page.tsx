import Image from "next/image";

export const metadata = {
  title: "Managing Director’s Message | Goyal Salt Limited",
  description:
    "Read the message from the managing director at Goyal Salt Ltd for insights on vision, values, growth and commitment to quality and service excellence.",
  alternates: {
    canonical: "https://goyalsaltltd.com/message-from-md",
  },
};

export default function MessageFromMDPage() {
  return (
    <section className="bg-gray-50 py-16 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
            Message From MD
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A word of leadership, vision, and commitment from our Managing Director
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* IMAGE SECTION */}
            <div className="relative bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center p-8">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/Images/pramesh.jpg" // replace with actual image path
                  alt="Pramesh Goyal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="lg:col-span-2 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Pramesh Goyal
              </h2>
              <p className="text-red-600 font-semibold mt-1">
                Managing Director
              </p>

              <p className="mt-6 text-lg font-medium text-gray-800">
                Welcome to our website everyone.
              </p>

              <blockquote className="mt-6 border-l-4 border-red-500 pl-4 italic text-gray-700">
                “Without continual growth and progress, such words as
                improvement, achievement, and success have no meaning.”
              </blockquote>

              <p className="mt-6 text-gray-700 leading-relaxed">
                And for achieving this growth and progress, we must have a good
                infrastructure, sufficient resources, and a strong team. We
                have successfully grown our business by focusing on product
                quality and customer satisfaction.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                At Goyal Salt, we remain committed to ethical practices,
                innovation, and long-term relationships with our customers and
                partners.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
