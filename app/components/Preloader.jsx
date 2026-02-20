"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { LogoAnimation } from "./LogoAnimation";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const preloaderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Lock body scroll during preloader and prevent content flash
    document.body.style.overflow = "hidden";
    document.body.classList.remove("preloader-complete");

    // Wait for page to fully load
    const handleLoad = () => {
      // Wait for logo animation to complete (around 3.5 seconds) + extra delay
      // Total: Logo animation (~3.5s) + hold time (2s) + fade out (1.2s) = ~6.7s total
      setTimeout(() => {
        if (preloaderRef.current && contentRef.current) {
          const tl = gsap.timeline({
            onComplete: () => {
              setLoading(false);
              // Re-enable body scroll and mark preloader as complete
              document.body.style.overflow = "";
              document.body.classList.add("preloader-complete");
              // Clean up timeline
              tl.kill();
            },
          });

          // Smooth fade out with scale (removed expensive backdropFilter)
          tl.to(contentRef.current, {
            opacity: 0,
            scale: 0.95,
            y: -20,
            duration: 0.8,
            ease: "power3.inOut",
          })
            .to(
              preloaderRef.current,
              {
                opacity: 0,
                duration: 1.2,
                ease: "power4.inOut",
              },
              "-=0.4"
            );
        } else {
          setLoading(false);
          document.body.style.overflow = "";
          document.body.classList.add("preloader-complete");
        }
      }, 5500); // Show preloader for at least 5.5 seconds (logo animation + hold time)
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout - ensure it shows for minimum time even if page loads fast
      const fallbackTimer = setTimeout(() => {
        handleLoad();
      }, 7000); // Maximum 7 seconds

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
        document.body.style.overflow = "";
        document.body.classList.add("preloader-complete");
      };
    }
  }, []);

  // Always render preloader initially to prevent flash
  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{ 
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "auto" : "none",
        visibility: loading ? "visible" : "hidden"
      }}
    >
      <div ref={contentRef} className="relative">
        <LogoAnimation />
      </div>
    </div>
  );
}