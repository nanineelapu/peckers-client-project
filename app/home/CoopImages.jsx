"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CoopImages() {
  const hitchinRef = useRef(null);
  const stevenageRef = useRef(null);
  const thirdCardRef = useRef(null); // for the third card

  // Use fallback sample images if original ones can't load
  const HITCHIN_IMG =
    "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Location%20Card%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvTG9jYXRpb24gQ2FyZCAxLnBuZyIsImlhdCI6MTc3MTQ0MDE4MiwiZXhwIjoxODAyOTc2MTgyfQ._PTqbnjcSbilkpcYFUVrNccmvk7m2JASzsI95ygCh94";
  const HITCHIN_FALLBACK =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80";
  const STEVENAGE_IMG =
    "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Location%20Card%202%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvTG9jYXRpb24gQ2FyZCAyICgxKS5wbmciLCJpYXQiOjE3NzE0NDAzNTgsImV4cCI6MTgwMjk3NjM1OH0.P6Xjw6lVRPTP3EtI9DHuWrSu5Bw6mgSWrJSc-uESTsk";
  const STEVENAGE_FALLBACK =
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80";

  // Add load error fallback handling
  function handleImgError(e, fallbackUrl) {
    if (e.target.src !== fallbackUrl) e.target.src = fallbackUrl;
  }

  useEffect(() => {
    // Prevent running server-side
    if (typeof window === 'undefined') return;

    let triggers = [];

    setTimeout(() => {
      [hitchinRef.current, stevenageRef.current, thirdCardRef.current].forEach((el, i) => {
        if (!el) return;

        const anim = gsap.fromTo(
          el,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              // Make sure the trigger is in the viewport on load (for Next.js fast loads)
              start: "top 90%",
              toggleActions: "play reverse play reverse",
              once: false,
            },
            delay: i * 0.13,
            overwrite: 'auto',
          }
        );
        triggers.push(anim);
      });
    }, 70); // brief delay to fix hydration

    // Cleanup
    return () => {
      triggers.forEach(tl => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        if (tl.kill) tl.kill();
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-row gap-[1.5vw] w-full justify-between items-center px-[4vw] py-[10vw]">
      {/* First image div: Hitchin */}
      <div
        ref={hitchinRef}
        className="relative w-[38vw] h-[19vw] flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src={HITCHIN_IMG}
          onError={e => handleImgError(e, HITCHIN_FALLBACK)}
          alt="Hitchin"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover bg-[#ddd]"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <span className="relative z-10 text-white text-[3vw] font-['Share_Tech'] drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)]">
          Hitchin
        </span>
      </div>
      {/* Second image div: Stevenage */}
      <div
        ref={stevenageRef}
        className="relative w-[38vw] h-[19vw] flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black/40"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src={STEVENAGE_IMG}
          onError={e => handleImgError(e, STEVENAGE_FALLBACK)}
          alt="Stevenage"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover bg-[#ddd]"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <span className="relative z-10 text-white text-[3vw] font-['Share_Tech'] drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)]">
          Stevenage
        </span>
      </div>
      {/* Third div: now animated as well */}
      <div
        ref={thirdCardRef}
        className="w-[33vw] h-[19vw] bg-black rounded-lg flex flex-col items-center justify-center border-[1px] border-white relative px-[1vw] py-[1vw]"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Modal card box */}
        <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-85 px-[2vw] py-[2vw]">
          <span className="font-['Share_Tech'] text-white text-[2.5vw] mb-[1.5vw] text-center tracking-wide">
            WHERE NEXT ?
          </span>
          <input
            type="text"
            placeholder="Suggest a city..."
            className="w-[80%] bg-transparent border border-white rounded-md text-center text-white font-courier py-[0.7vw] px-[1vw] mb-[1.6vw] placeholder:text-gray-400 font-courier outline-none focus:ring-2 focus:ring-white transition-all text-[1vw]"
            style={{ letterSpacing: '0.04em' }}
          />
          <button className="w-[60%] py-[0.2vw] border-[2px] border-white rounded-[1vw] text-white font-mono text-[1.2vw] tracking-widest transition-all bg-black hover:bg-white hover:text-black focus:outline-none">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}