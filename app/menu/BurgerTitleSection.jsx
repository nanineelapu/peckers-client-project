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
      zIndex: 0, // Ensure it stays behind the burger images
      width: "clamp(350px, 50vw, 760px)",
      height: "clamp(350px, 50vw, 760px)",
    }}
    aria-hidden="true"
    focusable="false"
  >
    <g opacity="0.6" filter="url(#filter0_f_96_6927)">
      <rect
        x="10.25"
        y="10.25"
        width="754.60"
        height="754.60"
        rx="377.30"
        fill="url(#paint0_radial_96_6927)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_96_6927"
        x="0"
        y="0"
        width="775.101"
        height="775.101"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="shape" in="SourceGraphic" />
        <feGaussianBlur stdDeviation="9.12482" result="effect1_foregroundBlur_96_6927" />
      </filter>
      <radialGradient
        id="paint0_radial_96_6927"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(387.551 387.551) scale(572.163)"
      >
        <stop stopColor="white" stopOpacity="0.7" />
        <stop offset="0.7" stopColor="#5F5F5F" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const BURGERS = [
  {
    name: "OG BURGER",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20Image%201.png",
    boost: 1,
  },
  {
    name: "BBQ CLASSIC",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20Imaeg%202%20BBQ.png",
    boost: 1,
  },
  {
    name: "HOT BURGER",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20REd-Picsart-AiImageEnhancer%20Final.png",
    boost: 1.15,
  },
  {
    name: "NORMAL CHEESE",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20lit%20yellow%20Finalone-Picsart-AiImageEnhancer%20(1).png",
    boost: 1.25,
  },
  {
    name: "MORE CHEESE",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20Final%20more%20cheese%20one-Picsart-AiImageEnhancer%20(1).png",
    boost: 1.25,
  },
];

const TOTAL = BURGERS.length;

let globalId = 0;
const makeCard = (index, slot) => ({
  id: globalId++,
  index,
  slot,
});

const createInitialCards = (center) => [
  makeCard((center - 3 + TOTAL * 100) % TOTAL, -3),
  makeCard((center - 2 + TOTAL * 100) % TOTAL, -2),
  makeCard((center - 1 + TOTAL * 100) % TOTAL, -1),
  makeCard(center % TOTAL, 0),
  makeCard((center + 1) % TOTAL, 1),
  makeCard((center + 2) % TOTAL, 2),
  makeCard((center + 3) % TOTAL, 3),
];

const POS = {
  [-3]: { x: -58, y: -120, scale: 0.07, opacity: 0, z: 0 },
  [-2]: { x: -42, y: -90, scale: 0.25, opacity: 0.65, z: 1 },
  [-1]: { x: -27, y: -48, scale: 0.43, opacity: 0.85, z: 2 },
  [0]: { x: 0, y: 0, scale: 1, opacity: 1, z: 5 },
  [1]: { x: 27, y: -48, scale: 0.43, opacity: 0.85, z: 2 },
  [2]: { x: 42, y: -90, scale: 0.25, opacity: 0.65, z: 1 },
  [3]: { x: 58, y: -120, scale: 0.07, opacity: 0, z: 0 },
};

