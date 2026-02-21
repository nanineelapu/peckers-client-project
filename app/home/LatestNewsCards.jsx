"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

const images = [
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Group%206%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvR3JvdXAgNiAoMSkucG5nIiwiaWF0IjoxNzcxNTM0MjAxLCJleHAiOjE4MDMwNzAyMDF9.GDIRcNSnqhbwvs3ndg5NIvZD74xmPHCT3TuagHIKZfI",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/img%20sec%203%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvaW1nIHNlYyAzIDIuanBnIiwiaWF0IjoxNzcxNTM0Mjg5LCJleHAiOjE4MDMwNzAyODl9.-WaXJ0zx-NO7Fm1ESd3m3iNG7arDXGiRSA2o37D8lME",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Group%206.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvR3JvdXAgNi5wbmciLCJpYXQiOjE3NzE1MzQxNDksImV4cCI6MTgwMzA3MDE0OX0.SXuSK6BjGKIh-5cXXXYFDSpNnXYHGWml0vzbXFcomTw",
];

export default function LatestNewsCards() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  const prev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    gsap.to(containerRef.current, {
      x: "25vw",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        setIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
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
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        setIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        gsap.set(containerRef.current, { x: 0 });
        isAnimating.current = false;
      },
    });
  };

  const left = images[(index - 1 + images.length) % images.length];
  const center = images[index];
  const right = images[(index + 1) % images.length];

  return (
    <div className="relative w-full flex justify-center items-center py-[6vw] overflow-hidden">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-[4vw] z-20 w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <svg width="22" height="22" fill="black" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* CARDS */}
      <div
        ref={containerRef}
        className="flex items-center gap-[3vw]"
      >
        {/* LEFT */}
        <div className="w-[20vw] h-[28vw] rounded-[1vw] overflow-hidden rotate-[-6deg] scale-90 opacity-80 transition-all duration-500">
          <img src={left} className="w-full h-full object-cover" draggable={false} />
        </div>

        {/* CENTER */}
        <div className="w-[25vw] h-[35vw] rounded-[1vw] overflow-hidden shadow-2xl scale-100 z-10 transition-all duration-500">
          <img src={center} className="w-full h-full object-cover" draggable={false} />
        </div>

        {/* RIGHT */}
        <div className="w-[20vw] h-[28vw] rounded-[1vw] overflow-hidden rotate-[6deg] scale-90 opacity-80 transition-all duration-500">
          <img src={right} className="w-full h-full object-cover" draggable={false} />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-[4vw] z-20 w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <svg width="22" height="22" fill="black" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </div>
  );
}