"use client";

import React from "react";

const timelineData = [
    {
        year: "1978",
        title: "GRANDAD'S OFF-LICENSE STORE",
        description: "Where the passion for quality produce began. The original inspiration.",
        highlight: true,
    },
    {
        year: "2002",
        title: "WALKERN BUDGENS",
        description: "Taking the next step. A new chapter serving the local community.",
        borderStyle: "border-solid border-zinc-800",
    },
    {
        year: "OCT 2019",
        title: "STORE RENOVATION",
        description: "A fresh new look for Walkern Budgens. Modern space, same community heart.",
        borderStyle: "border-solid border-zinc-800",
    },
    {
        year: "MARCH 2020",
        title: "COMMUNITY FIRST",
        description: "During COVID-19, we stepped up — supporting locals when it mattered most.",
        highlight: true,
    },
    {
        year: "APR 2022 & OCT 2022",
        title: "HITCHIN & STEWALTON & MEPPERSHALL ENAGE",
        description: "Two new locations. Small footprint, big impact.",
        borderStyle: "border-solid border-zinc-800",
    },
    {
        year: "2025",
        title: "PECKERS IS BORN",
        description: "Back where it started. Peckers opens in the same spot as Grandad's original store.",
        borderStyle: "border-dashed border-zinc-700",
    }
];

const ArrowLeftToRight = () => (
    <div className="w-full h-[60px] flex justify-center -my-2 opacity-60 z-0">
        <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 80 0 C 80 40, 220 40, 220 70" stroke="#71717a" strokeWidth="2" strokeDasharray="4 4" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 214 62 L 220 74 L 226 62" fill="none" stroke="#71717a" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
    </div>
);

const ArrowRightToLeft = () => (
    <div className="w-full h-[60px] flex justify-center -my-2 opacity-60 z-0">
        <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 220 0 C 220 40, 80 40, 80 70" stroke="#71717a" strokeWidth="2" strokeDasharray="4 4" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 74 62 L 80 74 L 86 62" fill="none" stroke="#71717a" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
    </div>
);

import { motion } from 'framer-motion';

export default function MobileRoadmap() {
    return (
        <section className="block md:hidden w-full bg-black text-white px-[4vw] pt-[10vw] pb-[20vw] overflow-hidden">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center w-full mb-[8vw]"
            >
                <h2 className="text-[7.5vw] text-center font-bold leading-none font-peakers px-[1vw] tracking-wide mb-[2vw]">
                    A LEGACY THAT CAME FULL CIRCLE
                </h2>
                <span className="text-white/60 tracking-widest font-sans text-[4vw]">
                    EST. 1978
                </span>
                <div className="w-full h-[1px] bg-[#1F2937] mt-[6vw]"></div>
            </motion.div>

            {/* Timeline container */}
            <div className="flex flex-col w-full relative">
                {timelineData.map((item, index) => {
                    const isRight = index % 2 === 1; // 0=Left, 1=Right, 2=Left, 3=Right...
                    return (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className={`w-full flex ${isRight ? 'justify-end' : 'justify-start'} z-10`}
                            >
                                <div
                                    style={item.highlight ? { boxShadow: "0 0 15px rgba(234,179,8,0.6)" } : {}}
                                    className={`relative px-[5vw] py-[6vw] rounded-[4vw] flex flex-col items-center text-center w-[65vw]
                                        ${item.highlight
                                            ? "bg-[#121212] border border-yellow-500/60"
                                            : `bg-[#0a0a0a] border ${item.borderStyle || "border-zinc-800"}`
                                        }`}
                                >
                                    <span
                                        className={`text-[4.5vw] font-bold mb-[2vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"}`}
                                        style={{ fontFamily: "Space Mono", color: "white" }}
                                    >
                                        {item.year}
                                    </span>
                                    <h3 className="text-[4.5vw] font-peakers mb-[2vw] leading-none">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-500 font-peakers text-[3.5vw] leading-tight font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Insert appropriate arrow */}
                            {index < timelineData.length - 1 && (
                                isRight ? <ArrowRightToLeft /> : <ArrowLeftToRight />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Bottom Divider */}
            <div className="w-full flex justify-center mt-[10vw]">
                <div className="w-full h-[1px] bg-[#1F2937]"></div>
            </div>

        </section>
    );
}
