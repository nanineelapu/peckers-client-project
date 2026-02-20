"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function LogoAnimation() {
  const svgRef = useRef(null);
  const outerCircleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const forkRef = useRef(null);
  const spoonRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    let tl = null;
    let glowAnimation = null;

    // Small delay to ensure DOM is ready and prevent flash
    const initTimer = setTimeout(() => {
      tl = gsap.timeline();

      // Ensure initial states are set (redundant but safe)
      gsap.set([outerCircleRef.current, innerCircleRef.current, forkRef.current, spoonRef.current], {
        strokeDasharray: "1000",
        strokeDashoffset: "1000",
        opacity: 0,
      });

      gsap.set(textRef.current, { opacity: 0, y: 20 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(svgRef.current, { opacity: 1 }); // Show SVG container

      // Animate glow background - smoother entrance
      tl.to(glowRef.current, {
        opacity: 0.15,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        // Animate outer circle - smoother stroke drawing
        .to(outerCircleRef.current, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power1.inOut",
        }, 0.3)
        // Animate inner circle - overlapping slightly
        .to(innerCircleRef.current, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power1.inOut",
        }, 0.8)
        // Animate fork - smoother drawing
        .to(forkRef.current, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power1.inOut",
        }, 1.4)
        // Animate spoon - smoother drawing
        .to(spoonRef.current, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power1.inOut",
        }, 1.9)
        // Animate text - smoother fade in
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, 3);

      // Continuous glow pulse - smoother and more subtle
      glowAnimation = gsap.to(glowRef.current, {
        opacity: [0.15, 0.25, 0.15],
        scale: [0.98, 1.02, 0.98],
        duration: 3.5,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, 50); // Small delay to prevent flash

    return () => {
      clearTimeout(initTimer);
      if (tl) tl.kill();
      if (glowAnimation) glowAnimation.kill();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12 relative">
      {/* Background Glow Effect - Hidden initially */}
      <div
        ref={glowRef}
        className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"
        style={{ opacity: 0, scale: 0.8 }}
      />

      <svg
        ref={svgRef}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="stroke-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        style={{ opacity: 1, visibility: "visible" }}
      >
        {/* Outer Circle - Hidden initially */}
        <circle
          ref={outerCircleRef}
          cx="100"
          cy="100"
          r="90"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          style={{ opacity: 0, strokeDasharray: "1000", strokeDashoffset: "1000" }}
        />

        {/* Inner Thin Circle - Hidden initially */}
        <circle
          ref={innerCircleRef}
          cx="100"
          cy="100"
          r="82"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="transparent"
          style={{ opacity: 0, strokeDasharray: "1000", strokeDashoffset: "1000" }}
        />

        {/* Crossed Spoon and Fork */}
        <g transform="translate(100, 100) scale(0.6)">
          {/* Fork - rotated -45 deg - Hidden initially */}
          <path
            ref={forkRef}
            d="M-15,-60 L-15,10 C-15,30 -5,30 -5,60 L-5,90 L5,90 L5,60 C5,30 15,30 15,10 L15,-60 M-15,10 L-15,-20 M-5,10 L-5,-20 M5,10 L5,-20 M15,10 L15,-20"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(-45)"
            style={{ opacity: 0, strokeDasharray: "1000", strokeDashoffset: "1000" }}
          />

          {/* Spoon - rotated 45 deg - Hidden initially */}
          <path
            ref={spoonRef}
            d="M0,90 L0,30 C-15,30 -25,10 -25,-20 C-25,-50 -15,-70 0,-70 C15,-70 25,-50 25,-20 C25,10 15,30 0,30"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(45)"
            style={{ opacity: 0, strokeDasharray: "1000", strokeDashoffset: "1000" }}
          />
        </g>
      </svg>

      <div 
        ref={textRef} 
        className="mt-2 text-center"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="h-[2px] w-6 bg-white"></div>
          <p className="text-2xl tracking-[0.2em] text-white font-sans font-medium uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Peackers
          </p>
          <div className="h-[2px] w-6 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
