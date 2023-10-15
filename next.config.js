/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lavender-following-rabbit-173.mypinata.cloud",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
};

module.exports = nextConfig;
