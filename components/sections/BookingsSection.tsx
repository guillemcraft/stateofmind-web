import Image from "next/image";
import { BOOKINGS_CONTENT, PRESSKIT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

/* Closing page: photo dimmed to near-black, wordmark top-right */
export function BookingsSection() {
  return (
    <section id="bookings" className="relative bg-ink overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/bookings.jpg"
          alt=""
          fill
          className="object-cover object-[50%_20%] opacity-[0.28]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-20 min-h-[100svh] flex flex-col">
        <div className="flex items-start justify-between">
          <SectionLabel number={BOOKINGS_CONTENT.number} label={BOOKINGS_CONTENT.label} />
          <Logo className="w-[96px] md:w-[150px]" />
        </div>

        <div className="mt-auto pt-32">
          <Reveal>
            <h2 className="display text-cream text-[clamp(3rem,10vw,8.5rem)]">
              {BOOKINGS_CONTENT.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-10 md:mt-12">
            <dl className="flex flex-col sm:flex-row sm:flex-wrap gap-x-14 gap-y-6">
              {BOOKINGS_CONTENT.contacts.map((contact) => {
                const external = !contact.href.startsWith("mailto:");
                return (
                  <div key={contact.label}>
                    <dt className="label text-muted mb-3">{contact.label}</dt>
                    <dd>
                      <a
                        href={contact.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-xl md:text-2xl text-cream hover:text-gold transition-colors link-hover"
                      >
                        {contact.value}
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={200} className="mt-10 md:mt-12">
            <a
              href={PRESSKIT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:inline-flex sm:w-auto items-center justify-between gap-6 bg-cream text-ink px-6 py-4 md:px-8 md:py-5 hover:bg-gold transition-colors"
            >
              <span className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                <span className="mono text-xs md:text-[13px] font-extrabold whitespace-nowrap">
                  Download press kit
                </span>
                <span className="mono text-[10px] md:text-[11px] text-ink/60 whitespace-nowrap">
                  {PRESSKIT.meta}
                </span>
              </span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Reveal>

          <p className="mono text-[10px] md:text-[11px] text-muted mt-12 md:mt-16 pt-6 border-t border-rule">
            {BOOKINGS_CONTENT.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
