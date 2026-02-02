/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  // Empty turbopack config to silence Next.js 16 warning
  turbopack: {},
};

module.exports = nextConfig;
