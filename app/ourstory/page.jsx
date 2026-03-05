"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import OurStorySection from "./OurStorySection";
import StoryCircle from "./StoryCircle";
import ActualCircle from "./ActualCircle";
import JourneyIntroSection from "./JourneyHeader";
import OurStoryFooter from "./OurStoryFooter";
import ActualCircle2 from "./ActualCircle2";
import MobileRoadmap from "./MobileRoadmap";
import Navbar from "../Navbar";

const OurStoryPage = () => {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);

  return (
    <div id="main-content">
      <Navbar />

      <OurStorySection />
      <MobileRoadmap />
      <div className="hidden md:block">
        <StoryCircle />
        <ActualCircle />
        <br />
        <div className="w-full relative flex justify-center mt-[0vw] md:mt-[0vw] pt-[0vw] min-h-[50vw] md:min-h-[16vw]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
            <div className="absolute px-[] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[30vw] md:w-[15vw]">
              <img src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Logo%20image%20peckers.png" alt="" className="w-full h-auto" />
            </div>
            <svg width="1038" height="454" viewBox="0 0 1038 454" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[90vw] md:w-[60vw] h-auto">
              <g opacity="0.6" filter="url(#filter0_d_297_13)">
                <path d="M20 227C20 112.677 112.677 20 227 20H811C925.323 20 1018 112.677 1018 227C1018 341.323 925.323 434 811 434H227C112.677 434 20 341.323 20 227Z" fill="white" fillOpacity="0.01" shapeRendering="crispEdges" />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M227 21H811C924.771 21 1017 113.229 1017 227C1017 340.771 924.771 433 811 433H227C113.229 433 21 340.771 21 227C21 113.674 112.51 21.7204 225.668 21.0039L227 21Z" stroke="white" strokeWidth="2" shapeRendering="crispEdges"
                />
              </g>
              <motion.g filter="url(#filter1_d_297_13)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
                <rect x="514" y="12" width="16" height="16" rx="8" fill="black" />
                <rect x="515" y="13" width="14" height="14" rx="7" stroke="white" strokeWidth="2" />
              </motion.g>
              <motion.g filter="url(#filter2_d_297_13)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }}>
                <rect x="889" y="31" width="16" height="16" rx="8" fill="black" />
                <rect x="890" y="32" width="14" height="14" rx="7" stroke="white" strokeWidth="2" />
              </motion.g>
              <motion.g filter="url(#filter3_d_297_13)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8 }}>
                <rect x="882" y="407" width="16" height="16" rx="8" fill="black" />
                <rect x="883" y="408" width="14" height="14" rx="7" stroke="white" strokeWidth="2" />
              </motion.g>
              <motion.g filter="url(#filter4_d_297_13)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.1 }}>
                <rect x="514" y="426" width="16" height="16" rx="8" fill="black" />
                <rect x="515" y="427" width="14" height="14" rx="7" stroke="white" strokeWidth="2" />
              </motion.g>
              <motion.g filter="url(#filter5_d_297_13)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.4 }}>
                <rect x="168" y="418" width="16" height="16" rx="8" fill="black" />
                <rect x="169" y="419" width="14" height="14" rx="7" stroke="white" strokeWidth="2" />
              </motion.g>
              <motion.g filter="url(#filter6_d_297_13)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.7 }}>
                <rect x="138" y="31" width="16" height="16" rx="8" fill="black" />
                <rect x="139" y="32" width="14" height="14" rx="7" stroke="white" strokeWidth="2" />
              </motion.g>
              <defs>
                <filter id="filter0_d_297_13" x="0" y="0" width="1038" height="454" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
                <filter id="filter1_d_297_13" x="506" y="4" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
                <filter id="filter2_d_297_13" x="881" y="23" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
                <filter id="filter3_d_297_13" x="874" y="399" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
                <filter id="filter4_d_297_13" x="506" y="418" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
                <filter id="filter5_d_297_13" x="160" y="410" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
                <filter id="filter6_d_297_13" x="130" y="23" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_13" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_297_13" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <ActualCircle2 />
      </div>

      <JourneyIntroSection />



      <OurStoryFooter />
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

export default OurStoryPage;