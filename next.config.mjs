/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      reactStrictMode: true,
      serverComponentsExternalPackages: ['mongoose']
    },
    images: {
      domains: ['m.media-amazon.com']
    }
  }
  
  export default nextConfig;