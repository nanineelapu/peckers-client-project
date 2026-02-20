"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * CoopHeading section animates in with a fade+reveal effect
 * When user scrolls INTO the section, it animates in ONCE,
 * and then remains visible (doesn't disappear again).
 */
export default function CoopHeading() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const subRef = useRef(null);
  const timelineRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;

    // Set initial hidden state
    gsap.set(container, { opacity: 0, y: 20 });
    gsap.set(wordsRef.current, { opacity: 0, y: 40 });
    gsap.set(subRef.current, { opacity: 0, y: 20 });

    let observer;

    function animateIn() {
      // Only animate if not already animated
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      // Kill any previous timeline if still running
      if (timelineRef.current) timelineRef.current.kill();

      // Run animation
      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate each word in sequence
        .to(
          wordsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        )
        // Animate subtitle
        .to(
          subRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }

    if (container) {
      observer = new window.IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            animateIn();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(container);
    }

    // Clean up intersection observer and timeline
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const title = "YOUR CLOSEST COOP";
  const words = title.split(" ");

  return (
    <div
      ref={containerRef}
      className="w-full px-[3vw] py-[5vw] pt-[12vw] pb-[3vw] grid"
      style={{ height: "15vh", lineHeight: "1.4" }}
    >
      {/* Title (word animation) */}
      <span className="font-['Share_tech'] text-[4.5vw] tracking-tight">
        {words.map((word, index) => (
          <span
            key={index}
            ref={el => (wordsRef.current[index] = el)}
            className="inline-block mr-[0.6vw]"
          >
            {word}
          </span>
        ))}
      </span>

      {/* Subtitle */}
      <span
        ref={subRef}
        className="font-sans text-[1.3vw]"
      >
        More spots. Same seriously good chicken.
      </span>
    </div>
  );
}
