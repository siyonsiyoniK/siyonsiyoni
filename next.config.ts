import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['@cloudflare/next-on-pages'],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
