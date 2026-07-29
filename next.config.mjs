/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@neondatabase/serverless', 'heic2any', '@google/generative-ai'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
