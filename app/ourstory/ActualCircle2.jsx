"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { client } from "../../sanity/lib/client";

export default function PeckersTimeline2() {
    const [timelineData, setTimelineData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);

        const fetchTimeline = async () => {
            try {
                // Fetch documents of type "timeline", ordered by the 'order' field if available
                const data = await client.fetch(`*[_type == "timeline"] | order(order asc)`);
                if (data) {
                    setTimelineData(data);
                }
            } catch (error) {
                console.error("Error fetching timeline data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTimeline();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loading || timelineData.length === 0) return null;

    return (
        <div className="bg-black text-white flex justify-center mt-[6vw] md:mt-[6vw] py-[5vw] md:py-[1vw] font-peakers">
            <div className="w-full max-w-[90vw] relative">

                {/* Cards */}
                <div className="flex flex-col md:flex-row justify-between gap-[6vw] md:gap-[4vw] h-auto md:h-[4vw] items-center leading-7 mb-[4vw]">
                    {timelineData.map((item, index) => {

                        const alignment =
                            index === 0
                                ? "items-center text-center md:items-end md:text-right"
                                : index === 1
                                    ? "items-center text-center"
                                    : "items-center text-center md:items-start md:text-left";
                        const offset = index === 1 ? "mt-0 md:-mt-[-2vw]" : "";


                        const getInitial = (i) => {
                            if (isDesktop) {
                                // Premium Laptop Reveal for Bottom Arc
                                if (i === 0) return { opacity: 0, x: -100, y: -80, scale: 0.9, rotateY: 25, rotate: 5, filter: "blur(20px)" };
                                if (i === 1) return { opacity: 0, y: -120, scale: 0.85, rotateX: -20, filter: "blur(20px)" };
                                return { opacity: 0, x: 100, y: -80, scale: 0.9, rotateY: -25, rotate: -5, filter: "blur(20px)" };
                            }
                            // Original Mobile Animation
                            if (i === 0) return { opacity: 0, x: 60, y: -60, scale: 0.8, rotate: 15, filter: "blur(15px)" };
                            if (i === 1) return { opacity: 0, y: -80, scale: 0.8, rotate: 0, filter: "blur(15px)" };
                            return { opacity: 0, x: -60, y: -60, scale: 0.8, rotate: -15, filter: "blur(15px)" };
                        };

                        const getDelay = (i) => {
                            if (isDesktop) {
                                if (i === 0) return 0.9;
                                if (i === 1) return 0.5;
                                return 0.7;
                            }
                            if (i === 0) return 1.55;
                            if (i === 1) return 1.25;
                            return 0.95;
                        };

                        const isHighlighted = item.highlight || (!isDesktop && (item.year?.toString() === "2025" || item.year?.toString().includes("2025")));
                        return (
                            <motion.div
                                key={index}
                                initial={getInitial(index)}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    filter: "blur(0px)"
                                }}
                                whileHover={isDesktop ? {
                                    y: 8,
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                } : {}}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{
                                    duration: isDesktop ? 1.4 : 1.2,
                                    delay: getDelay(index),
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                style={
                                    isHighlighted
                                        ? {
                                            boxShadow: "0 0 25px rgba(234,179,8,0.4), 0 0 50px rgba(234,179,8,0.15)",
                                            borderColor: "rgba(234,179,8,0.8)"
                                        }
                                        : {}
                                }
                                className={`relative px-[6vw] md:px-[1vw] py-[6vw] md:py-[1vw] rounded-[4vw] md:rounded-[1vw] flex flex-col ${alignment} ${offset} w-[80vw] md:w-[15vw] h-auto md:h-[9vw] border
  ${isHighlighted
                                        ? "bg-[#121212] border-yellow-500/60"
                                        : `bg-[#0a0a0a] ${item.borderStyle || "border-zinc-800"}`
                                    }`}
                            >
                                <span
                                    className={`text-[5vw] md:text-[1.2vw] text-white font-bold mb-[3vw] md:mb-[0.5vw] tracking-tight ${isHighlighted ? "text-white" : "text-zinc-600"
                                        }`}
                                    style={{ fontFamily: "Space Mono", color: "white" }}
                                >
                                    {item.year}
                                </span>

                                <h3 className="text-[5vw] md:text-[1.2vw] font-peakers mb-[2vw] md:mb-[0.5vw] leading-none">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-500 font-peakers text-[3vw] md:text-[0.7vw] leading-none font-medium"
                                    style={index === 1 ? { fontFamily: "", fontSize: "", md: { fontSize: ".75vw" } } : {}}>

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
