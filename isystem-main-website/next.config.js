/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['isystem.ai'],
  },
  // Main website is deployed at the root
  basePath: '',
  async rewrites() {
    return [
      {
        // Rewrite /academy/* to the academy application
        source: '/academy/:path*',
        destination: process.env.NEXT_PUBLIC_ACADEMY_URL + '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;