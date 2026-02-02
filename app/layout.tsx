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
  title: {
    default: "State Of Mind | DJ & Producer",
    template: "%s | State Of Mind",
  },
  description:
    "Experience the sound that moves the underground. Electronic music producer and DJ pushing the boundaries of techno and house.",
  keywords: [
    "DJ",
    "Producer",
    "Electronic Music",
    "Techno",
    "House",
    "State Of Mind",
    "Underground Music",
    "Dance Music",
    "EDM",
    "Barcelona DJ",
  ],
  authors: [{ name: "State Of Mind" }],
  creator: "State Of Mind",
  publisher: "State Of Mind",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "State Of Mind | DJ & Producer",
    description: "Experience the sound that moves the underground.",
    url: "https://stateofmind.es",
    siteName: "State Of Mind",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/artists.png",
        width: 1200,
        height: 630,
        alt: "State Of Mind - DJ & Producer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "State Of Mind | DJ & Producer",
    description: "Experience the sound that moves the underground.",
    images: ["/images/artists.png"],
  },
  alternates: {
    canonical: "https://stateofmind.es",
  },
  category: "music",
  icons: {
    icon: "/images/artists.png",
    apple: "/images/artists.png",
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
