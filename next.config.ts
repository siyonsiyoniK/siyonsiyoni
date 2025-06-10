import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Change the output directory to 'out' for static exports
  distDir: 'out',
};

export default nextConfig;
