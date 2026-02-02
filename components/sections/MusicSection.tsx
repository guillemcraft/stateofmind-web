"use client";

import { MUSIC_CONTENT } from "@/lib/constants";

export function MusicSection() {
  return (
    <section id="music" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-title text-white/50">{MUSIC_CONTENT.title}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
            {MUSIC_CONTENT.subtitle}
          </h2>
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MUSIC_CONTENT.tracks.map((track) => (
            <a
              key={track.id}
              href={track.link}
              className="group block"
            >
              {/* Cover placeholder */}
              <div className="aspect-square bg-[#1a1a1a] mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00f5ff]/20 transition-colors">
                    <svg className="w-6 h-6 text-white/50 group-hover:text-[#00f5ff] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Info */}
              <h3 className="font-semibold text-white group-hover:text-[#00f5ff] transition-colors">
                {track.title}
              </h3>
              <p className="text-sm text-white/50 mt-1">
                {track.label} · {track.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
