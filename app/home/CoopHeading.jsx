"use client";

/**
 * CoopHeading section (no animation, plain version)
 * Displays title and subtitle only.
 */
export default function CoopHeading() {
  const title = "YOUR CLOSEST COOP";
  const words = title.split(" ");

  return (
    <div
      className="w-full px-[5vw] md:px-[1.5vw] py-[10vw] md:py-[5vw] pt-[20vw] md:pt-[12vw] pb-[10vw] md:pb-[3vw] grid h-auto md:h-[15vh]"
      style={{ lineHeight: "1.4" }}
    >
      {/* Title */}
      <span
        className="text-[10vw] sm:text-[8vw] md:text-[4.6vw] font-bold tracking-[.2vw]"
        style={{ fontFamily: "var(--font-peakers)", color: "white" }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-[2vw] md:mr-[0.6vw]"
          >
            {word}
          </span>
        ))}
      </span>

      {/* Subtitle */}
      <span
        className="font-sans text-[4vw] sm:text-[3vw] md:text-[1.2vw] text-white mt-[2vw] md:mt-0"
      >
        More spots. Same seriously good chicken.
      </span>
    </div>
  );
}
