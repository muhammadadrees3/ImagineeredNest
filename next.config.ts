import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https'
        ,
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.100.29'],
};

export default nextConfig;
