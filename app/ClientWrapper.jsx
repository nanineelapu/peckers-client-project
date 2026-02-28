"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Preloader from "./components/Preloader";
import SmoothScroll from "./SmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientWrapper({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);
  const lenisRef = useRef(null);

  // Lock body scroll while preloader is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // After Preloader unmounts, force Lenis to recalculate its scroll limit.
  // Lenis caches scrollHeight on init — if the DOM changes (preloader removed)
  // it will have a stale limit, causing phantom scroll past the real bottom.
  useEffect(() => {
    if (!loadingDone) return;

    const timer = setTimeout(() => {
      // Dispatch a synthetic resize so Lenis & ScrollTrigger both recalculate
      window.dispatchEvent(new Event("resize"));
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [loadingDone]);

  const handlePreloaderComplete = useCallback(() => {
    // Unlock native scroll first
    document.body.style.overflow = "";

    // Snap Lenis + native scroll to top so they stay in sync
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);

    // Remove the preloader — the useEffect above handles recalculation
    setLoadingDone(true);
  }, []);

  return (
    <>
      {!loadingDone && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      <SmoothScroll lenisRef={lenisRef}>
        <div id="main-content" className="w-full overflow-x-clip">
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}