"use client";

export default function CaptionBelowNews() {
  // Remove GSAP for the text, render it plainly.
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90vw] md:w-[80vw] flex flex-col items-center pt-[5vw] md:pt-0">
        {/* Animated border-bottom split from center, now 80% width and centered */}
        <div
          className="relative flex items-center justify-center my-[4vw] md:my-[0.6vw]"
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            height: "2.5px",
          }}
        >
          <div
            className="absolute left-1/2 top-0 h-full bg-[#fff3] origin-right"
            style={{
              width: "60%",
              borderBottom: "2.5px solid #fff3",
              borderRadius: 2,
              pointerEvents: "none",
              transform: "scaleX(0)", // (Optional: remove if not animated)
              transition: "none",
            }}
          />
          <div
            className="absolute top-0 h-full bg-[#fff3] origin-center"
            style={{
              width: "140%",
              borderBottom: "2.5px solid #fff3",
              borderRadius: 2,
              pointerEvents: "none",
              transition: "none",
            }}
          />
          {/* invisible for spacing: keeps 2.5px height */}
          <div
            style={{ width: "100%", height: "2.5px", visibility: "hidden" }}
          />
        </div>
        <div className="flex items-start px-[4vw] md:px-[14vw] w-full mt-[4vw] md:mt-[0.6vw] justify-center">
          {/* SVG vertical bar to the left of the text */}
          <svg
            viewBox="0 0 14 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-none mr-[3vw] md:mr-[1vw] mt-[1.5vw] md:mt-[0.15vw] w-[3vw] md:w-[14px] h-[8vw] md:h-[48px]"
            aria-hidden="true"
          >
            <rect x="4" y="0" width="4" height="30" rx="1" fill="#fff" />
          </svg>
          {/* Plain text, no GSAP */}
          <span
            className="text-white text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-[1.3vw] leading-[6vw] md:leading-[3vw] xl:leading-[1.7vw] font-sans font-light text-left tracking-wide inline-block"
            style={{
              letterSpacing: ".005em",
              // Remove opacity, clipPath, willChange, etc.
            }}
          >
            Stay up to date with our shenanigans, limited drops, and questionable life choices.
          </span>
        </div>
      </div>
    </div>
  );
}