"use client";

import { useState } from "react";
import Preloader from "./components/Preloader";
import SmoothScroll from "./SmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientWrapper({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && (
        <Preloader
          onComplete={() => {
            setLoadingDone(true);
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 50);
          }}
        />
      )}

      <SmoothScroll>
        <div id="main-content">
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}