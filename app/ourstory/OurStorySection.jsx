import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

export default function OurStorySection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const storyData = await client.fetch(`*[_type == "ourStoryPage"][0]`);
        if (storyData) {
          setData(storyData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching story data:", error);
        setLoading(false);
      }
    };
    fetchStory();
  }, []);

  // Mocking multiple slides by duplicating data for now
  const slides = data ? [
    { ...data, id: 1 },
    { ...data, id: 2, heading: "A COMMITMENT TO QUALITY", quote: "Our commitment to quality is unwavering, from farm to table." },
    { ...data, id: 3, heading: "SERVED WITH PRIDE SINCE 1978", quote: "Generations of trust, built on every meal." },
  ] : [];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      filter: "blur(20px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      filter: "blur(20px)",
    }),
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/20 font-['Share_Tech'] animate-pulse tracking-[.5vw] text-2xl">
          THE STORY REVEALING...
        </div>
      </div>
    );
  }

  if (!data || slides.length === 0) return null;

  const currentData = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen pt-[5vw] bg-black px-[1.5vw] py-[5.2vw] text-white flex items-center overflow-hidden">
      {/* BACKGROUND SVG LAYER */}
      <div className="absolute -top-[15vw] right-0 w-[52%] md:w-1/2 h-[70vw] md:h-auto md:bottom-0 pointer-events-none z-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 560 906"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="opacity-100"
        >
          <rect
            x="0.603188"
            y="0.489236"
            width="719"
            height="925.958"
            transform="matrix(1 0 0.206376 0.978473 -0.100967 -0.989468)"
            fill="#171717"
            stroke="black"
          />
        </svg>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center">

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              filter: { duration: 0.4 },
            }}
            className="w-full h-full flex flex-col lg:flex-row items-center justify-center"
          >
            {/* LEFT SIDE – TEXT */}
            <div className="w-full lg:w-1/2 px-[5vw] lg:px-[6vw] flex flex-col justify-center mt-12 lg:mt-0 overflow-hidden text-center lg:text-left">

              <motion.div
                className="mb-1 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="w-10 h-px bg-white/40 hidden lg:block"></div>
                <span className="lg:ml-4 text-gray-400 font-mono tracking-widest text-[4vw] lg:text-[1.2vw]">STORY {currentSlide + 1}</span>
              </motion.div>

              <motion.h2
                className="font-bold font-peakers text-[10vw] lg:text-[68px] leading-[1.1] lg:leading-[1.3] uppercase mt-2 bg-linear-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                {currentData.heading || "A FAMILY LEGACY, REIMAGINED"}
              </motion.h2>

              <motion.div
                className="text-[#D1D5DB] font-peakers text-[4vw] lg:text-[1.42vw] leading-[1.6] max-w-full lg:max-w-[40vw] py-[6vw] lg:py-[2vw] space-y-4 lg:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                {currentData.content ? (
                  currentData.content.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>Content reveal in progress...</p>
                )}

                <p className="border-l-2 font-sans font-extralight border-white/30 pl-4 lg:pl-6 text-[#9CA3AF] text-left">
                  {currentData.quote || "This wasn’t built in a boardroom."}
                </p>
              </motion.div>

              {/* SLIDER INDICATORS */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 lg:mt-auto pb-4">
                {slides.map((_, i) => (
                  <div key={i} className={`h-1 w-8 lg:w-12 transition-all duration-500 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/10"}`}></div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE – IMAGE */}
            <div className="w-full lg:w-1/2 h-[60vw] lg:h-screen px-[5vw] lg:px-[2vw] flex flex-col items-center justify-center bg-black">
              <div className="relative w-full h-[90%] overflow-hidden flex items-center justify-center">
                {currentData.founderImage && (
                  <motion.img
                    src={urlFor(currentData.founderImage).url()}
                    alt="Founders of Peckers"
                    className="w-full h-full object-contain"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                )}

                {/* Panel 1 — top third */}
                <motion.div
                  initial={{ y: "0%" }}
                  animate={{ y: "-101%" }}
                  key={`panel1-${currentSlide}`}
                  transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                  className="absolute top-0 left-0 w-full h-1/3 bg-black z-20"
                />
                {/* Panel 2 — middle third */}
                <motion.div
                  initial={{ y: "0%" }}
                  animate={{ y: "-201%" }}
                  key={`panel2-${currentSlide}`}
                  transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.25 }}
                  className="absolute top-1/3 left-0 w-full h-1/3 bg-black z-20"
                />
                {/* Panel 3 – bottom third */}
                <motion.div
                  initial={{ y: "0%" }}
                  animate={{ y: "-301%" }}
                  key={`panel3-${currentSlide}`}
                  transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
                  className="absolute top-2/3 left-0 w-full h-1/3 bg-black z-20"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* EDGE NAVIGATION ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-1 md:left-4 top-[45%] lg:top-[50%] -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-white/10 rounded-full bg-black/40 backdrop-blur-lg hover:bg-white hover:text-black transition-all duration-300 active:scale-75"
        >
          <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-4 top-[45%] lg:top-[50%] -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-white/10 rounded-full bg-black/40 backdrop-blur-lg hover:bg-white hover:text-black transition-all duration-300 active:scale-75"
        >
          <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}