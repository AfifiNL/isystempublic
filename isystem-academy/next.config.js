/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['isystem.ai'],
  },
  // Academy is deployed as a subdirectory
  basePath: '/academy',
  // Add trailing slash to ensure proper routing
  trailingSlash: true,
  // This ensures assets are loaded correctly from the /academy path
  assetPrefix: '/academy',
};

module.exports = nextConfig;