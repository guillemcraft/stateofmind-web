import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stateofmind.es"),
  title: {
    default: "State Of Mind | DJ Duo · House · Barcelona",
    template: "%s | State Of Mind",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "State Of Mind",
    "State Of Mind DJ",
    "DJ duo Barcelona",
    "house music",
    "tech house",
    "organic house",
    "Barcelona DJ",
    "DJ booking Barcelona",
    "club DJ",
    "festival DJ",
    "rooftop party Barcelona",
    "La Paloma Barcelona",
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
    title: "State Of Mind | DJ Duo · House · Barcelona",
    description:
      "Barcelona-based DJ duo. House — warm grooves, heavy low end and vocal moments. Bookings for clubs, festivals, labels and brands.",
    url: "https://stateofmind.es",
    siteName: "State Of Mind",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "State Of Mind — DJ duo from Barcelona",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "State Of Mind | DJ Duo · House · Barcelona",
    description:
      "Barcelona-based DJ duo. House — warm grooves, heavy low end and vocal moments.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://stateofmind.es",
  },
  category: "music",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "State Of Mind",
  url: "https://stateofmind.es",
  image: "https://stateofmind.es/images/og-image.jpg",
  description: SITE_CONFIG.description,
  genre: ["House", "Deep House", "Organic House", "Tech House"],
  foundingLocation: {
    "@type": "Place",
    name: "Barcelona, Spain",
  },
  email: SITE_CONFIG.email,
  sameAs: Object.values(SITE_CONFIG.social),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${archivo.variable} ${jetbrains.variable} bg-ink text-cream`}>
        {children}
      </body>
    </html>
  );
}
