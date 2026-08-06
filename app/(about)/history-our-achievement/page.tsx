import Image from "next/image";

export const metadata = {
  title: "Goyal Salt Limited – History and Company Achievements",
  description:
    "Explore the history of Goyal Salt Limited, from major milestones to key achievements that shaped our growth, values and legacy of excellence.",
  alternates: {
    canonical: "https://goyalsaltltd.com/history-our-achievement",
  },
};

const achievements = [
  {
    title: "Listed on NSE – SME Platform",
    badge: "Corporate Milestone",
    badgeColor: "bg-green-100 text-green-700",
    image: "/Images/Our-achievement1.png",
    description:
      "On October 11, 2023, Goyal Salt Limited achieved a major corporate milestone by getting listed on the SME Emerge Platform of NSE, the largest stock exchange of India. This listing reflects our transparent governance, financial strength, and long-term growth vision.",
  },
  {
    title: "Rajasthan Radiance Award 2023",
    badge: "Industry Recognition",
    badgeColor: "bg-yellow-100 text-yellow-700",
    image: "/Images/Our-achievement2.jpg",
    description:
      "In the same year, Goyal Salt Limited was honored with the prestigious “Rajasthan Radiance Award 2023” for excellence in the category of Salt Manufacturing, recognizing our commitment to quality, innovation, and operational excellence.",
  },
  {
    title: "Most Trusted Salt Manufacturer in India – 2024",
    badge: "National Honor",
    badgeColor: "bg-red-100 text-red-700",
    image: "/Images/infrastructure.png",
    description:
      "Recently, Goyal Salt Limited was honored with the prestigious “Most Trusted Salt Manufacturer in India Award” at the National Quality Awards 2024, held on 28th September 2024 in New Delhi. This award reflects the trust millions of consumers place in our brand.",
  },
  {
    title: "National Quality Award – 2024 Ceremony",
    badge: "Award Ceremony",
    badgeColor: "bg-purple-100 text-purple-700",
    image: "/Images/Our-achievement3.jpg", // NEW IMAGE
    description:
      "At the National Quality Awards 2024 ceremony, Goyal Salt Limited was recognized on a national platform for its excellence, reliability, and contribution to India’s salt manufacturing industry. This moment marks another proud milestone in our journey of trust and leadership.",
  },
];

export default function OurAchievementsPage() {
  return (
    <section className="bg-white py-16 sm:py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
            Our Achievements
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Celebrating milestones that define our journey of excellence, trust,
            and leadership in the salt industry.
          </p>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="space-y">
          {achievements.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
               <div
  className={`relative rounded-3xl overflow-hidden shadow-xl 
  mt-6 sm:mt-8 lg:mt-0
  ${reverse ? "lg:order-2" : ""}`}
>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* CONTENT */}
                <div className={`${reverse ? "lg:order-1" : ""}`}>
                  <span
                    className={`inline-block mb-3 rounded-full px-4 py-1 text-sm font-semibold ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
