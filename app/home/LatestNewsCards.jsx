"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/img%20slide%202.jpeg",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/img%20slide%201.jpeg",
  "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/PEACKERS%20CLIENT/latest%20news%20car%202.png",
];

const N = IMAGES.length;

let globalId = 0;
const makeCard = (imageIndex, slot) => ({
  id: globalId++,
  imageIndex,
  slot,
});

const createInitialCards = (centerIdx) => [
  makeCard((centerIdx - 2 + N * 100) % N, -2),
  makeCard((centerIdx - 1 + N * 100) % N, -1),
  makeCard(centerIdx % N, 0),
  makeCard((centerIdx + 1) % N, 1),
  makeCard((centerIdx + 2) % N, 2),
];

const SLOT_STYLES = {
  [-2]: {
    transform:
      "translate(calc(-50% - 85vw), -50%) rotateY(45deg) scale(0.6)",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
  [-1]: {
    transform:
      "translate(calc(-50% - 28vw), -50%) rotate(-6deg) scale(0.85)",
    opacity: 0.75,
    zIndex: 2,
    filter: "brightness(0.7) blur(2px)",
    cursor: "pointer",
  },
  [0]: {
    transform: "translate(-50%, -50%) rotateY(0deg) scale(1.08)",
    opacity: 1,
    zIndex: 10,
    filter: "brightness(1)",
    cursor: "default",
  },
  [1]: {
    transform:
      "translate(calc(-50% + 28vw), -50%) rotate(6deg) scale(0.85)",
    opacity: 0.75,
    zIndex: 2,
    filter: "brightness(0.7) blur(2px)",
    cursor: "pointer",
  },
  [2]: {
    transform:
      "translate(calc(-50% + 85vw), -50%) rotateY(-45deg) scale(0.6)",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
};

export default function LatestNewsCards() {
  const [cards, setCards] = useState(() => createInitialCards(0));
  const [centerIdx, setCenterIdx] = useState(0);
  const animatingRef = useRef(false);

  const goNext = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const newCenter = (centerIdx + 1) % N;
    const newImageIdx = (newCenter + 2) % N;

    setCards((prev) => {
      const shifted = prev.map((c) => ({ ...c, slot: c.slot - 1 }));
      const filtered = shifted.filter((c) => c.slot >= -2);
      filtered.push(makeCard(newImageIdx, 2));
      return filtered;
    });

    setCenterIdx(newCenter);
    setTimeout(() => (animatingRef.current = false), 750);
  }, [centerIdx]);

  const goPrev = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const newCenter = (centerIdx - 1 + N) % N;
    const newImageIdx = (newCenter - 2 + N * 100) % N;

    setCards((prev) => {
      const shifted = prev.map((c) => ({ ...c, slot: c.slot + 1 }));
      const filtered = shifted.filter((c) => c.slot <= 2);
      filtered.push(makeCard(newImageIdx, -2));
      return filtered;
    });

    setCenterIdx(newCenter);
    setTimeout(() => (animatingRef.current = false), 750);
  }, [centerIdx]);

  // Handler for clicking on side images
  const handleCardClick = (slot) => {
    if (animatingRef.current) return;
    if (slot === -1) {
      goPrev();
    } else if (slot === 1) {
      goNext();
    }
    // No action for center (slot 0) or hidden slots
  };

  return (
    <div className="relative w-full py-[2vw] bg-black overflow-hidden">
      <div
        className="relative w-full"
        style={{
          height: "48vw",
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
      >
        <button
          onClick={goPrev}
          className="absolute left-[4vw] top-1/2 -translate-y-1/2 z-40 w-[60px] h-[60px] bg-black/70 border-[2px] border-white rounded-full flex items-center justify-center"
        >
          <span className="text-white text-3xl font-bold">‹</span>
        </button>

        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "25vw",
              height: "36vw",
              borderRadius: "1.2vw",
              overflow: "hidden",
              transition:
                "transform .75s cubic-bezier(.22,1,.36,1), opacity .5s ease, filter .5s ease",
              ...(SLOT_STYLES[card.slot] || SLOT_STYLES[2]),
            }}
            // Only add onClick for left and right images
            onClick={
              card.slot === -1
                ? () => handleCardClick(-1)
                : card.slot === 1
                ? () => handleCardClick(1)
                : undefined
            }
            // Add role and tabIndex for accessibility if clickable
            role={card.slot === -1 || card.slot === 1 ? "button" : undefined}
            tabIndex={card.slot === -1 || card.slot === 1 ? 0 : undefined}
            aria-label={
              card.slot === -1
                ? "Previous slide"
                : card.slot === 1
                ? "Next slide"
                : undefined
            }
            // Keyboard accessibility for left/right images
            onKeyDown={
              card.slot === -1 || card.slot === 1
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(card.slot);
                    }
                  }
                : undefined
            }
            style={{
              ...((SLOT_STYLES[card.slot]) || SLOT_STYLES[2]),
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "25vw",
              height: "36vw",
              borderRadius: "1.2vw",
              overflow: "hidden",
              transition:
                "transform .75s cubic-bezier(.22,1,.36,1), opacity .5s ease, filter .5s ease",
              cursor:
                card.slot === -1 || card.slot === 1
                  ? "pointer"
                  : (SLOT_STYLES[card.slot]?.cursor || "default"),
            }}
          >
            <Image
              src={IMAGES[card.imageIndex]}
              alt="slide"
              fill
              sizes="(max-width:768px)100vw,33vw"
              className="object-cover"
            />
          </div>
        ))}

        <button
          onClick={goNext}
          className="absolute right-[4vw] top-1/2 -translate-y-1/2 z-40 w-[60px] h-[60px] bg-black/70 border-[2px] border-white rounded-full flex items-center justify-center"
        >
          <span className="text-white text-3xl font-bold">›</span>
        </button>
      </div>
    </div>
  );
}