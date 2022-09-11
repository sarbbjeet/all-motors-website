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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token ,X-Requested-With, Content, Authorization",
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
// module.exports = withPlugins([[withImages]], nextConfig);
// module.exports = withBundleAnalyzer();
