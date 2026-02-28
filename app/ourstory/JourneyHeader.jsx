
export default function JourneyIntroSection() {
    return (
        <section className="w-full bg-black pt-[9vw] flex flex-col items-center text-center relative">

            {/* ================= DESKTOP (UNCHANGED) ================= */}
            <div className="hidden md:block w-full">

                {/* Main Heading */}
                <h2 className="text-[3.35vw] font-peakers text-white leading-none font-bold tracking-tight mb-[2vw]">
                    THE PECKERS JOURNEY
                </h2>

                {/* Subtitle */}
                <p className="text-[1vw] font-peakers text-[#FFD700] tracking-[0.35vw] leading-[1.4] max-w-[60vw] mx-auto">
                    FROM ONE STORE TO GROWING COMMUNITY BRAND <br />
                    - THE JOURNEY CONTINUES
                </p>

                <div className="w-full relative flex flex-col items-end">

                    {/* Your Existing Desktop Card */}
                    <div className="z-10 mx-auto w-[17.5vw] h-[11vw] mt-[24.2vw] mr-[10vw] mb-[-6vw] rounded-[.7vw] border border-dashed border-[#cab53d] px-[3vw] py-[2vw] flex flex-col items-center gap-[.8vw] bg-black/95 absolute">

                        <h2 className="text-[1.5vw] text-white font-peakers tracking-wide">
                            WHERE NEXT ?
                        </h2>

                        <input
                            type="text"
                            placeholder="Suggest a city..."
                            className="w-[15vw] py-[.6vw] bg-black border border-[#2a2f3a] font-mono text-[0.7vw] text-white placeholder:text-white/40 px-[0.9vw] focus:outline-none"
                        />

                        <button className="w-[11vw] h-[2vw] border-[0.15vw] font-mono text-white border-white rounded-[.6vw] text-[0.9vw] tracking-[0.1vw] hover:bg-white hover:text-black transition-all duration-300">
                            SUBMIT
                        </button>
                    </div>

                    <img
                        src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/OurStory/Jouney%20Our%20Story.webp"
                        alt="The Peckers Journey"
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/* ================= MOBILE VERSION ================= */}
            <div className="md:hidden w-full px-6 pt-10">

                {/* Mobile Heading */}
                <h2 className="text-[8vw] font-peakers text-white font-bold mb-4">
                    THE PECKERS JOURNEY
                </h2>

                <p className="text-[3vw] text-[#FFD700] font-peakers tracking-[0.3em] leading-[1.4] mb-10">
                    FROM ONE STORE TO GROWING COMMUNITY BRAND
                    <br />
                    THE JOURNEY CONTINUES
                </p>

                {/* Timeline */}
                <div className="relative max-w-md mx-auto">

                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.6)]"></div>

                    {/* 2022 */}
                    <div className="relative mb-12">
                        <div className="absolute left-2 top-2 w-5 h-5 bg-[#FFD700] rounded-full shadow-[0_0_12px_#FFD700]"></div>

                        <div className="ml-12 bg-[#121212] border border-[#333] rounded-xl p-5">
                            <div className="text-white text-[4vw] font-bold opacity-80 mb-1">2022</div>
                            <div className="text-[#FFD700] text-[9vw] font-bold font-peakers uppercase">
                                Hitchin
                            </div>
                        </div>
                    </div>

                    {/* 2024 */}
                    <div className="relative mb-12">
                        <div className="absolute left-2 top-2 w-5 h-5 bg-[#FFD700] rounded-full shadow-[0_0_12px_#FFD700]"></div>

                        <div className="ml-12 bg-[#121212] border border-[#333] rounded-xl p-5">
                            <div className="text-white text-[4vw] font-bold opacity-80 mb-1">2024</div>
                            <div className="text-[#FFD700] text-[9vw] font-bold font-peakers uppercase">
                                Stevenage
                            </div>
                        </div>
                    </div>

                    {/* WHERE NEXT */}
                    <div className="relative mb-20">
                        <div className="absolute left-2 top-2 w-5 h-5 bg-[#FFD700] rounded-full animate-pulse"></div>

                        <div className="ml-12 bg-[#121212] border border-dashed border-[#FFD700] rounded-xl p-6">

                            <h2 className="text-center text-white font-bold tracking-widest text-sm mb-4">
                                WHERE NEXT?
                            </h2>

                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Suggest a city..."
                                    className="bg-black border border-[#333] p-3 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                                />

                                <button className="border-2 border-white text-white py-3 rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
