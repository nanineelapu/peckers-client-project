"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

// Only show preloader on the homepage ("/")
export default function Preloader({ onComplete = () => { } }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);

  // Only allow preloader to show if we're on the home page ("/" or "/home")
  const isHomePage =
    pathname === "/" ||
    pathname === "/home" ||
    pathname === "/home/";

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      const hasShown = sessionStorage.getItem("preloaderShown");

      if (!isHomePage || hasShown) {
        // If not homepage, or already shown this session, skip entirely
        onComplete();
        return;
      }

      // If we are on homepage and haven't shown it yet, render the preloader
      setShouldRender(true);
    }
  }, [isHomePage, onComplete]);

  useEffect(() => {
    if (!shouldRender || !isHomePage) return; // Do nothing if we shouldn't render

    const main = document.querySelector("#main-content");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // Mark preloader as shown for this session
        sessionStorage.setItem("preloaderShown", "true");
        onComplete();
      }
    });

    // Immediately hide main content to prevent gap
    if (main) {
      gsap.set(main, {
        scale: 1.8,
        y: -100,
        opacity: 0,
        transformOrigin: "50% 60vh",
      });
    }
    // Remove text rise animation - jump directly to positioned state
    gsap.set(textRef.current, {
      letterSpacing: "0.4em",
    });

    // Optionally: Retain subtle scale/spacing or just skip to preloader slide
    tl.to(
      textRef.current,
      {
        letterSpacing: "0.02em",
        duration: 0.5, // Speed up text contracting
      }
    );

    tl.to(textRef.current, {
      scale: 1.06,
      duration: 0.6, // Speed up final scale bounce
      ease: "power2.inOut",
    });

    // Slide preloader down
    tl.to(containerRef.current, {
      yPercent: 100,
      duration: 1.3, // Speed up exit slide
      ease: "power4.inOut",
    });

    // Main page zoom settles - start opacity at 0 and fade in
    if (main) {
      tl.to(
        main,
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1, // Speed up main content reveal
          ease: "power3.out",
        },
        "<"
      );
    }

    return () => {
      tl.kill();
    };
  }, [shouldRender, isHomePage, onComplete]);

  const word = "PECKERS";

  if (!shouldRender || !isHomePage) return null; // Don't render preloader if we shouldn't or on other pages

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <h1
        ref={textRef}
        className="flex font-peakers font-black text-black text-[10vw] md:text-[clamp(3.5rem,11vw,16rem)]"
        style={{
          letterSpacing: "0.4em",
          lineHeight: 1,
        }}
      >
        {word.split("").map((letter, i) => (
          <span key={i}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}