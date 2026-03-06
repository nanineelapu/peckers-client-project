"use client";
import React from 'react'
import { motion } from 'framer-motion'
import EnquiriesSection from './EnquireSection'
import LocationAddress from './LocationAddress'
import Navbar from '../Navbar';
import Footer from '../Footer';

export function LocationsPageContent({ location = 'hitchin' }) {
    const locationTitle = location === 'stevenage' ? 'STEVENAGE' : 'HITCHIN';

    return (
        <div id="main-content" className='z-9999' style={{ color: 'white' }}>

            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-col items-center justify-center" style={{ background: "#bbbbbb", minHeight: "70vh" }}>
                <div className="text-white text-[10vw] font-bold leading-tight" style={{ fontFamily: "var(--font-peakers)", letterSpacing: '0.1em', }}>
                    {locationTitle}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-2 text-[#b2bac8] text-[3vw] italic" style={{ fontFamily: "var(--font-peakers)" }}>
                    (HERO VIDEO)
                </motion.div>
            </motion.div>

            <div>
                <LocationAddress location={location} />
            </div>

            <section
                id='history'
            >
                <div className="flex flex-col items-center mt-[12vw] md:mt-[6vw] justify-center w-full pt-[8vw] md:pt-[2vw] pb-[12vw] md:pb-[4vw] bg-[#0A0A0B]">
                    <div className="flex flex-col items-center w-[90vw] md:w-[80vw]">
                        {/* History Title, Logo, EST */}
                        <div className="flex flex-col md:flex-row items-center mb-[6vw] md:mb-[1.6vw] mr-0 md:mr-[16vw] relative w-full justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="relative w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] flex items-center justify-center mb-[4vw] md:mb-[0.8vw] self-center md:self-start mr-0 md:mr-[44vw]"
                            >
                                <img
                                    src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/MenuPage/Location%20logo%20png.webp"
                                    alt="Peckers Location Logo"
                                    className="rounded-full shadow-lg"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        background: '#181818',
                                        marginBottom: '2vw'
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                className="flex md:absolute flex-col items-center ml-0 md:ml-[25vw] mt-0 md:mt-[2vw]">
                                <div className="flex items-center mb-[2vw] md:mb-[0.3vw]">
                                    <span
                                        className="h-[1.2px] w-[8vw] md:w-[3vw] bg-[#555] opacity-70 mr-[2vw] md:mr-[1vw]"
                                        aria-hidden="true"
                                    ></span>
                                    <span
                                        className="text-[#888] text-[3.5vw] md:text-[0.95vw] tracking-[0.22em] font-mono"
                                        style={{ fontFamily: "monospace, 'Share Tech', 'ShareTech', 'Share_Tech', 'ShareTechMono'" }}
                                    >
                                        {location === 'stevenage' ? 'EST. 2024' : 'EST. 2023'}
                                    </span>
                                    <span
                                        className="h-[1.2px] w-[8vw] md:w-[3vw] bg-[#555] opacity-70 ml-[2vw] md:ml-[1vw]"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                                <h2
                                    className="font-bold text-[12vw] md:text-[4.5vw] font-peakers text-[#fff] mt-[1vw] md:mt-[0.2vw] tracking-[0.05em]"
                                >
                                    HISTORY
                                </h2>
                            </motion.div>
                        </div>
                        {/* History Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="w-full flex justify-center mt-[4vw] md:mt-0">
                            {location === 'stevenage' ? (
                                <p
                                    className="text-[#e3e3e5]/70 text-center font-extralight leading-[1.6] text-[4vw] md:text-[1vw] max-w-[90vw] md:max-w-[70vw] font-mono"
                                >
                                    Following the incredible response at our original site, Stevenage was established as our second location to bring
                                    Peckers to a larger audience. This inviting store is designed for the community to gather, offering a high-energy
                                    environment and a comfortable space to dine in.
                                    Known for its fast-paced service and exceptional team, Stevenage is where our vision truly scaled up. Located
                                    within proximity to our Budgens stores in Walkern and Watton, it stands as a testament to our journey providing a
                                    welcoming, vibrant spot for everyone to enjoy seriously good chicken together.
                                </p>
                            ) : (
                                <p
                                    className="text-[#e3e3e5]/70 text-center font-extralight leading-[1.6] text-[4vw] md:text-[1vw] max-w-[90vw] md:max-w-[70vw] font-mono"
                                >
                                    Peckers Hitchin is where the vision first took flight. Nestled in the heart of Westmill, this location stands on the
                                    same ground where our family’s journey began over 50 years ago at our grandfather’s original shop.
                                    It is the birthplace of our flavours and the community-driven spirit that defines us. As our original location, Hitchin
                                    remains a dedicated staple for the neighbourhood, serving seriously good chicken to the community that first
                                    supported our vision. While we continue to grow, this site stays true to its purpose: providing the local area with
                                    the quality and craft that started the legacy.
                                </p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <div>
                <EnquiriesSection location={location} />
            </div>

            <div>
                <Footer />
            </div>

            {/* Boring Stuff */}

            <div
                className="w-full bg-black text-[#586676] text-[10px] md:text-[0.8vw] tracking-tight font-mono px-6 py-6 md:px-[1vw] md:py-[2.5vw] flex flex-col md:flex-row justify-between items-center border-t border-[#151515] gap-3 md:gap-0">
                <div className="mb-1 md:mb-0 text-center md:text-left">
                    © 2024 Peckers Chicken Ltd. All rights reserved. Do not steal our  sauce recipe.
                </div>


                <div className="text-[10px] md:text-[0.8vw] flex flex-row flex-wrap justify-center items-center space-x-2 px-4">
                    <span>Designed and Developed By Webcros</span>
                    <svg
                        width="10"
                        height="12"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-0 inline-block align-middle"
                        style={{ display: "inline-flex", verticalAlign: "middle" }}
                    >
                        <path
                            d="M7.85742 4.21875C8.33203 4.21875 8.64844 4.77246 8.38477 5.16797L3.74414 13.1836C3.63867 13.3945 3.42773 13.5 3.19043 13.5C2.79492 13.5 2.50488 13.1309 2.58398 12.7354L3.79688 7.59375H0.685547C0.290039 7.59375 0 7.27734 0.0527344 6.88184L0.896484 0.553711C0.922852 0.237305 1.21289 0 1.5293 0H5.32617C5.72168 0 6.03809 0.395508 5.93262 0.817383L4.79883 4.21875H7.85742Z"
                            fill="#CCFF00"
                        />
                    </svg>
                </div>
            </div>

            {/* Final bottom logo 
     */}
            <div
                className="flex-1 flex items-center"
            >

                <div className="w-full flex justify-center items-center py-8 bg-[#000]">
                    <img
                        src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Logo%20image%20peckers.png"
                        alt="Peckers Logo"
                        className="max-w-[80%] w-full pb-[18vw] md:pb-0"
                        style={{ filter: "brightness(1)" }}
                    />
                </div>
            </div>
        </div >
    );
}

const LocationPage = () => <LocationsPageContent location="hitchin" />;
export default LocationPage;