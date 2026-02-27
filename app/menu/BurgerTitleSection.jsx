"use client";

import { useState, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MenuPreloader from "./MenuPreloader";

// SVG as a React Component - only the blurred radial shadow
const DropShadowSVG = () => (
  <svg
    width="776"
    height="776"
    viewBox="0 0 776 776"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      left: "50%",
      top: "40%",
      transform: "translate(-50%, -60%)",
      pointerEvents: "none",
      zIndex: 0,
      width: "clamp(250px, 50vw, 760px)",
      height: "clamp(250px, 50vw, 760px)",
      mixBlendMode: "screen",
    }}
    aria-hidden="true"
  >
    <defs>
      <filter id="burgerGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="35" />
      </filter>
      <radialGradient id="burgerWhiteGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="40%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="70%" stopColor="#ffffff" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle
      cx="388"
      cy="388"
      r="260"
      fill="url(#burgerWhiteGlow)"
      filter="url(#burgerGlow)"
    />
  </svg>
);

const BURGERS = [
  {
    name: "OG BURGER",
    image:
      "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/MenuPage/Burger%20Image%201.webp",
    boost: 1,
  },
  {
    name: "BBQ CLASSIC",
    image:
      "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/MenuPage/Burger%20Imaeg%202%20BBQ.webp",
    boost: 1,
  },
  {
    name: "HOT BURGER",
    image:
      "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/MenuPage/Burger%20REd-Picsart-AiImageEnhancer.webp",
    boost: 1.15,
  },
  {
    name: "NORMAL CHEESE",
    image:
      "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/MenuPage/Burger%20lit%20yellow.webp",
    boost: 1.25,
  },
  {
    name: "MORE CHEESE",
    image:
      "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/MenuPage/Burger%20image%20more%20cheese%20one.webp",
    boost: 1.25,
  },
];

const TOTAL = BURGERS.length;

// Ensure card ids are unique across new renders
const makeCard = (() => {
  let globalId = 0;
  return (index, slot) => ({
    id: globalId++,
    index,
    slot,
  });
})();

const createInitialCards = (center) => [
  makeCard((center - 3 + TOTAL) % TOTAL, -3),
  makeCard((center - 2 + TOTAL) % TOTAL, -2),
  makeCard((center - 1 + TOTAL) % TOTAL, -1),
  makeCard(center % TOTAL, 0),
  makeCard((center + 1) % TOTAL, 1),
  makeCard((center + 2) % TOTAL, 2),
  makeCard((center + 3) % TOTAL, 3),
];

const POS = {
  [0]: { x: 0, y: 0, scale: 1, opacity: 1, z: 10 },
  [1]: { x: 30, y: -50, scale: 0.45, opacity: 0.85, z: 5 },
  [2]: { x: 18, y: -100, scale: 0.2, opacity: 0.4, z: 1 },
  [3]: { x: -18, y: -100, scale: 0.2, opacity: 0.4, z: 1 },
  [4]: { x: -30, y: -50, scale: 0.45, opacity: 0.85, z: 5 },
};

function getModIndex(idx) {
  return ((idx % TOTAL) + TOTAL) % TOTAL;
}