export default function BurgerCarouselFinal() {
  const [cards, setCards] = useState(() => createInitialCards(0));
  const [center, setCenter] = useState(0);
  const animatingRef = useRef(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const goNext = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const newCenter = (center + 1) % TOTAL;
    const newIndex = (newCenter + 3) % TOTAL;

    setCards((prev) => {
      const shifted = prev.map((c) => ({ ...c, slot: c.slot - 1 }));
      const filtered = shifted.filter((c) => c.slot >= -3);
      filtered.push(makeCard(newIndex, 3));
      return filtered;
    });

    setCenter(newCenter);
    setTimeout(() => (animatingRef.current = false), 650);
  }, [center]);

  const goPrev = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const newCenter = (center - 1 + TOTAL) % TOTAL;
    const newIndex = (newCenter - 3 + TOTAL * 100) % TOTAL;

    setCards((prev) => {
      const shifted = prev.map((c) => ({ ...c, slot: c.slot + 1 }));
      const filtered = shifted.filter((c) => c.slot <= 3);
      filtered.push(makeCard(newIndex, -3));
      return filtered;
    });

    setCenter(newCenter);
    setTimeout(() => (animatingRef.current = false), 650);
  }, [center]);

  return (
    <>
      <MenuPreloader
        images={BURGERS.map((b) => b.image)}
        onComplete={() => setPreloaderDone(true)}
      />
      <div
        className="relative w-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(ellipse 50% 52% at 50% 38%, #3d2900 0%, #1e1200 26%, #090909 58%, #000 100%)",
          opacity: preloaderDone ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <div>
          <nav className="subnavbar" style={{ paddingTop: "1.5vw", color: "white" }}>
            <div
              className="flex font-['Share_Tech'] gap-[3.4vw] justify-center items-center"
              style={{ fontFamily: "var(--font-peakers)" }}
            >
              <a
                href="#"
                className="whitespace-nowrap font-sharetech text-[1.3vw] border-b-2 border-red-500 pb-1"
              >
                BURGERS
              </a>
              <a href="#" className="whitespace-nowrap text-[1.4vw] pb-2">
                WRAPS
              </a>
              <a href="#" className="whitespace-nowrap text-[1.4vw] pb-2">
                RICE BOWLS
              </a>
              <a href="#" className="whitespace-nowrap text-[1.4vw] pb-2">
                WINGS AND TENDERS
              </a>
              <a href="#" className="whitespace-nowrap text-[1.4vw] pb-2">
                GRIILLED
              </a>
              <a href="#" className="whitespace-nowrap text-[1.4vw] pb-2">
                MEAL BOX
              </a>
            </div>
          </nav>
        </div>
        {/* BURGER STAGE */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 54vw, 560px)" }}
        >
          {/* SVG Drop Shadow positioned absolutely, centered */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -33%)", // a bit higher than 50% to match beneath burgers
              zIndex: 1, // behind images, above background
              pointerEvents: "none",
              width: "clamp(430px, 62vw, 880px)",
              height: "clamp(430px, 62vw, 880px)",
            }}
            aria-hidden="true"
          >
            <DropShadowSVG />
          </div>
          {cards.map((card) => {
            const cfg = POS[card.slot] || POS[3];
            const burger = BURGERS[card.index];
            const isCenter = card.slot === 0;

            return (
              <div
                key={card.id}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `
                    translate(calc(-50% + ${cfg.x}vw), calc(-50% + ${cfg.y}px))
                    scale(${cfg.scale * burger.boost})
                  `,
                  opacity: cfg.opacity,
                  zIndex: cfg.z,
                  transition:
                    "transform .65s cubic-bezier(.22,1,.36,1), opacity .5s ease",
                  pointerEvents: "none",
                }}
              >
                <img
                  src={burger.image}
                  alt={burger.name}
                  draggable={false}
                  style={{
                    width: "clamp(270px, 40vw, 520px)",
                    display: "block",
                    filter: isCenter
                      ? "drop-shadow(0 30px 80px rgba(0,0,0,0.6))"
                      : "none",
                    transition: "filter .4s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* TITLE + ARROWS */}
        <div className="w-full flex items-center justify-center relative pb-4">
          <button onClick={goPrev} className="absolute left-0 px-[4vw]">
            <FiChevronLeft size={38} color="#888" />
          </button>

          <h1
            className="uppercase text-white text-center"
            style={{
              fontFamily: "var(--font-peakers)",
              fontSize: "clamp(2.2rem, 7.5vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.04em",
            }}
          >
            {BURGERS[center].name}
          </h1>

          <button onClick={goNext} className="absolute right-0 px-[4vw]">
            <FiChevronRight size={38} color="#888" />
          </button>
        </div>

        {/* SLIDING INDICATOR */}
        <div className="flex gap-3 mt-4">
          {BURGERS.map((_, i) => (
            <div
              key={i}
              style={{
                height: "6px",
                width: i === center ? "36px" : "10px",
                background: i === center ? "#e8b800" : "#333",
                borderRadius: "999px",
                transition: "all .4s cubic-bezier(.22,1,.36,1)",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}