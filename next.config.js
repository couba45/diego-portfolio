/** @type {import('next').NextConfig} */

module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },

  // other configuration here...
};
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "couba45.github.io",
        port: "",
        pathname: "/diego-portfolio/**",
      },
    ],
  },
  env: {
    NEW_PATH_IMG: process.env.NEW_PATH_IMG,
  },
};

module.exports = nextConfig;
