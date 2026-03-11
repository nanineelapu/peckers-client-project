"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/menu" || pathname === "/house-made-sauces" || pathname.startsWith("/studio")) return null;
  return <Footer />;
}
