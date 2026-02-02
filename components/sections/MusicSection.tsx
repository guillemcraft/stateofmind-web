"use client";

const VIDEOS = [
  { id: "v4R1SC3PGxk", title: "Latest Release" },
  { id: "2OzZn0cop-g", title: "Release 2" },
  { id: "9QiQ7qCGgBs", title: "Release 3" },
  { id: "BynN0B1S9VA", title: "Release 4" },
  { id: "rr7JN9rXi0M", title: "Release 5" },
  { id: "EuJqv9AP_Wo", title: "Release 6" },
  { id: "JCoLqidWjkE", title: "Release 7" },
];

export function MusicSection() {
  return (
    <section id="music" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-title text-white/50">Music</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
            Latest Releases
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {VIDEOS.map((video) => (
            <a
              key={video.id}
              href={`https://youtu.be/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* YouTube Thumbnail */}
              <div className="aspect-video bg-[#1a1a1a] overflow-hidden relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
