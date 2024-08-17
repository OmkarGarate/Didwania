// webpack.config.js

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // other configurations...
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/")
    }
  }
};
