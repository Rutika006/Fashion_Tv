import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 ${
        scrolled
          ? "bg-gradient-to-r from-pink-500 to-purple-700 shadow-md"
          : "bg-transparent shadow-md backdrop-blur-md border-b border-white/10"
      } text-white`}
    >
      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="font-extrabold text-xl md:text-3xl sm:text-2xl cursor-pointer"
        onClick={() => scrollTo(refs.bgRef)}
      >
        FashionTv
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm md:text-base lg:text-lg">
        <motion.li
          whileHover={{ scale: 1.1, color: "#FFD1DC" }}
          className="cursor-pointer"
          onClick={() => scrollTo(refs.bgRef)}
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: "#FFD1DC" }}
          className="cursor-pointer"
          onClick={() => scrollTo(refs.aboutRef)}
        >
          About
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: "#FFD1DC" }}
          className="cursor-pointer"
          onClick={() => scrollTo(refs.galleryRef)}
        >
          Gallery
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: "#FFD1DC" }}
          className="cursor-pointer"
          onClick={() => scrollTo(refs.contactRef)}
        >
          Contact
        </motion.li>
      </ul>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </motion.button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-l from-pink-400 to-purple-300 text-center text-sm sm:text-base space-y-4 py-4 md:hidden font-extrabold"
          >
            <motion.li
              whileHover={{ scale: 1.1, color: "white" }}
              className="cursor-pointer"
              onClick={() => scrollTo(refs.bgRef)}
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "white" }}
              className="cursor-pointer"
              onClick={() => scrollTo(refs.aboutRef)}
            >
              About
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "white" }}
              className="cursor-pointer"
              onClick={() => scrollTo(refs.galleryRef)}
            >
              Gallery
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "white" }}
              className="cursor-pointer"
              onClick={() => scrollTo(refs.contactRef)}
            >
              Contact
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
