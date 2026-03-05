"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./components/Preloader";
import SmoothScroll from "./SmoothScroll";
import MobileBottomBar from "./components/MobileBottomBar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
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
      if (lenisRef.current) {
        lenisRef.current.resize();   // 🔥 THIS is critical
        lenisRef.current.start();    // ensure it's active
      }

      ScrollTrigger.refresh();
    }, 300); // give DOM more time on mobile

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

      {/* Wrap children and hide them temporarily while loading to avoid the unstyled flash on slow connections */}
      <SmoothScroll lenisRef={lenisRef}>
        <div
          id="main-content"
          className={`w-full overflow-x-clip pb-[18vw] md:pb-0 ${(!loadingDone && (pathname === '/' || pathname === '/home')) ? 'opacity-0 h-screen overflow-hidden' : 'h-auto overflow-visible'}`}
        >
          {children}
        </div>
      </SmoothScroll>

      {/* Global Fixed Mobile Bottom Bar */}
      {pathname !== '/menu' && <MobileBottomBar />}
    </>
  );
}