"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const newsImages = [
  {
    left: "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Group%206%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvR3JvdXAgNiAoMSkucG5nIiwiaWF0IjoxNzcxNTM0MjAxLCJleHAiOjE4MDMwNzAyMDF9.GDIRcNSnqhbwvs3ndg5NIvZD74xmPHCT3TuagHIKZfI",
    center:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/img%20sec%203%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvaW1nIHNlYyAzIDIuanBnIiwiaWF0IjoxNzcxNTM0Mjg5LCJleHAiOjE4MDMwNzAyODl9.-WaXJ0zx-NO7Fm1ESd3m3iNG7arDXGiRSA2o37D8lME",
    right:
      "https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Group%206.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvR3JvdXAgNi5wbmciLCJpYXQiOjE3NzE1MzQxNDksImV4cCI6MTgwMzA3MDE0OX0.SXuSK6BjGKIh-5cXXXYFDSpNnXYHGWml0vzbXFcomTw",
  },
  {
    left: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    center:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    right:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
];

export default function LatestNewsCards() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Scope all GSAP / ScrollTrigger work to this component only
    const ctx = gsap.context(() => {
      const cards = [
        { ref: leftCardRef, delay: 0.12 },
        { ref: centerCardRef, delay: 0.18 },
        { ref: rightCardRef, delay: 0.24 },
      ];

      cards.forEach(({ ref, delay }) => {
        if (!ref.current) return;

        gsap.set(ref.current, { opacity: 0, scale: 0.92, y: 40 });
        const animation = gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          overwrite: "auto",
          onComplete: () => {
            // Remove willChange after animation completes
            if (ref.current) {
              ref.current.style.willChange = "auto";
            }
          },
        });
      });
    }, containerRef);

    return () => {
      // Revert only this component's animations/triggers
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    // Debounce ScrollTrigger refresh to prevent excessive calls
    const refreshTimeout = setTimeout(() => {
      if (typeof ScrollTrigger !== "undefined" && ScrollTrigger.refresh) {
        ScrollTrigger.refresh();
      }
    }, 500); // Increased delay for better performance

    return () => clearTimeout(refreshTimeout);
  }, [index]);
  const slideAnimation = (direction) => {
    // Prevent rapid clicking
    if (containerRef.current?.style.pointerEvents === "none") return;
    
    // Disable pointer events during animation
    if (containerRef.current) {
      containerRef.current.style.pointerEvents = "none";
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Re-enable pointer events
        if (containerRef.current) {
          containerRef.current.style.pointerEvents = "auto";
        }
        tl.kill();
      },
    });

    tl.to(containerRef.current, {
      x: direction === "next" ? -100 : 100,
      opacity: 0,
      duration: 0.22,
      ease: "power3.inOut",
    })
      .add(() => {
        setIndex((prev) => {
          if (direction === "next") {
            return (prev + 1) % newsImages.length;
          } else {
            return (prev - 1 + newsImages.length) % newsImages.length;
          }
        });
      })
      .set(containerRef.current, {
        x: direction === "next" ? 100 : -100,
      })
      .to(containerRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.28,
        ease: "power3.out",
      });
  };

  const current = newsImages[index];

  return (
    <div className="relative w-full flex justify-center items-center px-[3vw] py-[3vw]">
      {/* LEFT ARROW */}
      <button
        onClick={() => slideAnimation("prev")}
        className="absolute left-[1vw] top-1/2 -translate-y-1/2 z-20 bg-[#222] rounded-full w-[44px] h-[44px] border border-white flex items-center justify-center text-white text-2xl"
        aria-label="Previous News"
        type="button"
      >
        ←
      </button>

      {/* CARDS CONTAINER (animated as a group) */}
      <div
        ref={containerRef}
        className="flex flex-row justify-center items-center gap-[2vw]"
        style={{ minHeight: "34vw" }}
      >
        {/* LEFT CARD */}
        <div
          ref={leftCardRef}
          className="w-[19vw] h-[27vw] rounded-[1vw] overflow-hidden"
          style={{ transform: "rotate(-2deg)" }}
        >
          <img
            src={current.left}
            className="w-full h-full object-cover bg-gray-200"
            alt="news-left"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* CENTER CARD (MAIN FOCUS) */}
        <div
          ref={centerCardRef}
          className="w-[24vw] h-[34vw] rounded-[1vw] overflow-hidden shadow-2xl relative z-10"
        >
          <img
            src={current.center}
            className="w-full h-full object-cover scale-[1.08] bg-gray-200"
            alt="news-center"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* RIGHT CARD */}
        <div
          ref={rightCardRef}
          className="w-[19vw] h-[27vw] rounded-[1vw] overflow-hidden"
          style={{ transform: "rotate(3deg)" }}
        >
          <img
            src={current.right}
            className="w-full h-full object-cover bg-gray-200"
            alt="news-right"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() => slideAnimation("next")}
        className="absolute right-[1vw] top-1/2 -translate-y-1/2 z-20 bg-[#222] rounded-full w-[44px] h-[44px] border border-white flex items-center justify-center text-white text-2xl"
        aria-label="Next News"
        type="button"
      >
        →
      </button>
    </div>
  );
}
