import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1759050407134-fa86a7cbd106?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1760518221657-4cc66c12f68b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1762430815536-4596e39fa2db?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1738067043499-55576825ba70?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1664869376571-ac376a67412d?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1762430790694-aedd36b4cb8c?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1739512071708-05cfce6a379f?w=600&auto=format&fit=crop&q=60"
];

const Gallery = () => {
    const [openImg, setOpenImg] = useState(null)
  return (
    <section className="w-full py-16 bg-black text-white">
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl font-semibold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        FashionTv Gallery
      </motion.h2>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl group cursor-pointer border-2 border-transparent hover:border-blue-800 duration-500"
            onClick={()=>{setOpenImg(img)}}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full rounded-xl transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {openImg && (
            <motion.div className="fixed inset-0 bg-transparent opacity-90 flex items-center justify-center z-50"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={()=>{setOpenImg(null)}
        }
            >
                <img src={openImg}
                alt="FashionImg"
                className="max-h-[90vh] max-w-[90vw] rounded-lg"
                ></img>
            </motion.div>
        ) }
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
