/*
webpack入口起点文件
1.运行指令：
开发环境：webpack ./src/index.js -o ./build/built.js --mode=development   --mode指定开发坏境
webpack会以 ./src/index.js 为入口文件开始打包， 打包输出到./build/built.js
整体打包环境是开发环境
生产环境：webpack ./src/index.js -o ./build/built.js --mode=production   --mode指定生产坏境
webpack会以 ./src/index.js 为入口文件开始打包， 打包输出到./build/built.js
整体打包环境是生产环境

2.结论
1. webpack 能处理js/json资源，不能处理css/img资源
2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
3. 生产环境比开发坏境多一个压缩js代码
*/

import data from "./data.json";
console.log(data);
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
