// Converted from next.config.ts to next.config.js for Vercel compatibility

const nextConfig = {
  // config options here
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

module.exports = nextConfig; 