"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * LatestNewsHeading animates both the "LATEST NEWS" heading (each word/letter, like CoopHeading)
 * and the subtitle, with fade + rise effect each time it scrolls into view.
 */
export default function LatestNewsHeading() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const subRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer;
    const container = containerRef.current;

    function animateIn() {
      // Reset previous state FIRST
      gsap.set(container, { opacity: 0, y: 20 });
      gsap.set(wordsRef.current, { opacity: 0, y: 40 });
      gsap.set(subRef.current, { opacity: 0, y: 20 });

      // Kill any previous timeline
      if (timelineRef.current) timelineRef.current.kill();

      // Animation sequence
      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate each letter/word of "LATEST NEWS" in sequence
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

    function resetState() {
      // Hide all for next animation
      gsap.set(container, { opacity: 0, y: 20 });
      gsap.set(wordsRef.current, { opacity: 0, y: 40 });
      gsap.set(subRef.current, { opacity: 0, y: 20 });
      if (timelineRef.current) timelineRef.current.kill();
    }

    if (container) {
      observer = new window.IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            animateIn();
          } else {
            resetState();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(container);
    }

    // Cleanup
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const title = "LATEST NEWS";
  // Animate each word or, for even more subtlety, each letter (optional):
  // For closer effect to CoopHeading, break by words:
  const words = title.split(" ");

  return (
    <div
      ref={containerRef}
      className="w-full px-[2vw] py-[0vw] pt-[0vw] pb-[1vw] grid"
      style={{ height: "15vh", lineHeight: "1.2" }}
    >
      {/* Title - word by word */}
      <span className="font-['Share_tech'] text-[4.5vw] tracking-tight">
        {words.map((word, i) => (
          <span
            key={i}
            ref={el => (wordsRef.current[i] = el)}
            className="inline-block mr-[0.7vw]"
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
