"use client";

export default function CoopImages() {
  const HITCHIN_IMG =
    "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Location%20Card%201.webp";

  const STEVENAGE_IMG =
    "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Location%20Card%202%20%281%29.webp";

  return (
    <div
      className="flex flex-col md:flex-row gap-[8vw] md:gap-[1.5vw] w-full justify-between items-center px-[5vw] md:px-[1.3vw] py-[10vw]"
    >
      {/* Hitchin */}
      <div className="coop-card relative w-full md:w-[37vw] h-[60vw] md:h-[19vw] flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40">
        <img
          src={HITCHIN_IMG}
          alt="Hitchin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span
          className="relative z-10 text-white text-[8vw] md:text-[3vw] drop-shadow-lg uppercase"
          style={{ fontFamily: "var(--font-peakers)" }}
        >
          Hitchin
        </span>
      </div>

      {/* Stevenage */}
      <div className="coop-card relative w-full md:w-[37vw] h-[60vw] md:h-[19vw] flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40">
        <img
          src={STEVENAGE_IMG}
          alt="Stevenage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span
          className="relative z-10 text-white text-[8vw] md:text-[3vw] font-['Share_Tech'] drop-shadow-lg uppercase"
          style={{ fontFamily: "var(--font-peakers)" }}
        >
          Stevenage
        </span>
      </div>

      {/* Third Card */}
      <div className="coop-card w-full md:w-[35vw] h-[60vw] md:h-[19vw] bg-black rounded-lg flex flex-col items-center justify-center border border-white px-[4vw] md:px-[1vw] py-[4vw] md:py-[1vw]">
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/85 px-[4vw] md:px-[2vw] py-[4vw] md:py-[2vw]">
          <span
            className="text-white text-[7vw] md:text-[2.5vw] mb-[4vw] md:mb-[1.5vw] text-center tracking-wide"
            style={{ fontFamily: "var(--font-peakers)" }}
          >
            WHERE NEXT ?
          </span>

          <input
            type="text"
            placeholder="Suggest a city..."
            className="w-[85%] md:w-[70%] bg-transparent border border-[#374151] rounded-md text-center text-white font-mono py-[3vw] px-[4vw] md:py-[0.7vw] md:px-[1vw] mb-[4vw] md:mb-[1.6vw] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white transition-all text-[4vw] md:text-[1vw]"
          />

          <button className="w-[60%] py-[3vw] md:py-[0.2vw] border-2 border-white rounded-[4vw] md:rounded-[1vw] text-white font-mono text-[4vw] md:text-[1.2vw] tracking-widest transition-all bg-black hover:bg-white hover:text-black">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}