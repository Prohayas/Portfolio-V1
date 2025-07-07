import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Homepage from "./(layout)/homepage";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junior Full Stack Developer - Melbienri Gabitan",
  description: "github.com/prohayas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <div className="relative grid grid-cols-1 px-3 lg:px-0 lg:grid-cols-2 mt-20 gap-4 max-w-7xl mx-auto">
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <Homepage />
            <Footer />
          </div>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
