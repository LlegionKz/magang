/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This is experimental but can
    // be enabled to allow for smaller bundle sizes
    outputFileTracingRoot: undefined,
  },
  output: 'standalone',
  images: {
    // allow loading images from Google Drive (uc links), Google usercontent,
    // and the project's Supabase public storage domain
    domains: ['drive.google.com', 'lh3.googleusercontent.com', 'lzrhjvjisxjtggmthkps.supabase.co']
  },
}

module.exports = nextConfig
