"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoopImages() {
  const containerRef = useRef(null);

  const HITCHIN_IMG =
    "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Location%20Card%201.png";

  const STEVENAGE_IMG =
    "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Location%20Card%201.png";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".coop-card");

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    return () => {
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-row gap-[1.5vw] w-full justify-between items-center px-[1.3vw] py-[10vw]"
    >
      {/* Hitchin */}
      <div className="coop-card relative w-[37vw] h-[19vw] flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40">
        <img
          src={HITCHIN_IMG}
          alt="Hitchin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span className="relative z-10 text-white text-[3vw] drop-shadow-lg uppercase" style={{ fontFamily: "var(--font-peakers)" }}>
          Hitchin
        </span>
      </div>

      {/* Stevenage */}
      <div className="coop-card relative w-[37vw] h-[19vw] flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40">
        <img
          src={STEVENAGE_IMG}
          alt="Stevenage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <span className="relative z-10 text-white text-[3vw] font-['Share_Tech'] drop-shadow-lg uppercase" style={{ fontFamily: "var(--font-peakers)" }}>
          Stevenage
        </span>
      </div>

      {/* Third Card */}
      <div className="coop-card w-[35vw] h-[19vw] bg-black rounded-lg flex flex-col items-center justify-center border border-white px-[1vw] py-[1vw]">
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/85 px-[2vw] py-[2vw]">
          <span className=" text-white text-[2.5vw] mb-[1.5vw] text-center tracking-wide" style={{ fontFamily: "var(--font-peakers)" }}>
            WHERE NEXT ?
          </span>

          <input
            type="text"
            placeholder="Suggest a city..."
            className="w-[70%] bg-transparent border border-[#374151] rounded-md text-center text-white font-mono py-[0.7vw] px-[1vw] mb-[1.6vw] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white transition-all text-[1vw]"
          />

          <button className="w-[60%] py-[0.2vw] border-2 border-white rounded-[1vw] text-white font-mono text-[1.2vw] tracking-widest transition-all bg-black hover:bg-white hover:text-black">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}