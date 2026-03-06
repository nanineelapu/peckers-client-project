import React from "react";
import { motion } from "framer-motion";

const backgroundImageUrl =
  "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Uniqueness/Uniqueness%20Background%20%281%29.webp";
const gradientImageUrl =
  "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Uniqueness/Gradient%20%281%29.webp";

const UniquenessLandingPage = () => {
  return (
    <div className="w-full relative">
      {/* Navbar would be here */}
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={backgroundImageUrl}
        alt="Uniqueness Background"
        className="w-full h-[150vw] md:h-[61vw] object-cover block"
      />
      {/* Gradient Overlay */}
      <img
        src={gradientImageUrl}
        alt="Gradient Overlay"
        className="w-full absolute left-0 top-0 pointer-events-none select-none h-[150vw] md:h-[61vw] object-cover z-[1]"
        draggable={false}
        aria-hidden="true"
      />
      {/* Centered Overlay Content */}
      <div
        className="absolute left-0 top-0 w-full flex flex-col items-center justify-center pointer-events-none h-[150vw] md:h-[61vw] z-[2]"
      >
        <motion.h1
          className="text-center font-peakers font-bold text-white text-[2.9vw] md:text-[3.1vw] leading-none drop-shadow-lg pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <span
            className="block font-peakers text-[14vw] md:text-[7.7vw]"
          >
            THE
          </span>
          <span
            className="block font-peakers text-[14vw] md:text-[7.7vw]"
          >
            PECKERS
          </span>
          <span className="block text-[#f7e229] font-peakers text-[15vw] md:text-[7.7vw] font-bold mt-[1.5vw] md:mt-[0.2vw] mb-[1.5vw] md:mb-[0.2vw]">
            STANDARD
          </span>
        </motion.h1>
        <motion.div
          className="w-full flex justify-center px-[4vw] md:px-0 mt-[6vw] md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <span
            className="uppercase tracking-[0.15em] font-semibold text-[3vw] md:text-[1vw] text-[#d3d3d3] font-peakers md:mt-[1.7vw] text-center pointer-events-auto leading-[1.7]"
          >
            IT&apos;S NOT ONE THING.From our custom-milled breading to our hand-picked Covent Garden produce,
            <br />
            we believe in seriously good chicken, sourced locally, prepared daily, and served with pride.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default UniquenessLandingPage;