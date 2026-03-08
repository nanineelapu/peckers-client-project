"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

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
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="70%" stopColor="#ffffff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle
      cx="388"
      cy="388"
      r="250"
      fill="url(#burgerWhiteGlow)"
      filter="url(#burgerGlow)"
    />
  </svg>
);

const POS_MAPPING_TABLET = {
  0: { x: 0, y: 0, scale: 1, opacity: 1, z: 10 },
  1: { x: 30, y: -50, scale: 0.45, opacity: 0.85, z: 5 },
  [-1]: { x: -30, y: -50, scale: 0.45, opacity: 0.85, z: 5 },
  2: { x: 18, y: -100, scale: 0.2, opacity: 0.4, z: 1 },
  [-2]: { x: -18, y: -100, scale: 0.2, opacity: 0.4, z: 1 },
};

const POS_MAPPING_LAPTOP = {
  0: { x: 0, y: 0, scale: 1, opacity: 1, z: 10 },
  1: { x: 25, y: -40, scale: 0.45, opacity: 0.8, z: 8 },
  [-1]: { x: -25, y: -40, scale: 0.45, opacity: 0.8, z: 8 },
  2: { x: 36, y: -80, scale: 0.25, opacity: 0.6, z: 6 },
  [-2]: { x: -36, y: -80, scale: 0.25, opacity: 0.6, z: 6 },
  3: { x: 21, y: -120, scale: 0.15, opacity: 0.3, z: 4 },
  [-3]: { x: -21, y: -120, scale: 0.15, opacity: 0.3, z: 4 },
};

function getSlotPos(slot, isLaptop = false) {
  const mapping = isLaptop ? POS_MAPPING_LAPTOP : POS_MAPPING_TABLET;
  if (mapping[slot]) return mapping[slot];
  // Hide cards beyond distance elegantly
  return {
    x: 0,
    y: -120,
    scale: 0,
    opacity: 0,
    z: -1
  };
}

