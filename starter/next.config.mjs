/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.brease.io" },
      { protocol: "https", hostname: "**.brease.io" },
    ],
  },
};

export default nextConfig;
