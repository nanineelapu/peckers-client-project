import Image from "next/image";

/**
 * Simple, premium, no animation version.
 */
export default function PersonDetails() {
  return (
    <div
      className="relative w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row items-stretch justify-center mt-[3vw] gap-[2vw] border-[2vw] px-[2vw]"
    >
      {/* Left: Person Image */}
      <div
        className="flex-shrink-0 w-full lg:w-[40vw]"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Person%20image.png"
          alt="Profile"
          className="w-full h-auto object-cover object-center"
          sizes="(max-width: 768px) 95vw, 23vw"
          priority={true}
          width={400}
          height={520}
          style={{ borderRadius: "1.2vw" }}
        />
      </div>

      {/* Right: Person Details */}
      <div
        className="w-full lg:max-w-[40vw] flex flex-col justify-center bg-black px-[3vw] mb-[1vw] py-[1vw] lg:py-[1vw] min-h-[25vw] shadow-xl relative box-border"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          className="grid text-white font-bold text-[4.8vw] tracking-[.2vw] leading-tight mb-[2vw]"
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
            className="text-white text-start font-light text-[1.3vw] tracking-[1.2] font-sans text-center"
            style={{ lineHeight: "2.2vw", width: "100%" }}
          >
            Peckers started with a dream: to make wings that didn’t suck. We were tired of dry, sad chicken.
            <br />
            So we locked ourselves in a garage with 51lbs of peppers and didn’t come out until we made magic.
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
          "We're not chefs. We're flavor engineers with a disregard for sodium limits."
        </div>
        {/* READ MORE BUTTON */}
        <a
          href="#"
          className="group flex flex-col items-start text-white font-sans text-[1.3vw] font-extralight cursor-pointer"
          style={{ letterSpacing: "0.08em", width: "fit-content" }}
        >
          <span
            className="flex items-center gap-[1vw] mb-[0.2vw]"
            style={{ whiteSpace: "nowrap" }}
          >
            <span
              className="tracking-[0.18em] font-[400] font-extralight text-[1.2vw] font-sans"
              style={{ fontSize: "1.2vw", letterSpacing: "0.18em" }}
            >
              READ MORE
            </span>
            {/* Custom SVG Arrow: Big white right arrow in a black circle, perfectly centered */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              style={{ marginLeft: "-0.2vw", display: "block" }}
            >
              <circle cx="20" cy="20" r="20" fill="black" />
              <path
                d="M12 20H28"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M23 15L28 20L23 25"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {/* Underline */}
          <span
            className="block"
            style={{
              width: "69%",
              height: "2px",
              background: "#fff",
              borderRadius: "2px",
              marginTop: "0.05vw",
              marginLeft: 0,
              marginRight: 0,
              transition: "width 0.2s",
            }}
          ></span>
        </a>
      </div>
    </div>
  );
}