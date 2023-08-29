/** @type {import('next').NextConfig} */
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
