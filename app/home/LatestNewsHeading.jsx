"use client";

/**
 * LatestNewsHeading: plain, premium heading, no animation, just clean text.
 */
export default function LatestNewsHeading() {
  const title = "LATEST NEWS";
  const words = title.split(" ");

  return (
    <div
      className="w-full px-[2vw] py-[0vw] pt-[0vw] pb-[0vw] grid"
      style={{ height: "15vh", lineHeight: "1.2" }}
    >
      {/* Title - word by word, no animation */}
      <span
        className="text-[4.8vw] font-bold text-white tracking-[.2vw]"
        style={{ fontFamily: "var(--font-peakers)" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block mr-[0.6vw]"
          >
            {word}
          </span>
        ))}
      </span>
      {/* Subtitle */}
      <span className="font-sans text-[1.1vw] text-white">
        All the latest news from Peckers
      </span>
    </div>
  );
}
