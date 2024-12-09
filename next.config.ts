/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "s.ytimg.com"],
  },
  env: {
    YOUTUBE_SEARCH_API_V3_KEY: process.env.YOUTUBE_SEARCH_API_V3_KEY,
    RAPID_API_YOUTUBE_DOWNLOAD_SCRAPER: process.env.RAPID_API_YOUTUBE_DOWNLOAD_SCRAPER,
    VERCEL_STORAGE_BASE_URL: process.env.VERCEL_STORAGE_BASE_URL,
    VERCEL_STORAGE_TOKEN: process.env.VERCEL_STORAGE_TOKEN,
    VERCEL_DATABASE_TOKEN: process.env.VERCEL_DATABASE_TOKEN,
  },
};

module.exports = nextConfig;