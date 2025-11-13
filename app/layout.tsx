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
        <Script src="https://cdn.pagesense.io/js/905654381/be633f7456c34c24a8bc91aceb6d81d6.js"></Script>
         <Script id="zoho-init" strategy="beforeInteractive">
        {`
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
        `}
      </Script>

      {/* Load the Zoho SalesIQ widget */}
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siq3cc8b17408ef3c43d8f52dac1f0f5c99"
        strategy="afterInteractive"
      />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
