"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,

      // 🔥 PERFORMANCE OPTIMIZED SETTINGS
      lerp: 0.08, // sweet spot (0.07–0.1)
      multiplier: 0.9, // reduces heavy scroll strain

      // ❗ VERY IMPORTANT (removes mobile lag & glitter)
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: false,
      },

      // Better performance overall
      reloadOnContextChange: true,
      touchMultiplier: 1,
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}