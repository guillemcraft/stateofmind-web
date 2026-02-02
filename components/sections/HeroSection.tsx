"use client";

import { useEffect, useRef } from "react";

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

export function HeroSection() {
  const playerRef = useRef<YTPlayer | null>(null);
  const videoId = "v4R1SC3PGxk";

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
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
            if (event.data === 1) {
              // Playing - set quality again
              playerRef.current?.setPlaybackQuality("hd1080");
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
    const element = document.getElementById("agenda");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* YouTube Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
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
