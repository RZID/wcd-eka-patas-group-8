/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/wcd/eka-patas" : "",
  assetPrefix: isProd ? "/wcd/eka-patas" : "",
  images: isProd
    ? {
        path: "/wcd/eka-patas/_next/image/",
      }
    : undefined,

  trailingSlash: true,
};

module.exports = nextConfig;
