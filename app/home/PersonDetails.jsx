"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PersonDetails() {
  return (
    <div
      className="relative w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row items-stretch justify-center mt-[15vw] md:mt-[8vw] gap-[8vw] md:gap-[2vw] box-border px-[5vw] md:px-[2vw]"
    >
      {/* Left: Person Image — slides in from left */}
      <motion.div
        className="shrink-0 w-full lg:w-[43vw] xl:w-[44vw]"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Person%20image.webp"
          alt="Profile"
          className="w-full h-[70vw] md:h-[52vw] lg:h-[38vw] xl:h-[36vw] object-cover object-center rounded-2xl"
          sizes="(max-width: 768px) 90vw, 41.5vw"
          priority={true}
          width={670}
          height={840}
        />
      </motion.div>

      {/* Right: Text block — slides in from right */}
      <motion.div
        className="w-full lg:max-w-[50vw] xl:max-w-[40vw] flex flex-col justify-center bg-black px-[6vw] md:px-[4vw] xl:px-[3vw] py-[8vw] md:py-[4vw] xl:py-0 min-h-[50vw] md:min-h-[35vw] xl:min-h-[28vw] shadow-xl relative -mt-[10vw] md:-mt-[4vw] xl:-mt-[2.2vw] mr-0 xl:mr-[1vw] z-10 md:z-2 rounded-xl lg:rounded-none"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <h2
          className="grid text-white font-bold text-[10vw] sm:text-[8vw] md:text-[6.5vw] xl:text-[4.9vw] tracking-[.4vw] xl:tracking-[.2vw] leading-tight mb-[4vw] md:mb-[2vw] xl:mb-[1vw] text-center lg:text-left"
          style={{ letterSpacing: "0.01em", fontFamily: "var(--font-peakers)" }}
        >
          FOR THE LOVE OF <span className="text-[#ffff]">CHICKEN</span>
        </h2>

        <div className="relative flex flex-col items-center lg:items-start w-full">
          <div
            className="text-white text-center lg:text-start font-light text-[4.5vw] sm:text-[3.5vw] md:text-[2vw] xl:text-[1.3vw] tracking-[1.2] font-sans mb-[4vw] xl:mb-[1vw] leading-[6vw] md:leading-[3.5vw] xl:leading-[2vw] w-full"
          >
            We aren’t a faceless chain; we are two
            brothers who turned a lifelong passion for business into
            a new kind of neighbourhood landmark. By combining
            our family’s heritage with a focus on high-quality
            {/* Peckers started with a dream: to make wings that didn't suck. We were tired of dry, sad chicken. */}
            <span className="md:hidden"> </span>
            our family’s heritage with a focus on high-quality
            service, we’ve created a brand that treats every
            customer like a neighbour, from our first site to our
            future horizons.
          </div>
          <div
            className="w-[100px] md:w-[120px] xl:max-w-[150px] min-w-[80px] h-[2px] rounded-lg mx-auto lg:mx-0 mt-[2vw] md:mt-[1vw] xl:mt-[.6vw] mb-0 absolute bottom-[-5vw] md:bottom-[-2.8vw] xl:bottom-[-1.8vw] transform translate-y-full box-border overflow-hidden"
          />
        </div>

        <div className="h-[6vw] md:h-[4vw] xl:h-[2.2vw]" />

        {/* <div
          className="italic font-mono font-light text-[#ffff] text-[4vw] sm:text-[3vw] md:text-[1.8vw] xl:text-[1.2vw] mb-[6vw] xl:mb-[1.6vw] pl-[4vw] md:pl-[2vw] xl:pl-[1.3vw] border-l-[3px] xl:border-l-2 text-center lg:text-left"
          style={{ borderColor: "#ffe066", letterSpacing: "0.025em" }}
        >
          "We're not chefs. We're flavor engineers with
          a disregard for sodium limits."
        </div> */}

        <div className="flex justify-center lg:justify-start w-full">
          <a
            href="#"
            className="group inline-flex flex-col items-center lg:items-start text-white gap-[1vw] xl:gap-[.3vw] font-sans text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] xl:text-[1.1vw] font-extralight"
            style={{ letterSpacing: "0.08em", width: "fit-content" }}
          >
            <span className="flex items-center gap-[1.5vw] md:gap-[1vw] xl:gap-[.4vw]">
              <span className="border-b-2 border-white mt-[2vw] md:mt-[1.5vw] xl:mt-[1vw] pb-[2vw] md:pb-[10px] xl:pb-[7px] pr-[.5vw] xl:pr-[.1vw] tracking-[0.09em]">
                OUR HERITAGE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[6vw] h-[6vw] md:w-[2.5vw] md:h-[2.5vw] xl:w-[1.7vw] xl:h-[1.7vw] inline-block align-middle mt-[3vw] xl:mt-[1vw]"
              >
                <line x1="6" y1="12" x2="20" y2="12" />
                <polyline points="15 7 20 12 15 17" />
              </svg>
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}