/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@piwikpro/next-piwik-pro'])

const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
