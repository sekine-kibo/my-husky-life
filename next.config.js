/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['images.microcms-assets.io'] },
  async redirects() {
    return [
      { source: '/articles', destination: '/articles/page/1', permanent: true }
    ]
  }
}

module.exports = nextConfig
