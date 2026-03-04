"use client";

export default function CoopImages() {
  const HITCHIN_IMG =
    "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Location%20Card%201.webp";

  const STEVENAGE_IMG =
    "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Location%20Card%202%20%281%29.webp";

  return (
    <div
      className="flex flex-col md:flex-row gap-[8vw] md:gap-[3vw] xl:gap-[1.5vw] w-full justify-between items-center px-[5vw] md:px-[2.5vw] xl:px-[1.3vw] py-[10vw] xl:py-[5vw]"
    >
      {/* Hitchin Mobile */}
      <div className="flex md:hidden w-full items-center justify-between bg-[#1a1a1a] rounded-[3vw] p-[3vw] shadow-lg border border-[#333]">
        <div className="flex items-center gap-[2vw] pl-[2vw]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 w-[7vw] h-[7vw]">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
          </svg>
          <span className="text-white text-[6.5vw] uppercase tracking-wide" style={{ fontFamily: "var(--font-peakers)" }}>Hitchin</span>
        </div>
        <img src={HITCHIN_IMG} alt="Hitchin" className="w-[30vw] h-[25vw] object-cover rounded-[2vw] shadow-md border border-[#333]" />
      </div>

      {/* Hitchin Desktop */}
      <div className="coop-card hidden md:flex relative w-[37vw] h-[25vw] xl:h-[19vw] items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40">
        <img
          src={HITCHIN_IMG}
          alt="Hitchin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span
          className="relative z-10 text-white text-[4vw] xl:text-[3vw] drop-shadow-lg uppercase"
          style={{ fontFamily: "var(--font-peakers)" }}
        >
          Hitchin
        </span>
      </div>

      {/* Stevenage Mobile */}
      <div className="flex md:hidden w-full items-center justify-between bg-[#1a1a1a] rounded-[3vw] p-[3vw] shadow-lg border border-[#333]">
        <img src={STEVENAGE_IMG} alt="Stevenage" className="w-[30vw] h-[25vw] object-cover rounded-[2vw] shadow-md border border-[#333]" />
        <div className="flex items-center gap-[2vw] pr-[2vw]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600 w-[7vw] h-[7vw]">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
          </svg>
          <span className="text-white text-[6.5vw] uppercase tracking-wide text-right" style={{ fontFamily: "var(--font-peakers)" }}>Stevenage</span>
        </div>
      </div>

      {/* Stevenage Desktop */}
      <div className="coop-card hidden md:flex relative w-[37vw] h-[25vw] xl:h-[19vw] items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40">
        <img
          src={STEVENAGE_IMG}
          alt="Stevenage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span
          className="relative z-10 text-white text-[4vw] xl:text-[3vw] font-['Share_Tech'] drop-shadow-lg uppercase"
          style={{ fontFamily: "var(--font-peakers)" }}
        >
          Stevenage
        </span>
      </div>

      {/* Third Card */}
      <div className="coop-card w-full md:w-[35vw] h-[60vw] md:h-[25vw] xl:h-[19vw] bg-[#2222] rounded-lg flex flex-col items-center justify-center border border-[#383838] px-[4vw] md:px-[2vw] xl:px-[1vw] py-[4vw] xl:py-[1vw]">
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#2222] px-[4vw] md:px-[3vw] xl:px-[2vw] py-[4vw] md:py-[3vw] xl:py-[2vw]">
          <span
            className="text-white text-[7vw] md:text-[3.5vw] xl:text-[2.5vw] mb-[4vw] xl:mb-[1.5vw] text-center tracking-wide"
            style={{ fontFamily: "var(--font-peakers)" }}
          >
            WE’RE EXPANDING
          </span>

          <input
            type="text"
            placeholder="Suggest our next town… "
            className="w-[85%] xl:w-[70%] bg-transparent border border-[#383838] rounded-md text-center text-white font-mono py-[3vw] px-[4vw] md:py-[1vw] md:px-[1.5vw] xl:py-[0.7vw] xl:px-[1vw] mb-[4vw] md:mb-[2vw] xl:mb-[1.6vw] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white transition-all text-[4vw] md:text-[1.5vw] xl:text-[1vw]"
          />

          <button className="w-[60%] py-[3vw] md:py-[0.5vw] xl:py-[0.2vw] border-2 border-[#383838] rounded-[4vw] md:rounded-[1.5vw] xl:rounded-[1vw] text-white font-mono text-[4vw] md:text-[1.6vw] xl:text-[1.2vw] tracking-widest transition-all bg-[#1111] hover:shadow-[0.4vw_0.4vw_0px_white]">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}