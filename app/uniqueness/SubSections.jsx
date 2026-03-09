"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

const SubSections = () => {
  const [sectionsData, setSectionsData] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "uniquenessSubSection"][0].sections`;
        const data = await client.fetch(query);
        if (data) {
          setSectionsData(data);
        }
      } catch (error) {
        console.error("Error fetching sub sections data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!sectionsData || sectionsData.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col">
      {sectionsData.map((section, index) => {
        const num = index + 1;
        const isAlternate = index % 2 !== 0;
        const isExpanded = expandedSections[index] || false;

        return (
          <section
            key={index}
            className={`w-full h-auto md:h-screen flex flex-col ${isAlternate ? "md:flex-row-reverse" : "md:flex-row"
              } bg-black`}
          >
            {/* IMAGE SECTION */}
            <div className="w-full md:w-[65%] h-[90vw] sm:h-[70vw] md:h-full relative overflow-hidden flex items-center justify-center bg-black">
              {section.image && (
                <Image
                  src={urlFor(section.image).url()}
                  alt={section.title || `Section ${num}`}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  priority={index === 0}
                />
              )}
            </div>

            {/* CONTENT SECTION */}
            <div
              className={`w-full md:w-[35%] h-[max-content] md:h-full text-white flex flex-col`}
              style={{
                backgroundColor: index % 2 === 0 ? "#111111" : "#000000",
              }}
            >
              <motion.div
                className={`w-full h-full flex flex-col px-[6vw] md:px-[7vw] leading-normal py-[6vw] sm:py-[8vw] md:py-[3vw]`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {/* PERSISTENT HEADER */}
                <div className="flex flex-col justify-end mb-[4vw] md:mb-[2vw] pt-[6vw] md:pt-[2vw]">
                  <p
                    className="text-[#FFD700] font-semibold text-[3.5vw] md:text-[0.95vw] font-mono tracking-[0.8vw] md:tracking-[0.2vw] mb-[2vw] md:mb-[1vw]"
                    style={{ fontFamily: "space mono" }}
                  >
                    {num.toString().padStart(2, "0")}
                  </p>

                  <div
                    className={`w-full flex justify-start items-end ${index === 1
                      ? "min-h-[40vw] md:min-h-[14vw]"
                      : [2, 3, 5, 6, 7, 8].includes(index)
                        ? "min-h-[32vw] md:min-h-[16vw]"
                        : index === 4
                          ? "min-h-[24vw] md:min-h-[12vw]"
                          : "min-h-[16vw] md:min-h-[8vw]"
                      }`}
                  >
                    <h2
                      className={`anton-regular leading-none uppercase tracking-tight ${index === 1
                        ? "text-[7.5vw] md:text-[3.2vw]"
                        : "text-[10vw] md:text-[4.5vw]"
                        }`}
                    >
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* SCROLLABLE TEXT CONTENT */}
                <div
                  className={`w-full flex-1 ${isExpanded ? "overflow-y-auto custom-scrollbar" : "overflow-hidden"
                    }`}
                  {...(isExpanded ? { "data-lenis-prevent": true } : {})}
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="max-w-[90vw] md:max-w-[100%] pb-[2vw]">
                    {/* Preview text — visible, clamped when collapsed */}
                    <p
                      className={`text-[#9CA3AF] font-normal w-full text-[4.2vw] leading-[6vw] md:text-[1.1vw] md:leading-[1.95vw] ${!isExpanded ? "line-clamp-3" : ""
                        }`}
                    >
                      {section.previewText}
                    </p>

                    {/* Expanded text — revealed with animation */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key={`expanded-${index}`}
                          initial={{ clipPath: "inset(100% 0 0 0)" }}
                          animate={{ clipPath: "inset(0% 0 0 0)" }}
                          exit={{ clipPath: "inset(100% 0 0 0)" }}
                          transition={{
                            duration: 0.65,
                            ease: [0.77, 0, 0.175, 1],
                          }}
                          className="overflow-hidden mt-[3vw] md:mt-[1.2vw] pb-[2vw] md:pb-[1vw]"
                        >
                          <p className="text-[#9CA3AF] font-normal w-full text-[4.2vw] leading-[6vw] md:text-[1.1vw] md:leading-[1.95vw]">
                            {section.expandedText}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggleSection(index)}
                      className="text-[#FFD700] font-mono mt-[3vw] md:mt-[1.5vw] text-[3vw] md:text-[0.85vw] tracking-wider text-left underline pb-[4vw] md:pb-[1vw] hover:text-white transition-colors duration-300"
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={isExpanded ? "less" : "more"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isExpanded ? "↑ Read Less" : "Read More ↓"}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                {/* PERSISTENT FOOTER */}
                <div className="mt-auto">
                  <div className="w-full md:w-[20.8vw] h-[1px] md:h-[0.04vw] relative bg-gray-600 mt-[4vw] md:mt-[1.5vw] mb-[6vw] md:mb-[2vw]" />
                  <p
                    className="flex text-[2.8vw] md:text-[0.8vw] items-center gap-[2vw] md:gap-[.9vw] tracking-[0.4vw] md:tracking-[0.09vw] font-mono relative text-gray-500 pb-[4vw] md:pb-[2vw]"
                    style={{ fontFamily: "space mono" }}
                  >
                    <span className="opacity-40">
                      {index === 0 && ( // Secret Lock
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 7C5.17157 7 4.5 7.67157 4.5 8.5C4.5 9.32843 5.17157 10 6 10C6.82843 10 7.5 9.32843 7.5 8.5C7.5 7.67157 6.82843 7 6 7Z" fill="white" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M3 5H2C0.89543 5 0 5.89543 0 7V12C0 13.1046 0.89543 14 2 14H10C11.1046 14 12 13.1046 12 12V7C12 5.89543 11.1046 5 10 5H9V4C9 2.34315 7.65685 1 6 1C4.34315 1 3 2.34315 3 4V5ZM4.5 4V5H7.5V4C7.5 3.17157 6.82843 2.5 6 2.5C5.17157 2.5 4.5 3.17157 4.5 4Z" fill="white" />
                        </svg>
                      )}
                      {index === 1 && ( // Heart/Kid
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 12L6.025 11.085C2.45 7.76625 0 5.4825 0 2.7C0 1.185 1.155 0 2.625 0C3.4125 0 4.165 0.375 4.6375 0.9675L7 3.735L9.3625 0.9675C9.835 0.375 10.5875 0 11.375 0C12.845 0 14 1.185 14 2.7C14 5.4825 11.55 7.76625 7.975 11.085L7 12Z" fill="white" />
                        </svg>
                      )}
                      {index === 2 && ( // Flame
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.516 0.364C6.41 -0.056 5.59 -0.056 5.484 0.364C5.071 1.995 4.025 2.87 3.018 3.725C2.062 4.538 1.181 5.286 1.181 6.825C1.181 9.475 3.325 11.625 6 11.625C8.675 11.625 10.819 9.475 10.819 6.825C10.819 5.286 9.938 4.538 8.982 3.725C7.975 2.87 6.929 1.995 6.516 0.364ZM6 10.312C5.068 10.312 4.312 9.556 4.312 8.625C4.312 8.356 4.375 8.1 4.49 7.87C4.694 7.46 5.12 7.18 6 6.82V6.825C6.88 7.185 7.306 7.465 7.51 7.875C7.625 8.105 7.688 8.361 7.688 8.63C7.688 9.563 6.931 10.312 6 10.312Z" fill="white" />
                        </svg>
                      )}
                      {index === 3 && ( // Clock
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM5.25 3H6.75V6.375L9.18723 7.81735L8.43777 9.08265L5.25 7.2V3Z" fill="white" />
                        </svg>
                      )}
                      {index === 4 && ( // Shield/Verified
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 0L0 2.25V6.825C0 8.725 0.565625 10.4531 1.69687 12.0094C2.82812 13.5656 4.2625 14.5625 6 15V13.425C4.7 13.0125 3.625 12.1875 2.775 10.95C1.925 9.7125 1.5 8.3375 1.5 6.825V3.28125L6 1.59375L10.5 3.28125V6.825C10.5 8.3375 10.075 9.7125 9.225 10.95C8.375 12.1875 7.3 13.0125 6 13.425V15C7.7375 14.5625 9.17188 13.5656 10.3031 12.0094C11.4344 10.4531 12 8.725 12 6.825V2.25L6 0ZM5.2125 10.1625L9.45 5.925L8.38125 4.85625L5.2125 8.025L3.6375 6.45L2.56875 7.51875L5.2125 10.1625Z" fill="white" />
                        </svg>
                      )}
                      {index === 5 && ( // Leaf
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 22C2 22 10 18 12 12C12 12 14 16 22 18M12 12C12 12 16 10 18 2C18 2 14 6 12 12ZM12 12C12 12 8 10 6 2C6 2 10 6 12 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {index === 6 && ( // Fresh Sparkle
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="white" />
                        </svg>
                      )}
                      {index === 7 && ( // Kitchen/Mixing
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 17C22 19.7614 17.5228 22 12 22C6.47715 22 2 19.7614 2 17H22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 17L12 2L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {index === 8 && ( // Milkshake Cup
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3H2L3 14H9L10 3Z" fill="white" />
                          <path d="M11 0L7 3M1 0H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                    {section.title}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SubSections;