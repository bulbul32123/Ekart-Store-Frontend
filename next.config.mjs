/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com','image.hm.com'],
    }, 
    //   images: {
    //     remotePatterns:[
    //         {
    //             hostname: 'res.cloudinary.com'
    //         }
    //     ]
    // }
};

export default nextConfig;
