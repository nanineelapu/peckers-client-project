"use client";

/**
 * LatestNewsHeading: plain, premium heading, no animation, just clean text.
 */
export default function LatestNewsHeading() {
  const title = "LATEST NEWS";
  const words = title.split(" ");

  return (
    <div
      className="w-full px-[5vw] md:px-[1.4vw] py-[10vw] md:py-0 pt-[15vw] md:pt-0 pb-[6vw] md:pb-0 grid h-auto md:h-[15vh]"
      style={{ lineHeight: "1.2" }}
    >
      {/* Title - word by word, no animation */}
      <span
        className="text-[10vw] sm:text-[8vw] md:text-[4.8vw] font-bold text-white tracking-[.2vw]"
        style={{ fontFamily: "var(--font-peakers)" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block mr-[2.5vw] md:mr-[0.6vw]"
          >
            {word}
          </span>
        ))}
      </span>
      {/* Subtitle */}
      <span className="font-sans mt-[3vw] md:mt-.9 font-extralight text-[4vw] sm:text-[3vw] md:text-[1.3vw] text-white">
        All the latest news from Peckers
      </span>
    </div>
  );
}
