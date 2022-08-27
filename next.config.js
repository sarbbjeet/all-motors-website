const webpack = require("webpack");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  trailingSlash: true,
  images: {
    minimumCacheTTL: 60,
    domains: ["localhost"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
module.exports = nextConfig;
// module.exports = withPlugins([[withImages]], nextConfig);
// module.exports = withBundleAnalyzer();
