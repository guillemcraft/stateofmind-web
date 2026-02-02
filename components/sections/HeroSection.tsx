"use client";

export function HeroSection() {
  const videoId = "v4R1SC3PGxk";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&playsinline=1&showinfo=0&rel=0&modestbranding=1&disablekb=1&vq=hd1080&hd=1&start=75`;

  const scrollToContent = () => {
    const element = document.getElementById("agenda");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* YouTube Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src={embedUrl}
          title="Background Video"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            border: "none",
            minWidth: "100vw",
            minHeight: "100vh",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight animate-fade-up">
          State Of Mind
        </h1>
        <p className="text-lg md:text-xl text-white/80 mt-4 max-w-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Electronic Music Duo
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
