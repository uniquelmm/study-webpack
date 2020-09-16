const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //
      {
        //css
        test: /\.css$/,
        use: [
          //创建style 标签，将样式放入
          // "style-loader",
          //这个loader取代style-loader。作用：提取js中到css成单独文件
          MiniCssExtractPlugin.loader,
          //将css文件整合到js文件中
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/bulit.css",
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3003,

    open: true,
  },
};
