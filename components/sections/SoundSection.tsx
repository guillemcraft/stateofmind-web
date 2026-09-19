import Image from "next/image";
import { SOUND_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function SoundSection() {
  return (
    <section id="sound" className="bg-ink py-24 md:py-32 border-t border-rule scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Genres */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <SectionLabel number={SOUND_CONTENT.number} label={SOUND_CONTENT.label} />

            <ul className="mt-20 lg:mt-56 border-t border-rule">
              {SOUND_CONTENT.genres.map((genre, i) => (
                <Reveal
                  as="li"
                  key={genre}
                  delay={i * 90}
                  className="group border-b border-rule py-5 md:py-6 flex items-baseline justify-between gap-6"
                >
                  <h2 className="headline text-cream text-[clamp(2.25rem,4.4vw,3.5rem)] transition-colors group-hover:text-gold">
                    {genre}
                  </h2>
                  <span className="label text-muted shrink-0">0{i + 1}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Photo + description */}
          <div className="lg:col-span-6 lg:pt-16">
            <Reveal className="photo aspect-[5/4]">
              <Image
                src="/images/sound.jpg"
                alt="State Of Mind playing to a packed room under purple lights"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-[34rem] text-lg md:text-xl leading-relaxed text-cream-2">
                {SOUND_CONTENT.description}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
