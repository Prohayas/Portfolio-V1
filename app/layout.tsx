import { Inter } from "next/font/google";
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
      <body className={`${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
      <script src="https://cdn.pagesense.io/js/900810103/ace1cf6333294aa1b473b15278782288.js"></script>
    </html>
  );
}
