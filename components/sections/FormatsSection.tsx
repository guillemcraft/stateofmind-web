import { FORMATS_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

/* Cream "paper" page, like page 04 of the press kit */
export function FormatsSection() {
  return (
    <section id="formats" className="bg-cream text-ink py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <SectionLabel number={FORMATS_CONTENT.number} label={FORMATS_CONTENT.label} className="text-[#a27b32]" />
          <Reveal>
            <h2 className="headline text-ink text-[clamp(3rem,8vw,7rem)] md:text-right">
              {FORMATS_CONTENT.title}
            </h2>
          </Reveal>
        </div>

        <ol className="mt-24 md:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {FORMATS_CONTENT.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 4) * 70} className="border-t border-ink pt-5">
              <span className="label text-[#a27b32]">0{i + 1}</span>
              <h3 className="headline text-ink text-[1.75rem] mt-5 tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 text-paper-muted leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
