"use client";

export default function RatingSection() {
  // SVGs for Stars
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

  const heading = "STREET CRED";
  const headingWords = heading.split(" ");

  return (
    <div className="w-full flex items-center justify-between bg-black font-bold tracking-tight px-[2vw] pt-[12.5vw] pb-[2vw]">
      <span
        className="text-[4vw] text-white tracking-[1.6]"
        style={{ fontFamily: "var(--font-peakers)" }}
      >
        {headingWords.map((word, i) => (
          <span
            key={i}
            className="inline-block mr-[1vw]"
          >
            {word}
          </span>
        ))}
      </span>
      <div className="flex items-center gap-[0.6vw]">
        <span className="flex gap-[0.5vw]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{ display: "inline-block" }}
            >
              {starSVG()}
            </span>
          ))}
          {/* Star 5 (Half) */}
          <span style={{ display: "inline-block" }}>
            {halfStarSVG}
          </span>
        </span>
        <span
          className="text-white text-[1vw] font-sans font-light"
          style={{ letterSpacing: "0.04em", marginLeft: "0.4vw" }}
        >
          ( 4.8/5 on Google )
        </span>
      </div>
    </div>
  );
}