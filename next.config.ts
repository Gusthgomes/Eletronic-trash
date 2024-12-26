import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i0.wp.com",
      }
    ]
  }
};

export default nextConfig;
