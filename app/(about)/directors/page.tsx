import Image from "next/image";

export const metadata = {
  title: "Meet Our Directors & Leadership Team | Goyal Salt Limited",
  description:
    "Meet the Goyal Salt Ltd’s directors who bring experience, integrity and leadership to drive organisational excellence. Understand the leadership values.",
  alternates: {
    canonical: "https://goyalsaltltd.com/directors",
  },
};

const directors = [
  {
    name: "Rajesh Goyal",
    role: "Chairman & Whole Time Director",
    image: "/Images/rajesh.jpg",
    description:
      "He is the Chairman and Whole Time Director of the Company. He holds a Master’s degree in Accountancy from Rajasthan University and has over 20 years of experience in the salt industry. He has closely observed the salt industry over the years and played a key role in establishing India’s first washed salt iodised plant in North India. Under his leadership, multiple high-capacity plants were established to cater to the pan-India salt market.",
  },
  {
    name: "Pramesh Goyal",
    role: "Managing Director",
    image: "/Images/pramesh.jpg",
    description:
      "He is the Managing Director of Goyal Salt Limited. A dynamic leader with over 20 years of experience, he joined the family business early and mastered the salt industry’s operational and market dynamics. He has led multiple capacity expansions and played a crucial role in strengthening the company’s presence across India.",
  },
  {
    name: "Lokesh Goyal",
    role: "Whole Team Director",
    image: "/Images/lokesh.jpg",
    description:
      "He is Whole Time Director of Goyal Salt Limited. He is a young and dynamic person who is always ready to take challenge & innovation technology. Completed his bachelor degree form Pune in Business Administration and then Master in Business Management & Marketing form Rajasthan Technical University. He Joined Goyal Salt in 2010 and was redesignated as Whole-Time Director in 2023. he has an experience of over 15 years in the salt industry. He has good control of man power & salt trade. He has a team of experienced employees and qualified technicians. He focuses & invests time in product development & innovation for customer satisfaction.",
  },
  {
    name: "Priyanka Goyal",
    role: "Non-Executive Director",
    image: "/Images/priyanka.jpg",
    description:
      "She is the Non-Executive Director of the Company. She holds Master’s degree from the University of Rajasthan. She is engaged in the salt business for more than 14 years.In 2023, She has joined theBoard as a Non-Executive Director.",
  },
  {
    name: "Narendra Dev Garg",
    role: "Independent Director",
    image: "/Images/narendra.jpg",
    description:
      "Mr. Narendra Dev Garg is an Independent Director of the Company. He is presently working as General Manager (Commercial) in M/s Mahavir Polymers Private Limited. He is a seasoned banker having over 40 years of work experience in almost every Banking Segment. Besides this, he is a Certified Associate of Indian Institute of Bankers (CAIIB), Advisor to various start-ups and is on panel of interview Board of IBPS. He is a person having entrepreneurial mind set with consistent result oriented high performance. He joined the Board on March 22, 2024.",
  },
  {
    name: "Manisha Godara",
    role: "Independent Director",
    image: "/Images/manisha.jpg",
    description:
      "She is an Independent Director of the Company. She got 23rd All India Rank (AIR) in Company Secretaries Foundation Examination. She is Professional Member of Institute of Company Secretaries of India (ICSI) and practicing since 2014 in the name as “Manisha Godara & Associates”. She is a merit holder in All India Commerce Talent Search Examination. She holds Masters’ degree in Commerce from Rajasthan University and completed Bachelor of Commerce from Maharani College, Jaipur. She scored 94% in Rajasthan State Certificate Course in Information Technology. She joined the Company in 2023.",
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <section className="bg-gray-50 py-16 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
            Board of Directors
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Leadership that drives vision, governance, and sustainable growth
          </p>
        </div>

        {/* DIRECTORS LIST */}
        <div className="space-y-16">
          {directors.map((director, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-3 ${
                    isReverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div
                    className={`relative flex items-center justify-center p-8 ${
                      isReverse
                        ? "bg-gradient-to-b from-teal-500 to-teal-700"
                        : "bg-gradient-to-b from-blue-500 to-blue-700"
                    }`}
                  >
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="lg:col-span-2 p-8 sm:p-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {director.name}
                    </h2>
                    <p className="text-red-600 font-semibold mt-1">
                      {director.role}
                    </p>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                      {director.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
