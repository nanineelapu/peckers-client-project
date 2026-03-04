"use client";

import { motion } from "framer-motion";

export default function RatingSection() {
  const starSVG = (color = "#E1AD01") => (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0"
      style={{ minWidth: "16px", minHeight: "16px" }}
    >
      <path
        d="M9.10547 0.882812C9.52734 0.0390625 10.7227 0.0742188 11.1094 0.882812L13.4297 5.55859L18.5625 6.29688C19.4766 6.4375 19.8281 7.5625 19.1602 8.23047L15.4688 11.8516L16.3477 16.9492C16.4883 17.8633 15.5039 18.5664 14.6953 18.1445L10.125 15.7188L5.51953 18.1445C4.71094 18.5664 3.72656 17.8633 3.86719 16.9492L4.74609 11.8516L1.05469 8.23047C0.386719 7.5625 0.738281 6.4375 1.65234 6.29688L6.82031 5.55859L9.10547 0.882812Z"
        fill={color}
      />
    </svg>
  );

  const halfStarSVG = (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0"
      style={{ minWidth: "16px", minHeight: "16px" }}
    >
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="#E1AD01" />
          <stop offset="50%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M9.10547 0.882812C9.52734 0.0390625 10.7227 0.0742188 11.1094 0.882812L13.4297 5.55859L18.5625 6.29688C19.4766 6.4375 19.8281 7.5625 19.1602 8.23047L15.4688 11.8516L16.3477 16.9492C16.4883 17.8633 15.5039 18.5664 14.6953 18.1445L10.125 15.7188L5.51953 18.1445C4.71094 18.5664 3.72656 17.8633 3.86719 16.9492L4.74609 11.8516L1.05469 8.23047C0.386719 7.5625 0.738281 6.4375 1.65234 6.29688L6.82031 5.55859L9.10547 0.882812Z"
        fill="url(#halfGradient)"
      />
    </svg>
  );

  const heading = "STREET CRED";
  const headingWords = heading.split(" ");

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-black font-bold tracking-tight px-[5vw] md:px-[2vw] pt-[20vw] md:pt-[12.5vw] pb-[6vw] md:pb-[2vw] gap-[4vw] md:gap-0">
      {/* Heading slides in from left */}
      <motion.span
        className="text-[10vw] sm:text-[8vw] md:text-[6vw] xl:text-[4vw] text-white tracking-[1.6]"
        style={{ fontFamily: "var(--font-peakers)" }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {headingWords.map((word, i) => (
          <span key={i} className="inline-block mr-[2vw] md:mr-[1vw]">
            {word}
          </span>
        ))}
      </motion.span>

      {/* Stars + rating slide in from right */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-[2vw] md:gap-[1vw] xl:gap-[0.6vw]"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <span className="flex gap-[1vw] xl:gap-[0.5vw]">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="inline-block w-[6vw] sm:w-[5vw] md:w-auto h-[6vw] sm:h-[5vw] md:h-auto"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, ease: "backOut", delay: 0.3 + i * 0.07 }}
            >
              {starSVG()}
            </motion.span>
          ))}
          {/* Half star */}
          <motion.span
            className="inline-block w-[6vw] sm:w-[5vw] md:w-auto h-[6vw] sm:h-[5vw] md:h-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, ease: "backOut", delay: 0.58 }}
          >
            {halfStarSVG}
          </motion.span>
        </span>

        <motion.span
          className="text-white text-[3.5vw] sm:text-[3vw] md:text-[1.8vw] xl:text-[1vw] font-sans font-light mt-[1vw] sm:mt-0 ml-0 md:ml-[1vw] xl:ml-[0.4vw]"
          style={{ letterSpacing: "0.04em" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        >
          ( 4.8/5 on Google )
        </motion.span>
      </motion.div>
    </div>
  );
}