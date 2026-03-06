"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import OurStorySection from "./OurStorySection";
import StoryCircle from "./StoryCircle";
import ActualCircle from "./ActualCircle";
import JourneyIntroSection from "./JourneyHeader";
import ActualCircle2 from "./ActualCircle2";
import MobileRoadmap from "./MobileRoadmap";
import Navbar from "../Navbar";
import Footer from "../Footer";

const OurStoryPage = () => {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);

  return (
    <div id="main-content">

      <OurStorySection />
      <MobileRoadmap />
      <div className="hidden lg:block">
        <StoryCircle />
        <ActualCircle />
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


    </div >
  )
}

export default OurStoryPage;