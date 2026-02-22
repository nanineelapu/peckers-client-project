import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Share_Tech } from "next/font/google";
import localFont from "next/font/local";
import ClientWrapper from "./ClientWrapper";

const peakersFont = localFont({
  src: "./fonts/Supernett-Cn-Regular.woff2",
  display: "swap",
  variable: "--font-peakers",
});

const shareTech = Share_Tech({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Peakers",
  description:
    "Peakers - Your Ultimate Destination for Premium Automotive Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shareTech.variable} ${peakersFont.variable} antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}