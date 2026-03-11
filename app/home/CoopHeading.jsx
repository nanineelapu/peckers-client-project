"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function CoopHeading({ heading = "OUR LOCATIONS", subtitle = "Experience our local vibe and flavour in person. Find your nearest Peckers below." }) {
  const words = (heading || "OUR LOCATIONS").split(" ");

  return (
    <div
      className="w-full px-[5vw] md:px-[1.4vw] py-[10vw] md:py-0 pt-[15vw] md:pt-[15vw] pb-[10vw] md:pb-[2vw] xl:pb-0 grid h-auto md:h-auto xl:h-auto"
      style={{ lineHeight: "1.2" }}
    >
      {/* Title */}
      <span
        className="text-[10vw] sm:text-[8vw] md:text-[4.8vw] font-bold text-white tracking-[.2vw] uppercase"
        style={{ fontFamily: "var(--font-peakers)" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[2.5vw] md:mr-[0.6vw]"
            {...fadeUp(i * 0.1)}
          >
            {word}
          </motion.span>
        ))}
      </span>

      {/* Subtitle */}
      <span
        className="font-sans mt-[3vw] md:mt-.9 font-extralight text-[4vw] sm:text-[3vw] md:text-[1.3vw] text-white"
      >
        {subtitle}
      </span>
    </div>
  );
}
