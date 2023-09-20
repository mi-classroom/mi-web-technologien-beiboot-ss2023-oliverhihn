const path = require("path");
const webpack = require("webpack");
const ip = require("internal-ip");
const portFinderSync = require("portfinder-sync");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const dotenv = require("dotenv");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  // Webxr is only supported by very new browsers. It doesn't make
                  // any sense to polyfill js features older than webxr for old browsers.
                  // In particular, async/await shouldn't be compiled to a regenerator polyfill.
                  // see: https://caniuse.com/webxr, https://caniuse.com/async-functions
                  targets: {
                    chrome: "79",
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/i,
        include: path.resolve(__dirname, "src"),
        use: ["url-loader?limit=100000"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
  stats: {
    modules: false,
    assetsSort: "!size",
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};

function infoColor(message) {
  return `\u001b[1m\u001b[34m${message}\u001b[39m\u001b[22m`;
}
