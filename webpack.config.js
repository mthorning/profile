const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./lib/js/src/Index.bs.js",
  // If you ever want to use webpack during development, change 'production'
  // to 'development' as per webpack documentation. Again, you don't have to
  // use webpack or any other bundler during development! Recheck README if
  // you didn't know this
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    chunkFilename: "[name].bundle[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "indexProduction.html" }),
    new CopyPlugin([{ from: "css", to: "assets" }]),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
