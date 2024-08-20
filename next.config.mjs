/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
  }
};

export default nextConfig;