export default function BurgerCarouselFinal() {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carousel, setCarousel] = useState({ center: 0, cards: [] });
  const animatingRef = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [glowVisible, setGlowVisible] = useState(true);

  const TOTAL = burgers.length;

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const data = await client.fetch(`*[_type == "menuPage"][0].burgerCarousel`);
        if (data && data.length > 0) {
          const transformed = data.map((item, i) => ({
            name: item.name,
            image: urlFor(item.image).url(),
            boost: item.boost || 1,
          }));
          setBurgers(transformed);

          const initialCards = transformed.map((_, i) => {
            let diff = i;
            if (diff > data.length / 2) diff -= data.length;
            if (diff < -data.length / 2) diff += data.length;
            return { id: i, index: i, slot: diff };
          });
          setCarousel({ center: 0, cards: initialCards });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching burger data:", error);
        setLoading(false);
      }
    };
    fetchBurgers();
  }, []);

  const getModIndex = useCallback((idx) => {
    return ((idx % TOTAL) + TOTAL) % TOTAL;
  }, [TOTAL]);

  const moveBy = useCallback((steps) => {
    if (steps === 0 || animatingRef.current || TOTAL === 0) return;

    animatingRef.current = true;
    setIsAnimating(true);
    setGlowVisible(false);

    setCarousel((prev) => {
      const nextCenter = getModIndex(prev.center + steps);
      const nextCards = prev.cards.map((card) => {
        let diff = card.index - nextCenter;
        if (diff > TOTAL / 2) diff -= TOTAL;
        if (diff < -TOTAL / 2) diff += TOTAL;
        return { ...card, slot: diff };
      });
      return { center: nextCenter, cards: nextCards };
    });

    setTimeout(() => {
      setGlowVisible(true);
    }, 150);

    setTimeout(() => {
      animatingRef.current = false;
      setIsAnimating(false);
    }, 650);
  }, [getModIndex, TOTAL]);

  const handleCardClick = useCallback(
    (clickedSlot) => {
      moveBy(clickedSlot);
    },
    [moveBy]
  );

  const goNext = useCallback(() => moveBy(1), [moveBy]);
  const goPrev = useCallback(() => moveBy(-1), [moveBy]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/20 font-['Share_Tech'] animate-pulse tracking-[.5vw] text-2xl"
          style={{ fontFamily: "var(--font-peakers)" }}>
          LOADING MENU...
        </div>
      </div>
    );
  }

  if (TOTAL === 0) return null;

  return (
    <>
      <div
        className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-[0vh] md:pt-[1vh] min-h-0 md:min-h-screen pb-[4vh] md:pb-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 52% at 50% 38%, #1c1c1c 0%, #0d0d0d 26%, #070707 58%, #000 100%)",
        }}
      >
        {/* SUB-NAV */}
        <div className="w-full">
          <nav
            className="subnavbar"
            style={{ color: "white" }}
          >
            <style>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
            <div
              className="flex font-['Share_Tech'] gap-[6vw] md:gap-6 lg:gap-8 xl:gap-[3.4vw] justify-start md:justify-center items-center overflow-x-auto no-scrollbar px-[5vw] sm:px-[5vw] md:px-0 pt-[4vw] sm:pt-[4vw] md:pt-4 lg:pt-6 xl:pt-[1.5vw]"
              style={{ fontFamily: "var(--font-peakers)", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <a
                href="#"
                className="whitespace-nowrap font-sharetech text-[18px] sm:text-[22px] md:text-[16px] lg:text-[18px] xl:text-[1.3vw] border-b-2 border-red-500 pb-1 md:pb-1 tracking-wider"
              >
                BURGERS
              </a>
              <a href="#" className="whitespace-nowrap text-[16px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[1.4vw] pb-2 md:pb-2 tracking-wide opacity-70 hover:opacity-100 transition-opacity">
                WRAPS
              </a>
              <a href="#" className="whitespace-nowrap text-[16px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[1.4vw] pb-2 md:pb-2 tracking-wide opacity-70 hover:opacity-100 transition-opacity">
                RICE BOWLS
              </a>
              <a href="#" className="whitespace-nowrap text-[16px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[1.4vw] pb-2 md:pb-2 tracking-wide opacity-70 hover:opacity-100 transition-opacity">
                WINGS AND TENDERS
              </a>
              <a href="#" className="whitespace-nowrap text-[16px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[1.4vw] pb-2 md:pb-2 tracking-wide opacity-70 hover:opacity-100 transition-opacity">
                GRIILLED
              </a>
              <a href="#" className="whitespace-nowrap text-[16px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[1.4vw] pb-2 md:pb-2 tracking-wide opacity-70 hover:opacity-100 transition-opacity">
                MEAL BOX
              </a>
            </div>
          </nav>
        </div>

        {/* BURGER STAGE */}
        <div
          className="relative w-full flex items-center justify-center mt-[8vw] md:mt-0"
          style={{ height: "clamp(230px, 42vw, 450px)" }}
        >
          {/* NAVIGATION ARROWS IN IMAGE CONTAINER */}
          <button
            onClick={goPrev}
            className="absolute left-[2vw] sm:left-[4vw] md:left-[6vw] top-1/2 -translate-y-1/2 z-30 p-[2vw] md:p-0"
            disabled={isAnimating}
            style={{
              cursor: isAnimating ? "wait" : "pointer",
              opacity: isAnimating ? 0.3 : 0.8,
              transition: "opacity 0.2s",
            }}
          >
            <FiChevronLeft className="text-[35px] sm:text-[45px] md:text-[50px] w-[1.2em] h-[1.2em]" color="#ffffff" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-[2vw] sm:right-[4vw] md:right-[6vw] top-1/2 -translate-y-1/2 z-30 p-[2vw] md:p-0"
            disabled={isAnimating}
            style={{
              cursor: isAnimating ? "wait" : "pointer",
              opacity: isAnimating ? 0.3 : 0.8,
              transition: "opacity 0.2s",
            }}
          >
            <FiChevronRight className="text-[35px] sm:text-[45px] md:text-[50px] w-[1.2em] h-[1.2em]" color="#ffffff" />
          </button>

          {/* SVG Drop Shadow */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -33%)",
              zIndex: 1,
              pointerEvents: "none",
              width: "clamp(280px, 50vw, 760px)",
              height: "clamp(280px, 50vw, 760px)",
              opacity: glowVisible ? 0.5 : 0,
              transition: glowVisible ? "opacity 0.4s ease" : "opacity 0.1s ease",
            }}
            aria-hidden="true"
          >
            <DropShadowSVG />
          </div>

          {/* Mobile-only: simple carousel */}
          {carousel.cards.map((card) => {
            const burger = burgers[card.index];
            const isCenter = card.slot === 0;

            return (
              <div
                key={`mob-${card.id}`}
                className="block md:hidden"
                onClick={() =>
                  !isCenter && !isAnimating && Math.abs(card.slot) <= 1 && handleCardClick(card.slot)
                }
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `
                    translate(calc(-50% + ${card.slot * 110}vw), -50%)
                    scale(${burger.boost || 1})
                  `,
                  opacity: Math.abs(card.slot) <= 1 ? 1 : 0,
                  zIndex: isCenter ? 10 : 5,
                  transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease",
                  pointerEvents: isCenter ? "none" : isAnimating ? "none" : "auto",
                  userSelect: "none",
                }}
              >
                <img
                  src={burger.image}
                  alt={burger.name}
                  draggable={false}
                  style={{
                    width: "clamp(240px, 85vw, 400px)",
                    display: "block",
                    filter: "none",
                    userSelect: "none",
                  }}
                />
              </div>
            );
          })}

          {/* Tablet-only: full multi-card stacked carousel */}
          {carousel.cards.map((card) => {
            const cfg = getSlotPos(card.slot, false);
            const burger = burgers[card.index];
            const isCenter = card.slot === 0;

            return (
              <div
                key={`tab-${card.id}`}
                className="hidden md:block lg:hidden"
                onClick={() =>
                  !isCenter && !isAnimating && Math.abs(card.slot) <= 2 && handleCardClick(card.slot)
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
                  transition: "transform .5s ease, opacity .5s ease",
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
                      ? "drop-shadow(0 5px 15px rgba(0,0,0,0.3))"
                      : "none",
                    transition: "filter .4s ease",
                    userSelect: "none",
                  }}
                />
              </div>
            );
          })}

          {/* Laptop-only: full multi-card stacked carousel (7 items) */}
          {carousel.cards.map((card) => {
            const cfg = getSlotPos(card.slot, true);
            const burger = burgers[card.index];
            const isCenter = card.slot === 0;

            return (
              <div
                key={`lap-${card.id}`}
                className="hidden lg:block"
                onClick={() =>
                  !isCenter && !isAnimating && Math.abs(card.slot) <= 3 && handleCardClick(card.slot)
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
                  transition: "transform .5s ease, opacity .5s ease",
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
                      ? "drop-shadow(0 5px 15px rgba(0,0,0,0.3))"
                      : "none",
                    transition: "filter .4s ease",
                    userSelect: "none",
                  }}
                />
              </div>
            );
          })}
        </div>


        {/* TITLE */}
        <div className="w-full flex items-center justify-center relative pb-2 md:pb-4 pt-2 md:pt-2 z-20">
          <h1
            className="uppercase text-white text-center font-black"
            style={{
              fontFamily: "var(--font-peakers)",
              fontSize: "clamp(2.5rem, 11vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.05em",
              lineHeight: "1.1",
              textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            {burgers[carousel.center]?.name}
          </h1>
        </div>
      </div>
    </>
  );
}
