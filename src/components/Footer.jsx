import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black/90 text-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left: Copyright */}
        <p className="text-sm mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} FashionTV. All Rights Reserved.
        </p>

        {/* Right: Social Icons (smaller & subtle) */}
        <div className="flex space-x-4 text-lg">
         
          <a
            href="https://www.instagram.com/fashiontv.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition animate-bounce" 
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/media/set/?set=a.550399830448729&vanity=FTV&utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition animate-bounce"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/FashionTV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition animate-bounce"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/FashionTV?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition animate-bounce"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
