import React from 'react'
import EnquiriesSection from './EnquireSection'
import LocationFooter from './LocationFooter'
import LocationAddress from './LocationAddress'

const page = () => {
    return (
        <div id="main-content" className='z-9999' style={{ color: 'white' }}>



            <div className="w-full flex flex-col items-center justify-center" style={{ background: "#bbbbbb", minHeight: "70vh" }}>
                <div className="text-white text-[10vw] font-bold leading-tight" style={{ fontFamily: "var(--font-peakers)", letterSpacing: '0.1em', }}>
                    HITCHIN
                </div>
                <div className="mt-2 text-[#b2bac8] text-[3vw] italic" style={{ fontFamily: "var(--font-peakers)" }}>
                    (HERO VIDEO)
                </div>
            </div>

            <LocationAddress />

            <section id='history'>
                <div className="flex flex-col items-center mt-[6vw] justify-center w-full  pt-[2vw] pb-[4vw] bg-[#0A0A0B]">
                    <div className="flex flex-col items-center w-[80vw]">
                        {/* History Title, Logo, EST */}
                        <div className="flex flex-row  items-center mb-[1.6vw] mr-[16vw]">
                            <div
                                className="relative w-[10vw] h-[10vw] flex items-center justify-center mb-[0.8vw]"
                                style={{ alignSelf: 'flex-start', marginRight: '44vw' }}
                            >
                                <img
                                    src="https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/public/Peckers%20Sub%20pages%20Bucket/Location%20logo%20png.png"
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
                            </div>
                            <div className="flex absolute flex-col items-center ml-[28vw] mt-[2vw]">
                                <div className="flex items-center mb-[0.3vw]">
                                    <span
                                        className="h-[1.2px] w-[3vw] bg-[#555] opacity-70 mr-[1vw]"
                                        aria-hidden="true"
                                    ></span>
                                    <span
                                        className="text-[#888] text-[0.95vw] tracking-[0.22em] font-mono"
                                        style={{ fontFamily: "monospace, 'Share Tech', 'ShareTech', 'Share_Tech', 'ShareTechMono'" }}
                                    >
                                        EST. 2023
                                    </span>
                                    <span
                                        className="h-[1.2px] w-[3vw] bg-[#555] opacity-70 ml-[1vw]"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                                <h2
                                    className="font-bold text-[4.5vw] font-peakers text-[#fff] mt-[0.2vw] tracking-[0.05em]"
                                >
                                    HISTORY
                                </h2>
                            </div>
                        </div>
                        {/* History Details */}
                        <div className="w-full flex justify-center">
                            <p
                                className="text-[#e3e3e5]/70 text-center font-extralight 
               leading-[1.6] text-[1vw] 
               max-w-[70vw] 
               font-mono"
                            >
                                Hitchin has always had a rebellious spirit, and so do we. Nestled right in the heart of John Barker Place, this spot
                                isn't just a kitchen—it's where the Peckers revolution began for this side of town. We took an old, forgotten space
                                and turned it into a high-octane flavor lab. Serving serious chicken to serious people, our Hitchin location is the
                                Hero Kitchen that sets the standard for everything we do. Rough around the edges, perfect on the plate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <EnquiriesSection />
            <LocationFooter />

            {/* Boring Stuff */}

            <div className="w-full bg-black text-[#586676] text-[0.8vw] tracking-tight font-mono px-[1vw] py-[2.5vw] flex flex-col md:flex-row justify-between items-center border-t border-[#151515]">
                <div className="mb-1 md:mb-0">
                    © 2024 Peckers Chicken Ltd. All rights reserved. Do not steal our  sauce recipe.
                </div>


                <div className="text-[0.8vw] flex flex-row flex-wrap items-center space-x-2 px-4">
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
            <div className="flex-1 flex items-center">

                <div className="w-full flex justify-center items-center py-8 bg-[#000]">
                    <img
                        src="https://masizvgutzgmuetrzfyk.supabase.co/storage/v1/object/sign/PEACKERS%20CLIENT/We%20Help%20Small%20Businesses%20(1)%201%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYWE5ZjEwMy04N2RlLTQzMTItYjc4ZC01YjhjZTZkNWJiNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQRUFDS0VSUyBDTElFTlQvV2UgSGVscCBTbWFsbCBCdXNpbmVzc2VzICgxKSAxICgxKS5wbmciLCJpYXQiOjE3NzE0NzI4MTAsImV4cCI6MTgwMzAwODgxMH0.HrmF768KQ1gl03PqkOLT5RVDs9vNepoEBITd-V-4C80"
                        alt="Peckers Logo"
                        className="max-w-[80%] w-full"
                        style={{ filter: "brightness(1)" }}
                    />
                </div>
            </div>








        </div>
    )
}

export default page