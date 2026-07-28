/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/providers/xfinity',
        destination: '/xfinity-plans',
        permanent: true,
      },
      {
        source: '/providers/frontier',
        destination: '/frontier-plans',
        permanent: true,
      },
      {
        source: '/providers/windstream',
        destination: '/windstream-plans',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
