"use client";

import React from "react";

const timelineData = [
    {
        year: "APR 2022 & OCT 2022",
        title: "HITCHIN & STEVWALTON & MEPPERSHALL ENAGE",
        description:
            "Two new locations. Small footprint, big impact.",
        borderStyle: "border border-zinc-700",
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
        <div className="bg-black text-white flex justify-center mt-[13vw] py-[4vw] font-peckers">
            <div className="w-full max-w-[88vw] relative">

                {/* Cards */}
                <div className="flex bg-[121212] justify-between gap-[9vw] h-[4vw] items-center mb-[8vw]">
                    {timelineData.map((item, index) => {

                        const alignment =
                            index === 0
                                ? "items-end text-right"
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-start text-left";
                        const offset = index === 1 ? "-mt-[-6vw]" : "";


                        return (
                            <div
                                key={index}
                                style={
                                    item.highlight
                                        ? { boxShadow: "0 0 15px rgba(234,179,8,0.6)" }
                                        : {}
                                }
                                className={`relative px-[1vw] py-[1vw] rounded-[1vw] flex flex-col ${alignment} ${offset} w-[17vw] h-[12vw]
  ${item.highlight
                                        ? "bg-[#121212] border border-yellow-500/60"
                                        : `bg-[#0a0a0a] border ${item.borderStyle || "border-zinc-800"}`
                                    }`}
                            >
                                <span
                                    className={`text-[1.65vw] text-[#ffff] font-bold mb-[1.5vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{
                                        fontFamily: "Space Mono",
                                        color: "#ffff",
                                        ...(index === 0 ? { marginBottom: ".2vw" } : {})
                                    }}

                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[1.4vw] font-peakers mb-[1vw] leading-none">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-500 font-peakers text-[0.85vw] leading-none font-medium"
                                    style={index === 1 ? { fontSize: ".9vw" } : {}}>

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