const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
entry: ["./lib/es6/src/Index.bs.js", "./css/index.js"],
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index-[hash].js",
    chunkFilename: "[name]-[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "indexProduction.html" }),
    new CopyPlugin([{ from: "netlify", to: "." }, { from: "images", to: "images"}]),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name]-[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
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
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      chunks: "all"
    }
  }
};
