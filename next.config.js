/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This is experimental but can
    // be enabled to allow for smaller bundle sizes
    outputFileTracingRoot: undefined,
  },
  output: 'standalone',
}

module.exports = nextConfig
