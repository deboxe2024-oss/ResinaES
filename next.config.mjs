/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.hotmart.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'nwuievvpcjrmecujwfox.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/media/**',
      },
      {
        protocol: 'https',
        hostname: 'kdloteojnkcjblhoirea.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/public-files/**',
      },
       {
        protocol: 'https',
        hostname: 'resinaemcasa.netlify.app',
        port: '',
        pathname: '/_next/image/**',
      }
    ],
  },
};

export default nextConfig;
