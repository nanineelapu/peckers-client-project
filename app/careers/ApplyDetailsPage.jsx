import React from 'react'

export default function ApplyDetailsPage() {
    return (
        <div className="w-full bg-[#080808] flex justify-center py-[10vh]">

            <div className="w-[70%] text-white">

                {/* Top Row */}
                <div className="flex items-center justify-between mb-[4vh]">
                    <div className="flex items-center gap-[2vw] w-full">
                        <h1 className="font-peakers text-[4vw] whitespace-nowrap">
                            INTERESTED?
                        </h1>
                        <div className="h-[1px] bg-gray-700 w-full"></div>
                    </div>

                    <p className="ml-[2vw] text-gray-400 text-[1vw] whitespace-nowrap">
                        Let’s do this.
                    </p>
                </div>

                <div className="w-full h-[1px] bg-gray-800 mb-[6vh]"></div>

                {/* Form */}
                <form className="flex flex-col gap-[4vh]">

                    {/* Name + Email */}
                    <div className="flex justify-between gap-[2vw]">

                        <div className="w-full">
                            <label className="block text-gray-500 text-[0.8vw] tracking-[0.2em] mb-[1vh]">
                                NAME
                            </label>
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                className="w-full bg-[#000000] border border-gray-700 px-[1.2vw] py-[2vh] text-gray-300 outline-none"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-gray-500 text-[0.8vw] tracking-[0.2em] mb-[1vh]">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="w-full bg-[#000000] border border-gray-700 px-[1.2vw] py-[2vh] text-gray-300 outline-none"
                            />
                        </div>

                    </div>

                    {/* Textarea */}
                    <div>
                        <label className="block text-gray-500 text-[0.8vw] tracking-[0.2em] mb-[1vh]">
                            TELL US ABOUT YOU
                        </label>
                        <textarea
                            rows="5"
                            placeholder="WHY PECKERS? WHAT'S YOUR STORY?"
                            className="w-full bg-[#000000] border border-gray-700 px-[1.2vw] py-[2vh] text-gray-300 outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-[2.5vh] text-[1.2vw] tracking-wide hover:bg-gray-200 transition"
                    >
                        SEND IT →
                    </button>

                </form>

            </div>
        </div>
    )
}