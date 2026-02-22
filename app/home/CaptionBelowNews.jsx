"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaptionBelowNews() {
  const leftBorderRef = useRef(null);
  const rightBorderRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  
  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const leftBorder = leftBorderRef.current;
    const rightBorder = rightBorderRef.current;
    const text = textRef.current;

    gsap.set(leftBorder, { scaleX: 0, transformOrigin: "right center" });
    gsap.set(rightBorder, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(text, { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .to(leftBorder, {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
      }, 0)
      .to(rightBorder, {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
      }, 0)
      .to(text, {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.5,
        ease: "power2.out",
      }, 0.18);

    ScrollTrigger.refresh();
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center mt-[1vw]">
      <div className="w-[80vw] flex flex-col items-center">
        {/* Animated border-bottom split from center, now 80% width and centered */}
        <div className="relative flex items-center justify-center my-[0.6vw]" style={{ width: "80%", marginLeft: "auto", marginRight: "auto", height: "2.5px" }}>
          <div
            ref={leftBorderRef}
            className="absolute left-1/2 top-0 h-full bg-[#fff3] origin-right"
            style={{
              width: "60%",
              transform: "scaleX(0)",
              transition: "none",
              borderBottom: "2.5px solid #fff3",
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
          <div
            ref={rightBorderRef}
            className="absolute top-0 h-full bg-[#fff3] origin-center"
            style={{
              width: "140%",
              transition: "none",
              borderBottom: "2.5px solid #fff3",
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
          {/* invisible for spacing: keeps 2.5px height */}
          <div style={{ width: "100%", height: "2.5px", visibility: "hidden" }} />
        </div>
        <div className="flex items-start px-[14vw] w-full mt-[0.6vw] justify-center">
          {/* SVG vertical bar to the left of the text */}
          <svg
            width="14"
            height="48"
            viewBox="0 0 14 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              flex: "0 0 auto",
              marginRight: "1vw",
              marginTop: "0.15vw"
            }}
            aria-hidden="true"
          >
            <rect x="4" y="0" width="4" height="30" rx="1" fill="#fff"/>
          </svg>
          {/* Animated text */}
          <span
            ref={textRef}
            className="text-white text-[1.3vw] font-sans font-light text-left tracking-wide inline-block"
            style={{
              letterSpacing: ".005em",
              lineHeight: "1.7vw",
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
              willChange: "opacity, transform, clip-path",
            }}
          >
            Stay up to date with our shenanigans, limited drops, and questionable life choices.
          </span>
        </div>
      </div>
    </div>
  );
}