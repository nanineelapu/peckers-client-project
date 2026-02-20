"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RatingSection() {
  // Refs for container and animating elements
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const starsRef = useRef([]);
  const ratingRef = useRef(null);
  const timelineRef = useRef(null);
  const hasAnimatedRef = useRef(false); // To check if animation has run

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer;
    const container = containerRef.current;

    function animateIn() {
      // Only animate if not done before
      if (hasAnimatedRef.current) return;

      // Reset initial state
      gsap.set(container, { opacity: 0, y: 20 });
      gsap.set(wordRefs.current, { opacity: 0, y: 30 });
      gsap.set(starsRef.current, { opacity: 0, y: 30 });
      gsap.set(ratingRef.current, { opacity: 0, y: 20 });

      // Kill previous timeline
      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate each word in "STREET CRED"
        .to(
          wordRefs.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.16,
            duration: 0.54,
            ease: "power2.out",
          },
          "-=0.33"
        )
        // Animate the stars (all together as before, staggered)
        .to(
          starsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.35"
        )
        // Animate the rating number
        .to(
          ratingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.18"
        );

      hasAnimatedRef.current = true;
    }

    if (container) {
      observer = new window.IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          // Animate only once, on scroll down, never again
          if (entry.isIntersecting) {
            animateIn();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(container);
    }

    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  // ----- SVGs for Stars -----
  const starSVG = (color = "#E1AD01") => (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0"
      style={{ minWidth: "16px", minHeight: "16px" }}
    >
      <path
        d="M9.10547 0.882812C9.52734 0.0390625 10.7227 0.0742188 11.1094 0.882812L13.4297 5.55859L18.5625 6.29688C19.4766 6.4375 19.8281 7.5625 19.1602 8.23047L15.4688 11.8516L16.3477 16.9492C16.4883 17.8633 15.5039 18.5664 14.6953 18.1445L10.125 15.7188L5.51953 18.1445C4.71094 18.5664 3.72656 17.8633 3.86719 16.9492L4.74609 11.8516L1.05469 8.23047C0.386719 7.5625 0.738281 6.4375 1.65234 6.29688L6.82031 5.55859L9.10547 0.882812Z"
        fill={color}
      />
    </svg>
  );

  const halfStarSVG = (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0"
      style={{ minWidth: "16px", minHeight: "16px" }}
    >
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="#E1AD01" />
          <stop offset="50%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M9.10547 0.882812C9.52734 0.0390625 10.7227 0.0742188 11.1094 0.882812L13.4297 5.55859L18.5625 6.29688C19.4766 6.4375 19.8281 7.5625 19.1602 8.23047L15.4688 11.8516L16.3477 16.9492C16.4883 17.8633 15.5039 18.5664 14.6953 18.1445L10.125 15.7188L5.51953 18.1445C4.71094 18.5664 3.72656 17.8633 3.86719 16.9492L4.74609 11.8516L1.05469 8.23047C0.386719 7.5625 0.738281 6.4375 1.65234 6.29688L6.82031 5.55859L9.10547 0.882812Z"
        fill="url(#halfGradient)"
      />
    </svg>
  );

  // Split the rating heading into words for separate animation.
  const heading = "STREET CRED";
  const headingWords = heading.split(" ");

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-between bg-black font-bold tracking-tight px-[2vw] pt-[13vw] pb-[3vw]"
    >
      <span className="font-['Share_Tech'] text-[3.5vw] text-white tracking-[1.6]">
        {headingWords.map((word, i) => (
          <span
            key={i}
            ref={el => (wordRefs.current[i] = el)}
            className="inline-block mr-[1vw]"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            {word}
          </span>
        ))}
      </span>
      <div className="flex items-center gap-[0.6vw]">
        <span className="flex gap-[0.2vw]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              ref={el => (starsRef.current[i] = el)}
              style={{ display: "inline-block" }}
            >
              {starSVG()}
            </span>
          ))}
          {/* Star 5 (Half) */}
          <span
            ref={el => (starsRef.current[4] = el)}
            style={{ display: "inline-block" }}
          >
            {halfStarSVG}
          </span>
        </span>
        <span
          ref={ratingRef}
          className="text-white text-[1vw] font-sans font-light"
          style={{ letterSpacing: "0.04em", marginLeft: "0.4vw" }}
        >
          ( 4.8/5 on Google )
        </span>
      </div>
    </div>
  );
}