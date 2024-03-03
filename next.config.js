const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

module.exports = nextConfig;

module.exports = withNextIntl({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.html$/,
      loader: "html-loader",
    });
    return config;
  },
  // Other Next.js configuration ...
});
