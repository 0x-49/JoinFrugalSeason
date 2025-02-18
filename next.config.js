/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['streamable.com'],
  },
  // Add webpack configuration to handle HMR issues
  webpack: (config, { dev, isServer }) => {
    // Optimize production build
    if (!dev) {
      config.optimization.minimize = true;
    }
    
    return config;
  },
  // Improve error handling
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
