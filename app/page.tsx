import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <MusicSection />
        <AboutSection />
        <Suspense>
          <SupportSection />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
