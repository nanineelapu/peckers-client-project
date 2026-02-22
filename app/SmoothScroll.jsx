"use client";

import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,       // slightly snappier — less "stuck" feel
      smoothWheel: true,
    });

    // Use GSAP ticker instead of a raw requestAnimationFrame loop.
    // This guarantees exactly ONE tick per frame and is properly cleaned up.
    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.refresh();

    return () => {
      // Full cleanup: no lingering loops or listeners after unmount / re-mount
      gsap.ticker.remove(onTick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}