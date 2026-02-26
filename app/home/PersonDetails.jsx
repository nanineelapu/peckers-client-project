import Image from "next/image";

/**
 * Clean premium person details section without animations
 */
export default function PersonDetails() {
  return (
    <div
      className="relative w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row items-stretch justify-center mt-[15vw] md:mt-[8vw] gap-[8vw] md:gap-[2vw] box-border px-[5vw] md:px-[2vw]"
    >
      {/* Left: Person Image */}
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image
          src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Person%20image.webp"
          alt="Profile"
          className="w-full h-[100vw] md:h-full object-cover object-center rounded-2xl"
          sizes="(max-width: 768px) 90vw, 41.5vw"
          priority={true}
          width={670}
          height={840}

        />
      </div>

      {/* Right: Person Details */}
      <div
        className="w-full lg:max-w-[40vw] flex flex-col justify-center bg-black px-[6vw] md:px-[3vw] py-[8vw] md:py-0 min-h-[50vw] md:min-h-[28vw] shadow-xl relative -mt-[10vw] md:-mt-[2.2vw] mr-0 md:mr-[1vw] z-10 md:z-2 rounded-xl lg:rounded-none"
      >
        <h2
          className="grid text-white font-bold text-[10vw] sm:text-[8vw] md:text-[4.9vw] tracking-[.4vw] md:tracking-[.2vw] leading-tight mb-[4vw] md:mb-[1vw] text-center lg:text-left"
          style={{ letterSpacing: "0.01em", fontFamily: "var(--font-peakers)" }}
        >
          FOR THE LOVE OF <span className="text-[#ffff]">CHICKEN</span>
        </h2>
        {/* Sub-sentence title wrapper */}
        <div
          className="relative flex flex-col items-center lg:items-start w-full"
        >
          <div
            className="text-white text-center lg:text-start font-light text-[4.5vw] sm:text-[3.5vw] md:text-[1.3vw] tracking-[1.2] font-sans mb-[4vw] md:mb-[1vw] leading-[6vw] md:leading-[2vw] w-full"
          >
            Peckers started with a dream: to make wings that didn't suck. We were tired of dry, sad chicken.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            So we locked ourselves in a garage with 51lbs of peppers and didn't come out until we made magic.
          </div>
          <div
            className="w-[100px] max-w-[150px] min-w-[80px] h-[2px] rounded-lg mx-auto lg:mx-0 mt-[2vw] md:mt-[.6vw] mb-0 absolute bottom-[-5vw] md:bottom-[-1.8vw] transform translate-y-full box-border overflow-hidden"
          />
        </div>
        <div className="h-[6vw] md:h-[2.2vw]" />
        <div
          className="italic font-mono font-light text-[#ffff] text-[4vw] sm:text-[3vw] md:text-[1.2vw] mb-[6vw] md:mb-[1.6vw] pl-[4vw] md:pl-[1.3vw] border-l-[3px] md:border-l-2 text-center lg:text-left"
          style={{
            borderColor: "#ffe066",
            letterSpacing: "0.025em",
          }}
        >
          "We're not chefs. We're flavor engineers with
          a disregard for sodium limits."
        </div>
        <div className="flex justify-center lg:justify-start w-full">
          <a
            href="#"
            className="group inline-flex flex-col items-center lg:items-start text-white gap-[1vw] md:gap-[.3vw] font-sans text-[3.5vw] sm:text-[2.5vw] md:text-[1.1vw] font-extralight"
            style={{ letterSpacing: "0.08em", width: "fit-content" }}
          >
            {/* Top Row */}
            <span className="flex items-center gap-[1.5vw] md:gap-[.4vw]">
              <span className="border-b-[2px] border-white mt-[2vw] md:mt-[1vw] pb-[2vw] md:pb-[7px] pr-[.5vw] md:pr-[.1vw] tracking-[0.09em]">
                READ MORE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[6vw] h-[6vw] md:w-[1.7vw] md:h-[1.7vw] inline-block align-middle mt-[3vw] md:mt-[1vw]"
              >
                <line x1="6" y1="12" x2="20" y2="12" />
                <polyline points="15 7 20 12 15 17" />
              </svg>
            </span>
            {/* Bottom border accent (full-width under READ MORE, visible in img) */}

          </a>
        </div>
      </div>
    </div>
  );
}