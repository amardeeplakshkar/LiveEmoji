import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/**",
      },
    ],
  },
};

export default nextConfig;
