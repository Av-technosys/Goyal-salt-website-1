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
  FaIndustry,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Top Red Brand Gradient Divider */}
      <div className="h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700 w-full" />

      {/* Main Footer Container */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Social (Lg: 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 transition-transform hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Goyal Salt Logo"
                  width={170}
                  height={85}
                  priority
                  className="object-contain h-16 w-auto"
                />
              </Link>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md font-normal">
                <span className="text-red-600 font-semibold">GOYAL SALT</span> offers a wide range of salt products, including refined free flow salt and double fortified salt.
              </p>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/goyal.salt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
                >
                  <FaFacebookF size={16} />
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/goyal.salt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
                >
                  <FaInstagram size={16} />
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@GoyalSalt-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
                >
                  <FaYoutube size={16} />
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/company/goyal-salt-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
                >
                  <FaLinkedinIn size={16} />
                </Link>

                {/* Pinterest */}
                <Link
                  href="https://in.pinterest.com/goyalsalt65/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-xs hover:scale-110"
                >
                  <FaPinterestP size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Registered & Corporate Office (Lg: 4 cols) */}
          <div className="lg:col-span-4 bg-gray-50/70 rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-red-600 font-bold text-lg mb-4">
                <FaBuilding className="text-red-600 shrink-0" size={20} />
                <h3>Registered & Corp Office</h3>
              </div>

              <div className="space-y-1 mb-4 text-xs sm:text-sm">
                <p className="font-semibold text-gray-800">
                  Goyal Salt Limited
                </p>
                <p className="text-gray-500 italic">
                  (Formerly: Goyal Salt Private Limited)
                </p>
                <p className="text-xs text-red-600/90 font-mono pt-1">
                  CIN: L24298RJ2010PLC033409
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-600 mt-1 shrink-0" size={16} />
                  <p className="leading-relaxed">
                    Plot No 229–230, Guru Jambeshwar Nagar, Lane No – 07, Gandhi Path, Vaishali Nagar, Jaipur – 302021, Rajasthan.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-5 mt-5 border-t border-gray-200/70 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FaPhoneAlt size={12} />
                </div>
                <a href="tel:+917568018883" className="font-semibold text-gray-800 hover:text-red-600 transition-colors">
                  +91 7568018883
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FaEnvelope size={12} />
                </div>
                <a href="mailto:info@goyalsalt.in" className="font-semibold text-gray-800 hover:text-red-600 transition-colors">
                  info@goyalsalt.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Factory & Administrator Office (Lg: 4 cols) */}
          <div className="lg:col-span-4 bg-gray-50/70 rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-red-600 font-bold text-lg mb-4">
                <FaIndustry className="text-red-600 shrink-0" size={20} />
                <h3>Factory & Administrator Office</h3>
              </div>

              {/* Unit 1 */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-5">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-100 text-red-700 font-semibold text-xs mb-1">
                  Rajasthan Unit
                </span>
                <div className="flex items-start gap-2.5">
                  <FaMapMarkerAlt className="text-red-600 mt-1 shrink-0" size={14} />
                  <p className="leading-relaxed">
                    Survey No. 546, Near Biyani Petrol Pump, Mohanpura Bypass Road, Nawa City, District: Nagaur – 341509, Rajasthan.
                  </p>
                </div>
              </div>

              <hr className="my-4 border-gray-200/80" />

              {/* Unit 2 */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-100 text-red-700 font-semibold text-xs mb-1">
                  Gujarat Unit
                </span>
                <div className="flex items-start gap-2.5">
                  <FaMapMarkerAlt className="text-red-600 mt-1 shrink-0" size={14} />
                  <p className="leading-relaxed">
                    Survey No 416, Village – Chirai Moti, Taluka – Bhachau, District – Kutch, Gujarat – 370140.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white py-5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-gray-300 text-center sm:text-left">
            © <span className="text-red-500 font-semibold">Goyal Salt</span> 2026. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-center sm:text-right">
            Developed By{" "}
            <Link
              href="https://avtechnosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors underline decoration-red-500/50 underline-offset-4"
            >
              AV Technosys
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
