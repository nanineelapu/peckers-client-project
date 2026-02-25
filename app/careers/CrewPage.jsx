import React from 'react'

export default function CrewPage() {
    return (
        <div className="w-full bg-black text-white px-[6vw] py-[6vh]">

            {/* Top Row */}
            <div className="flex items-start justify-between">

                {/* Left Title */}
                <h1 className="font-peakers text-[4.2vw] font-bold tracking-[0.1vw] leading-none">
                    THE CREW
                </h1>

                {/* Right Text */}
                <p className="text-right font-semibold  font-peakers text-[.9vw] tracking-[0.1vw] pt-[1.5vw] text-gray-400 max-w-[35vw]">
                    FROM THE KITCHEN TO THE COUNTER — THIS IS THE <br />
                    PECKERS FAMILY.
                    NO ROBOTS, JUST LEGENDS.
                </p>

            </div>

            {/* Divider Line */}
            <div className="w-full h-[0.05vw] bg-[#4444] mt-[4vh]"></div>

        </div>
    )
}