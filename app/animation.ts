import gsap from "gsap";

export const animatePageIn = () => {
  if (typeof window === "undefined") return;

  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4"),
  ].filter(Boolean);

  const preloader = document.getElementById("preloader");

  if (!banners.length || !preloader) return;

  const tl = gsap.timeline();

  tl.set(banners, { yPercent: 0 })
    .to(banners, {
      yPercent: 100,
      duration: 1,
      stagger: 0.2,
      ease: "power4.inOut",
    })
    .set(preloader, {
      display: "none", // 🔥 THIS IS THE FIX
    });
};


