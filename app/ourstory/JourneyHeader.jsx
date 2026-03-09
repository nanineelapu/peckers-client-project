import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from 'framer-motion';
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

const JourneyTimeline = ({ data }) => {
    return (
        <div className="relative max-w-md mx-auto">
            {/* Faint Background Line */}
            <div className="absolute left-4 top-0 bottom-0 w-[4px] bg-[#FFD700]/10 rounded-full"></div>

            {/* Animated Progress Line (Automatic) */}
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2) }}
                    className="relative mb-12 z-20"
                >
                    {/* Arrow Marker pointing right - Adjusted size and position */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + (idx * 0.2) }}
                        className="absolute left-4 top-1.5 z-30"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_#FFD700]">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>

                    <div className="ml-14 bg-[#121212] border border-[#333] rounded-xl p-5 hover:border-[#FFD700]/50 transition-colors duration-300">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative mb-20 z-20"
            >
                {/* Final Arrow pointing right - Adjusted size and position */}
                <div className="absolute left-4 top-1.5 z-30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_8px_#FFD700]">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="ml-12 bg-[#121212] border border-dashed border-[#FFD700]/60 rounded-xl p-6">
                    <h2 className="text-center text-white font-bold tracking-widest text-sm mb-4 uppercase">
                        {data.whereNextHeading || "WHERE NEXT?"}
                    </h2>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder={data.whereNextPlaceholder || "Suggest a city..."}
                            className="bg-black border border-[#333] p-3 rounded-lg text-white focus:outline-none focus:border-[#FFD700] placeholder:text-zinc-600"
                        />
                        <button className="bg-black text-white border border-zinc-700 font-bold py-3 px-6 rounded-full uppercase text-xs tracking-widest hover:bg-[#FFD700] hover:text-black transition-all shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                            {data.whereNextButtonText || "Submit"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

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
        <section className="w-full bg-black pt-[15vw] pb-[10vw] flex flex-col items-center text-center relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-[#FFD700]/5 blur-[120px] pointer-events-none"></div>

            {/* ================= DESKTOP ================= */}
            <div className="hidden xl:block w-full max-w-[1400px] mx-auto px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-[8vw]"
                >
                    <h2 className="text-[4.5vw] font-peakers text-white leading-none font-bold tracking-tight mb-[1vw] uppercase">
                        {data.heading || "THE PECKERS JOURNEY"}
                    </h2>
                    <p className="text-[1.2vw] font-mono text-[#FFD700] tracking-[0.4em] uppercase opacity-80">
                        {data.subtitle || "EST. 1978 — THE LEGACY CONTINUES"}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-20 items-center">
                    {/* Left: Content/Timeline Style */}
                    <div className="text-left space-y-12">
                        {data.timeline?.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="border-l-2 border-[#FFD700]/30 pl-8 relative"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#FFD700] rounded-full shadow-[0_0_10px_#FFD700]"></div>
                                <span className="text-zinc-500 font-mono text-lg">{item.year}</span>
                                <h3 className="text-3xl font-peakers text-white uppercase">{item.location}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Where Next Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-[#0a0a0a] border border-[#FFD700]/20 p-12 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent"></div>
                        <h3 className="text-3xl font-peakers text-white mb-8 relative z-10">
                            {data.whereNextHeading || "WHERE SHOULD WE LAND NEXT?"}
                        </h3>
                        <div className="flex gap-4 relative z-10">
                            <input
                                type="text"
                                placeholder="ENTER CITY..."
                                className="flex-1 bg-black border border-zinc-800 p-4 rounded-xl text-white font-mono focus:border-[#FFD700] transition-colors"
                            />
                            <button className="bg-black text-white border border-zinc-800 font-bold px-4 py-4 rounded-xl hover:bg-[#FFD700] hover:text-black transition-colors uppercase tracking-widest text-sm">
                                {data.whereNextButtonText || "SEND"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ================= MOBILE VERSION ================= */}
            <div className="xl:hidden w-full px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-[10vw] font-peakers text-white font-bold mb-4 tracking-tight leading-none uppercase">
                        {data.heading || "THE PECKERS JOURNEY"}
                    </h2>
                    <div className="h-1 w-20 bg-[#FFD700] mx-auto mb-6"></div>
                    <p className="text-[3.5vw] text-[#FFD700] font-mono tracking-[0.2em] leading-relaxed opacity-90">
                        {data.subtitle || "GROWING THE COMMUNITY BRAND"}
                    </p>
                </motion.div>

                <JourneyTimeline data={data} />
            </div>
        </section>
    );
}
