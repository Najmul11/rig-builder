/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets1.ignimgs.com",
      "media.wired.com",
      "assets1.cbsnewsstatic.com",
    ], // Add the domains of the external images
  },
};

module.exports = nextConfig;
