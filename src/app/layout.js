"use client";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Navbar
          className={`${montserrat.className} ${montserrat.className} antialiased`}
        />

        <body
          className={`${montserrat.className} ${montserrat.className} antialiased`}
        >
          {children}
        </body>
        <Footer
          className={`${montserrat.className} ${montserrat.className} antialiased`}
        />
      </html>
    </>
  );
}
