/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Example for high performance:
  reactStrictMode: true,
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;