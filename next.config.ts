/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "s.ytimg.com"],
  },
  env: {
    YOUTUBE_SEARCH_API_V3_KEY: process.env.YOUTUBE_SEARCH_API_V3_KEY,
  },
};

module.exports = nextConfig;
