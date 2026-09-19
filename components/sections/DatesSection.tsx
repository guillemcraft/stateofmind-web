import Image from "next/image";
import { DATES_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function DatesSection() {
  return (
    <section id="dates" className="bg-ink py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionLabel number={DATES_CONTENT.number} label={DATES_CONTENT.label} />

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Photo + headline */}
          <div className="lg:col-span-5">
            <Reveal className="photo aspect-[16/10]">
              <Image
                src="/images/played.jpg"
                alt="Rooftop party crowd at sunset in Barcelona"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </Reveal>
            <Reveal delay={100} className="mt-10 lg:mt-16">
              <h2 className="headline text-cream text-[clamp(3rem,7vw,5.5rem)]">
                {DATES_CONTENT.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-[26rem] text-lg text-cream-2 leading-relaxed">
                {DATES_CONTENT.description}
              </p>
            </Reveal>
          </div>

          {/* Venue list */}
          <ul className="lg:col-span-7 lg:pt-24 border-t border-rule self-start">
            {DATES_CONTENT.venues.map((venue, i) => (
              <Reveal
                as="li"
                key={venue.name}
                delay={i * 60}
                className="group grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_9rem_5rem] items-baseline gap-x-6 py-5 border-b border-rule"
              >
                <h3 className="headline text-cream text-2xl md:text-[1.75rem] tracking-[-0.02em] transition-colors group-hover:text-gold">
                  {venue.name}
                </h3>
                <span className="hidden sm:block text-cream-2">{venue.city}</span>
                <span className="mono text-[11px] text-muted sm:text-right">{venue.year}</span>
                <span className="sm:hidden col-span-2 mt-1 text-sm text-cream-2">{venue.city}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
