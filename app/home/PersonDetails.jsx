import Image from "next/image";

/**
 * Clean premium person details section without animations
 */
export default function PersonDetails() {
  return (
    <div
      className="relative w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row items-stretch justify-center mt-[8vw] gap-[2vw] box-border px-[2vw]"
    >
      {/* Left: Person Image */}
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image
          src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Person%20image.webp"
          alt="Profile"
          className="w-full h-full object-cover object-center rounded-2xl"
          sizes="(max-width: 768px) 90vw, 41.5vw"
          priority={true}
          width={670}
          height={840}

        />
      </div>

      {/* Right: Person Details */}
      <div
        className="w-full lg:max-w-[40vw] flex flex-col justify-center bg-black px-[3vw] min-h-[28vw] shadow-xl relative"
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "-2.2vw",
          marginRight: "1vw"
        }}
      >
        <h2
          className="grid text-white font-bold text-[4.9vw] tracking-[.2vw] leading-tight mb-[1vw]"
          style={{ letterSpacing: "0.01em", fontFamily: "var(--font-peakers)" }}
        >
          FOR THE LOVE OF <span className="text-[#ffff]">CHICKEN</span>
        </h2>
        {/* Sub-sentence title wrapper */}
        <div
          className="relative flex flex-col items-center"
          style={{ position: "relative", alignItems: "center", width: "100%" }}
        >
          <div
            className="text-white text-start font-light text-[1.3vw] tracking-[1.2] font-sans mb-[1vw] text-center"
            style={{ lineHeight: "2vw", width: "100%" }}
          >
            Peckers started with a dream: to make wings that didn't suck. We were tired of dry, sad chicken.
            <br />
            So we locked ourselves in a garage with 51lbs of peppers and didn't come out until we made magic.
          </div>
          <div
            className=""
            style={{
              width: "100px",
              maxWidth: "150px",
              minWidth: "80px",
              height: "2px",
              border: "none",
              borderRadius: "8px",
              margin: "0 auto",
              marginTop: ".6vw",
              marginBottom: "0",
              left: 0,
              right: 0,
              position: "absolute",
              bottom: "-1.8vw",
              transform: "translateY(100%)",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          />
        </div>
        <div style={{ height: "2.2vw" }} />
        <div
          className="italic font-mono font-light text-[#ffff] text-[1.2vw] mb-[1.6vw] pl-[1.3vw] border-l-2"
          style={{
            fontFamily: "",
            borderColor: "#ffe066",
            letterSpacing: "0.025em",
          }}
        >
          "We're not chefs. We're flavor engineers with
          a disregard for sodium limits."
        </div>
        <a
          href="#"
          className="group inline-flex flex-col items-start text-white gap-[.3vw] font-sans text-[1.1vw] font-extralight"
          style={{ letterSpacing: "0.08em", width: "fit-content" }}
        >
          {/* Top Row */}
          <span className="flex items-center gap-[.4vw]">
            <span className="border-b-[2px] border-white mt-[1vw] pb-[7px] pr-[.1vw] tracking-[0.09em]">
              READ MORE
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7vw"
              height="1.7vw"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: ["1vw"] }}
            >
              <line x1="6" y1="12" x2="20" y2="12" />
              <polyline points="15 7 20 12 15 17" />
            </svg>
          </span>
          {/* Bottom border accent (full-width under READ MORE, visible in img) */}

        </a>
      </div>
    </div>
  );
}