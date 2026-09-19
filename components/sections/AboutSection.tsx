import Image from "next/image";
import { ABOUT_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-ink py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-0">
          {/* Copy */}
          <div className="lg:col-span-6 lg:pr-16 lg:border-r lg:border-rule flex flex-col justify-between">
            <SectionLabel number={ABOUT_CONTENT.number} label={ABOUT_CONTENT.label} />

            <Reveal className="mt-20 lg:mt-48">
              <h2 className="headline text-cream text-[clamp(3rem,7.5vw,6.5rem)]">
                {ABOUT_CONTENT.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-8 max-w-[34rem] text-lg md:text-xl leading-relaxed text-cream-2">
                {ABOUT_CONTENT.bio}
              </p>
            </Reveal>
          </div>

          {/* Photo + facts */}
          <div className="lg:col-span-6 lg:pl-16">
            <Reveal className="photo aspect-[4/5] lg:aspect-[5/4]">
              <Image
                src="/images/about.jpg"
                alt="State Of Mind on a terrace at night in Barcelona"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </Reveal>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {ABOUT_CONTENT.facts.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 80}>
                  <dt className="label text-muted mb-3">{fact.label}</dt>
                  <dd className="headline text-cream text-2xl md:text-[1.75rem] tracking-[-0.02em]">
                    {fact.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
