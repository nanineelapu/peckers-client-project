

export default function StoryCircle() {
    return (
        <section className="w-full bg-black text-white px-[8vw] md:px-[6vw] py-[10vw] md:py-[6vw]">

            {/* Top Row */}
            <div className="flex flex-col md:flex-row items-center w-full gap-[4vw] md:gap-6">

                {/* Heading */}
                <h2 className="text-[7.5vw] md:text-[3.4vw] text-center md:text-left font-bold leading-none font-peakers px-[1.4vw] tracking-wide md:whitespace-nowrap">
                    A LEGACY THAT CAME FULL CIRCLE
                </h2>

                {/* Line - hidden on mobile since text wraps and centers */}
                <div className="hidden md:block flex-1 h-[1px] bg-[#1F2937]"></div>

                {/* Year */}
                <span className="text-white/60 tracking-widest font-sans md:mr-[2vw] text-[4vw] md:text-sm whitespace-nowrap">
                    EST. 1978
                </span>

            </div>

            {/* Bottom Divider */}
            <div className="w-full h-[1px] bg-[#1F2937] mt-[6vw] md:mt-8"></div>

        </section>
    );
}