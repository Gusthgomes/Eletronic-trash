import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i0.wp.com",
      },
      {
        hostname: "static1.howtogeekimages.com"
      },
      {
        hostname: "img.freepik.com"
      },
      {
        hostname: "www.ept.ca"
      },
      {
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        hostname: "novaenginc.com"
      },
    ]
  }
};

export default nextConfig;
