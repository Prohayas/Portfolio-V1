"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Homepage from "./(layout)/homepage";
import Footer from "@/components/Footer";
import { useLayoutEffect, useState } from "react";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const sectionIds = ["about", "experience", "contact"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState("home");

  useLayoutEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <div className="relative grid grid-cols-1 px-3 lg:px-0 lg:grid-cols-2 mt-20 gap-4 max-w-7xl mx-auto">
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <Homepage activeSection={activeSection} />
            <Footer />
          </div>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
