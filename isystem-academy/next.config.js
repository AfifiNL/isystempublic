/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // We'll keep errors visible but won't fail the build initially
    // as we incrementally fix ESLint issues
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
  // Enable TypeScript type checking with warnings
  typescript: {
    // We'll now show type errors but won't fail the build initially
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  
  // Set base path to '/academy' only in production
  // In development, don't use a base path to simplify integration
  basePath: process.env.NODE_ENV === 'production' ? '/academy' : '',
  
  // i18n configuration must be compatible with basePath
  // Remove i18n configuration when using basePath since they can't be used together
  // We'll handle locale routing manually
  
  poweredByHeader: false, // Remove the X-Powered-By header for security
  images: {
    // Enable image optimization for Vercel
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'formdesigner.pro',
      },
      // Add any other external image domains here
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true, // Since we're using SVG for the logo
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
