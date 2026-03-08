

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { client } from "../../sanity/lib/client";

export default function PeckersTimeline() {
    const [timelineData, setTimelineData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTimeline = async () => {
            try {
                const data = await client.fetch(`*[_type == "ourStoryPage"][0]{timeline}`);
                if (data?.timeline) {
                    setTimelineData(data.timeline);
                }
            } catch (error) {
                console.error("Error fetching timeline data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTimeline();
    }, []);

    if (loading) return null; // Or a subtle loader if needed

    return (
        <div className="bg-black z-10 text-white flex justify-center py-[1vw] md:py-[1vw] font-peckers">
            <div className="w-full max-w-[90vw] relative">

                {/* Cards */}
                <div className="flex flex-col md:flex-row bg-black justify-between gap-[6vw] md:gap-[4vw] h-auto md:h-[4vw] items-center mb-[5vw]">
                    {timelineData.map((item, index) => {
                        const alignment =
                            index === 0
                                ? "items-center text-center md:items-end md:text-right"
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-center text-center md:items-start md:text-left";
                        const offset = index === 1 ? "mt-0 md:-mt-[2vw]" : "";


                        const getInitial = (i) => {
                            // Cards sweep in with a circular motion along the circle path
                            if (i === 0) return { opacity: 0, x: 60, y: 60, scale: 0.8, rotate: -15, filter: "blur(15px)" }; // Left Top
                            if (i === 1) return { opacity: 0, y: 80, scale: 0.8, rotate: 0, filter: "blur(15px)" }; // Mid Top
                            return { opacity: 0, x: -60, y: 60, scale: 0.8, rotate: 15, filter: "blur(15px)" }; // Right Top
                        };

                        const getDelay = (i) => {
                            if (i === 0) return 1.85; // Synced with Left Top dot (1.7s) + offset
                            if (i === 1) return 0.35; // Synced with Mid Top dot (0.2s) + offset
                            return 0.65; // Synced with Right Top dot (0.5s) + offset
                        };

                        return (
                            <motion.div
                                key={index}
                                initial={getInitial(index)}
                                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{
                                    duration: 1.2,
                                    delay: getDelay(index),
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                style={
                                    item.highlight
                                        ? { boxShadow: "0 0 24px rgba(234,179,8,0.5), 0 0 60px rgba(234,179,8,0.15)" }
                                        : {}
                                }
                                className={`relative px-[6vw] md:px-[1vw] py-[6vw] md:py-[1vw] rounded-[4vw] md:rounded-[1vw] flex flex-col ${alignment} ${offset} w-[80vw] md:w-[15vw] h-auto md:h-[9vw]
  ${item.highlight
                                        ? "bg-[#121212] border border-yellow-500/60"
                                        : `bg-[#0a0a0a] border ${item.borderStyle || "border-zinc-800"}`
                                    }`}
                            >
                                <span
                                    className={`text-[5vw] md:text-[1.2vw] font-bold mb-[3vw] md:mb-[0.5vw] tracking-tight ${item.highlight ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{ fontFamily: "Space Mono" }}
                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[5vw] md:text-[1.2vw] font-peakers mb-[2vw] md:mb-[0.5vw] leading-none">
                                    {item.title}
                                </h3>

                                <p className={`text-zinc-500 font-peakers leading-none font-medium ${index === 1 ? "text-[2.8vw] md:text-[0.6vw]" : "text-[3vw] md:text-[0.7vw]"}`}
                                    style={index === 1 ? { fontFamily: "Space Mono" } : {}}>

                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

        </div>
    );
}