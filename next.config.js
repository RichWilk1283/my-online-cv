/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cloud.appwrite.io" },
      { hostname: "fontawesome.com" },
    ],
  },
};

module.exports = nextConfig;
