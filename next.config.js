/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com","firebasestorage.googleapis.com"],
  },
  env:{
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://your-live-api.com' : 'http://localhost:3000',
  }
};

module.exports = nextConfig;
