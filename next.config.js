/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This is experimental but can
    // be enabled to allow for smaller bundle sizes
    outputFileTracingRoot: undefined,
  },
  output: 'standalone',
  images: {
    // allow loading images from Google Drive (uc links) and Google usercontent
    domains: ['drive.google.com', 'lh3.googleusercontent.com']
  },
}

module.exports = nextConfig
