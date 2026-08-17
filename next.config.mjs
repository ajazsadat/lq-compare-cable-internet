/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Provider pages are disabled, so these now point at the homepage.
      // Restore the /*-plans destinations when those pages come back.
      {
        source: '/providers/:provider',
        destination: '/',
        permanent: false,
      },
      {
        source: '/xfinity-plans',
        destination: '/',
        permanent: false,
      },
      {
        source: '/spectrum-plans',
        destination: '/',
        permanent: false,
      },
      {
        source: '/independent-support-help',
        destination: '/compare-internet-options',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
