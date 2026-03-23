import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import DevTools from "@/components/DevTools";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solace Seed — Your Personal AI Companion",
  description: "A wellness companion designed for emotional presence, every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} antialiased`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-instrument-sans), sans-serif" }}>
        {children}
        {process.env.NODE_ENV === "development" && <DevTools />}
      </body>
    </html>
  );
}
