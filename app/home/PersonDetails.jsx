import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PersonDetails() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !leftRef.current || !rightRef.current || !containerRef.current) return;

    // Animate left in from the left, and right from the right, with smoothness, on scroll in
    let leftTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    let rightTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    // LEFT block animates in from the left
    gsap.set(leftRef.current, { opacity: 0, x: -80 });
    leftTimeline.to(leftRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
    });

    // RIGHT block animates in from the right (with small delay)
    gsap.set(rightRef.current, { opacity: 0, x: 80 });
    rightTimeline.to(rightRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.15,
    });

    return () => {
      leftTimeline.kill();
      rightTimeline.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-row items-stretch justify-center mt-[8vw] gap-[2vw]"
    >
      {/* Left: Person Image */}
      <div ref={leftRef} className="flex-shrink-0">
        <div
          className="w-[40vw] h-[35vw] rounded-[.7vw] overflow-hidden bg-[#222]"
          style={{ boxShadow: "0 2px 16px #0007" }}
        >
          {/* Add your image src below */}
          <img
            src="https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/Bleecker-BF25-POST-670x840.jpg%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvQmxlZWNrZXItQkYyNS1QT1NULTY3MHg4NDAuanBnICgxKS5wbmciLCJpYXQiOjE3NzE0NDM2MzksImV4cCI6MTgwMjk3OTYzOX0.W-IeqLybb6tea9Be-Aynr-IV69wPqs9IjiPz6oPLtDo"
            alt="Profile"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Right: Person Details */}
      <div
        ref={rightRef}
        className="flex flex-col justify-center bg-black px-[3vw] py-[1vw] min-h-[25vw] shadow-xl max-w-[40vw]"
      >
        <h2 className="grid text-white font-['Share_Tech'] font-bold text-[4.5vw] leading-tight mb-[1vw]" style={{ letterSpacing: "0.01em" }}>
          FOR THE LOVE OF <span className="text-[#ffff]">CHICKEN</span>
        </h2>
        <div className="text-white font-light text-[1.3vw] tracking-[1.2] font-sans mb-[1vw]" style={{ lineHeight: "2vw" }}>
          Peckers started with a dream: to make wings that didn’t suck. We were tired of dry, sad chicken.
          <br />
          So we locked ourselves in a garage with 51lbs of peppers and didn’t come out until we made magic.
        </div>
        <br />
        <div
          className="italic font-mono text-[#ffff] text-[1.3vw] mb-[1.6vw] pl-[1.3vw] border-l-2"
          style={{
            fontFamily: "",
            borderColor: "#ffe066",
            letterSpacing: "0.025em",
          }}
        >
          "We're not chefs. We're flavor engineers with a disregard for sodium limits."
        </div>
        <a
          href="#"
          className="group flex items-center gap-[1.3vw] text-white font-sans text-[1.3vw] tracking-[0.30em] font-extralight px-0 pb-2"
          style={{ width: "fit-content", letterSpacing: "0.08em" }}
        >
          <span className="block">READ MORE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2vw"
            height="2vw"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block transition-transform duration-150 group-hover:translate-x-1"
            style={{ minWidth: "27px", minHeight: "27px" }}
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
          <span
            className="absolute left-0 bottom-0 w-full h-[2.2px] block transition-all duration-150"
            style={{
              content: '""',
              marginTop: "1vw",
              borderRadius: "2px",
              minWidth: "118px",
              opacity: 1,
            }}
          ></span>
        </a>
        <div
          className="bg-[#fff] mt-[0vw] mb-[1.8vw]"
          style={{
            width: "35%",
            maxWidth: "140px",
            height: "2px",
            border: "none",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}