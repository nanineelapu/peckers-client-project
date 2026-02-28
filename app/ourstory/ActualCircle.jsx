

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
        <div className="bg-black z-10 text-white flex justify-center py-[1vw] md:py-[1vw] font-peckers">
            <div className="w-full max-w-[90vw] relative">

                {/* Cards */}
                <div className="flex flex-col md:flex-row bg-black justify-between gap-[6vw] md:gap-[4vw] h-auto md:h-[4vw] items-center mb-[4vw]">
                    {timelineData.map((item, index) => {

                        const alignment =
                            index === 0
                                ? "items-center text-center md:items-end md:text-right"
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-center text-center md:items-start md:text-left";
                        const offset = index === 1 ? "mt-0 md:-mt-[4vw]" : "";


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
                                    className={`text-[5vw] md:text-[1.65vw] font-bold mb-[3vw] md:mb-[1.5vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{ fontFamily: "Space Mono" }}
                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[5vw] md:text-[1.5vw] font-peakers mb-[2vw] md:mb-[1vw] leading-none">
                                    {item.title}
                                </h3>

                                <p className={`text-zinc-500 font-peakers leading-none font-medium ${index === 1 ? "text-[2.8vw] md:text-[0.7vw]" : "text-[3vw] md:text-[0.85vw]"}`}
                                    style={index === 1 ? { fontFamily: "Space Mono" } : {}}>

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