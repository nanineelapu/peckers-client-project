

import { motion } from 'framer-motion';

export default function StoryCircle() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-black text-white px-[6vw] md:px-[4vw] pt-[5vw] md:pt-[3vw] pb-[14vw] md:pb-[9vw]"
        >

            {/* Top Row */}
            <div className="flex flex-col md:flex-row items-center w-full gap-[3vw] md:gap-4">

                {/* Heading */}
                <h2 className="text-[7.5vw] md:text-[3.4vw] text-center md:text-left font-bold leading-none font-peakers px-[1vw] tracking-wide md:whitespace-nowrap">
                    A LEGACY THAT CAME FULL CIRCLE
                </h2>

                {/* Line - hidden on mobile since text wraps and centers */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block flex-1 h-[1px] bg-[#1F2937]"
                ></motion.div>

                {/* Year */}
                <span className="text-white/60 tracking-widest font-sans md:mr-[1.5vw] text-[4vw] md:text-sm whitespace-nowrap">
                    EST. 1978
                </span>

            </div>

            {/* Bottom Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full h-px bg-[#1F2937] mt-[3vw] md:mt-4"
            ></motion.div>

        </motion.section>
    );
}