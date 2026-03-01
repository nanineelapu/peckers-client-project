"use client";
import React, { useState } from "react";

const saucesData = [
    {
        id: 1,
        title: "Spicy Buffalo",
        descLine1: "Tomato base slow-simmered with smoked spices and finished with",
        descLine2: "pure honey.",
        descLine3: "Less preservatives and additives then the big boys",
        bgUrl: "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Sauce1%20page%201.webp",
        sauceUrl: "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/sauce/sac%201.webp"
    },
    {
        id: 2,
        title: "HONEY GLAZE BBQ",
        descLine1: "Sweet and sticky blend of honey and smoke",
        descLine2: "perfectly balanced for all your BBQ needs.",
        descLine3: "Made with authentic ingredients",
        bgUrl: "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/sauce/Sauce2.webp", // Replace with real image later
        sauceUrl: "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/sauce/sac%202.webp" // Replace with real image later
    }
];

const SaucePageOne = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % saucesData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? saucesData.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full overflow-hidden bg-black flex flex-col items-center">

            <div
                className="flex w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {saucesData.map((sauce, idx) => (
                    <div key={sauce.id} className="w-full shrink-0 relative overflow-hidden flex flex-col items-center pb-[30vw] md:pb-[20vw] bg-black">
                        {/* Background Image */}
                        <img
                            src={sauce.bgUrl}
                            alt={`${sauce.title} Background`}
                            className="w-full h-auto block"
                        />

                        {/* Text Overlay */}
                        <div className="absolute top-[11%] md:top-[4%] left-1/2 -translate-x-1/2 text-center text-white w-[90%] md:w-[70%] lg:w-[50%] z-20">
                            <h1
                                className="text-4xl sm:text-5xl md:text-[5vw] font-bold tracking-wide mb-2 md:mb-[1vw]"
                                style={{ fontFamily: 'var(--font-peakers)' }}
                            >
                                {sauce.title}
                            </h1>

                            <div className="text-[10px] py-[2vw] font-light md:text-sm lg:text-[1.3vw] font-['Inconsolata'] leading-[1.3vw] tracking-wider space-y-1 md:space-y-[0.5vw]">
                                <p>
                                    {sauce.descLine1}<br />
                                    {sauce.descLine2}
                                </p>
                                <p>{sauce.descLine3}</p>
                                <p className="font-bold pt-2 md:pt-[0.5vw]">MADE FRESHLY DAILY</p>
                            </div>
                        </div>

                        {/* Circular Carousel Element placed absolutely at the bottom */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-15vw] md:bottom-[-7vw] w-[85vw] h-[85vw] md:w-[65vw] md:h-[65vw] flex items-center justify-center z-10 pointer-events-none">

                            {/* Rotating Circular Text SVG */}
                            <div
                                className="absolute inset-0 w-full h-full animate-spin"
                                style={{ animationDuration: "60s" }}
                            >
                                <svg viewBox="0 0 1000 1000" className="w-full h-full overflow-visible">
                                    {/* Define a circular path for the text to follow. R=450 */}
                                    <path id={`sauce-text-path-${idx}`} d="M 500, 500 m -450, 0 a 450,450 0 1,1 900,0 a 450,450 0 1,1 -900,0" fill="transparent" />

                                    <text className="fill-white font-bold text-[24px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-peakers)' }}>
                                        <textPath href={`#sauce-text-path-${idx}`} startOffset="0%" textLength="2810" lengthAdjust="spacingAndGlyphs">
                                            HONEY GLAZE BBQ SAUCE • HOT HONEY SAUCE • KATSU CURRY SAUCE • KOREAN GOCHUJANG SAUCE • PEANUT SWEET CHILLI SAUCE • SUPER CHARGE OG SAUCE • BUFFALO SAUCE • GARLIC MAYONNAISE (FAMILY RECIPE) • BUTTER ME UP SAUCE •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Inner Static White Circle and Dot */}
                            <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                                <circle cx="500" cy="500" r="410" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                                <circle cx="500" cy="90" r="8" fill="white" />
                            </svg>

                            {/* Center Product Image */}
                            <img
                                src={sauce.sauceUrl}
                                alt={sauce.title}
                                className="absolute w-[80%] h-[80%] object-cover object-center rounded-full z-10 select-none pointer-events-auto"
                                style={{ filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.95))" }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Arrows */}
            <div className="absolute bottom-[20%] md:bottom-[50%] xl:bottom-[50%] w-[90%] md:w-[80%] left-1/2 -translate-x-1/2 flex justify-between items-center z-20 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-[3vw] md:h-[3vw] rounded-full border border-white/50 flex flex-col items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all pointer-events-auto backdrop-blur-sm group"
                >
                    <svg width="20" height="20" className="md:w-[1.2vw] md:h-[1.2vw] group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-[3vw] md:h-[3vw] rounded-full border border-white/50 flex flex-col items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all pointer-events-auto backdrop-blur-sm group"
                >
                    <svg width="20" height="20" className="md:w-[1.2vw] md:h-[1.2vw] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

export default SaucePageOne;