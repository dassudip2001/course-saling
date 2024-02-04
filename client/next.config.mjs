/** @type {import('next').NextConfig} */
const nextConfig = {
  // default render login page
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
