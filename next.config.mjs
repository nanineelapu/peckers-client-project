/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["gsap", "react-icons", "lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ehtazgziwtjqm5ww.public.blob.vercel-storage.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
