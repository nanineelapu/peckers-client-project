"use client";

import React from "react";

const timelineData = [
    {
        year: "APR 2022 & OCT 2022",
        title: "HITCHIN & STEWALTON & MEPPERSHALL ENAGE",
        description:
            "Two new locations. Small footprint, big impact.",
        borderStyle: "border-solid border-zinc-800",
    },
    {
        year: "MARCH 2020",
        title: "COMMUNITY FIRST",
        description:
            "During COVID-19, we stepped up — supporting locals when it mattered most.",
        highlight: true,
    },
    {
        year: "OCT 2019",
        title: "STORE RENOVATION",
        description:
            "A fresh new look for Walkern Budgens. Modern space, same community heart.",
        borderStyle: "border-solid border-zinc-800",
    },
];

export default function PeckersTimeline2() {

    return (
        <div className="bg-black text-white flex justify-center mt-[24vw] md:mt-[16vw] py-[8vw] md:py-[4vw] font-peckers">
            <div className="w-full max-w-[90vw] relative">

                {/* Cards */}
                <div className="flex flex-col md:flex-row justify-between gap-[8vw] h-auto md:h-[4vw] items-center leading-7 mb-[8vw]">
                    {timelineData.map((item, index) => {

                        const alignment =
                            index === 0
                                ? "items-center text-center md:items-end md:text-right"
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-center text-center md:items-start md:text-left";
                        const offset = index === 1 ? "mt-0 md:-mt-[-4vw]" : "";


                        return (
                            <div
                                key={index}
                                style={
                                    item.highlight
                                        ? { boxShadow: "0 0 15px rgba(234,179,8,0.6)" }
                                        : {}
                                }
                                className={`relative px-[8vw] md:px-[1vw] py-[8vw] md:py-[1vw] rounded-[4vw] md:rounded-[1vw] flex flex-col ${alignment} ${offset} w-[80vw] md:w-[17vw] h-auto md:h-[12vw]
  ${item.highlight
                                        ? "bg-[#121212] border border-yellow-500/60"
                                        : `bg-[#0a0a0a] border ${item.borderStyle || "border-zinc-800"}`
                                    }`}
                            >
                                <span
                                    className={`text-[5vw] md:text-[1.65vw] text-white font-bold mb-[3vw] md:mb-[1.5vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{ fontFamily: "Space Mono", color: "white" }}
                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[5vw] md:text-[1.5vw] font-peakers mb-[2vw] md:mb-[1vw] leading-none">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-500 font-peakers text-[3vw] md:text-[0.85vw] leading-none font-medium"
                                    style={index === 1 ? { fontFamily: "", fontSize: "", md: { fontSize: ".9vw" } } : {}}>

                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>



            </div>

        </div>
    );
}