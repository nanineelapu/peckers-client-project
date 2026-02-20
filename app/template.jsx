"use client";

import { useEffect } from "react";
import { animatePageIn } from "./animation";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div id="preloader" className="fixed inset-0 z-[999] flex">
        <div id="banner-1" className="w-1/4 h-screen bg-neutral-950"></div>
        <div id="banner-2" className="w-1/4 h-screen bg-neutral-900"></div>
        <div id="banner-3" className="w-1/4 h-screen bg-neutral-800"></div>
        <div id="banner-4" className="w-1/4 h-screen bg-neutral-700"></div>
      </div>

      {children}
    </>
  );
}