export default function BurgerCarouselFinal() {
  const [carousel, setCarousel] = useState(() => ({
    center: 0,
    cards: BURGERS.map((_, i) => ({ id: i, index: i, slot: i })),
  }));

  // animatingRef is used ONLY as a guard inside moveBy to avoid stale closures.
  const animatingRef = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const moveBy = useCallback((steps) => {
    if (steps === 0 || animatingRef.current) return;

    animatingRef.current = true;
    setIsAnimating(true);

    setCarousel((prev) => {
      const nextCenter = getModIndex(prev.center + steps);
      const nextCards = prev.cards.map((card) => {
        // Calculate the new slot relative to the new center
        const nextSlot = getModIndex(card.index - nextCenter);
        return { ...card, slot: nextSlot };
      });

      return { center: nextCenter, cards: nextCards };
    });

    setTimeout(() => {
      animatingRef.current = false;
      setIsAnimating(false);
    }, 650);
  }, []);

  const handleCardClick = useCallback(
    (clickedSlot) => {
      // For circular logic, we might want to slide the shortest distance
      let steps = clickedSlot;
      if (steps > TOTAL / 2) steps -= TOTAL;
      if (steps < -TOTAL / 2) steps += TOTAL;
      moveBy(steps);
    },
    [moveBy]
  );

  const goNext = useCallback(() => moveBy(1), [moveBy]);
  const goPrev = useCallback(() => moveBy(-1), [moveBy]);

  return (
    <>
      <MenuPreloader
        images={BURGERS.map((b) => b.image)}
        onComplete={() => setPreloaderDone(true)}
      />
      <div
        className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-[4vh] md:pt-[1vh] min-h-0 md:min-h-screen pb-[2vh] md:pb-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 52% at 50% 38%, #222222 0%, #111111 26%, #090909 58%, #000 100%)",
          opacity: preloaderDone ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {/* SUB-NAV */}
        <div className="w-full">
          <nav
            className="subnavbar"
            style={{ color: "white" }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            <div
              className="flex font-['Share_Tech'] gap-[6vw] md:gap-[3.4vw] justify-start md:justify-center items-center overflow-x-auto no-scrollbar px-[5vw] md:px-0 pt-[4vw] md:pt-[1.5vw]"
              style={{ fontFamily: "var(--font-peakers)", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <a
                href="#"
                className="whitespace-nowrap font-sharetech text-[16px] md:text-[1.3vw] border-b-2 border-red-500 pb-1"
              >
                BURGERS
              </a>
              <a href="#" className="whitespace-nowrap text-[15px] md:text-[1.4vw] pb-2">
                WRAPS
              </a>
              <a href="#" className="whitespace-nowrap text-[15px] md:text-[1.4vw] pb-2">
                RICE BOWLS
              </a>
              <a href="#" className="whitespace-nowrap text-[15px] md:text-[1.4vw] pb-2">
                WINGS AND TENDERS
              </a>
              <a href="#" className="whitespace-nowrap text-[15px] md:text-[1.4vw] pb-2">
                GRIILLED
              </a>
              <a href="#" className="whitespace-nowrap text-[15px] md:text-[1.4vw] pb-2">
                MEAL BOX
              </a>
            </div>
          </nav>
        </div>

        {/* BURGER STAGE */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(260px, 54vw, 560px)" }}
        >
          {/* SVG Drop Shadow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -33%)",
              zIndex: 1,
              pointerEvents: "none",
              width: "clamp(300px, 55vw, 780px)",
              height: "clamp(300px, 55vw, 780px)",
            }}
            aria-hidden="true"
          >
            <DropShadowSVG />
          </div>

          {carousel.cards.map((card) => {
            const cfg = POS[card.slot] || POS[2];
            const burger = BURGERS[card.index];
            const isCenter = card.slot === 0;

            // Simple logic to detect if a card is crossing the "back" of the circle
            // during a transition. If it moves from say 1 to 4 directly across the front,
            // it looks bad. But with fixed circular slots, CSS transition will 
            // naturally move it along the specified coordinates.

            return (
              <div
                key={card.id}
                onClick={() =>
                  !isCenter && !isAnimating && handleCardClick(card.slot)
                }
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `
                    translate(calc(-50% + ${cfg.x}vw), calc(-50% + ${cfg.y}px))
                    scale(${cfg.scale * (burger.boost || 1)})
                  `,
                  opacity: cfg.opacity,
                  zIndex: cfg.z,
                  transition:
                    "transform .7s cubic-bezier(.34, 1.56, .64, 1), opacity .5s ease",
                  pointerEvents: isCenter
                    ? "none"
                    : isAnimating
                      ? "none"
                      : "auto",
                  cursor: isCenter ? "default" : isAnimating ? "wait" : "pointer",
                  userSelect: "none",
                }}
              >
                <img
                  src={burger.image}
                  alt={burger.name}
                  draggable={false}
                  style={{
                    width: "clamp(220px, 45vw, 520px)",
                    display: "block",
                    filter: isCenter
                      ? "drop-shadow(0 30px 80px rgba(0,0,0,0.6))"
                      : "none",
                    transition: "filter .4s ease",
                    userSelect: "none",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* SLIDING INDICATOR */}
        <div className="flex gap-3 mt-4">
          {BURGERS.map((_, i) => (
            <div
              key={i}
              style={{
                height: "6px",
                width: i === carousel.center ? "36px" : "10px",
                background: i === carousel.center ? "#e8b800" : "#333",
                borderRadius: "999px",
                transition: "all .4s cubic-bezier(.22,1,.36,1)",
              }}
            />
          ))}
        </div>

        {/* TITLE + ARROWS */}
        <div className="w-full flex items-center justify-center relative pb-4">
          {/* Uses isAnimating state so the button actually re-enables after animation */}
          <button
            onClick={goPrev}
            className="absolute left-0 px-[4vw]"
            disabled={isAnimating}
            style={{
              cursor: isAnimating ? "wait" : "pointer",
              opacity: isAnimating ? 0.5 : 1,
              transition: "opacity 0.2s",
            }}
          >
            <FiChevronLeft className="text-[32px] md:text-[38px] w-[1em] h-[1em]" color="#888" />
          </button>

          <h1
            className="uppercase text-white text-center px-[12vw] md:px-0"
            style={{
              fontFamily: "var(--font-peakers)",
              fontSize: "clamp(1.8rem, 7.5vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              lineHeight: "1.1",
            }}
          >
            {BURGERS[carousel.center].name}
          </h1>

          <button
            onClick={goNext}
            className="absolute right-0 px-[4vw]"
            disabled={isAnimating}
            style={{
              cursor: isAnimating ? "wait" : "pointer",
              opacity: isAnimating ? 0.5 : 1,
              transition: "opacity 0.2s",
            }}
          >
            <FiChevronRight className="text-[32px] md:text-[38px] w-[1em] h-[1em]" color="#888" />
          </button>
        </div>
      </div>
    </>
  );
}