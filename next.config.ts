import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nrafgnmsowmjkthaupie.supabase.co", // Gwiazdki pozwalają na dowolny projekt Supabase
        port: "",
      },
    ],
  },
};

export default nextConfig;