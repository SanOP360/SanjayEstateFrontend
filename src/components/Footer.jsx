import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <Link to='/'>
            <h2 className="text-3xl font-bold">
              Sanjay<span className="text-gray-400">Estate</span>
            </h2>
          </Link>
        </div>

        <div className="mt-10 text-center flex flex-col gap-4">
          <p>&copy; 2024 Sanjay Estate. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-20 mt-4">
            <a
              href="https://www.facebook.com"
              className="hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:contact@sanjayestate.com"
              className="hover:text-red-500"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="mt-4">Contact: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
