"use client";

import React from "react";

const timelineData = [
    {
        year: "APR 2022 & OCT 2022",
        title: "Hitchin & StevWALTON & MEPPERSHALL enage",
        description:
            "Back where it started. Peckers opens in the same spot as Grandad's original store.",
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
        <div className="bg-black text-white flex justify-center mt-[12vw] py-[5vw] font-peckers">
            <div className="w-full max-w-[90vw] relative">

                {/* Cards */}
                <div className="flex justify-between px-[2vw] gap-[1vw] h-[4vw] items-center mb-[8vw]">
                    {timelineData.map((item, index) => {

                        const alignment =
                            index === 0
                                ? "items-end text-right "
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-start text-left";
                        const offset = index === 1 ? "-mb-[3vw]" : "";


                        return (
                            <div
                                key={index}
                                style={
                                    item.highlight
                                        ? { boxShadow: "0 0 15px rgba(234,179,8,0.6)" }
                                        : {}
                                }
                                className={`relative px-[1vw] py-[1vw] rounded-[1vw] flex flex-col ${alignment} ${offset} w-[17vw] h-[12vw]
  bg-[#121212] ${item.highlight
                                        ? "border border-yellow-500/70"
                                        : `border ${item.borderStyle || "border-zinc-800"}`
                                    }`}
                            >
                                <span
                                    className={`text-[1.65vw]  font-bold mb-[1.5vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{ fontFamily: "Space Mono", color:"#ffff" }}
                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[1.5vw] font-peakers mb-[1vw] leading-none">
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