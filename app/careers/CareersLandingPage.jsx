import React from "react";

export default function CareersLandingPage() {
    return (
        <div className="w-full h-[82vh] bg-[#0000] flex flex-col items-center relative pt-[2vh]">

            {/* Content Wrapper */}
            <div className="flex flex-col items-center text-center mt-6">

                {/* Top Tag */}
                <div className="border-[0.05vw] rounded-[.2vw] font-mono border-[#6666] px-5 py-2 text-xs tracking-[0.45em] text-gray-300 mb-6">
                    JOIN THE REVOLUTION
                </div>

                {/* Main Heading */}
                <div className="flex flex-col items-center font-peakers mb-9">
                    <h1 className="text-[8.8vw] leading-none text-white font-extrabold">
                        WORK AT
                    </h1>
                    <h1 className="text-[8.8vw] leading-none text-white font-extrabold">
                        PECKERS
                    </h1>
                </div>

            </div>

            {/* Scroll Icon */}
            <div className="absolute bottom-[6%] animate-bounce">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 20.1L0 11.1L2.1 8.99998L9 15.8625L15.9 8.99998L18 11.1L9 20.1ZM9 11.1L0 2.09998L2.1 -2.47955e-05L9 6.86248L15.9 -2.47955e-05L18 2.09998L9 11.1Z" fill="#FACC15" fillOpacity="0.7" />
                </svg>
            </div>

        </div>
    );
}