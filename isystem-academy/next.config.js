/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['formdesigner.pro'],
  },
  i18n: {
    locales: ['en', 'nl', 'ar', 'uk'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;