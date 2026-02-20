"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initialImages = [
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Group%206%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvR3JvdXAgNiAoMSkucG5nIiwiaWF0IjoxNzcxNTM0MjAxLCJleHAiOjE4MDMwNzAyMDF9.GDIRcNSnqhbwvs3ndg5NIvZD74xmPHCT3TuagHIKZfI",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/img%20sec%203%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvaW1nIHNlYyAzIDIuanBnIiwiaWF0IjoxNzcxNTM0Mjg5LCJleHAiOjE4MDMwNzAyODl9.-WaXJ0zx-NO7Fm1ESd3m3iNG7arDXGiRSA2o37D8lME",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Group%206.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvR3JvdXAgNi5wbmciLCJpYXQiOjE3NzE1MzQxNDksImV4cCI6MTgwMzA3MDE0OX0.SXuSK6BjGKIh-5cXXXYFDSpNnXYHGWml0vzbXFcomTw",
];

export default function LatestNewsCards() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  const [images, setImages] = useState(initialImages);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([leftRef.current, centerRef.current, rightRef.current], {
        y: 60,
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const slideCards = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const left = leftRef.current;
    const center = centerRef.current;
    const right = rightRef.current;

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power4.inOut" },
      onComplete: () => {
        // rotate images AFTER animation (critical for seamless premium feel)
        setImages((prev) => {
          if (direction === "next") {
            return [prev[2], prev[0], prev[1]];
          } else {
            return [prev[1], prev[2], prev[0]];
          }
        });

        // reset transforms instantly (no visual jump)
        gsap.set([left, center, right], { x: 0, scale: 1 });
        isAnimating.current = false;
      },
    });

    if (direction === "next") {
      // LEFT -> CENTER
      tl.to(left, { x: "22vw", scale: 1.1 }, 0);

      // CENTER -> RIGHT
      tl.to(center, { x: "22vw", scale: 0.9 }, 0);

      // RIGHT -> LEFT (behind effect)
      tl.to(right, { x: "-44vw", scale: 0.9 }, 0);
    } else {
      // RIGHT -> CENTER
      tl.to(right, { x: "-22vw", scale: 1.1 }, 0);

      // CENTER -> LEFT
      tl.to(center, { x: "-22vw", scale: 0.9 }, 0);

      // LEFT -> RIGHT (loop movement)
      tl.to(left, { x: "44vw", scale: 0.9 }, 0);
    }
  };

  const [leftImg, centerImg, rightImg] = images;

  return (
    <div className="relative w-full flex justify-center items-center px-[3vw] py-[3vw] overflow-hidden">
      {/* LEFT ARROW */}
      <button
        onClick={() => slideCards("prev")}
        className="absolute left-[1vw] top-1/2 -translate-y-1/2 z-20 bg-[#111] rounded-full w-[44px] h-[44px] border border-white flex items-center justify-center text-white text-2xl"
      >
        ←
      </button>

      <div
        ref={containerRef}
        className="flex flex-row justify-center items-center gap-[2vw]"
        style={{ minHeight: "34vw" }}
      >
        {/* LEFT CARD */}
        <div
          ref={leftRef}
          className="w-[19vw] h-[27vw] rounded-[1vw] overflow-hidden"
          style={{ transform: "rotate(-2deg)" }}
        >
          <img
            src={leftImg}
            className="w-full h-full object-cover"
            draggable={false}
            alt="left"
          />
        </div>

        {/* CENTER CARD (FOCUS) */}
        <div
          ref={centerRef}
          className="w-[24vw] h-[34vw] rounded-[1vw] overflow-hidden shadow-2xl z-10"
        >
          <img
            src={centerImg}
            className="w-full h-full object-cover scale-[1.08]"
            draggable={false}
            alt="center"
          />
        </div>

        {/* RIGHT CARD */}
        <div
          ref={rightRef}
          className="w-[19vw] h-[27vw] rounded-[1vw] overflow-hidden"
          style={{ transform: "rotate(3deg)" }}
        >
          <img
            src={rightImg}
            className="w-full h-full object-cover"
            draggable={false}
            alt="right"
          />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() => slideCards("next")}
        className="absolute right-[1vw] top-1/2 -translate-y-1/2 z-20 bg-[#111] rounded-full w-[44px] h-[44px] border border-white flex items-center justify-center text-white text-2xl"
      >
        →
      </button>
    </div>
  );
}