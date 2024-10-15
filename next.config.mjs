/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL_BROWSER: process.env.API_BASE_URL_BROWSER,
  },
};

export default nextConfig;
