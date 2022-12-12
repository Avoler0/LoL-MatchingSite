/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["localhost","ddragon.leagueoflegends.com","ddragon.canisback.com","openapi.naver.com"]
  },
  
  reactStrictMode: false,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    })
  }
};

module.exports = nextConfig
