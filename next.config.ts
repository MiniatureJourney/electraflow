import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig: NextConfig = {
  output: process.env.BUILD_FOR_MOBILE === 'true' ? 'export' : undefined,
  images: {
    unoptimized: process.env.BUILD_FOR_MOBILE === 'true',
  },
  typescript: { ignoreBuildErrors: true },
  turbopack: {},
};

export default withPWA(nextConfig);
