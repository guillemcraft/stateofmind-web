"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT, YOUTUBE_VIDEO_ID } from "@/lib/constants";

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars: Record<string, number | string>;
          events: {
            onReady: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  setPlaybackQuality: (quality: string) => void;
  playVideo: () => void;
  mute: () => void;
}

const YT_STATE_PLAYING = 1;

export function HeroSection() {
  const playerRef = useRef<YTPlayer | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Load the IFrame API and start the muted loop. The cover photo stays
  // underneath, so nothing is shown until the video is really playing.
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          start: 75,
          vq: "hd1080",
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality("hd1080");
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === YT_STATE_PLAYING) {
              playerRef.current?.setPlaybackQuality("hd1080");
              setVideoPlaying(true);
            }
          },
        },
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Cover photo — instant, and the fallback wherever autoplay is blocked */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
        <img
          src="/images/hero-mobile.jpg"
          alt="State Of Mind at Estació de França, Barcelona"
          className="w-full h-full object-cover object-[50%_30%]"
          fetchPriority="high"
        />
      </picture>

      {/* YouTube loop, faded in once it's playing */}
      <div
        className={`absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-out ${
          videoPlaying ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div
          id="yt-player"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "177.78vh",
            height: "100vh",
            minWidth: "100vw",
            minHeight: "56.25vw",
          }}
        />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/30 pointer-events-none" />

      {/* Cover typography */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-10 md:pb-12">
        <h1 className="display text-cream text-[clamp(3.6rem,13vw,10.5rem)] animate-fade-up">
          {HERO_CONTENT.title.map((line, i) => (
            <span key={line} className="block" style={{ animationDelay: `${i * 90}ms` }}>
              {line}
            </span>
          ))}
        </h1>

        <div
          className="mt-8 md:mt-10 pt-5 border-t border-rule-strong flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <p className="text-lg md:text-xl text-cream">{HERO_CONTENT.subtitle}</p>
          <p className="mono text-[11px] text-cream/80">
            <span className="text-gold">{HERO_CONTENT.location}</span>
            <span className="mx-3 text-cream/40">·</span>
            {HERO_CONTENT.audience.join(" · ")}
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToContent}
        className="absolute right-6 md:right-12 top-[calc(50%+40px)] z-10 hidden md:flex flex-col items-center gap-3 text-cream/50 hover:text-cream transition-colors"
        aria-label="Scroll to about"
      >
        <span className="mono text-[10px] [writing-mode:vertical-rl]">Scroll</span>
        <span className="block w-px h-12 bg-current animate-pulse" />
      </button>
    </section>
  );
}
