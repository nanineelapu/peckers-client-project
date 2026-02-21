"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/img%20slide%201.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvaW1nIHNsaWRlIDEuanBlZyIsImlhdCI6MTc3MTY3NjEwMCwiZXhwIjoxODAzMjEyMTAwfQ.6HFT12CuxCcjSFxNqtuzCeIhSoYwsBwuPbirEP-2q24",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/img%20sec%203%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvaW1nIHNlYyAzIDIuanBnIiwiaWF0IjoxNzcxNTM0Mjg5LCJleHAiOjE4MDMwNzAyODl9.-WaXJ0zx-NO7Fm1ESd3m3iNG7arDXGiRSA2o37D8lME",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/img%20slide%202.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvaW1nIHNsaWRlIDIuanBlZyIsImlhdCI6MTc3MTY3Njk4NCwiZXhwIjoxODAzMjEyOTg0fQ.Mk_pwUGMTi44328vB02r9ZUpvwr5SN7Nu-gcKgeISYU"
];

export default function LatestNewsCards() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  // ScrollTrigger animation like CoopImages for each card
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = [
        leftCardRef.current,
        centerCardRef.current,
        rightCardRef.current,
      ].filter(Boolean);

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [index]);

  const prev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    gsap.to(containerRef.current, {
      x: "25vw",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        gsap.set(containerRef.current, { x: 0 });
        isAnimating.current = false;
      },
    });
  };

  const next = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    gsap.to(containerRef.current, {
      x: "-25vw",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        gsap.set(containerRef.current, { x: 0 });
        isAnimating.current = false;
      },
    });
  };

  const left = images[(index - 1 + images.length) % images.length];
  const center = images[index];
  const right = images[(index + 1) % images.length];

  return (
    <div className="relative w-full flex flex-col items-center py-[6vw] overflow-hidden">
      {/* CARDS */}
      <div className="relative flex justify-center items-center w-full">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-[4vw] z-20 w-[55px] h-[55px] bg-black rounded-full flex items-center justify-center shadow-lg top-1/2 -translate-y-1/2"
        >
          <svg width="22" height="22" fill="black" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {/* Cards Container */}
        <div ref={containerRef} className="flex items-center gap-[3vw]">
          {/* LEFT CARD */}
          <div
            ref={leftCardRef}
            className="w-[18vw] h-[29vw] rounded-[1vw] overflow-hidden transition-all duration-500 scale-90 opacity-50 rotate-[-18deg] brightness-[0.7]"
            style={{
              filter:
                "brightness(0.7) blur(0.4px)",
              boxShadow:
                "0 0.3vw 2vw 0.15vw rgba(0,0,0,0.55)",
              transition: "all 0.5s cubic-bezier(0.45,0.05,0.55,0.95)",
            }}
          >
            <img
              src={left}
              className="w-full h-full object-cover pointer-events-none select-none"
              alt=""
              draggable={false}
              style={{ userSelect: "none" }}
            />
          </div>
          {/* CENTER CARD */}
          <div
            ref={centerCardRef}
            className="w-[25vw] h-[35vw] rounded-[1vw] overflow-hidden shadow-2xl z-10 transition-all duration-500 scale-100"
            style={{
              boxShadow:
                "0 0.7vw 3vw 0.3vw rgba(0,0,0,0.8)",
            }}
          >
            <img
              src={center}
              alt="center card"
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
              style={{ userSelect: "none" }}
            />
            {/* Optional overlay or text for center, if needed */}
            {/* <div className="absolute inset-0 flex items-center justify-center"><span className="text-3xl font-bold text-white">PECKERS</span></div> */}
          </div>
          {/* RIGHT CARD */}
          <div
            ref={rightCardRef}
            className="w-[20vw] h-[28vw] rounded-[1vw] overflow-hidden transition-all duration-500 scale-90 opacity-50 rotate-[17deg] brightness-[0.7] blur-[0.4px]"
            style={{
              filter:
                "brightness(0.65) blur(0.4px)",
              boxShadow:
                "0 0.3vw 2vw 0.15vw rgba(0,0,0,0.5)",
              transition: "all 0.5s cubic-bezier(0.45,0.05,0.55,0.95)",
            }}
          >
            <img
              src={right}
              className="w-full h-full object-cover pointer-events-none select-none"
              alt=""
              draggable={false}
              style={{ userSelect: "none" }}
            />
          </div>
        </div>
        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-[4vw] z-20 w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center shadow-lg top-1/2 -translate-y-1/2"
        >
          <svg width="22" height="22" fill="black" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {/* FOOTER TEXT */}
      <div className="w-full mt-[2vw] flex items-center justify-center">
        
      </div>
    </div>
  );
}