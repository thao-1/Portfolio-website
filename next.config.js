/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['formspree.io'], // 
    unoptimized: true, // This can help with image loading issues in development
  },
  // If you're using static exports, add this:
  // output: 'export',
}

module.exports = nextConfig