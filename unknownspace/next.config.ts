import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "bcrypt", "prisma"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arabiyatprestige.com",
      },
    ],
  },
};

export default nextConfig;
