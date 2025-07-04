/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/wcd/eka-patas" : "",
  assetPrefix: isProd ? "/wcd/eka-patas" : "",

  trailingSlash: true,
};

module.exports = nextConfig;
