// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1",
//         port: "8080", // Use the nginx port (default is 8080)
//         pathname: "/images/**",
//       },
//     ],
//   },
// };
// // const nextConfig = {};

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "127.0.0.1",
      //   port: "8080", // Use the nginx port (default is 8080)
      //   pathname: "/images/**",
      // },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

module.exports = nextConfig;
