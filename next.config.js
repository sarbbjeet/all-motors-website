const webpack = require("webpack");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //    domains: ["images.clickdealer.co.uk"],
  // },
  //jquery setup
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "window.jQuery": "jquery",
  //})
  //);

  //  return config;
  //  },
};
module.exports = {
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  nextConfig,
};
