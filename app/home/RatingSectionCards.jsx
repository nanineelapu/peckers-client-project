"use client";

export default function RatingSectionCards() {
  return (
    <div className="w-full mt-[10vw] md:mt-0 mb-[15vw] md:mb-[5vw] px-[5vw] md:px-[1vw]">
      {/* Desktop and Mobile: Show ONLY first three cards, no animation, no scroll, all responsive in vw */}
      <div className="flex flex-col lg:flex-row gap-[8vw] md:gap-[3vw] justify-center items-stretch">
        {/* Card 1 */}
        <div
          className="flex-1 w-full lg:min-w-[28vw] lg:max-w-[32vw] bg-[#181818] rounded-[6vw] lg:rounded-[1vw] p-[8vw] lg:p-[2vw] flex flex-col shadow-lg border border-[#1F2937] relative"
        >
          <div className="flex flex-row items-center justify-between mb-[6vw] lg:mb-[0.8vw]">
            <div className="flex flex-row items-center gap-[4vw] lg:gap-[0.8vw]">
              <div className="w-[15vw] h-[15vw] min-w-[15vw] min-h-[15vw] lg:w-[2.7vw] lg:h-[2.7vw] lg:min-w-[2.7vw] lg:min-h-[2.7vw] rounded-full bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 flex items-center justify-center text-white text-[8vw] lg:text-[1.25vw] font-bold uppercase font-sans shadow-md">
                {/* Optionally initials */}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extralight text-[5.5vw] md:text-[4.5vw] lg:text-[1.3vw] leading-[1.2] uppercase lg:leading-6 tracking-[2px] " style={{ fontFamily: "var(--font-peakers)" }}>
                  SARAH JENKINS
                </span>
                <span className="text-[#A1A1AA] font-mono text-[4vw] md:text-[3vw] lg:text-[1vw] leading-tight mt-[1vw] lg:mt-0" style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>
                  Local Guide
                </span>
              </div>
            </div>
            {/* Double quote svg, always */}
            <svg viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12vw] h-[10vw] lg:w-[3vw] lg:h-[2.5vw]">
              <path d="M36.7031 0C38.7598 0 40.5 1.74023 40.5 3.79688V22.7812C40.5 29.8213 34.8047 35.4375 27.8438 35.4375H27.2109C26.1035 35.4375 25.3125 34.6465 25.3125 33.5391V29.7422C25.3125 28.7139 26.1035 27.8438 27.2109 27.8438H27.8438C30.6123 27.8438 32.9062 25.6289 32.9062 22.7812V17.7188H26.5781C24.4424 17.7188 22.7812 16.0576 22.7812 13.9219V3.79688C22.7812 1.74023 24.4424 0 26.5781 0H36.7031ZM13.9219 0C15.9785 0 17.7188 1.74023 17.7188 3.79688V22.7812C17.7188 29.8213 12.0234 35.4375 5.0625 35.4375H4.42969C3.32227 35.4375 2.53125 34.6465 2.53125 33.5391V29.7422C2.53125 28.7139 3.32227 27.8438 4.42969 27.8438H5.0625C7.83105 27.8438 10.125 25.6289 10.125 22.7812V17.7188H3.79688C1.66113 17.7188 0 16.0576 0 13.9219V3.79688C0 1.74023 1.66113 0 3.79688 0H13.9219Z" fill="#333333" />
            </svg>
          </div>
          <div className="text-[#b3b3b3] text-[4vw] md:text-[3.5vw] lg:text-[1vw] font-extralight lg:font-extralight font-sans mt-[2vw] lg:mt-[0.15vw] leading-[6vw] md:leading-[1.6] tracking-wide max-w-full">
            "I would sell my soul for another basket of the Lemon Pepper wings. Absolutely unruly flavor."
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex-1 w-full lg:min-w-[28vw] lg:max-w-[32vw] bg-[#181818] rounded-[6vw] lg:rounded-[1vw] p-[8vw] lg:p-[2vw] flex flex-col shadow-lg border border-[#1F2937] relative"
        >
          <div className="flex flex-row items-center justify-between mb-[6vw] lg:mb-[0.8vw]">
            <div className="flex flex-row items-center gap-[4vw] lg:gap-[0.8vw]">
              <div className="w-[15vw] h-[15vw] min-w-[15vw] min-h-[15vw] lg:w-[2.7vw] lg:h-[2.7vw] lg:min-w-[2.7vw] lg:min-h-[2.7vw] rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-[8vw] lg:text-[1.25vw] font-bold uppercase font-sans shadow-md">
                {/* Optionally initials */}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extralight text-[5.5vw] md:text-[4.5vw] lg:text-[1.3vw] leading-[1.2] uppercase lg:leading-6 tracking-[2px]" style={{ fontFamily: "var(--font-peakers)" }}>
                  Mike T.
                </span>
                <span className="text-[#A1A1AA] font-mono text-[4vw] md:text-[3vw] lg:text-[1vw] leading-tight mt-[1vw] lg:mt-0" style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>
                  Verified Buyer
                </span>
              </div>
            </div>
            {/* Double quote svg, always */}
            <svg viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12vw] h-[10vw] lg:w-[3vw] lg:h-[2.5vw]">
              <path d="M36.7031 0C38.7598 0 40.5 1.74023 40.5 3.79688V22.7812C40.5 29.8213 34.8047 35.4375 27.8438 35.4375H27.2109C26.1035 35.4375 25.3125 34.6465 25.3125 33.5391V29.7422C25.3125 28.7139 26.1035 27.8438 27.2109 27.8438H27.8438C30.6123 27.8438 32.9062 25.6289 32.9062 22.7812V17.7188H26.5781C24.4424 17.7188 22.7812 16.0576 22.7812 13.9219V3.79688C22.7812 1.74023 24.4424 0 26.5781 0H36.7031ZM13.9219 0C15.9785 0 17.7188 1.74023 17.7188 3.79688V22.7812C17.7188 29.8213 12.0234 35.4375 5.0625 35.4375H4.42969C3.32227 35.4375 2.53125 34.6465 2.53125 33.5391V29.7422C2.53125 28.7139 3.32227 27.8438 4.42969 27.8438H5.0625C7.83105 27.8438 10.125 25.6289 10.125 22.7812V17.7188H3.79688C1.66113 17.7188 0 16.0576 0 13.9219V3.79688C0 1.74023 1.66113 0 3.79688 0H13.9219Z" fill="#333333" />
            </svg>
          </div>
          <div className="text-[#b3b3b3] text-[4vw] md:text-[3.5vw] lg:text-[1vw] font-extralight lg:font-extralight font-sans mt-[2vw] lg:mt-[0.15vw] leading-[6vw] md:leading-[1.6] tracking-wide max-w-full">
            "The music is loud, the decor is chaotic, and the chicken is god-tier. 10/10 would destroy my shirt with sauce again."
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex-1 w-full lg:min-w-[28vw] lg:max-w-[32vw] bg-[#181818] rounded-[6vw] lg:rounded-[1vw] p-[8vw] lg:p-[2vw] flex flex-col shadow-lg border border-[#1F2937] relative"
        >
          <div className="flex flex-row items-center justify-between mb-[6vw] lg:mb-[0.8vw]">
            <div className="flex flex-row items-center gap-[4vw] lg:gap-[0.8vw]">
              <div className="w-[15vw] h-[15vw] min-w-[15vw] min-h-[15vw] lg:w-[2.7vw] lg:h-[2.7vw] lg:min-w-[2.7vw] lg:min-h-[2.7vw] rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-[8vw] lg:text-[1.25vw] font-bold uppercase font-sans shadow-md">
                {/* Optionally initials */}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extralight text-[5.5vw] md:text-[4.5vw] lg:text-[1.3vw] leading-[1.2] uppercase lg:leading-6 tracking-[2px]" style={{ fontFamily: "var(--font-peakers)" }}>
                  jessica lau
                </span>
                <span className="text-[#A1A1AA] font-mono text-[4vw] md:text-[3vw] lg:text-[1vw] leading-tight mt-[1vw] lg:mt-0" style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>
                  Foodie
                </span>
              </div>
            </div>
            {/* Double quote svg, always */}
            <svg viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12vw] h-[10vw] lg:w-[3vw] lg:h-[2.5vw]">
              <path d="M36.7031 0C38.7598 0 40.5 1.74023 40.5 3.79688V22.7812C40.5 29.8213 34.8047 35.4375 27.8438 35.4375H27.2109C26.1035 35.4375 25.3125 34.6465 25.3125 33.5391V29.7422C25.3125 28.7139 26.1035 27.8438 27.2109 27.8438H27.8438C30.6123 27.8438 32.9062 25.6289 32.9062 22.7812V17.7188H26.5781C24.4424 17.7188 22.7812 16.0576 22.7812 13.9219V3.79688C22.7812 1.74023 24.4424 0 26.5781 0H36.7031ZM13.9219 0C15.9785 0 17.7188 1.74023 17.7188 3.79688V22.7812C17.7188 29.8213 12.0234 35.4375 5.0625 35.4375H4.42969C3.32227 35.4375 2.53125 34.6465 2.53125 33.5391V29.7422C2.53125 28.7139 3.32227 27.8438 4.42969 27.8438H5.0625C7.83105 27.8438 10.125 25.6289 10.125 22.7812V17.7188H3.79688C1.66113 17.7188 0 16.0576 0 13.9219V3.79688C0 1.74023 1.66113 0 3.79688 0H13.9219Z" fill="#333333" />
            </svg>
          </div>
          <div className="text-[#b3b3b3] text-[4vw] md:text-[3.5vw] lg:text-[1vw] font-extralight lg:font-extralight font-sans mt-[2vw] lg:mt-[0.15vw] leading-[6vw] md:leading-[1.6] tracking-wide max-w-full">
            "Honestly, better than Wingstop. Yeah I said it. Come fight me about it."
          </div>
        </div>
      </div>
    </div>
  );
}