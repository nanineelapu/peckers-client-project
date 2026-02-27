"use client";

import { useState, useEffect } from "react";

export default function MenuPreloader({ images, onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="flex flex-col items-center justify-center gap-[4vw] md:gap-[1vw]"
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9999,
      }}
    >
      {/* Responsive Spinner */}
      <div className="w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] min-w-[50px] min-h-[50px] border-[4px] border-[#222] border-t-[#e8b800] rounded-full animate-spin" />

      {/* Responsive Loading Text */}
      <div
        className="text-[#e8b800] uppercase tracking-[0.3em] font-bold text-[4vw] md:text-[1vw] ml-[0.3em]"
        style={{ fontFamily: "var(--font-peakers)" }}
      >
        Loading
      </div>
    </div>
  );
}
