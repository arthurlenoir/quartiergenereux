/** @type {import('next').NextConfig} */

const nextConfig = {
  turbopack: {},
  transpilePackages: ['@piwikpro/next-piwik-pro'],
  images: {
    unoptimized: true
  },
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
