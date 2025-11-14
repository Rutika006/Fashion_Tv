import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-light mb-8">Connect With Us</h2>

        {/* Description */}
        <p className="text-center mb-12 text-lg max-w-xl">
          Follow FashionTV on social media for the latest updates, fashion shows, and exclusive content.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-3xl mb-8 animate-bounce">
          <a
            href="https://www.instagram.com/fashiontv.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/media/set/?set=a.550399830448729&vanity=FTV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://twitter.com/FashionTV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.youtube.com/FashionTV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.linkedin.com/posts/fashiontvindia_fashiontvindia-activity-7239511464036757505-ydem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Optional Email Link */}
        <a
          href="mailto:info@ftv.com"
          className="hover:text-green-500 transition-transform transform hover:scale-105 text-lg"
        >
          Email: info@ftv.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
