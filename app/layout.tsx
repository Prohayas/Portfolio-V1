import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://cdn.pagesense.io/js/900810103/ace1cf6333294aa1b473b15278782288.js"
        />
        <Script>{`
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
        `}</Script>
        <Script src="https://salesiq.zohopublic.com/widget?wc=siq3cc8b17408ef3c43d8f52dac1f0f5c99" defer></Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
