import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import TawkTo from "@/components/TawkTo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Used only by the agent landing pages, which follow their own type scale. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata = {
  title: "LQcomparecableinternet | TV & Internet Deals",
  description: "Compare TV and Internet deals from multiple providers in your area. Find the best plans based on price, speed, and availability.",
  keywords: "TV internet deals, compare internet plans, cable TV deals, broadband offers, internet providers near me",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900"
        suppressHydrationWarning
      >
        <TawkTo />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
