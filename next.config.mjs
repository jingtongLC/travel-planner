/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['jingtonglc.github.io'],
  },
  output: 'export',
  basePath: '/travel-planner',
  assetPrefix: '/travel-planner/',
  trailingSlash: true,
}

export default nextConfig