/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_URL: 'http://localhost:3001/api',
  },
};

module.exports = nextConfig;
