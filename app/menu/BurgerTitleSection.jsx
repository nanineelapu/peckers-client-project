"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function BurgerTitleSection({
  title = "OG BURGER",
  onPrev,
  onNext,
}) {
  return (
    <div className="w-full flex items-center justify-center relative" style={{ minHeight: "2.8em" }}>
      <button
        aria-label="Previous"
        onClick={onPrev}
        className="absolute left-0 flex items-center justify-center bg-transparent hover:scale-110 transition-all p-0 px-17"
        tabIndex={0}
        style={{ minHeight: 42, minWidth: 42, top: "50%", transform: "translateY(-50%)" }}
      >
        <FiChevronLeft className="text-[#888]" size={37} />
      </button>

      <h1
        className="font-peakers font-bold uppercase text-white text-[4vw] tracking-normal md:text-[4rem] drop-shadow pt-0 flex-1 text-center"
        style={{
          letterSpacing: "0.0vw",
          fontSize: "7vw",
          zIndex: 1,
          margin: 0,
        }}
      >
        {title}
      </h1>

      <button
        aria-label="Next"
        onClick={onNext}
        className="absolute right-0 flex items-center justify-center bg-transparent hover:scale-110 transition-all p-0 px-17"
        tabIndex={0}
        style={{ minHeight: 42, minWidth: 42, top: "50%", transform: "translateY(-50%)" }}
      >
        <FiChevronRight className="text-[#888]" size={38} />
      </button>
    </div>
  );
}