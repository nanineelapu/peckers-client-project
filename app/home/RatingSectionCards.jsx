"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RatingSectionCards() {
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    cardRefs.forEach((ref, idx) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            scale: 0.93,
            y: 70,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "bottom 65%",
              toggleActions: "play none none reverse",
              // markers: true,
            },
            delay: 0.11 * idx,
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full mt-[0vw] mb-[6vw] px-[1vw]">
      {/* Desktop and Mobile: Show ONLY first three cards, animated, no loop, no scroll, all responsive in vw */}
      <div className="flex flex-col lg:flex-row gap-[3vw] justify-center items-stretch">
        {/* Card 1 */}
        <div
          ref={cardRefs[0]}
          className="flex-1 min-w-[80vw] max-w-[98vw] lg:min-w-[28vw] lg:max-w-[32vw] bg-[#181818] rounded-[3vw] lg:rounded-[1vw] p-[5vw] lg:p-[2vw] flex flex-col shadow-lg border border-[#1F2937] relative will-change-transform"
        >
          <div className="flex flex-row items-center justify-between mb-[3vw] lg:mb-[0.8vw]">
            <div className="flex flex-row items-center gap-[2vw] lg:gap-[0.8vw]">
              <div className="w-[12vw] h-[12vw] min-w-[12vw] min-h-[12vw] lg:w-[2.7vw] lg:h-[2.7vw] lg:min-w-[2.7vw] lg:min-h-[2.7vw] rounded-full bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 flex items-center justify-center text-white text-[6vw] lg:text-[1.25vw] font-bold uppercase font-sans shadow-md">
                {/* Optionally initials */}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extralight text-[4.5vw] lg:text-[1.3vw] leading-[1.2] uppercase lg:leading-6 tracking-[2px] " style={{ fontFamily: "var(--font-peakers)" }}>
                  SARAH JENKINS
                </span>
                <span className="text-[#A1A1AA] font-mono text-[3vw] lg:text-[1vw] leading-tight mt-[0.5vw] lg:mt-0" style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>
                  Local Guide
                </span>
              </div>
            </div>
            {/* Double quote svg, always */}
            <svg width="10vw" height="8vw" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10vw] h-[8vw] lg:w-[3vw] lg:h-[2.5vw]">
              <path d="M36.7031 0C38.7598 0 40.5 1.74023 40.5 3.79688V22.7812C40.5 29.8213 34.8047 35.4375 27.8438 35.4375H27.2109C26.1035 35.4375 25.3125 34.6465 25.3125 33.5391V29.7422C25.3125 28.7139 26.1035 27.8438 27.2109 27.8438H27.8438C30.6123 27.8438 32.9062 25.6289 32.9062 22.7812V17.7188H26.5781C24.4424 17.7188 22.7812 16.0576 22.7812 13.9219V3.79688C22.7812 1.74023 24.4424 0 26.5781 0H36.7031ZM13.9219 0C15.9785 0 17.7188 1.74023 17.7188 3.79688V22.7812C17.7188 29.8213 12.0234 35.4375 5.0625 35.4375H4.42969C3.32227 35.4375 2.53125 34.6465 2.53125 33.5391V29.7422C2.53125 28.7139 3.32227 27.8438 4.42969 27.8438H5.0625C7.83105 27.8438 10.125 25.6289 10.125 22.7812V17.7188H3.79688C1.66113 17.7188 0 16.0576 0 13.9219V3.79688C0 1.74023 1.66113 0 3.79688 0H13.9219Z" fill="#333333" />
            </svg>
          </div>
          <div className="text-[#888] text-[4vw] lg:text-[1.1vw] font-extralight lg:font-normal font-sans mt-[1vw] lg:mt-[0.15vw] leading-[1.6] tracking-wide">
            "I would sell my soul for another basket of the Lemon Pepper wings. Absolutely unruly flavor."
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={cardRefs[1]}
          className="flex-1 min-w-[80vw] max-w-[98vw] lg:min-w-[28vw] lg:max-w-[32vw] bg-[#181818] rounded-[3vw] lg:rounded-[1vw] p-[5vw] lg:p-[2vw] flex flex-col shadow-lg border border-[#1F2937] relative will-change-transform"
        >
          <div className="flex flex-row items-center justify-between mb-[3vw] lg:mb-[0.8vw]">
            <div className="flex flex-row items-center gap-[2vw] lg:gap-[0.8vw]">
              <div className="w-[12vw] h-[12vw] min-w-[12vw] min-h-[12vw] lg:w-[2.7vw] lg:h-[2.7vw] lg:min-w-[2.7vw] lg:min-h-[2.7vw] rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-[6vw] lg:text-[1.25vw] font-bold uppercase font-sans shadow-md">
                {/* Optionally initials */}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extralight text-[4.5vw] lg:text-[1.3vw] leading-[1.2] uppercase lg:leading-6 tracking-[2px]" style={{ fontFamily: "var(--font-peakers)" }}>
                  Mike T.
                </span>
                <span className="text-[#A1A1AA] font-mono text-[3vw] lg:text-[1vw] leading-tight mt-[0.5vw] lg:mt-0" style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>
                  Verified Buyer
                </span>
              </div>
            </div>
            {/* Double quote svg, always */}
            <svg width="10vw" height="8vw" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10vw] h-[8vw] lg:w-[3vw] lg:h-[2.5vw]">
              <path d="M36.7031 0C38.7598 0 40.5 1.74023 40.5 3.79688V22.7812C40.5 29.8213 34.8047 35.4375 27.8438 35.4375H27.2109C26.1035 35.4375 25.3125 34.6465 25.3125 33.5391V29.7422C25.3125 28.7139 26.1035 27.8438 27.2109 27.8438H27.8438C30.6123 27.8438 32.9062 25.6289 32.9062 22.7812V17.7188H26.5781C24.4424 17.7188 22.7812 16.0576 22.7812 13.9219V3.79688C22.7812 1.74023 24.4424 0 26.5781 0H36.7031ZM13.9219 0C15.9785 0 17.7188 1.74023 17.7188 3.79688V22.7812C17.7188 29.8213 12.0234 35.4375 5.0625 35.4375H4.42969C3.32227 35.4375 2.53125 34.6465 2.53125 33.5391V29.7422C2.53125 28.7139 3.32227 27.8438 4.42969 27.8438H5.0625C7.83105 27.8438 10.125 25.6289 10.125 22.7812V17.7188H3.79688C1.66113 17.7188 0 16.0576 0 13.9219V3.79688C0 1.74023 1.66113 0 3.79688 0H13.9219Z" fill="#333333" />
            </svg>
          </div>
          <div className="text-[#888] text-[4vw] lg:text-[1.1vw] font-extralight lg:font-normal font-sans mt-[1vw] lg:mt-[0.15vw] leading-[1.6] tracking-wide">
            "The music is loud. The crunch is glorious, and the fries are perfect. 11/10 would destroy my shirt in sauce again."
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={cardRefs[2]}
          className="flex-1 min-w-[80vw] max-w-[98vw] lg:min-w-[28vw] lg:max-w-[32vw] bg-[#181818] rounded-[3vw] lg:rounded-[1vw] p-[5vw] lg:p-[2vw] flex flex-col shadow-lg border border-[#1F2937] relative will-change-transform"
        >
          <div className="flex flex-row items-center justify-between mb-[3vw] lg:mb-[0.8vw]">
            <div className="flex flex-row items-center gap-[2vw] lg:gap-[0.8vw]">
              <div className="w-[12vw] h-[12vw] min-w-[12vw] min-h-[12vw] lg:w-[2.7vw] lg:h-[2.7vw] lg:min-w-[2.7vw] lg:min-h-[2.7vw] rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-[6vw] lg:text-[1.25vw] font-bold uppercase font-sans shadow-md">
                {/* Optionally initials */}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extralight text-[4.5vw] lg:text-[1.3vw] leading-[1.2] uppercase lg:leading-6 tracking-[2px]" style={{ fontFamily: "var(--font-peakers)" }}>
                  jessica lau
                </span>
                <span className="text-[#A1A1AA] font-mono text-[3vw] lg:text-[1vw] leading-tight mt-[0.5vw] lg:mt-0" style={{
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>
                  Foodie
                </span>
              </div>
            </div>
            {/* Double quote svg, always */}
            <svg width="10vw" height="8vw" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10vw] h-[8vw] lg:w-[3vw] lg:h-[2.5vw]">
              <path d="M36.7031 0C38.7598 0 40.5 1.74023 40.5 3.79688V22.7812C40.5 29.8213 34.8047 35.4375 27.8438 35.4375H27.2109C26.1035 35.4375 25.3125 34.6465 25.3125 33.5391V29.7422C25.3125 28.7139 26.1035 27.8438 27.2109 27.8438H27.8438C30.6123 27.8438 32.9062 25.6289 32.9062 22.7812V17.7188H26.5781C24.4424 17.7188 22.7812 16.0576 22.7812 13.9219V3.79688C22.7812 1.74023 24.4424 0 26.5781 0H36.7031ZM13.9219 0C15.9785 0 17.7188 1.74023 17.7188 3.79688V22.7812C17.7188 29.8213 12.0234 35.4375 5.0625 35.4375H4.42969C3.32227 35.4375 2.53125 34.6465 2.53125 33.5391V29.7422C2.53125 28.7139 3.32227 27.8438 4.42969 27.8438H5.0625C7.83105 27.8438 10.125 25.6289 10.125 22.7812V17.7188H3.79688C1.66113 17.7188 0 16.0576 0 13.9219V3.79688C0 1.74023 1.66113 0 3.79688 0H13.9219Z" fill="#333333" />
            </svg>
          </div>
          <div className="text-[#888] text-[4vw] lg:text-[1.1vw] font-extralight lg:font-normal font-sans mt-[1vw] lg:mt-[0.15vw] leading-[1.6] tracking-wide">
            "Hands down the crispiest wings in town. The staff always vibe and the food never disappoints."
          </div>
        </div>
      </div>
    </div>
  );
}