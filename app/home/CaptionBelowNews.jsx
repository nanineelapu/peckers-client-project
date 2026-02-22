"use client";

export default function CaptionBelowNews() {
  // Remove GSAP for the text, render it plainly.
  return (
    <div className="w-full flex justify-center mt-[1vw]">
      <div className="w-[80vw] flex flex-col items-center">
        {/* Animated border-bottom split from center, now 80% width and centered */}
        <div
          className="relative flex items-center justify-center my-[0.6vw]"
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
        <div className="flex items-start px-[14vw] w-full mt-[0.6vw] justify-center">
          {/* SVG vertical bar to the left of the text */}
          <svg
            width="14"
            height="48"
            viewBox="0 0 14 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              flex: "0 0 auto",
              marginRight: "1vw",
              marginTop: "0.15vw",
            }}
            aria-hidden="true"
          >
            <rect x="4" y="0" width="4" height="30" rx="1" fill="#fff" />
          </svg>
          {/* Plain text, no GSAP */}
          <span
            className="text-white text-[1.3vw] font-sans font-light text-left tracking-wide inline-block"
            style={{
              letterSpacing: ".005em",
              lineHeight: "1.7vw",
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