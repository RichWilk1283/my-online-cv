/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/my-online-cv" : "",
  assetPrefix: isProd ? "/my-online-cv" : "",
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
