/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com","firebasestorage.googleapis.com"],
  },
  env:{
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://next-blog-xnaw.vercel.app/' : 'http://localhost:3000',
  }
};

module.exports = nextConfig;
