// Webpack 生产环境配置
// 关于更多 Webpack 配置方法，请参考我另一篇文章[《为什么我们要做三份 Webpack 配置文件》](https://zhuanlan.zhihu.com/p/29161762)

const webpack = require('webpack');

const config = require('./webpack.base.config');

config.plugins.push(new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('production') }
}));

module.exports = config;
