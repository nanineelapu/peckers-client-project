import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

export default function JourneyIntroSection() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJourneyData = async () => {
            try {
                const journeyData = await client.fetch(`*[_type == "ourStoryBottomPage"][0].journeySection`);
                if (journeyData) {
                    setData(journeyData);
                }
            } catch (error) {
                console.error("Error fetching journey data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJourneyData();
    }, []);

    if (loading || !data) return null;

    return (
        <section className="w-full bg-black pt-[9vw] flex flex-col items-center text-center relative">

            {/* ================= DESKTOP (UNCHANGED) ================= */}
            <div className="hidden xl:block w-full">

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[3.35vw] font-peakers text-white leading-none font-bold tracking-tight mb-[2vw]"
                >
                    {data.heading || "THE PECKERS JOURNEY"}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-[1vw] font-peakers text-[#FFD700] tracking-[0.35vw] leading-[1.4] max-w-[60vw] mx-auto"
                >
                    {data.subtitle || "FROM ONE STORE TO GROWING COMMUNITY BRAND - THE JOURNEY CONTINUES"}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full relative flex flex-col items-end"
                >

                    {/* Your Existing Desktop Card */}
                    <div className="z-10 mx-auto w-[17.5vw] h-[11vw] mt-[24.2vw] mr-[10vw] mb-[-6vw] rounded-[.7vw] border border-dashed border-[#cab53d] px-[3vw] py-[2vw] flex flex-col items-center gap-[.8vw] bg-black/95 absolute">

                        <h2 className="text-[1.5vw] text-white font-peakers tracking-wide">
                            {data.whereNextHeading || "WHERE NEXT ?"}
                        </h2>

                        <input
                            type="text"
                            placeholder={data.whereNextPlaceholder || "Suggest a city..."}
                            className="w-[15vw] py-[.6vw] bg-black border border-[#2a2f3a] font-mono text-[0.7vw] text-white placeholder:text-white/40 px-[0.9vw] focus:outline-none"
                        />

                        <button className="w-[11vw] h-[2vw] border-[0.15vw] font-mono text-white border-white rounded-[.6vw] text-[0.9vw] tracking-[0.1vw] hover:bg-white hover:text-black transition-all duration-300">
                            {data.whereNextButtonText || "SUBMIT"}
                        </button>
                    </div>

                    {data.backgroundImage && (
                        <img
                            src={urlFor(data.backgroundImage).url()}
                            alt="The Peckers Journey"
                            className="w-full object-cover"
                        />
                    )}
                </motion.div>
            </div>

            {/* ================= MOBILE VERSION ================= */}
            <div className="xl:hidden w-full px-6 pt-10">

                {/* Mobile Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[8vw] md:text-[5vw] xl:text-[4vw] font-peakers text-white font-bold mb-4 text-center"
                >
                    {data.heading || "THE PECKERS JOURNEY"}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[3vw] md:text-[2vw] xl:text-[1.5vw] text-[#FFD700] font-peakers tracking-[0.3em] leading-[1.4] mb-10 text-center"
                >
                    {data.subtitle || "FROM ONE STORE TO GROWING COMMUNITY BRAND THE JOURNEY CONTINUES"}
                </motion.p>

                {/* Timeline */}
                <div className="relative max-w-md mx-auto">

                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.6)]"></div>

                    {data.timeline?.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                            className="relative mb-12"
                        >
                            <div className="absolute left-2 top-2 w-5 h-5 bg-[#FFD700] rounded-full shadow-[0_0_12px_#FFD700]"></div>

                            <div className="ml-12 bg-[#121212] border border-[#333] rounded-xl p-5">
                                <div className="text-white text-[4vw] md:text-[2.5vw] xl:text-[1.8vw] font-bold opacity-80 mb-1">
                                    {item.year}
                                </div>
                                <div className="text-[#FFD700] text-[9vw] md:text-[6vw] xl:text-[4.5vw] font-bold font-peakers uppercase">
                                    {item.location}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* WHERE NEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative mb-20"
                    >
                        <div className="absolute left-2 top-2 w-5 h-5 bg-[#FFD700] rounded-full animate-pulse"></div>

                        <div className="ml-12 bg-[#121212] border border-dashed border-[#FFD700] rounded-xl p-6">

                            <h2 className="text-center text-white font-bold tracking-widest text-sm mb-4">
                                {data.whereNextHeading || "WHERE NEXT?"}
                            </h2>

                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder={data.whereNextPlaceholder || "Suggest a city..."}
                                    className="bg-black border border-[#333] p-3 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                                />

                                <button className="border-2 border-white text-white py-3 rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                                    {data.whereNextButtonText || "Submit"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
