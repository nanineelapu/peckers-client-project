import { Geist, Geist_Mono, Space_Mono, Inconsolata } from "next/font/google";
import "./globals.css";
import { Share_Tech } from "next/font/google";
import localFont from "next/font/local";
import ClientWrapper from "./ClientWrapper";
import Navbar from "./Navbar";
import ConditionalFooter from "./ConditionalFooter";

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

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
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

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata = {
  title: "Peakers",
  description:
    "Peakers - Your Ultimate Destination for Premium Automotive Accessories",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shareTech.variable} ${peakersFont.variable} ${spaceMono.variable} ${inconsolata.variable} antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}