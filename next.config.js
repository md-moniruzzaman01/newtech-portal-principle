/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "http://localhost:5000",
  },
  images: {
    domains: ["i.ibb.co", "placehold.it"],
  },
};

module.exports = nextConfig;
