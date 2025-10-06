/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.worldofbooks.com', 'images.worldofbooks.com'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  },
}

module.exports = nextConfig