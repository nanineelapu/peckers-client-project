import React from "react";

const backgroundImageUrl =
  "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Uniqueness/Uniqueness%20Background%20%281%29.webp";
const gradientImageUrl =
  "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Uniqueness/Gradient%20%281%29.webp";

const UniquenessLandingPage = () => {
  return (
    <div className="w-full relative">
      {/* Navbar would be here */}
      {/* Background Image */}
      <img
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
        <h1 className="text-center font-peakers font-bold text-white text-[2.9vw] md:text-[3.1vw] leading-none drop-shadow-lg pointer-events-auto">
          <span
            className="block font-peakers text-[14vw] md:text-[7.7vw]"
          >
            WHAT
          </span>
          <span
            className="block font-peakers text-[14vw] md:text-[7.7vw]"
          >
            MAKES
          </span>
          <span className="block text-[#f7e229] font-peakers text-[15vw] md:text-[7.7vw] font-bold mt-[1.5vw] md:mt-[0.2vw] mb-[1.5vw] md:mb-[0.2vw]">
            OUR PECKERS
          </span>
          <span className="block text-[#f7e229] font-peakers text-[15vw] md:text-[7.7vw] font-bold">
            SPECIAL
          </span>
        </h1>
        <div className="w-full flex justify-center px-[4vw] md:px-0 mt-[6vw] md:mt-0">
          <span
            className="uppercase tracking-[0.5em] font-semibold text-[3.2vw] md:text-[1.1vw] text-[#d3d3d3] font-peakers md:mt-[1.7vw] text-center pointer-events-auto leading-relaxed"
          >
            IT&apos;S NOT ONE THING. IT&apos;S EVERYTHING.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniquenessLandingPage;