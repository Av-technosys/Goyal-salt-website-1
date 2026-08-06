import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Goyal Salt"
              width={160}
              height={80}
              className="mb-6"
            />
          </Link>
          <p className="text-red-600 font-semibold leading-relaxed mb-6">
            GOYAL SALT offers a wide range of salt products, including refined
            free flow salt and double fortified salt.
          </p>

          <div className="flex gap-4">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/goyal.salt"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white 
               transition-transform duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/goyal.salt"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white 
               transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </Link>

            {/* YouTube */}
            <Link
              href="https://www.youtube.com/@GoyalSalt-limited"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white 
               transition-transform duration-300 hover:scale-110"
            >
              <FaYoutube />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/goyal-salt-limited/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white 
               transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </Link>

            {/* Pinterest */}
            <Link
              href="https://in.pinterest.com/goyalsalt65/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white 
               transition-transform duration-300 hover:scale-110"
            >
              <FaPinterestP />
            </Link>
          </div>
        </div>

        {/* Middle */}
        <div>
          <p className="text-2xl font-bold mb-6">Registered & Corp Office</p>

          <p className="mb-2">
            Goyal Salt Limited (Formerly: Goyal Salt Private Limited)
          </p>
          <p className="mb-4">(CIN: L24298RJ2010PLC033409)</p>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt size={40} className="mt-1" />
            <p>
              Plot No 229–230, Guru Jambeshwar Nagar, Lane No – 07, Gandhi Path,
              Vaishali Nagar, Jaipur – 302021, Rajasthan.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt />
            <p>+91 7568018883</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <p>info@goyalsalt.in</p>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-2xl font-bold mb-6">
            Factory & Administrator Office
          </p>

          <p className="mb-6">
            Survey No. 546, Near Biyani Petrol Pump, Mohanpura Bypass Road, Nawa
            City, District: Nagaur – 341509, Rajasthan.
          </p>

          <hr className="my-6 border-black" />

          <p>
            Survey No 416, Village – Chirai Moti, Taluka – Bhachau, District –
            Kutch, Gujarat – 370140.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © <span className="text-red-600 font-semibold">Goyal Salt</span>{" "}
            2026. All Rights Reserved.
          </p>

          <p>
            Developed By{" "}
            <Link
              href="https://avtechnosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold"
            >
              AV Technosys
            </Link>
          </p>
        </div>

        {/* Gradient Bar */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />
      </div>
    </footer>
  );
}
