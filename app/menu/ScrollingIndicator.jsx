"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = scrollY / height;

      // 5 sections example
      const index = Math.min(
        4,
        Math.floor(progress * 5)
      );

      setActive(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-[6vw] md:bottom-10 left-1/2 -translate-x-1/2 flex gap-[2vw] md:gap-3 z-50">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-500 h-[4px] md:h-[6px] ${i === active
            ? "w-[8vw] md:w-[36px] bg-[#e8b800]"
            : "w-[2.5vw] md:w-[10px] bg-[#333]"
            }`}
        />
      ))}
    </div>
  );
}