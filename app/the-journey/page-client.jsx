"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import OurStorySection from "./OurStorySection";
import StoryCircle from "./StoryCircle";
import ActualCircle from "./ActualCircle";
import ActualCircle2 from "./ActualCircle2";
import MobileRoadmap from "./MobileRoadmap";
import JourneyIntroSection from "./JourneyHeader";

const OurStoryPage = ({ initialStoryData }) => {
  const { pageData, bottomPageData, bottomTimeline } = initialStoryData || {};

  return (
    <div id="main-content">

      <OurStorySection initialData={pageData} />
      
      <MobileRoadmap initialData={bottomPageData?.mobileRoadmap} />

      <div className="hidden lg:block">
        <StoryCircle initialData={pageData} />
        
        <ActualCircle initialData={pageData} />
        
        <br />
        <div className="w-full relative flex justify-center mt-0 md:mt-0 pt-0 min-h-[50vw] md:min-h-[16vw]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[30vw] md:w-[15vw]"
            >
              <img src="https://ehtazgziwtjqm5ww.public.blob.vercel-storage.com/Logo%20image%20peckers.png" alt="Peckers Logo" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>
            <svg width="1038" height="454" viewBox="0 0 1038 454" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[90vw] md:w-[60vw] h-auto">
              {/* SVG paths remain the same as previous version */}
              <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }} filter="url(#filter0_d_297_13)">
                <path d="M20 227C20 112.677 112.677 20 227 20H811C925.323 20 1018 112.677 1018 227C1018 341.323 925.323 434 811 434H227C112.677 434 20 341.323 20 227Z" fill="transparent" shapeRendering="crispEdges" />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                  d="M227 21H811C924.771 21 1017 113.229 1017 227C1017 340.771 924.771 433 811 433H227C113.229 433 21 340.771 21 227C21 113.674 112.51 21.7204 225.668 21.0039L227 21Z" stroke="white" strokeWidth="2" shapeRendering="crispEdges"
                />
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
              </defs>
            </svg>
          </div>
        </div>
        <ActualCircle2 initialData={bottomTimeline} />
      </div>

      <JourneyIntroSection initialData={bottomPageData?.journeySection} />

    </div >
  )
}

export default OurStoryPage;