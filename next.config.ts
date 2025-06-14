import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ["assets.myntassets.com", "constant.myntassets.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.myntassets.com",

        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
