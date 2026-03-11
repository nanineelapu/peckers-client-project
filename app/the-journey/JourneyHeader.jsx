"use client";

import { motion } from 'framer-motion';
import { urlFor } from "../../sanity/lib/image";

export default function JourneyIntroSection({ initialData = null }) {
    const data = initialData;

    if (!data) return null;

    return (
        <section className="w-full bg-black pt-[9vw] pb-[10vw] flex flex-col items-center text-center relative overflow-hidden min-h-[50vh]">

            <>
                {/* ================= DESKTOP ================= */}
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

                        {/* Existing Desktop Card */}
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

                        <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-[#FFD700]/10 rounded-full"></div>

                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute left-4 top-0 bottom-0 w-[4px] bg-[#FFD700] shadow-[0_0_20px_#FFD700] rounded-full z-10 origin-top"
                        />

                        {data.timeline?.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                                className="relative mb-12"
                            >
                                <div className="absolute left-4 top-1.5 z-30">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_#FFD700]">
                                        <motion.path
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                                            d="M4 12H20M20 12L14 6M20 12L14 18"
                                            stroke="#FFD700"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className="ml-12 bg-[#121212] border border-[#333] rounded-xl p-5 hover:border-[#FFD700]/40 transition-colors">
                                    <div className="text-white text-[4vw] md:text-[2.5vw] xl:text-[1.8vw] font-bold opacity-80 mb-1">
                                        {item.year}
                                    </div>
                                    <div className="text-[#FFD700] text-[9vw] md:text-[6vw] xl:text-[4.5vw] font-bold font-peakers uppercase leading-tight">
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
                            <div className="absolute left-4 top-1.5 z-30">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_#FFD700] animate-pulse">
                                    <motion.path
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1 }}
                                        d="M4 12H20M20 12L14 6M20 12L14 18"
                                        stroke="#FFD700"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="ml-12 bg-[#121212] border border-dashed border-[#FFD700]/60 rounded-xl p-6">

                                <h2 className="text-center text-white font-bold tracking-widest text-sm mb-4">
                                    {data.whereNextHeading || "WHERE NEXT?"}
                                </h2>

                                <div className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        placeholder={data.whereNextPlaceholder || "Suggest a city..."}
                                        className="bg-black border border-[#333] p-3 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                                    />

                                    <button className="bg-black text-white py-3 border border-white/20 rounded-full uppercase text-xs tracking-widest hover:border-white transition-all">
                                        {data.whereNextButtonText || "Submit"}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </>
        </section>
    );
}
