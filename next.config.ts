import type { NextConfig } from "next";

// A static site: `next build` writes plain files to out/, which Cloudflare
// Pages serves (pushes to main deploy there). The /presskit short link is in
// public/_redirects.
const nextConfig: NextConfig = {
  output: "export",
  // No image server: the photos in public/images are already small JPEGs.
  images: { unoptimized: true },
};

export default nextConfig;
