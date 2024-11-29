/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      'i.pinimg.com',
      'cdn.venngage.com',
      'image.freepik.com',
      'cdn.mycreativeshop.com',
      'imgur.com',
      'i.imgur.com',
      'assets.aceternity.com',
      'api.microlink.io' // Add Microlink API domain here
    ],
  },
};

export default nextConfig;
