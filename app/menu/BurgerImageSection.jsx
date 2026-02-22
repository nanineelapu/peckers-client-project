"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BurgerImageSection({ image }) {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          x: 200,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [image]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center items-center overflow-hidden"
      style={{ height: "clamp(320px, 45vw, 520px)" }}
    >
      <img
        ref={imageRef}
        key={image}
        src={image}
        alt="burger"
        draggable={false}
        className="w-[40vw] max-w-[520px] select-none"
        style={{
          filter:
            "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
        }}
      />
    </div>
  );
}