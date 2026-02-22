import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Simple left and right smooth scroll animation, plays only once while scrolling down.
 */
export default function PersonDetails() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

useLayoutEffect(() => {
  if (!containerRef.current) return;

  const ctx = gsap.context(() => {
    gsap.set(leftRef.current, {
      opacity: 0,
      x: -80,
    });

    gsap.set(rightRef.current, {
      opacity: 0,
      x: 80,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    });

    timeline
      .to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }, 0)
      .to(rightRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }, 0);

    ScrollTrigger.refresh();
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-full overflow-x-hidden flex flex-col lg:flex-row items-stretch justify-center mt-[8vw] gap-[2vw] box-border px-[2vw]"
    >
      {/* Left: Person Image */}
      <div
        ref={leftRef}
        className="flex-shrink-0 w-full lg:w-auto"
      >
        <Image
          src="https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Person%20image.png"
          alt="Profile"
          className="w-full h-full object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
          width={670}
          height={840}
        />
      </div>

      {/* Right: Person Details */}
      <div
        ref={rightRef}
        className="w-full lg:max-w-[40vw] flex flex-col justify-center bg-black px-[3vw] py-[3vw] lg:py-[1vw] min-h-[25vw] shadow-xl relative box-border"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          className="grid text-white font-bold text-[4.8vw] tracking-[.2vw] leading-tight mb-[1vw]"
          style={{ letterSpacing: "0.01em", fontFamily: "var(--font-peakers)" }}
        >
          FOR THE LOVE OF <span className="text-[#ffff]">CHICKEN</span>
        </h2>
        {/* Sub-sentence title wrapper */}
        <div
          className="relative flex flex-col items-center"
          style={{ position: "relative", alignItems: "center", width: "100%" }}
        >
          <div
            className="text-white text-start font-light text-[1.3vw] tracking-[1.2] font-sans mb-[1vw] text-center"
            style={{ lineHeight: "2vw", width: "100%" }}
          >
            Peckers started with a dream: to make wings that didn’t suck. We were tired of dry, sad chicken.
            <br />
            So we locked ourselves in a garage with 51lbs of peppers and didn’t come out until we made magic.
          </div>
          <div
            className=""
            style={{
              width: "100px",
              maxWidth: "150px",
              minWidth: "80px",
              height: "2px",
              border: "none",
              borderRadius: "8px",
              margin: "0 auto",
              marginTop: ".6vw",
              marginBottom: "0",
              left: 0,
              right: 0,
              position: "absolute",
              bottom: "-1.8vw",
              transform: "translateY(100%)",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          />
        </div>
        <div style={{ height: "2.2vw" }} />
        <div
          className="italic font-mono font-light text-[#ffff] text-[1.2vw] mb-[1.6vw] pl-[1.3vw] border-l-2"
          style={{
            fontFamily: "",
            borderColor: "#ffe066",
            letterSpacing: "0.025em",
          }}
        >
          "We're not chefs. We're flavor engineers with a disregard for sodium limits."
        </div>
        <a
          href="#"
          className="group inline-flex flex-col items-start text-white font-sans text-[1.3vw] font-extralight"
          style={{ letterSpacing: "0.08em", width: "fit-content" }}
        >
          {/* Top Row */}
          <span className="flex items-center gap-[1.3vw]">
            <span>READ MORE</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2vw"
              height="2vw"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 5 5L20 7" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}