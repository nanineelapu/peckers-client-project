"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/img%20slide%202.jpeg",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/img%20slide%201.jpeg",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/latest%20news%20car%202.png"
];

export default function LatestNewsCards() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const rightCardRef = useRef(null);

  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  // Initial rise animation + permanent rotation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftCardRef.current, { rotate: -9, scale: 0.9, opacity: 0.8 });
      gsap.set(centerCardRef.current, { rotate: 0, scale: 1, opacity: 1 });
      gsap.set(rightCardRef.current, { rotate: 8, scale: 0.9, opacity: 0.8 });

      const cards = [
        leftCardRef.current,
        centerCardRef.current,
        rightCardRef.current,
      ];

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const animateSlide = (direction, customDuration) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // Make the sliding duration longer for a slower, smoother effect
    const duration = customDuration ?? 0.9;
    const ease = "power3.inOut";

    const nextIndex =
      direction === "next"
        ? (index + 1) % images.length
        : (index - 1 + images.length) % images.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setIndex(nextIndex);
        gsap.set(
          [leftCardRef.current, centerCardRef.current, rightCardRef.current],
          { x: 0 }
        );
        isAnimating.current = false;
      },
    });

    const shift = direction === "next" ? -100 : 100;

    tl.to(
      [leftCardRef.current, centerCardRef.current, rightCardRef.current],
      {
        x: shift,
        duration,
        ease,
      }
    );
  };

  // Scroll controlled sliding (now slower and smoother)
  useEffect(() => {
    // Tweak for "scroll less = not always trigger": 
    // Use a scroll threshold so small accidental scrolls won't slide
    const SCROLL_THRESH = 36; // Minimum deltaY to trigger

    let wheelTimeout = null;

    const handleWheel = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;

      if (!inView || isAnimating.current) return;

      // Make sure we only allow one scroll per gesture
      if (Math.abs(e.deltaY) < SCROLL_THRESH) return;

      if (e.deltaY > 0) {
        animateSlide("next", 1.15); // Smoother and even slower when scrolling
      } else if (e.deltaY < 0) {
        animateSlide("prev", 1.15);
      }

      // Prevent scrolling while animating
      e.preventDefault();

      // Add debounce so the user can't trigger too frequently by longer scroll/flick gestures
      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => { wheelTimeout = null }, 350);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
    // Removing index from dependency: keeps scroll handling stable
    // eslint-disable-next-line
  }, []);

  const left = images[(index - 1 + images.length) % images.length];
  const center = images[index];
  const right = images[(index + 1) % images.length];

  return (
    <div className="relative w-full flex flex-col items-center py-[5vw] justify-center overflow-hidden">

      <div className="relative flex justify-center items-center w-full">

        <button
          onClick={() => animateSlide("prev", 0.9)}
          className="absolute left-[4vw] z-20 w-[55px] h-[55px] bg-black border-[2px] rounded-full flex items-center justify-center top-1/2 -translate-y-1/2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div ref={containerRef} className="flex items-center gap-[3vw]">

          <div
            ref={leftCardRef}
            className="w-[22vw] h-[34vw] rounded-[1vw] overflow-hidden"
            style={{
              filter: "brightness(0.7) blur(0.4px)",
              boxShadow: "0 0.3vw 2vw rgba(0,0,0,0.5)",
            }}
          >
            <img src={left} className="w-full h-full object-cover" draggable={false} />
          </div>

          <div
            ref={centerCardRef}
            className="w-[25vw] h-[38vw] rounded-[1vw] overflow-hidden z-10"
            style={{
              boxShadow: "0 0.7vw 3vw rgba(0,0,0,0.8)",
            }}
          >
            <img src={center} className="w-full h-full object-cover" draggable={false} />
          </div>

          <div
            ref={rightCardRef}
            className="w-[22vw] h-[34vw] rounded-[1vw] overflow-hidden"
            style={{
              filter: "brightness(0.8) blur(0.4px)",
            }}
          >
            <img src={right} className="w-full h-full object-cover" draggable={false} />
          </div>

        </div>

        <button
          onClick={() => animateSlide("next", 0.9)}
          className="absolute right-[4vw] z-20 w-[55px] h-[55px] bg-black border-[2px] rounded-full flex items-center justify-center top-1/2 -translate-y-1/2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </div>
  );
}