import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Harkness House | A Seat at the Table",
  description:
    "The Harkness House is a relationship-driven independent school announcing its inaugural 2026–27 12-student high school cohort.",
  metadataBase: new URL("https://theharknesshouse.org")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} font-sans`}>{children}</body>
    </html>
  );
}
