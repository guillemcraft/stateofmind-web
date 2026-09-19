import { LISTEN_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

function soundcloudEmbed(url: string) {
  const params = new URLSearchParams({
    url,
    color: "#d9a441",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "false",
    show_reposts: "false",
    show_teaser: "false",
    visual: "true",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

export function ListenSection() {
  return (
    <section id="listen" className="bg-ink py-24 md:py-32 border-t border-rule scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Headline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <SectionLabel number={LISTEN_CONTENT.number} label={LISTEN_CONTENT.label} />
            <Reveal className="mt-20 lg:mt-48">
              <h2 className="headline text-cream text-[clamp(3rem,7.5vw,6.5rem)]">
                {LISTEN_CONTENT.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>

          {/* Platform rows — page 09 */}
          <ul className="lg:col-span-6 lg:pt-40 self-end border-t border-rule">
            {LISTEN_CONTENT.platforms.map((platform, i) => (
              <Reveal as="li" key={platform.name} delay={i * 70} className="border-b border-rule">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-6"
                >
                  <span className="headline text-cream text-3xl md:text-4xl tracking-[-0.02em] transition-colors group-hover:text-gold">
                    {platform.name}
                  </span>
                  <span className="mono normal-case text-[11px] text-muted group-hover:text-cream transition-colors">
                    {platform.handle}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Videos */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-baseline justify-between border-b border-rule pb-4">
            <p className="label">Videos</p>
            <a
              href={SITE_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[11px] text-cream/70 hover:text-cream transition-colors link-hover"
            >
              YouTube ↗
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {LISTEN_CONTENT.videos.map((video, i) => (
              <Reveal key={video.id} delay={(i % 4) * 60}>
                <a
                  href={`https://youtu.be/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block photo aspect-video"
                  aria-label={`Watch on YouTube: ${video.title}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-end p-3 md:p-4 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mono text-[10px] text-cream">Play ↗</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tracks */}
        <div className="mt-20 md:mt-24">
          <div className="flex items-baseline justify-between border-b border-rule pb-4">
            <p className="label">Tracks</p>
            <a
              href={SITE_CONFIG.social.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[11px] text-cream/70 hover:text-cream transition-colors link-hover"
            >
              All on SoundCloud ↗
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {LISTEN_CONTENT.tracks.map((url, i) => (
              <Reveal key={url} delay={(i % 3) * 60} className="bg-ink-2">
                <iframe
                  title={`SoundCloud player ${i + 1}`}
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  loading="lazy"
                  allow="autoplay"
                  src={soundcloudEmbed(url)}
                  className="block"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
