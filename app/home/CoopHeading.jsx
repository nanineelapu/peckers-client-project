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
      className="w-full px-[1.5vw] py-[5vw] pt-[12vw] pb-[3vw] grid"
      style={{ height: "15vh", lineHeight: "1.4" }}
    >
      {/* Title */}
      <span
        className="text-[4.6vw] font-bold tracking-[.2vw]"
        style={{ fontFamily: "var(--font-peakers)", color: "white" }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-[0.6vw]"
          >
            {word}
          </span>
        ))}
      </span>

      {/* Subtitle */}
      <span
        className="font-sans text-[1.2vw] text-white"
      >
        More spots. Same seriously good chicken.
      </span>
    </div>
  );
}
