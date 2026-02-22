"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

// Only show preloader on the homepage ("/")
export default function Preloader({ onComplete = () => { } }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const pathname = usePathname();

  // Only allow preloader to show if we're on the home page ("/" or "/home")
  const isHomePage =
    pathname === "/" ||
    pathname === "/home" ||
    pathname === "/home/";

  useEffect(() => {
    if (!isHomePage) return; // Do nothing if not home

    const main = document.querySelector("#main-content");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete,
    });

    // Immediately hide main content to prevent gap
    gsap.set(main, {
      scale: 1.8,
      y: -100,
      opacity: 0,
      transformOrigin: "50% 60vh",
    });

    // Remove text rise animation - jump directly to positioned state
    gsap.set(textRef.current, {
      letterSpacing: "0.4em",
    });

    // Optionally: Retain subtle scale/spacing or just skip to preloader slide
    tl.to(
      textRef.current,
      {
        letterSpacing: "0.02em",
        duration: 0.8,
      }
    );

    tl.to(textRef.current, {
      scale: 1.06,
      duration: 0.6,
      ease: "power2.inOut",
    });

    // Slide preloader down
    tl.to(containerRef.current, {
      yPercent: 100,
      duration: 1.3,
      ease: "power4.inOut",
    });

    // Main page zoom settles - start opacity at 0 and fade in
    tl.to(
      main,
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, [isHomePage]);

  const word = "PECKERS";

  if (!isHomePage) return null; // Don't render preloader on other pages

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <h1
        ref={textRef}
        className="flex font-peakers font-black text-black"
        style={{
          fontSize: "clamp(3.5rem, 11vw, 16rem)",
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