"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function CoopHeading() {
  const title = "OUR LOCATIONS";
  const words = title.split(" ");

  return (
    <div
      className="w-full px-[5vw] md:px-[3vw] xl:px-[1.5vw] py-[10vw] md:py-[8vw] xl:py-[5vw] pt-[15vw] md:pt-[15vw] xl:pt-[12vw] pb-[10vw] md:pb-[7vw] xl:pb-[4vw] grid h-auto md:h-auto xl:h-auto"
      style={{ lineHeight: "1.4" }}
    >
      {/* Title */}
      <span
        className="text-[10vw] sm:text-[8vw] md:text-[6vw] xl:text-[4.6vw] font-bold tracking-[.2vw]"
        style={{ fontFamily: "var(--font-peakers)", color: "white" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-[2vw] md:mr-[1.2vw] xl:mr-[0.6vw]"
            {...fadeUp(index * 0.08)}
          >
            {word}
          </motion.span>
        ))}
      </span>

      {/* Subtitle */}
      <span
        className="font-sans text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-[1.2vw] text-white mt-[2vw] md:mt-0"
      >
        Experience our local vibe and flavour in person. Find your nearest Peckers below.
      </span>
    </div>
  );
}
