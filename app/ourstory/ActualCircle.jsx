

import React from "react";

const timelineData = [
    {
        year: "2025",
        title: "PECKERS IS BORN",
        description:
            "Back where it started. Peckers opens in the same spot as Grandad's original store.",
        borderStyle: "border-dashed border-zinc-700",
    },
    {
        year: "1978",
        title: "GRANDAD'S OFF-LICENSE STORE",
        description:
            "Where the passion for quality produce began. The original inspiration.",
        highlight: true,
    },
    {
        year: "2002",
        title: "WALKERN BUDGENS",
        description:
            "Taking the next step. A new chapter serving the local community.",
        borderStyle: "border-solid border-zinc-800",
    },
];

export default function PeckersTimeline() {

    return (
        <div className="bg-black text-white flex justify-center py-[4vw] font-peckers">
            <div className="w-full max-w-[90vw] relative">

                {/* Cards */}
                <div className="flex bg-black justify-between gap-[9vw] h-[4vw] items-center mb-[8vw]">
                    {timelineData.map((item, index) => {

                        const alignment =
                            index === 0
                                ? "items-end text-right"
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-start text-left";
                        const offset = index === 1 ? "-mt-[4vw]" : "";


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
                                    className={`text-[1.65vw] font-bold mb-[1.5vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{ fontFamily: "Space Mono" }}
                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[1.5vw] font-peakers mb-[1vw] leading-none">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-500 font-peakers text-[0.85vw] leading-none font-medium"
                                    style={index === 1 ? { fontFamily: "Space Mono", fontSize: ".7vw" } : {}}>

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