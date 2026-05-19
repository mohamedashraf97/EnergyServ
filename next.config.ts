import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "aoneresources.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
