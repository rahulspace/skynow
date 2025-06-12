import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.weatherapi.com/**")],
  },
};

export default nextConfig;
