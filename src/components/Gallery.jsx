import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.unsplash.com/photo-1759050407134-fa86a7cbd106?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1760518221657-4cc66c12f68b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1762430815536-4596e39fa2db?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1738067043499-55576825ba70?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1664869376571-ac376a67412d?w=600&auto=format&fit=crop&q=60"
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="w-full py-16 bg-black text-white">
      <h2 className="text-center text-4xl font-semibold mb-12 hover:text-blue-800">FashionTV Gallery</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              {/* Parent must have 'relative' and 'group' */}
              <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg transform transition-transform duration-700 group-hover:scale-110 "
                />
                {/* Glowy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
