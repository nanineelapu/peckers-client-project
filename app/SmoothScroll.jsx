"use client";

import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// lenisRef – optional ref that the parent can use to call lenis.scrollTo(0) etc.
export default function SmoothScroll({ children, lenisRef }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
    });

    // Expose instance to parent (ClientWrapper) so it can reset scroll
    if (lenisRef) {
      lenisRef.current = lenis;
    }
    //Final glitches fixed 

    // GSAP ticker drives Lenis — one clean loop, properly cleaned up below
    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      if (lenisRef) lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}