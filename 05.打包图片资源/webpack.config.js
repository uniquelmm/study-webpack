const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bulit.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        //样式文件的处理
        test: /\.less$/,
        //要使用多个loader处理使用use
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        //问题：默认处理不了html中img图片
        //图片的处理
        test: /\.(jpg|png|gif)$/,
        //使用一个loader处理直接用loader
        //下载url-loader file-loader
        loader: "url-loader",
        //option进行配置
        options: {
          /*
                  base64在客户端本地解码所以会减少服务器压力，如果图片过大还继续采用
                  base64编码会导致cpu调用率上升网页加载时比变卡

                  图片大小小于8kb，就会被base64处理
                  优点：减少请求数量（减轻服务器压力）
                  缺点：图片体积会更大（文件请求速度更慢）
                  angular小于8kb
                  */
          limit: 8 * 1024,
          //给图片重命名
          //[hash:10]取图片的hash的前10位
          //[ext]取文件原来的扩展名
          name: "[hash:10].[ext]",
        },
      },
      {
        test: /\.html$/,
        //处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    //html文件的处理
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
