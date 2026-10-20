import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Artifex — The Art of Everyday",
    template: "%s | Artifex",
  },
  description:
    "Discover thoughtfully crafted homewares, handmade accessories, and unique pieces created to bring art into everyday living.",
  applicationName: "Artifex",
  keywords: [
    "Artifex",
    "handmade crafts",
    "artisan products",
    "handcrafted home decor",
    "independent craftsmanship",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}