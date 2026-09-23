import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short link for bookers: stateofmind.es/presskit
  async redirects() {
    return [
      {
        source: "/presskit",
        destination: "/state-of-mind-presskit-2026.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
