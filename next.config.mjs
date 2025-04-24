/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  devIndicators: false,
  trailingSlash: true,
  images: { domains: ["images.ctfassets.net"] },
};

export default nextConfig;
