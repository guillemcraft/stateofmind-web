import { WHY_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  return (
    <section id="why" className="bg-ink py-24 md:py-32 border-t border-rule scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <SectionLabel number={WHY_CONTENT.number} label={WHY_CONTENT.label} />
          <Reveal>
            <h2 className="headline text-cream text-[clamp(3rem,7.5vw,6.5rem)] md:text-right">
              {WHY_CONTENT.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
        </div>

        <ul className="mt-24 md:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {WHY_CONTENT.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 80} className="border-t border-rule pt-6">
              <h3 className="headline text-cream text-[1.75rem] tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 text-cream-2 leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
