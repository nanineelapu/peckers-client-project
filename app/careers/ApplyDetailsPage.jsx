import React from 'react'

import { motion } from 'framer-motion';

export default function ApplyDetailsPage() {
    return (
        <div className="w-full bg-[#080808] flex justify-center py-[8vh]">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[50%] border border-gray-700 p-[3vw] text-white"
            >

                {/* Top Row */}
                <div className="flex items-center justify-between mb-[4vh]">
                    <div className="flex items-center gap-[2vw] w-full">
                        <h1 className="font-peakers font-semibold text-[3.5vw] tracking-[.15vw] whitespace-nowrap">
                            INTERESTED?
                        </h1>
                        <div className="h-px bg-gray-700 w-full"></div>
                    </div>

                    <p className="ml-[2vw] text-white text-[1.6vw] tracking-tight font-peakers whitespace-nowrap">
                        Let’s do this.
                    </p>
                </div>

                <div className="w-full h-px bg-gray-800 mb-[5vh]"></div>

                {/* Form */}
                <form className="flex flex-col gap-[4vh]">

                    {/* Name + Email */}
                    <div className="flex justify-between gap-[2vw]">

                        <div className="w-full">
                            <label className="block font-mono text-gray-500 text-[0.6vw] tracking-[0.2em] mb-[1vh]">
                                NAME
                            </label>
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                className="w-full font-mono bg-[#000000] border border-gray-700 px-[1.2vw] py-[2vh] text-gray-300 outline-none"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block font-mono text-gray-500 text-[0.6vw] tracking-[0.2em] mb-[1vh]">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="w-full font-mono bg-[#000000] border border-gray-700 px-[1.2vw] py-[2vh] text-gray-300 outline-none"
                            />
                        </div>

                    </div>

                    {/* Textarea */}
                    <div>
                        <label className="block font-mono text-gray-500 text-[0.6vw] tracking-[0.2em] mb-[1vh]">
                            TELL US ABOUT YOU
                        </label>
                        <textarea
                            rows="5"
                            placeholder="WHY PECKERS? WHAT'S YOUR STORY?"
                            className="w-full font-mono bg-[#000000] border border-gray-700 px-[1.2vw] py-[2vh] text-gray-300 outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-[2.5vh] text-[1.1vw] tracking-wide hover:bg-gray-200 transition"
                    >
                        SEND IT →
                    </button>

                </form>

            </motion.div>
        </div>
    )
}
