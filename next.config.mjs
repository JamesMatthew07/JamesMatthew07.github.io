/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Move 'output' here
  images: {
    domains: [
      'i.pinimg.com', 
      'cdn.venngage.com', 
      'image.freepik.com', 
      'cdn.mycreativeshop.com',
      'imgur.com',      // Add imgur.com here
      'i.imgur.com'     // Add i.imgur.com here
    ]
  },
};

export default nextConfig;
