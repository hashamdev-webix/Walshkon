import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/immigration',
        destination: '/', // Redirects instantly to the homepage
        permanent: true,  // 301 Permanent redirect (tells Google to remove it from search results)
      },
      {
        source: '/services/immigration/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
