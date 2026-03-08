"use client";

import { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";

export default function RatingSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        // Fetch ratingSection data from the singleton homepage document
        const ratingData = await client.fetch(`*[_type == "homepage"][0].ratingSection`);
        console.log("Rating data fetched from Sanity:", ratingData);
        if (ratingData) {
          setData(ratingData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rating data:", error);
        setLoading(false);
      }
    };

    fetchRating();
  }, []);

  const starSVG = (color = "#E1AD01") => (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0"
      style={{ minWidth: "16px", minHeight: "16px" }}
    >
      <path
        d="M9.10547 0.882812C9.52734 0.0390625 10.7227 0.0742188 11.1094 0.882812L13.4297 5.55859L18.5625 6.29688C19.4766 6.4375 19.8281 7.5625 19.1602 8.23047L15.4688 11.8516L16.3477 16.9492C16.4883 17.8633 15.5039 18.5664 14.6953 18.1445L10.125 15.7188L5.51953 18.1445C4.71094 18.5664 3.72656 17.8633 3.86719 16.9492L4.74609 11.8516L1.05469 8.23047C0.386719 7.5625 0.738281 6.4375 1.65234 6.29688L6.82031 5.55859L9.10547 0.882812Z"
        fill={color}
      />
    </svg>
  );

  const halfStarSVG = (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-0"
      style={{ minWidth: "16px", minHeight: "16px" }}
    >
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="#E1AD01" />
          <stop offset="50%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M9.10547 0.882812C9.52734 0.0390625 10.7227 0.0742188 11.1094 0.882812L13.4297 5.55859L18.5625 6.29688C19.4766 6.4375 19.8281 7.5625 19.1602 8.23047L15.4688 11.8516L16.3477 16.9492C16.4883 17.8633 15.5039 18.5664 14.6953 18.1445L10.125 15.7188L5.51953 18.1445C4.71094 18.5664 3.72656 17.8633 3.86719 16.9492L4.74609 11.8516L1.05469 8.23047C0.386719 7.5625 0.738281 6.4375 1.65234 6.29688L6.82031 5.55859L9.10547 0.882812Z"
        fill="url(#halfGradient)"
      />
    </svg>
  );

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center bg-black py-[20vw] md:py-[15vw] lg:py-[8vw] xl:py-[12.5vw]">
        <div className="text-white/20 font-mono animate-pulse tracking-[.5vw]">LOADING RATINGS...</div>
      </div>
    );
  }

  // Use defaults if data is missing but loading is finished
  const { heading = "COMMUNITY VOICES", rating = 4.8, totalReviews = 1000 } = data || {};
  const headingWords = heading.split(" ");

  // Logic to render stars based on numeric rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="flex items-center justify-center w-[6vw] sm:w-[5vw] md:w-[6vw] lg:w-[2.5vw] xl:w-auto h-[6vw] sm:h-[5vw] md:h-[6vw] lg:h-[2.5vw] xl:h-auto">{starSVG()}</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="flex items-center justify-center w-[6vw] sm:w-[5vw] md:w-[6vw] lg:w-[2.5vw] xl:w-auto h-[6vw] sm:h-[5vw] md:h-[6vw] lg:h-[2.5vw] xl:h-auto">{halfStarSVG}</span>);
      } else {
        // Empty/Gray star
        stars.push(<span key={i} className="flex items-center justify-center w-[6vw] sm:w-[5vw] md:w-[6vw] lg:w-[2.5vw] xl:w-auto h-[6vw] sm:h-[5vw] md:h-[6vw] lg:h-[2.5vw] xl:h-auto">{starSVG("rgba(255,255,255,0.1)")}</span>);
      }
    }
    return stars;
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-black font-bold tracking-tight px-[5vw] md:px-[6vw] lg:px-[2.5vw] xl:px-[2vw] pt-[20vw] md:pt-[15vw] lg:pt-[8vw] xl:pt-[12.5vw] pb-[6vw] md:pb-[8vw] lg:pb-[3vw] xl:pb-[2vw] gap-[4vw] md:gap-[5vw] lg:gap-0">
      {/* Heading */}
      <span
        className="text-[10vw] sm:text-[8vw] md:text-[8vw] lg:text-[5vw] xl:text-[4vw] text-white tracking-[1.6]"
        style={{ fontFamily: "var(--font-peakers)" }}
      >
        {headingWords.map((word, i) => (
          <span key={i} className="inline-block mr-[2vw] md:mr-[2vw] lg:mr-[1vw]">
            {word}
          </span>
        ))}
      </span>

      {/* Stars + rating */}
      <div
        className="flex flex-col sm:flex-row items-center gap-[2vw] md:gap-[3vw] lg:gap-[1.5vw] xl:gap-[0.6vw]"
      >
        <span className="flex gap-[1vw] md:gap-[1.5vw] lg:gap-[0.8vw] xl:gap-[0.5vw]">
          {renderStars()}
        </span>

        <span
          className="text-white text-[3.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[1.8vw] xl:text-[1.2vw] font-sans font-light mt-[1vw] sm:mt-0 ml-0 md:ml-[1vw] xl:ml-[0.4vw]"
          style={{ letterSpacing: "0.04em" }}
        >
          ( {rating}/5 Rating from {totalReviews.toLocaleString()}+ Familiar Faces )
        </span>
      </div>
    </div>
  );
}
