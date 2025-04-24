/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  trailingSlash: true,
  images: { domains: ["images.ctfassets.net"] },
  webpack(config) {
    config.optimization.splitChunks.maxSize = 200000;
    return config;
  },
};

export default nextConfig;
