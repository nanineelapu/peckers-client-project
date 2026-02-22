"use client";

import { useState, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BURGERS = [
  {
    name: "HOT BURGER",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20imaeg%20hot.png",
  },
  {
    name: "NORMAL CHEESE",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20imaeg%20normal%20cheese.png",
  },
  {
    name: "MORE CHEESE",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20image%20more%20cheese.png",
  },
  {
    name: "OG BURGER",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20Image%201.png",
  },
  {
    name: "BBQ CLASSIC",
    image:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/Burger%20Imaeg%202%20BBQ.png",
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
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 50% 52% at 50% 38%, #3d2900 0%, #1e1200 26%, #090909 58%, #000 100%)",
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(320px, 54vw, 560px)" }}
      >
        {cards.map((card) => {
          const cfg = POS[card.slot] || POS[3];
          const burger = BURGERS[card.index];

          return (
            <div
              key={card.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `
                  translate(calc(-50% + ${cfg.x}vw), calc(-50% + ${cfg.y}px))
                  scale(${cfg.scale})
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
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-center relative pb-8">
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
    </div>
  );
}