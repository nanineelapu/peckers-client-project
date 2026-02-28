import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * - No scroll/fade entrance animations.
 * - Only retains the glossy border effect on button (animation).
 */
export default function SignUpSection() {
  const glossRef = useRef(null);

  // Looping glossy border for button (animation remains)
  useEffect(() => {
    const gloss = glossRef.current;
    if (!gloss) return;
    gsap.set(gloss, {
      left: "-60%",
      opacity: 0.34,
    });
    const loop = gsap.to(gloss, {
      left: "120%",
      opacity: 0.54,
      duration: 1.3,
      repeat: -1,
      ease: "power2.inOut",
      yoyo: false,
      delay: 0.3,
      onUpdate: () => { },
      onRepeat: () => {
        gsap.set(gloss, { left: "-60%", opacity: 0.34 });
      },
    });

    return () => loop && loop.kill();
  }, []);

  return (
    <div
      className="w-full flex justify-center items-center pt-[14vw] pb-[10vw] md:pt-[5vw] md:pb-[4vw] px-[5vw] md:px-[2vw] border-b border-[#262626]"
      style={{ overflow: "visible" }}
    >
      <div
        className="w-[98%] mx-auto rounded-[3vw] md:rounded-[1vw] shadow-lg flex flex-col items-center justify-center p-[8vw] md:p-[3.2vw_2vw] min-h-[60vw] md:min-h-[30vw]"
        style={{
          backgroundImage:
            "url('https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/HomePage/Sign%20Up%20Section.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #333",
          boxShadow: "0 6px 30px 0 #16161669",
          position: "relative",
          overflow: "visible",
        }}
      >
        <h2
          className="text-white px-[2vw] font-bold text-[8vw] md:text-[5vw] mb-[2vw] md:mb-[0.8vw] leading-tight font-['Share_Tech'] text-center"
          style={{
            letterSpacing: "0.04em",
            fontFamily: "var(--font-peakers)",
          }}
        >
          JOIN OUR MAILING LIST
        </h2>
        <p
          className="text-[#e7e7e7e0] text-[4vw] sm:text-[3.5vw] md:text-[1.7vw] font-sans mb-[8vw] md:mb-[3vw] mt-[1vw] md:mt-[0.3vw] text-center max-w-[90vw] md:max-w-max"
          style={{
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: "1.4",
          }}
        >
          Sign up for all the latest news and events from the world of Peckers.
        </p>
        <div style={{ position: "relative", width: "fit-content" }}>
          <button
            className="bg-black text-white px-[8vw] md:px-[2.6vw] py-[4vw] md:py-[1.7vw] rounded-[3vw] md:rounded-[1vw] font-mono text-[4vw] md:text-[1.4vw] tracking-[0.07em] transition-transform transition-colors duration-150 hover:bg-[#232323] hover:scale-[1.04] focus:outline-none mx-auto relative overflow-hidden border-[0px] border-white"
            style={{
              letterSpacing: "0.11em",
              fontWeight: 500,
              boxShadow: "0 2px 10px #0004",
              borderImage: undefined,
              display: "block",
              backgroundClip: "padding-box",
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
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0.11) 80%)",
                filter: "blur(0.05vw)",
                borderRadius: "inherit",
                pointerEvents: "none",
                opacity: 0.44,
                zIndex: 2,
                transform: "rotate(-14deg)",
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
                background: "none",
              }}
              className="hidden"
            />
          </button>
        </div>
      </div>
    </div>
  );
}