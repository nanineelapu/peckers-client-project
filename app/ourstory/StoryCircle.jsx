"use client";

export default function StoryCircle() {
    return (
        <section className="w-full bg-black text-white px-[6vw] py-[6vw]">

            {/* Top Row */}
            <div className="flex items-center w-full gap-6">

                {/* Heading */}
                <h2 className="text-[3.4vw] font-bold leading-none font-peakers px-[1.4vw] tracking-wide whitespace-nowrap">
                    A LEGACY THAT CAME FULL CIRCLE
                </h2>

                {/* Line */}
                <div className="flex-1 h-[1px] bg-[#1F2937]"></div>

                {/* Year */}
                <span className="text-white/60 tracking-widest font-sans mr-[2vw] text-sm whitespace-nowrap">
                    EST. 1978
                </span>

            </div>

            {/* Bottom Divider */}
            <div className="w-full h-[1px] bg-[#1F2937] mt-8"></div>

        </section>
    );
}