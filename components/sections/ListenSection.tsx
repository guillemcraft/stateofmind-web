"use client";

const TRACKS = [
  "https://soundcloud.com/state-of-mind-official/state-of-mind-ba-ilalo",
  "https://soundcloud.com/state-of-mind-official/state-of-mind-ricos-besos-free-download",
  "https://soundcloud.com/state-of-mind-official/b09f92d6-030c-415e-931e-87884e31cd92",
  "https://soundcloud.com/state-of-mind-official/1343cf84-27cd-47d2-99ad-94ceae23bb3a",
  "https://soundcloud.com/state-of-mind-official/0d37bb4b-9b8c-43c4-bc94-934a07a27e6f",
  "https://soundcloud.com/state-of-mind-official/4c77d7f0-98e6-4a60-a0ab-86eeed2e00f6",
];

export function ListenSection() {
  return (
    <section id="listen" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="section-title text-white/50">Listen</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
              Our Tracks
            </h2>
          </div>
          <a
            href="https://soundcloud.com/state-of-mind-official"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent self-start md:self-auto shrink-0"
          >
            View All on SoundCloud
          </a>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TRACKS.map((url) => (
            <div
              key={url}
              className="relative overflow-hidden transition-all duration-300 hover:brightness-110"
            >
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%2300f5ff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
                className="block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
