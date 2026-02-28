

export default function StoryCircle() {
    return (
        <section className="w-full bg-black text-white px-[6vw] md:px-[4vw] pt-[5vw] md:pt-[3vw] pb-[14vw] md:pb-[9vw]">

            {/* Top Row */}
            <div className="flex flex-col md:flex-row items-center w-full gap-[3vw] md:gap-4">

                {/* Heading */}
                <h2 className="text-[7.5vw] md:text-[3.4vw] text-center md:text-left font-bold leading-none font-peakers px-[1vw] tracking-wide md:whitespace-nowrap">
                    A LEGACY THAT CAME FULL CIRCLE
                </h2>

                {/* Line - hidden on mobile since text wraps and centers */}
                <div className="hidden md:block flex-1 h-[1px] bg-[#1F2937]"></div>

                {/* Year */}
                <span className="text-white/60 tracking-widest font-sans md:mr-[1.5vw] text-[4vw] md:text-sm whitespace-nowrap">
                    EST. 1978
                </span>

            </div>

            {/* Bottom Divider */}
            <div className="w-full h-[1px] bg-[#1F2937] mt-[3vw] md:mt-4"></div>

        </section>
    );
}