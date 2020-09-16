/*
开发环境的配置：能让代码运行
运行项目指令：
webpack：会将打包结果输出出去
npx webpack-dev-server ：只会在内存中编译打包，不会有任何输出
*/

const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //loader的配置
      {
        //处理less资源
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      {
        //处理css资源
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        //处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          outputPath: "imgs",
        },
      },

      {
        //处理html文件中的img资源
        test: /\.html$/,
        loader: "html-loader",
      },

      {
        //处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "media",
        },
      },
    ],
  },
  plugins: [
    //处理html资源
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    //构建后的项目路径
    contentBase: resolve(__dirname, "build"),
    //启动gzip压缩
    compress: true,
    //端口号
    port: 8080,
    //自动打开浏览器
    open: true,
  },
};
