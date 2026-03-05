"use client";

import React, { useState } from "react";
import UniquenessLandingPage from "./LandingPage";
import SubSections from "./SubSections";
import SubFooter from "./SubFooter";
import Navbar from "../Navbar";
import Footer from "../Footer";

const page = () => {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  return (
    <div id="main-content">
      <Navbar />

      <UniquenessLandingPage />
      <SubSections />

      <SubFooter />

      {/* Footer of the Page  */}

      <Footer />


      <div className="w-full bg-black text-[#586676] text-[10px] md:text-[0.8vw] tracking-tight font-mono px-6 py-6 md:px-[1vw] md:py-[2.5vw] flex flex-col md:flex-row justify-between items-center border-t border-[#151515] gap-3 md:gap-0">
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
      <div className="flex-1 flex items-center">

        <div className="w-full flex justify-center items-center py-8 bg-[#000]">
          <img
            src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Logo%20image%20peckers.png"
            alt="Peckers Logo"
            className="max-w-[80%] w-full"
            style={{ filter: "brightness(1)" }}
          />
        </div>
      </div>





    </div>
  )
}

export default page;