// components/Footer.tsx

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-7 mb-7">
          {/* Logo */}
          <div className="mb-5 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Travel<span className="text-[#00C5C4]">Pro</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-7 text-base md:text-lg font-medium">
            <Link href="/destinations" className="hover:text-white">
              Destinations
            </Link>
            <Link href="/tours" className="hover:text-white">
              Tours
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF className="text-2xl md:text-3xl" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter className="text-2xl md:text-3xl" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-base md:text-lg">
          <p>
            Copyright © {new Date().getFullYear()} TravelPro. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
