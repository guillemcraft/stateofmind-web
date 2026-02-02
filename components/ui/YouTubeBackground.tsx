"use client";

import { YOUTUBE_VIDEO_ID } from "@/lib/constants";

interface YouTubeBackgroundProps {
  videoId?: string;
  startTime?: number;
}

export function YouTubeBackground({
  videoId = YOUTUBE_VIDEO_ID,
  startTime = 45,
}: YouTubeBackgroundProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&playsinline=1&showinfo=0&rel=0&modestbranding=1&disablekb=1&vq=hd1080&hd=1&start=${startTime}`;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
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
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}
