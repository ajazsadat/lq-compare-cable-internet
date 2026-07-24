import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobilePopup from "@/components/MobilePopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900">
        <Header />
        <MobilePopup />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
