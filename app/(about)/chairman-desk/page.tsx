import Image from "next/image";

export const metadata = {
  title: "Goyal Salt Chairman’s Desk | Salt Suppliers & Manufacturers",
  description:
    "Read the Chairman’s Desk message at Goyal Salt Ltd, reflecting dedication to premium salt production for India’s distributors, suppliers & industrial sectors.",
  alternates: {
    canonical: "https://goyalsaltltd.com/chairman-desk",
  },
};

export default function ChairmansDeskPage() {
  return (
    <section className="bg-gray-50 py-16 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
            Chairman&apos;s Desk
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A message of vision, leadership, and gratitude from our Chairman
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* IMAGE SECTION */}
            <div className="relative flex items-center justify-center bg-gradient-to-b from-sky-600 to-sky-800 p-8">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/Images/rajesh.jpg" // replace with actual image path
                  alt="Rajesh Goyal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="lg:col-span-2 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Rajesh Goyal
              </h2>
              <p className="text-red-500 font-semibold mt-1">
                Chairman & Managing Director
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                With a vision to set up India’s one of the largest salt
                industries, we started our journey over a decade ago by taking
                small yet determined steps. What began as a dream has today
                transformed into a strong and growing organization built on
                trust, quality, and commitment.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                Building an empire is not a one-person effort. Without a
                hardworking and dedicated team, this journey would not have
                been possible. I am deeply proud of every individual who has
                walked alongside me, contributing their passion and dedication
                to shape what we are today.
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                As we move forward, our focus remains on sustainable growth,
                ethical practices, and creating a positive workplace culture
                where innovation and excellence thrive.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
