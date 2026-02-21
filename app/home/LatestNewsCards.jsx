"use client";

import { useState } from "react";

const images = [
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/img%20slide%202.jpeg",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/img%20slide%201.jpeg",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/latest%20news%20car%202.png"
];

export default function LatestNewsCards() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="relative w-full flex flex-col items-center py-[6vw] overflow-hidden bg-black">

      <div className="relative w-full h-[42vw] flex items-center justify-center">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-[4vw] z-40 w-[60px] h-[60px] bg-black/70 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 6l-6 6 6 6"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* CARDS */}
        {images.map((img, i) => {
          const position =
            i === index
              ? "center"
              : i === (index - 1 + images.length) % images.length
              ? "left"
              : i === (index + 1) % images.length
              ? "right"
              : "hidden";

          return (
            <div
              key={i}
              className="absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{
                width: "26vw",
                height: "40vw",
                transform:
                  position === "center"
                    ? "translateX(0) rotate(0deg) scale(1.05)"
                    : position === "left"
                    ? "translateX(-30vw) rotate(-12deg) scale(0.85)"
                    : position === "right"
                    ? "translateX(30vw) rotate(12deg) scale(0.85)"
                    : "translateX(60vw) scale(0.6)",
                opacity: position === "hidden" ? 0 : 1,
                zIndex:
                  position === "center"
                    ? 3
                    : position === "left" || position === "right"
                    ? 2
                    : 1,
              }}
            >
              <div
                className="w-full h-full rounded-[1.2vw] overflow-hidden transition-all duration-700"
                style={{
                  filter:
                    position === "center"
                      ? "brightness(1)"
                      : "brightness(0.7) blur(2px)",
                  boxShadow:
                    position === "center"
                      ? "0 15px 45px rgba(255,255,255,0.18)"
                      : "0 5px 20px rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-[4vw] z-40 w-[60px] h-[60px] bg-black/70 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 6l6 6-6 6"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>
    </div>
  );
}