"use client";

import React, { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

const Footer = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFooter = async () => {
            try {
                const footerData = await client.fetch(`*[_type == "footer"][0] {
                    logo,
                    tagline,
                    socialLinks,
                    quickLinks,
                    locations,
                    legalLinks,
                    copyright,
                    bottomLogo
                }`);
                console.log("Footer data fetched:", footerData);
                setData(footerData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching footer data:", error);
                setLoading(false);
            }
        };
        fetchFooter();
    }, []);

    if (loading) return null;
    if (!data) return null;

    const socialButtons = [
        {
            label: "Instagram",
            url: data.socialLinks?.instagram || "#",
            svg: (
                <svg width="62" height="62" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5625" y="0.5625" width="43.875" height="43.875" stroke="white" strokeWidth="1.125" />
                    <path d="M22.375 18.707C24.5898 18.707 26.418 20.5352 26.418 22.75C26.418 25 24.5898 26.793 22.375 26.793C20.125 26.793 18.332 25 18.332 22.75C18.332 20.5352 20.125 18.707 22.375 18.707ZM22.375 25.3867C23.8164 25.3867 24.9766 24.2266 24.9766 22.75C24.9766 21.3086 23.8164 20.1484 22.375 20.1484C20.8984 20.1484 19.7383 21.3086 19.7383 22.75C19.7383 24.2266 20.9336 25.3867 22.375 25.3867ZM27.5078 18.5664C27.5078 19.0938 27.0859 19.5156 26.5586 19.5156C26.0312 19.5156 25.6094 19.0938 25.6094 18.5664C25.6094 18.0391 26.0312 17.6172 26.5586 17.6172C27.0859 17.6172 27.5078 18.0391 27.5078 18.5664ZM30.1797 19.5156C30.25 20.8164 30.25 24.7188 30.1797 26.0195C30.1094 27.2852 29.8281 28.375 28.9141 29.3242C28 30.2383 26.875 30.5195 25.6094 30.5898C24.3086 30.6602 20.4062 30.6602 19.1055 30.5898C17.8398 30.5195 16.75 30.2383 15.8008 29.3242C14.8867 28.375 14.6055 27.2852 14.5352 26.0195C14.4648 24.7188 14.4648 20.8164 14.5352 19.5156C14.6055 18.25 14.8867 17.125 15.8008 16.2109C16.75 15.2969 17.8398 15.0156 19.1055 14.9453C20.4062 14.875 24.3086 14.875 25.6094 14.9453C26.875 15.0156 28 15.2969 28.9141 16.2109C29.8281 17.125 30.1094 18.25 30.1797 19.5156ZM28.4922 27.3906C28.9141 26.3711 28.8086 23.9102 28.8086 22.75C28.8086 21.625 28.9141 19.1641 28.4922 18.1094C28.2109 17.4414 27.6836 16.8789 27.0156 16.6328C25.9609 16.2109 23.5 16.3164 22.375 16.3164C21.2148 16.3164 18.7533 16.2109 17.7344 16.6328C17.0312 16.9141 16.5039 17.4414 16.2227 18.1094C15.8008 19.1641 15.9062 21.625 15.9062 22.75C15.9062 23.9102 15.8008 26.3711 16.2227 27.3906C16.5039 28.0938 17.0312 28.6211 17.7344 28.9023C18.7539 29.3242 21.2148 29.2188 22.375 29.2188C23.5 29.2188 25.9609 29.3242 27.0156 28.9023C27.6836 28.6211 28.2461 28.0938 28.4922 27.3906Z" fill="white" />
                </svg>
            ),
        },
        {
            label: "Facebook",
            url: data.socialLinks?.facebook || "#",
            svg: (
                <svg width="62" height="62" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5625" y="0.5625" width="43.875" height="43.875" stroke="white" strokeWidth="1.125" />
                    <path d="M30.25 21.1328H30.2148C28.5977 21.1328 27.1211 20.6406 25.9258 19.7617V26.0547C25.9258 29.2188 23.3594 31.75 20.1953 31.75C17.0312 31.75 14.5 29.2188 14.5 26.0547C14.5 22.8906 17.0312 20.3242 20.1953 20.3242C20.4766 20.3242 20.7227 20.3594 21.0039 20.3945V23.5586C20.7227 23.4531 20.4766 23.418 20.1953 23.418C18.7539 23.418 17.5586 24.6133 17.5586 26.0547C17.5586 27.4961 18.7539 28.6914 20.1953 28.6914C21.6367 28.6914 22.832 27.4961 22.832 26.0547V13.75H25.9258C25.9258 13.7852 25.9258 13.7852 25.9258 13.8203C25.9258 14.0664 25.9258 14.3125 25.9961 14.5586C26.207 15.7188 26.9102 16.7383 27.8945 17.3711C28.5625 17.8281 29.3711 18.0742 30.2148 18.0742C30.2148 18.0742 30.2148 18.0742 30.25 18.0742V21.1328Z" fill="white" />
                </svg>
            ),
        },
        {
            label: "Twitter",
            url: data.socialLinks?.twitter || "#",
            svg: (
                <svg width="62" height="62" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5625" y="0.5625" width="43.875" height="43.875" stroke="white" strokeWidth="1.125" />
                    <path d="M29.6367 19.0938C29.6367 19.2695 29.6367 19.4102 29.6367 19.5859C29.6367 24.4727 25.9453 30.0625 19.1602 30.0625C17.0508 30.0625 15.1172 29.4648 13.5 28.4102C13.7812 28.4453 14.0625 28.4805 14.3789 28.4805C16.1016 28.4805 17.6836 27.8828 18.9492 26.8984C17.332 26.8633 15.9609 25.8086 15.5039 24.332C15.75 24.3672 15.9609 24.4023 16.207 24.4023C16.5234 24.4023 16.875 24.332 17.1562 24.2617C15.4688 23.9102 14.2031 22.4336 14.2031 20.6406V20.6055C14.6953 20.8867 15.293 21.0273 15.8906 21.0625C14.8711 20.3945 14.2383 19.2695 14.2383 18.0039C14.2383 17.3008 14.4141 16.668 14.7305 16.1406C16.5586 18.3555 19.3008 19.832 22.3594 20.0078C22.2891 19.7266 22.2539 19.4453 22.2539 19.1641C22.2539 17.125 23.9062 15.4727 25.9453 15.4727C27 15.4727 27.9492 15.8945 28.6523 16.6328C29.4609 16.457 30.2695 16.1406 30.9727 15.7188C30.6914 16.5977 30.1289 17.3008 29.3555 17.7578C30.0938 17.6875 30.832 17.4766 31.4648 17.1953C30.9727 17.9336 30.3398 18.5664 29.6367 19.0938Z" fill="white" />
                </svg>
            ),
        },
    ];

    const logoUrl = data.logo ? urlFor(data.logo).url() : "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/We%20Help%20Small%20Businesses%20%281%29%201%20%282%29.webp";
    const bottomLogoUrl = data.bottomLogo ? urlFor(data.bottomLogo).url() : "https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Logo%20image%20peckers.png";

    return (
        <footer className="w-full bg-black pt-[10vw] md:pt-[6vw] lg:pt-[3vw] xl:pt-[3vw] pb-[6vw] md:pb-[4vw] lg:pb-[2vw] xl:pb-[1vw] mt-[5vw] md:mt-[4vw] xl:mt-[3vw] overflow-clip">
            <div
                className="w-full mx-auto px-[5vw] md:px-[4vw] lg:px-[2vw] xl:px-[.5vw] gap-[8vw] md:gap-[4vw] lg:gap-[2vw] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-start text-white border-b border-[#262626] pb-[10vw] md:pb-[8vw] lg:pb-[5vw]"
            >
                {/* Left Section */}
                <div className="flex flex-col items-start w-full md:w-[45%] lg:w-1/4 mb-[6vw] lg:mb-0">

                    {/* ── MOBILE: logo → tagline → social SVGs (left-aligned) ── */}
                    <div className="flex md:hidden flex-col items-start justify-start ml-[-1vw] w-full mb-[5vw] gap-[3vw]">
                        {/* Logo (mobile, left-aligned, not circular) */}
                        <img
                            src={logoUrl}
                            alt="Peckers Logo"
                            className="w-[40vw] ml-[-3vw] h-auto object-contain"
                        />
                        {/* Single-line tagline */}
                        <p
                            className="text-[#E3E3E3] font-mono text-[3.5vw] leading-snug text-left"
                            style={{ letterSpacing: "0.09em", fontWeight: "300" }}
                        >
                            {data.tagline || <>Seriously good chicken.&nbsp; Est. 2023.</>}
                        </p>
                    </div>

                    {/* ── DESKTOP (md+): original full-size logo + multi-line text ── */}
                    <div className="hidden md:flex items-center mb-[3vw] lg:mb-[2vw] xl:mb-0">
                        <img
                            src={logoUrl}
                            alt="Peckers Logo"
                            className="md:w-[35vw] lg:w-[20vw] xl:w-[16vw] h-auto object-contain md:mr-3"
                        />
                    </div>
                    <p
                        className="hidden md:block text-[#E3E3E3] px-[1vw] lg:px-[0.5vw] font-mono mb-[4vw] lg:mb-[2vw] xl:mb-[1.3vw] leading-snug md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1vw] text-left w-full whitespace-pre-line"
                        style={{ letterSpacing: "0.09em", fontWeight: "300" }}
                    >
                        {data.tagline?.includes("\n") ? data.tagline : data.tagline?.replace(/\./g, ".\n") || <>Seriously good <br /> chicken. <br /> Est. 2023.</>}
                    </p>

                    {/* Social buttons (unchanged for both breakpoints) */}
                    <div className="flex space-x-[4vw] md:space-x-[3vw] lg:space-x-[1.5vw] xl:space-x-3 w-full justify-start md:justify-start mt-1 px-0 md:px-[1vw] lg:px-[0.5vw]">
                        {socialButtons.map((data) => (
                            <a
                                key={data.label}
                                href={data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] lg:w-[4.5vw] lg:h-[4.5vw] xl:w-11 xl:h-11 bg-[#161616] flex items-center justify-center rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] xl:rounded-[0.5vw] transition-all duration-200 hover:scale-110 hover:bg-[#232323] hover:shadow-[0_4px_28px_0_rgba(196,23,24,0.12)]"
                                aria-label={data.label}
                            >
                                <div className="scale-[1.2] md:scale-100 flex items-center justify-center w-full h-full">
                                    {data.svg}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links + Locations: side-by-side on mobile, normal on desktop */}
                <div className="flex flex-row gap-[5vw] w-full md:contents">

                    {/* Quick Links */}
                    <div className="flex flex-col w-1/2 md:w-[45%] lg:w-1/4 mt-[4vw] md:mt-0 xl:mt-[1.6vw] mb-[6vw] lg:mb-0 items-start md:items-start text-left md:text-left">
                        <h3
                            className="font-bold text-white text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.8vw] xl:text-[1.2vw] uppercase tracking-wide mb-[3vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[1vw] leading-none"
                            style={{ letterSpacing: "0.06em" }}
                        >
                            <span>Quick Links</span>
                        </h3>
                        <div
                            className="bg-[#333] mt-0 mb-[4vw] md:mb-[3vw] lg:mb-[2.5vw] xl:mb-[1.8vw] w-full md:w-[60%] lg:w-[40%] xl:w-[35%] md:max-w-none lg:max-w-[160px] xl:max-w-[140px] h-[2px] md:h-[1.5px] lg:h-px border-none rounded-lg"
                        />
                        <ul className="space-y-[3vw] md:space-y-[2vw] lg:space-y-[1.2vw] xl:space-y-[1vw] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] font-normal text-[#a9adb8] w-full">
                            {data.quickLinks?.length > 0 ? data.quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.url}
                                        className="hover:underline inline-block"
                                        style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            )) : (
                                <>
                                    <li><a href="#" className="hover:underline inline-block" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Our Menu</a></li>
                                    <li><a href="#" className="hover:underline inline-block" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Find Us</a></li>
                                    <li><a href="#" className="hover:underline inline-block" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Our Secret</a></li>
                                    <li><a href="#" className="hover:underline inline-block" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Careers</a></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div className="flex flex-col w-1/2 md:w-[45%] lg:w-1/4 mb-[6vw] lg:mb-0 mt-[4vw] md:mt-[1.3vw] items-start md:items-start text-left md:text-left">
                        <h3
                            className="font-bold text-white text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.8vw] xl:text-[1.2vw] uppercase tracking-wide mb-[3vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[1vw] leading-none"
                            style={{ letterSpacing: "0.06em" }}
                        >
                            Locations
                        </h3>
                        <div
                            className="bg-[#333] mt-0 mb-[4vw] md:mb-[3vw] lg:mb-[2.5vw] xl:mb-[1.8vw] w-full md:w-[60%] lg:w-[40%] xl:w-[35%] md:max-w-none lg:max-w-[160px] xl:max-w-[140px] h-[2px] md:h-[1.5px] lg:h-px border-none rounded-lg"
                        />
                        <div
                            className="space-y-[3vw] md:space-y-[2vw] lg:space-y-[1.2vw] xl:space-y-[1vw] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] text-[#a9adb8] leading-snug font-normal w-full"
                            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                        >
                            {data.locations?.length > 0 ? data.locations.map((loc, idx) => (
                                <div key={idx}>{loc}</div>
                            )) : (
                                <>
                                    <div>Hitchin</div>
                                    <div>Stevenage</div>
                                </>
                            )}
                            <div>
                                <a
                                    href="#"
                                    className="underline decoration-[#C41718] decoration-1 underline-offset-[1vw] md:underline-offset-4 lg:underline-offset-2 text-[#C41718] hover:text-[#f22] transition-colors inline-block mt-[1vw] md:mt-[2vw] lg:mt-0"
                                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                                >
                                    View All Locations
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Boring Stuff Column */}
                <div className="flex flex-col w-full md:w-[45%] lg:w-1/4 mb-[6vw] mt-[4vw] md:mt-[1.3vw] lg:mb-0 items-start md:items-start text-left md:text-left">
                    {/* Hidden on mobile, shown on desktop */}
                    <h3
                        className="hidden md:block font-bold text-white text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.8vw] xl:text-[1.2vw] uppercase tracking-wide mb-[3vw] md:mb-[2vw] lg:mb-[1.5vw] xl:mb-[1vw] leading-none"
                        style={{ letterSpacing: "0.06em" }}
                    >
                        Information
                    </h3>
                    <div
                        className="hidden md:block bg-[#333] mt-0 mb-[4vw] md:mb-[3vw] lg:mb-[2.5vw] xl:mb-[1.8vw] w-[40vw] md:w-[60%] lg:w-[40%] xl:w-[41%] max-w-[200px] md:max-w-none lg:max-w-[160px] xl:max-w-[140px] h-[2px] md:h-[1.5px] lg:h-px border-none rounded-lg"
                    />
                    <ul className="space-y-[4vw] md:space-y-[2vw] lg:space-y-[1.5vw] xl:space-y-[1.2vw] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] font-mono text-[#B7BAC8] w-full">
                        {data.legalLinks?.length > 0 ? data.legalLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url} className="hover:underline inline-block">
                                    {link.title}
                                </a>
                            </li>
                        )) : (
                            <>
                                <li><a href="#" className="hover:underline inline-block">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline inline-block">Terms of Service</a></li>
                                <li><a href="#" className="hover:underline inline-block">Allergen Info</a></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            <div className="w-full bg-black text-[#586676] text-[10px] md:text-[0.8vw] tracking-tight font-mono px-6 py-6 md:px-[1vw] md:py-[2.5vw] flex flex-col md:flex-row justify-between items-center border-t border-[#151515] gap-3 md:gap-0">
                <div className="mb-1 md:mb-0 text-center md:text-left">
                    {data.copyright || "© 2024 Peckers Chicken Ltd. All rights reserved. Do not steal our sauce recipe."}
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

            {/* Final bottom logo */}
            <div className="flex-1 flex items-center">
                <div className="w-full flex justify-center items-center py-8 bg-black">
                    <img
                        src={bottomLogoUrl}
                        alt="Peckers Logo"
                        className="max-w-[80%] w-full"
                        style={{ filter: "brightness(1)" }}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
