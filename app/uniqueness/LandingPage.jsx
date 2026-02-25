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
        className="w-full"
        style={{
          width: "100%",
          height: "61vw",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Gradient Overlay */}
      <img
        src={gradientImageUrl}
        alt="Gradient Overlay"
        className="w-full absolute left-0 top-0 pointer-events-none select-none"
        style={{
          width: "100%",
          height: "61vw",
          objectFit: "cover",
          zIndex: 1,
        }}
        draggable={false}
        aria-hidden="true"
      />
      {/* Centered Overlay Content */}
      <div
        className="absolute left-0 top-0 w-full h-full leading-0.5 flex flex-col items-center justify-center pointer-events-none"
        style={{ height: "61vw", zIndex: 2 }}
      >
        <h1 className="text-center font-peakers font-bold text-white text-[2.9vw] md:text-[3.1vw] leading-none drop-shadow-lg pointer-events-auto">
          <span
            className="block font-peakers text-[7.7vw]"
          >
            WHAT
          </span>
          <span
            className="block font-peakers text-[7.7vw]"
          >
            MAKES
          </span>
          <span className="block text-[#f7e229] font-peakers text-[8vw] md:text-[7.7vw] font-bold mt-[0.2vw] mb-[0.2vw]">
            OUR PECKERS
          </span>
          <span className="block text-[#f7e229] font-peakers text-[8vw] md:text-[7.7vw] font-bold">
            SPECIAL
          </span>
        </h1>
        <div className="w-full flex justify-center">
          <span
            className="uppercase text-xs tracking-[1vw] font-semibold md:text-[1.1vw] text-[#d3d3d3] font-peakers mt-[1.7vw] text-center pointer-events-auto"
            style={{ letterSpacing: "0.5em" }}
          >
            IT&apos;S NOT ONE THING. IT&apos;S EVERYTHING.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniquenessLandingPage;