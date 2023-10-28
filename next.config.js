/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
        pathname: "/attachments/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "th.bing.com", port: "", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
