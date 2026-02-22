"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RoutePreloader({ enabled = true }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const prevPathRef = useRef(pathname);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const onClick = (e) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (anchor.getAttribute("target") === "_blank") return;
      if (anchor.hasAttribute("download")) return;

      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      } catch {
        return;
      }

      setActive(true);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const prev = prevPathRef.current;
    if (pathname !== prev) {
      prevPathRef.current = pathname;

      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        setActive(false);
        hideTimeoutRef.current = null;
      }, 220);
    }

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden={!active}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        opacity: active ? 1 : 0,
        pointerEvents: active ? "all" : "none",
        transition: "opacity 220ms ease",
        zIndex: 9998,
      }}
    />
  );
}
