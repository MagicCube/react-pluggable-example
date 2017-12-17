// Webpack 基础配置
// 关于更多 Webpack 配置方法，请参考我另一篇文章[《为什么我们要做三份 Webpack 配置文件》](https://zhuanlan.zhihu.com/p/29161762)

const path = require('path');
const webpack = require('webpack');

const SRC_PATH = path.resolve('./src');
const ASSETS_BUILD_PATH = path.resolve('./build');
const ASSETS_PUBLIC_PATH = '/assets/';

module.exports = {
  context: SRC_PATH,
  entry: {
    app: './',
    vendor: './vendor',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: ASSETS_BUILD_PATH,
    publicPath: ASSETS_PUBLIC_PATH,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use:
        [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/
      },
      {
        test: /\.less$/,
        use:
        [
          'style-loader',
          {
            // 启用 CSS 模块化
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: 'im-[path]-[local]'
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
    minChunks: Infinity
  })]
};
