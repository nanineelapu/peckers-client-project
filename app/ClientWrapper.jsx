"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Preloader from "./components/Preloader";
import SmoothScroll from "./SmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientWrapper({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);
  const lenisRef = useRef(null);

  // Lock body overflow while preloader is visible so content can't native-scroll underneath
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    // Unlock body scroll FIRST so Lenis can take over correctly
    document.body.style.overflow = "";

    // Snap both Lenis internal pos and native scroll to top so they stay in sync
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);

    // Remove the preloader overlay
    setLoadingDone(true);

    // Let the DOM settle, then refresh ScrollTrigger measurements
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <>
      {!loadingDone && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      <SmoothScroll lenisRef={lenisRef}>
        <div id="main-content">
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}