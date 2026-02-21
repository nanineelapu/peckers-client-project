import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * - Animates the section in/out with a fade/slide effect as you scroll
 * - Adds a glossy border effect to the "Sign Me Up" button with an animated highlight loop
 */
export default function SignUpSection() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  const glossRef = useRef(null);
  const timelineRef = useRef(null);

  // Scroll-triggered section animation (in/out)
  useEffect(() => {
    if (typeof window === "undefined") return;
    let observer;
    const container = containerRef.current;
    const card = cardRef.current;

    function animateIn() {
      gsap.set(card, { opacity: 0, y: 50, scale: 0.97 });
      if (timelineRef.current) timelineRef.current.kill();
      const tl = gsap.timeline();
      timelineRef.current = tl;
      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.62,
        ease: "power3.out",
      });
    }
    function resetState() {
      gsap.set(card, { opacity: 0, y: 50, scale: 0.97 });
      if (timelineRef.current) timelineRef.current.kill();
    }

    if (container && card) {
      observer = new window.IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            animateIn();
          } else {
            resetState();
          }
        },
        { threshold: 0.22 }
      );
      observer.observe(container);
    }
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  // Looping glossy border for button
  useEffect(() => {
    const gloss = glossRef.current;
    if (!gloss) return;
    gsap.set(gloss, {
      left: "-60%",
      opacity: 0.34
    });
    const loop = gsap.to(gloss, {
      left: "120%",
      opacity: 0.54,
      duration: 1.3,
      repeat: -1,
      ease: "power2.inOut",
      yoyo: false,
      delay: 0.3,
      onUpdate: () => {
        // seamlessly cycle, nothing needed (handled by GSAP)
      },
      onRepeat: () => {
        gsap.set(gloss, { left: "-60%", opacity: 0.34 });
      }
    });

    return () => loop && loop.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center py-[4vw] px-[2vw] border-b border-[#262626]"
      style={{ overflow: "visible" }}
    >
      <div
        ref={cardRef}
        className="w-[98%] mx-auto rounded-[1vw] shadow-lg flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Sign%20Up%20Section.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvU2lnbiBVcCBTZWN0aW9uLnBuZyIsImlhdCI6MTc3MTQ0ODg1MywiZXhwIjoxODAyOTg0ODUzfQ.vcqZFiUSmqzH6vpM4qMahqzOH0BHtUEaZZRppngXN6c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "1vw",
          border: "1px solid #333",
          minHeight: "30vw",
          boxShadow: "0 6px 30px 0 #16161669",
          padding: "3.2vw 2vw",
          position: "relative",
          overflow: "visible"
        }}
      >
        <h2
          className="text-white px-[2vw] font-bold text-[5vw] mb-[0.8vw] leading-tight font-['Share_Tech'] text-center"
          style={{
            letterSpacing: "0.04em",
             fontFamily: "var(--font-peakers)"
          }}
        >
          JOIN OUR MAILING LIST
        </h2>
        <p
          className="text-[#e7e7e7e0] text-[1.7vw] font-sans mb-[3vw] mt-[0.3vw] text-center"
          style={{
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: "1"
          }}
        >
          Sign up for all the latest news and events from the world of Peckers.
        </p>
        <div style={{ position: "relative", width: "fit-content" }}>
          <button
            ref={buttonRef}
            className="bg-black text-white px-[2.6vw] py-[1.7vw] rounded-[1vw] font-mono text-[1.4vw] tracking-[0.07em] transition-transform transition-colors duration-150 hover:bg-[#232323] hover:scale-[1.04] focus:outline-none mx-auto relative overflow-hidden border-[0px] border-white"
            style={{
              letterSpacing: "0.11em",
              fontWeight: 500,
              boxShadow: "0 2px 10px #0004",
              borderImage: undefined,
              display: "block",
              backgroundClip: "padding-box"
            }}
          >
            {/* Glossy border effect overlay */}
            <span
              ref={glossRef}
              style={{
                position: "absolute",
                top: "-30%",
                left: "-60%",
                width: "44%",
                height: "165%",
                background: "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0.11) 80%)",
                filter: "blur(0.05vw)",
                borderRadius: "inherit",
                pointerEvents: "none",
                opacity: 0.44,
                zIndex: 2,
                transform: "rotate(-14deg)"
              }}
            ></span>
            <span style={{ position: "relative", zIndex: 3 }}>SIGN ME UP</span>
            {/* Fallback border for browsers without border-image */}
            <span
              aria-hidden
              style={{
                pointerEvents: "none",
                content: "''",
                position: "absolute",
                inset: 0,
                zIndex: 1,
                border: "2px solid white",
                borderRadius: "inherit",
                background: "none"
              }}
              className="hidden"
            />
          </button>
        </div>
      </div>
    </div>
  );
}