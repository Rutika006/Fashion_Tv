import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Bg from "./components/Bg";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Create refs for each section
  const bgRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar
        refs={{
          bgRef,
          aboutRef,
          galleryRef,
          contactRef,
        }}
      />
      <div ref={bgRef}>
        <Bg />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
