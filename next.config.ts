import type { NextConfig } from "next";

//images.domains is deprecated. use remotePatterns instead.

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.koket.se'],
  },
};

export default nextConfig;
