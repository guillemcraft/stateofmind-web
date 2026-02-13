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
    default: "State Of Mind | Electronic Music Duo from Barcelona",
    template: "%s | State Of Mind",
  },
  description:
    "State Of Mind is an electronic music duo from Barcelona pushing the boundaries of techno and house. Discover upcoming shows, latest releases, and bookings.",
  keywords: [
    "State Of Mind",
    "State Of Mind DJ",
    "electronic music duo",
    "Barcelona DJ",
    "techno",
    "house music",
    "underground music",
    "DJ set",
    "electronic music producer",
    "Barcelona nightlife",
    "Zaatar Barcelona",
    "Volta Barcelona",
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
    title: "State Of Mind | Electronic Music Duo from Barcelona",
    description:
      "Electronic music duo pushing the boundaries of techno and house. Upcoming shows, latest releases, and bookings.",
    url: "https://stateofmind.es",
    siteName: "State Of Mind",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "State Of Mind - Electronic Music Duo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "State Of Mind | Electronic Music Duo",
    description:
      "Electronic music duo from Barcelona pushing the boundaries of techno and house.",
    images: ["/images/og-image.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "State Of Mind",
  url: "https://stateofmind.es",
  image: "https://stateofmind.es/images/og-image.jpg",
  description:
    "Electronic music duo from Barcelona pushing the boundaries of techno and house.",
  genre: ["Techno", "House", "Electronic"],
  foundingLocation: {
    "@type": "Place",
    name: "Barcelona, Spain",
  },
  sameAs: [
    "https://instagram.com/stateofmind.live",
    "https://soundcloud.com/state-of-mind-official",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
