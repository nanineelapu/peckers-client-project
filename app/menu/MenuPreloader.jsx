"use client";

import { useState, useEffect } from "react";

export default function MenuPreloader({ images, onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!images?.length) {
      setLoading(false);
      onComplete?.();
      return;
    }

    let loaded = 0;
    const total = images.length;

    const updateProgress = () => {
      loaded += 1;
      setProgress((loaded / total) * 100);
      if (loaded === total) {
        setTimeout(() => {
          setLoading(false);
          onComplete?.();
        }, 300);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });
  }, [images, onComplete]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div
        style={{
          width: "clamp(60px, 10vw, 80px)",
          height: "clamp(60px, 10vw, 80px)",
          borderRadius: "50%",
          background: "#e8b800",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      />
      <div
        style={{
          color: "#e8b800",
          fontFamily: "var(--font-peakers), sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          letterSpacing: "0.1em",
          fontWeight: 900,
          textTransform: "uppercase",
        }}
      >
        Loading Menu
      </div>
      <div
        style={{
          width: "clamp(120px, 20vw, 200px)",
          height: "4px",
          background: "#333",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#e8b800",
            transition: "width 0.3s ease",
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
