/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  devIndicators: false,
  trailingSlash: true,
  basePath: isGithubPages ? "/como-redesign/" : "",
  assetPrefix: isGithubPages ? "/como-redesign/" : "",
  images: { unoptimized: true, domains: ["images.ctfassets.net"] },
};

export default nextConfig;
