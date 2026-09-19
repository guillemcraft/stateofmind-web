import Image from "next/image";
import { LIVE_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function LiveSection() {
  const [tall, small1, small2, wide] = LIVE_CONTENT.photos;

  return (
    <section id="live" className="bg-ink py-24 md:py-32 border-t border-rule scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionLabel number={LIVE_CONTENT.number} label={LIVE_CONTENT.label} />
          <Reveal>
            <h2 className="headline text-cream text-[clamp(2.5rem,5.5vw,4.5rem)] md:text-right">
              {LIVE_CONTENT.title}
            </h2>
          </Reveal>
        </div>

        {/* Gallery: one tall frame, two stacked, one wide — as on page 06 */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          <Reveal className="photo md:col-span-5 aspect-[4/5] md:aspect-auto">
            <Image
              src={tall.src}
              alt={tall.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </Reveal>

          <div className="md:col-span-7 grid grid-cols-2 gap-3 md:gap-4">
            <Reveal delay={80} className="photo aspect-[4/3]">
              <Image
                src={small1.src}
                alt={small1.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </Reveal>
            <Reveal delay={160} className="photo aspect-[4/3]">
              <Image
                src={small2.src}
                alt={small2.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </Reveal>
            <Reveal delay={240} className="photo col-span-2 aspect-[21/9] md:aspect-[2.6/1]">
              <Image
                src={wide.src}
                alt={wide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 820px"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
