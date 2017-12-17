// 开发时的 Webpack 配置
// 关于更多 Webpack 配置方法，请参考我另一篇文章[《为什么我们要做三份 Webpack 配置文件》](https://zhuanlan.zhihu.com/p/29161762)

const webpack = require('webpack');

// 继承自 base config
const config = require('./webpack.base.config');

module.exports = config;

config.devServer = {
  contentBase: './public',
  publicPath: config.output.publicPath
};

config.plugins.push(new webpack.SourceMapDevToolPlugin({
  filename: '[file].map',
  exclude: ['vendor.js']
}));
