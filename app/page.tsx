import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SoundSection } from "@/components/sections/SoundSection";
import { FormatsSection } from "@/components/sections/FormatsSection";
import { DatesSection } from "@/components/sections/DatesSection";
import { LiveSection } from "@/components/sections/LiveSection";
import { WhySection } from "@/components/sections/WhySection";
import { ListenSection } from "@/components/sections/ListenSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { BookingsSection } from "@/components/sections/BookingsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SoundSection />
        <FormatsSection />
        <DatesSection />
        <LiveSection />
        <WhySection />
        <ListenSection />
        <SupportSection />
        <BookingsSection />
      </main>
      <Footer />
    </>
  );
}
