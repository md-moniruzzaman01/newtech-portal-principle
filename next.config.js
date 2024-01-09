/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "https://newtech-server.onrender.com",
  },
  images: {
    domains: ["i.ibb.co", "placehold.it"],
  },
};

module.exports = nextConfig;
