/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "cloud.appwrite.io" },
      { hostname: "fontawesome.com" },
    ],
  },
};

module.exports = nextConfig;
