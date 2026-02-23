"use client";

export default function JourneyIntroSection() {
    return (
        <section className="w-full bg-black py-[8vw] flex flex-col items-center text-center">

            {/* Main Heading */}
            <h2 className="text-[3.35vw] font-peakers text-white leading-none font-bold tracking-tight mb-[2vw]">
                THE PECKERS JOURNEY
            </h2>

            {/* Subtitle */}
            <p className="text-[1vw] font-peakers text-[#FFD700] tracking-[0.35vw] leading-[1.4] max-w-[60vw]">
                FROM ONE STORE TO GROWING COMMUNITY BRAND <br />
                - THE JOURNEY CONTINUES
            </p>


            <div className="w-full py-[1.2vw]">
                <img
                    src="https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/Peckers%20Sub%20pages%20Bucket/Jouney%20Our%20Story.png"
                    alt="The Peckers Journey"
                    className="w-full object-cover"
                />
            </div>

            <section className="w-full bg-black py-[8vw] flex justify-center items-center relative">

                {/* Top Glow */}
                <div className="absolute top-0 w-[3vw] h-[6vw] bg-yellow-400 blur-[2vw] opacity-80"></div>

                {/* Card */}
                <div
                    className="relative w-[60vw] 
                   bg-gradient-to-b from-[#1a1a1a] to-[#0f1115]
                   rounded-[2vw]
                   border-2 border-dashed border-yellow-500
                   px-[6vw] py-[6vw]
                   flex flex-col items-center gap-[3vw]"
                >

                    {/* Corner Dots */}
                    <div className="absolute top-[1vw] left-[1vw] w-[1vw] h-[1vw] bg-[#2b2b2b] rounded-full"></div>
                    <div className="absolute top-[1vw] right-[1vw] w-[1vw] h-[1vw] bg-[#2b2b2b] rounded-full"></div>
                    <div className="absolute bottom-[1vw] left-[1vw] w-[1vw] h-[1vw] bg-[#2b2b2b] rounded-full"></div>
                    <div className="absolute bottom-[1vw] right-[1vw] w-[1vw] h-[1vw] bg-[#2b2b2b] rounded-full"></div>

                    {/* Heading */}
                    <h2 className="text-[3vw] tracking-wide">
                        WHERE NEXT ?
                    </h2>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Suggest a city..."
                        className="w-[40vw] h-[4vw]
                     bg-black
                     border border-[#2a2f3a]
                     rounded-[0.6vw]
                     text-[1vw]
                     text-white
                     placeholder:text-white/40
                     px-[1.5vw]
                     focus:outline-none"
                    />

                    {/* Button */}
                    <button
                        className="w-[20vw] h-[4vw]
                     border-[0.25vw] border-white
                     rounded-[2vw]
                     text-[1.2vw]
                     tracking-[0.3vw]
                     hover:bg-white hover:text-black
                     transition-all duration-300"
                    >
                        SUBMIT
                    </button>

                </div>

            </section>


        </section>

    );
}
