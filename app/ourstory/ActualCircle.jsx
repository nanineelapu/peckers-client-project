"use client";

export default function TimelineSection() {
    return (
        <section className="w-full bg-black py-[6vw] flex justify-center">

            <div className="w-[90vw] flex justify-between items-center">

                {/* 1978 – Highlighted */}
                <div className="w-[28vw] h-[22vw] bg-[#0f1115] 
                        rounded-[2vw] 
                        border border-[#1F2937]
                        shadow-[0_0_2vw_0.5vw_rgba(255,204,0,0.4)]
                        px-[3vw] py-[3vw]
                        flex flex-col justify-center text-center">

                    <h3 className="text-[2.5vw] mb-[1vw]">1978</h3>

                    <h4 className="text-[1.6vw] mb-[1.5vw] tracking-wide">
                        GRANDAD'S OFF-LICENSE STORE
                    </h4>

                    <p className="text-[1vw] text-white/60 leading-[1.6]">
                        Where the passion for quality produce began.
                        The original inspiration.
                    </p>

                </div>

                {/* 2002 – Normal */}
                <div className="w-[28vw] h-[22vw] bg-[#0f1115] 
                        rounded-[2vw] 
                        border border-[#1F2937]
                        px-[3vw] py-[3vw]
                        flex flex-col justify-center text-center">

                    <h3 className="text-[2.5vw] mb-[1vw] text-white/70">2002</h3>

                    <h4 className="text-[1.6vw] mb-[1.5vw] tracking-wide">
                        WALKERN BUDGENS
                    </h4>

                    <p className="text-[1vw] text-white/60 leading-[1.6]">
                        Taking the next step. A new chapter serving the local community.
                    </p>

                </div>

                {/* 2025 – Dashed */}
                <div className="w-[28vw] h-[22vw] bg-[#0f1115] 
                        rounded-[2vw] 
                        border-2 border-dashed border-[#1F2937]
                        px-[3vw] py-[3vw]
                        flex flex-col justify-center text-center">

                    <h3 className="text-[2.5vw] mb-[1vw] text-white/40">2025</h3>

                    <h4 className="text-[1.6vw] mb-[1.5vw] tracking-wide">
                        PECKERS IS BORN
                    </h4>

                    <p className="text-[1vw] text-white/60 leading-[1.6]">
                        Back where it started. Peckers opens in the same
                        spot as Grandad's original store.
                    </p>

                </div>

            </div>

        </section>
    );
}