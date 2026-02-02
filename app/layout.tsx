import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stateofmind.es"),
  title: "State Of Mind | DJ & Producer",
  description: "Experience the sound that moves the underground. Electronic music producer and DJ pushing the boundaries of techno and house.",
  keywords: ["DJ", "Producer", "Electronic Music", "Techno", "House", "State Of Mind"],
  openGraph: {
    title: "State Of Mind | DJ & Producer",
    description: "Experience the sound that moves the underground.",
    type: "website",
    images: [
      {
        url: "/images/artists.png",
        width: 1200,
        height: 630,
        alt: "State Of Mind",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
