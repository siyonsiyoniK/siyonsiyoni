import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();  // 개발 시 Dev 환경 설정
}

export default nextConfig;