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
      setTimeout(() => {
        setShouldRender(true);
      }, 0);
    }
  }, [isHomePage, onComplete]);

  useEffect(() => {
    if (!shouldRender || !isHomePage) return; // Do nothing if we shouldn't render

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // Mark preloader as shown for this session
        sessionStorage.setItem("preloaderShown", "true");
        onComplete();
      }
    });

    const main = document.querySelector("#main-content");
    const navbar = document.querySelector("#main-navbar");
    if (main || navbar) {
      const targets = [main, navbar].filter(Boolean);
      // Set initial state for zoom out
      gsap.set(targets, {
        scale: 1.8,
        y: -100,
        transformOrigin: "50% 60vh",
      });
    }

    // Set initial text styles BEFORE displaying to avoid flash
    gsap.set(textRef.current, {
      letterSpacing: "0.4em",
      opacity: 1 // ensure opacity starts visible but styled
    });

    tl.to(
      textRef.current,
      {
        letterSpacing: "0.02em",
        duration: 1.0, // Slowed down from 0.5
      }
    );

    tl.to(textRef.current, {
      scale: 1.06,
      duration: 1.0, // Slowed down from 0.6
      ease: "power2.inOut",
    });

    // Slide preloader down
    tl.to(containerRef.current, {
      yPercent: 100,
      duration: 1.2, // Slowed down from 0.3
      ease: "power4.inOut",
    });

    // Animate main content zoom and opacity in parallel with preloader sliding out
    if (main || navbar) {
      const targets = [main, navbar].filter(Boolean);
      tl.to(
        targets,
        {
          scale: 1,
          y: 0,
          duration: 1.2, // Slowed down from 0.6
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
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
    >
      <h1
        ref={textRef}
        className="flex font-peakers font-black text-black text-[16vw] md:text-[clamp(3.5rem,11vw,16rem)] opacity-0"
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