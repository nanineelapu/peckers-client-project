"use client";
import React from "react";

export default function LocationAddress({ data, location }) {
    // If no data provided for this section, display a subtle warning or return null
    if (!data) {
        return (
            <div className="w-full flex justify-center py-12 opacity-20 font-mono text-[10px] tracking-widest">
                [ MAP CONFIGURATION MISSING FOR {location?.toUpperCase()} ]
            </div>
        );
    }

    return (
        <section>
            <div className="flex justify-center items-center min-h-[90vh] mt-6">
                <div
                    className="bg-[#121212] rounded-[18px] px-[6vw] md:px-[5vw] py-[8vw] md:py-[4vw] gap-[8vw] md:gap-[2vw] flex flex-col md:flex-row shadow-lg h-auto md:h-[77vh] w-[90vw] md:w-[72vw]"
                    style={{ border: '1px solid #333' }}
                >
                    {/* Left Side (Info) */}
                    <div
                        className="flex flex-col w-full md:w-[50%] pr-0 md:pr-[2vw] mr-0 md:mr-[1vw]"
                        style={{ background: 'transparent' }}
                    >
                        <div className="text-white text-[8vw] md:text-[3.6vw] tracking-[0.1vw] font-bold uppercase" style={{ fontFamily: "var(--font-peakers)", lineHeight: "1.1" }}>
                            {data.name}
                        </div>
                        <div className="flex items-center gap-[4vw] md:gap-[1vw] mt-7 mb-2">
                            <svg className="w-[6vw] h-[7.5vw] md:w-[20px] md:h-[25px] min-w-[20px]" viewBox="0 0 20 25" fill="none">
                                <path d="M10 12.5C10 12.5 10.1719 12.5 10.5156 12.5C10.8594 12.5 11.276 12.2552 11.7656 11.7656C12.2552 11.276 12.5 10.6875 12.5 10C12.5 9.3125 12.2552 8.72396 11.7656 8.23438C11.276 7.74479 10.6875 7.5 10 7.5C9.3125 7.5 8.72396 7.74479 8.23438 8.23438C7.74479 8.72396 7.5 9.3125 7.5 10C7.5 10.6875 7.74479 11.276 8.23438 11.7656C8.72396 12.2552 9.3125 12.5 10 12.5ZM10 21.6875C12.5417 19.3542 14.4271 17.2344 15.6562 15.3281C16.8854 13.4219 17.5 11.7292 17.5 10.25Z" fill="white" />
                                <path d="M10 25C6.64583 22.1458 4.14062 19.4948 2.48438 17.0469C0.828125 14.599 0 12.3333 0 10.25C0 7.125 1.00521 4.63542 3.01562 2.78125C5.02604 0.927084 7.35417 1.90735e-06 10 1.90735e-06C12.6458 1.90735e-06 14.974 0.927084 16.9844 2.78125C18.9948 4.63542 20 7.125 20 10.25C20 12.3333 19.1719 14.599 17.5156 17.0469C15.8594 19.4948 13.3542 22.1458 10 25Z" fill="white" fillOpacity="0.2" />
                            </svg>
                            <div className="text-[#e3e3e5]/80 text-[4vw] md:text-[1.1vw] py-[1vw] font-mono leading-relaxed">
                                {data.address?.split("\n").map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </div>
                        </div>
                        <br />
                        <div className="flex items-center gap-[4vw] md:gap-[1.3vw] mb-2">
                            <svg className="w-[7.5vw] h-[10.5vw] md:w-[25px] md:h-[35px] min-w-[25px]" viewBox="0 0 25 25" fill="none">
                                <path d="M12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5ZM16.625 18.375L18.375 16.625L13.75 12V6.25H11.25V13L16.625 18.375Z" fill="white" />
                                <circle cx="12.5" cy="12.5" r="10" stroke="white" strokeOpacity="0.1" />
                            </svg>
                            <div className="text-[#e3e3e5]/80 text-[4vw] md:text-[1.1vw] font-mono leading-relaxed ">
                                {data.hours?.split("\n").map((line, i, arr) => (
                                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                ))}
                            </div>
                        </div>
                        <br />
                        <div className="flex items-center gap-[4vw] md:gap-[1vw] mb-4 text-white hover:text-white/60 transition-colors">
                            <svg className="w-[7vw] h-[7vw] md:w-[23px] md:h-[23px] min-w-[23px]" viewBox="0 0 23 23" fill="none">
                                <path d="M21.1875 22.5C18.5833 22.5 16.0104 21.9323 13.4688 20.7969C10.9271 19.6615 8.61458 18.0521 6.53125 15.9688C4.44792 13.8854 2.83854 11.5729 1.70312 9.03125C0.567708 6.48958 0 3.91667 0 1.3125" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="18" y="4" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.1" />
                            </svg>
                            <a href={`tel:${data.phone}`} className="text-[#e3e3e5] text-[4vw] md:text-[1.1vw] font-mono hover:underline">{data.phone}</a>
                        </div>

                        <div className="flex flex-col md:flex-row gap-[4vw] md:gap-4 py-[4vw] md:py-[4vw] mt-auto">
                            {data.clickCollectUrl && (
                                <a
                                    href={data.clickCollectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto text-[#fff] px-[6vw] md:px-[2vw] py-[4vw] md:py-[1vw] rounded-xl text-[4vw] md:text-[1.1vw] tracking-widest transition-all duration-500 hover:bg-white hover:text-black border-2 border-white/20 text-center uppercase font-mono"
                                >
                                    CLICK & COLLECT
                                </a>
                            )}
                            {data.deliveryUrl && (
                                <a
                                    href={data.deliveryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto text-black px-[6vw] md:px-[2.5vw] font-bold py-[4vw] md:py-[1vw] rounded-xl text-[4.2vw] md:text-[1.1vw] tracking-widest transition-all duration-500 hover:bg-white/90 bg-white text-center uppercase font-mono shadow-2xl"
                                >
                                    DELIVERY
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Map Section */}
                    <div
                        className="map-interactive h-[40vh] md:h-full w-full md:w-[50%] rounded-[2vw] md:rounded-[1.2vw] flex items-center justify-center mt-[4vw] md:mt-0 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 bg-[#080808]"
                        style={{ border: '1px solid #222' }}
                    >
                        {data.mapEmbed ? (
                            <iframe
                                src={data.mapEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Peckers Location Map"
                            />
                        ) : (
                            <div className="text-[.6vw] opacity-20 uppercase font-mono tracking-tighter">Iframe preview unavailable</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
