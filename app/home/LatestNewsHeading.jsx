"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function LatestNewsHeading() {
  const title = "THE PECKERS JOURNAL";
  const words = title.split(" ");

  return (
    <div
      className="w-full px-[5vw] md:px-[1.4vw] py-[10vw] md:py-0 pt-[15vw] md:pt-0 pb-[10vw] md:pb-[2vw] xl:pb-[0vw] grid h-auto md:h-auto xl:h-auto"
      style={{ lineHeight: "1.2" }}
    >
      {/* Title */}
      <span
        className="text-[10vw] sm:text-[8vw] md:text-[4.8vw] font-bold text-white tracking-[.2vw]"
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
      <motion.span
        className="font-sans mt-[3vw] md:mt-.9 font-extralight text-[4vw] sm:text-[3vw] md:text-[1.3vw] text-white"
        {...fadeUp(words.length * 0.1 + 0.1)}
      >
        Latest stories from the heart of Peckers.
      </motion.span>
    </div>
  );
}
