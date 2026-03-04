"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function SignUpSection() {
  const glossRef = useRef(null);

  // Looping glossy border for button (kept as-is)
  useEffect(() => {
    const gloss = glossRef.current;
    if (!gloss) return;
    gsap.set(gloss, { left: "-60%", opacity: 0.34 });
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
      className="w-full flex justify-center items-center pt-[8vw] pb-[6vw] md:pt-[3vw] md:pb-[2.5vw] px-[5vw] md:px-[2vw] border-b border-[#262626]"
      style={{ overflow: "visible" }}
    >
      <motion.div
        className="w-[101%] mx-auto rounded-[2.5vw] md:rounded-[0.9vw] shadow-lg flex flex-col items-center justify-center p-[5vw] md:p-[2.2vw_1.5vw] min-h-[40vw] md:min-h-[20vw]"
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-white px-[2vw] font-bold text-[6.5vw] md:text-[5vw] xl:text-[3.8vw] mb-[1.5vw] md:mb-[1vw] xl:mb-[0.5vw] leading-tight font-['Share_Tech'] text-center"
          style={{ letterSpacing: "0.04em", fontFamily: "var(--font-peakers)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          JOIN OUR MAILING LIST
        </motion.h2>

        <motion.p
          className="text-[#e7e7e7e0] text-[3.5vw] sm:text-[3vw] md:text-[2.2vw] xl:text-[1.35vw] font-sans mb-[5vw] md:mb-[3vw] xl:mb-[2vw] mt-[0.5vw] md:mt-0 text-center max-w-[90vw] md:max-w-[70vw] xl:max-w-max"
          style={{ fontWeight: 300, letterSpacing: "0.01em", lineHeight: "1.4" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Sign up for all the latest news and events from the world of Peckers.
        </motion.p>

        <motion.div
          style={{ position: "relative", width: "fit-content" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "backOut", delay: 0.42 }}
        >
          <button
            className="bg-black text-white px-[6vw] md:px-[4vw] xl:px-[2vw] py-[3vw] md:py-[2vw] xl:py-[1.2vw] rounded-[2.5vw] md:rounded-[1.5vw] xl:rounded-[0.8vw] font-mono text-[3.2vw] md:text-[2vw] xl:text-[1.15vw] tracking-[0.07em] transition-all duration-150 hover:bg-[#232323] hover:scale-[1.04] focus:outline-none mx-auto relative overflow-hidden border-0 border-white"
            style={{
              letterSpacing: "0.11em",
              fontWeight: 500,
              boxShadow: "0 2px 10px #0004",
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
        </motion.div>
      </motion.div>
    </div>
  );
}