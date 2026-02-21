"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * LatestNewsHeading animates the "LATEST NEWS" heading and subtitle
 * with a fade + rise effect ONLY while scrolling down into view and will not
 * animate or reverse when scrolling up, and disables scroll-up-based animation 
 * after animating in once. The heading stays revealed after the first scroll down.
 */
export default function LatestNewsHeading() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const subRef = useRef(null);
  const timelineRef = useRef(null);
  const hasAnimatedRef = useRef(false); // Only allow animation once while scrolling down

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer;
    let lastScrollY = window.scrollY;
    let wasIntersecting = false;

    const container = containerRef.current;

    // Set initial hidden state
    gsap.set(container, { opacity: 0, y: 20 });
    gsap.set(wordsRef.current, { opacity: 0, y: 40 });
    gsap.set(subRef.current, { opacity: 0, y: 20 });

    function animateIn() {
      // Animate in ONLY if not already fully revealed
      if (hasAnimatedRef.current) return; // Prevent repeated animations
      hasAnimatedRef.current = true;

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate each word of "LATEST NEWS" in sequence
        .to(
          wordsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.13,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.15"
        )
        // Animate subtitle just after words
        .to(
          subRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.32"
        );
    }

    function revealInstantly() {
      // Instantly reveal everything (no animation)
      gsap.set(container, { opacity: 1, y: 0 });
      gsap.set(wordsRef.current, { opacity: 1, y: 0 });
      gsap.set(subRef.current, { opacity: 1, y: 0 });
      if (timelineRef.current) timelineRef.current.kill();
    }

    function hideAll() {
      // Reset to hidden state
      gsap.set(container, { opacity: 0, y: 20 });
      gsap.set(wordsRef.current, { opacity: 0, y: 40 });
      gsap.set(subRef.current, { opacity: 0, y: 20 });
      if (timelineRef.current) timelineRef.current.kill();
    }

    if (container) {
      observer = new window.IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const isNowIntersecting = entry.isIntersecting;
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY;
          lastScrollY = currentScrollY;

          if (hasAnimatedRef.current) {
            // If already animated, always keep revealed; do nothing on scroll up or out
            if (isNowIntersecting) {
              revealInstantly();
            }
            // When not intersecting, heading remains revealed
            wasIntersecting = isNowIntersecting;
            return;
          }

          if (isNowIntersecting) {
            if (scrollingDown || !wasIntersecting) {
              animateIn(); // will only run once
            } else {
              // On scroll up, keep revealed, do not re-animate
              revealInstantly();
            }
          } else {
            // Only reset when scrolling down and animation has NOT yet run; if scrolling up, stay revealed
            if (scrollingDown && !hasAnimatedRef.current) {
              hideAll();
            }
          }
          wasIntersecting = isNowIntersecting;
        },
        { threshold: 0.22 }
      );
      observer.observe(container);
    }

    // On unmount, clean up
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const title = "LATEST NEWS";
  const words = title.split(" ");

  return (
    <div
      ref={containerRef}
      className="w-full px-[2vw] py-[0vw] pt-[0vw] pb-[0vw] grid"
      style={{ height: "15vh", lineHeight: "1.2" }}
    >
      {/* Title - word by word */}
      <span className=" text-[4.8vw] font-bold  tracking-[.2vw]" style={{ fontFamily: "var(--font-peakers)" }}>
        {words.map((word, i) => (
          <span
            key={i}
            ref={el => (wordsRef.current[i] = el)}
            className="inline-block mr-[0.6vw]"
          >
            {word}
          </span>
        ))}
      </span>
      {/* Subtitle */}
      <span
        ref={subRef}
        className="font-sans text-[1.1vw]"
      >
        All the latest news from Peckers
      </span>
    </div>
  );
}
