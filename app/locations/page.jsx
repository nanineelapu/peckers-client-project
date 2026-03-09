"use client";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import EnquiriesSection from './EnquireSection'
import LocationAddress from './LocationAddress'
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

export function LocationsPageContent({ location = 'hitchin' }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // High-performance consolidated query to fetch all sections at once
                const query = `{
                    "page": *[_type == "locationpage" && slug.current == $location][0],
                    "map": *[_type == "mapSection" && slug.current == $location][0],
                    "enquiry": *[_type == "enquiriesSection" && slug.current == $location][0]
                }`;

                const result = await client.fetch(query, { location });
                setData(result);
            } catch (error) {
                console.error("Error fetching location page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <div className="animate-pulse font-mono tracking-widest text-[#555]">LOADING PECKERS {location.toUpperCase()}...</div>
            </div>
        );
    }

    if (!data?.page) return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white px-6 text-center">
            <div className="font-mono opacity-50 uppercase text-xs">Location "{location}" not found in CMS.</div>
        </div>
    );

    const { page, map, enquiry } = data;

    return (
        <div id="main-content" className='z-9999' style={{ color: 'white' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-col items-center justify-center" style={{ background: "#1a1a1a", minHeight: "70vh" }}>
                <div className="text-white text-[10vw] font-bold leading-tight" style={{ fontFamily: "var(--font-peakers)", letterSpacing: '0.1em', }}>
                    {page.name?.toUpperCase()}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-2 text-[#b2bac8] text-[3vw] md:text-[1.2vw] italic tracking-widest" style={{ fontFamily: "var(--font-peakers)" }}>
                    {page.heroVideoUrl ? "(HERO VIDEO ACTIVE)" : "(ESTABLISHED " + page.established + ")"}
                </motion.div>
            </motion.div>

            {/* Pass fetched data directly to sections */}
            <div>
                <LocationAddress data={map} location={location} />
            </div>

            <section id='history'>
                <div className="flex flex-col items-center mt-[12vw] md:mt-[6vw] justify-center w-full pt-[8vw] md:pt-[2vw] pb-[12vw] md:pb-[4vw] bg-[#0A0A0B]">
                    <div className="flex flex-col items-center w-[90vw] md:w-[80vw]">
                        <div className="flex flex-col md:flex-row items-center mb-[6vw] md:mb-[1.6vw] relative w-full justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="relative w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] flex items-center justify-center mb-[4vw] md:mb-[0.8vw]"
                            >
                                {page.logo && (
                                    <img
                                        src={urlFor(page.logo).url()}
                                        alt={`${page.name} Logo`}
                                        className="rounded-full shadow-2xl transition-transform hover:scale-105 duration-700"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            background: '#181818',
                                            border: '2px solid #222'
                                        }}
                                    />
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col items-center ml-0 md:ml-[4vw] mt-4 md:mt-0">
                                <div className="flex items-center mb-2">
                                    <span className="h-[1.2px] w-[8vw] md:w-[3vw] bg-[#333] mr-4" aria-hidden="true"></span>
                                    <span className="text-[#888] text-[3.5vw] md:text-[0.95vw] tracking-[0.22em] font-mono">
                                        EST. {page.established}
                                    </span>
                                    <span className="h-[1.2px] w-[8vw] md:w-[3vw] bg-[#333] ml-4" aria-hidden="true"></span>
                                </div>
                                <h2 className="font-bold text-[12vw] md:text-[4.5vw] font-peakers text-[#fff] mt-2 tracking-[0.05em]">
                                    {page.historyTitle?.toUpperCase()}
                                </h2>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="w-full flex justify-center mt-8">
                            <p className="text-[#e3e3e5]/60 text-center font-extralight leading-[1.8] text-[4vw] md:text-[1.1vw] max-w-[90vw] md:max-w-[60vw] font-mono whitespace-pre-wrap italic">
                                {page.historyDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div>
                <EnquiriesSection data={enquiry} location={location} />
            </div>
        </div >
    );
}

const LocationPage = () => <LocationsPageContent location="hitchin" />;
export default LocationPage;
