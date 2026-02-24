import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.stone-art.it",
        protocol: "https",
        port: "",
      },
      
      {
        hostname: "static.vecteezy.com",
        protocol: "https",
        port: "",
      },
    ],
   },
};

export default nextConfig;
