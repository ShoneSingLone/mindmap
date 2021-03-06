const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  AutomaticPrefetchPlugin
} = require('webpack');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@lib': path.resolve(__dirname, 'node_modules'),
    }
  },
  devServer: {
    hot: true,
    inline: true
    // https: true
  },
  // JS 执行入口文件
  entry: {
    first: './src/js/main.js'
  },
  module: {
    rules: [{
      test: /\.styl$/,
      loader: 'css-loader!stylus-loader'
    }]
  },
  plugins: [
    new AutomaticPrefetchPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'jsPlumb'
    }),
  ],
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'main.js',
    chunkFilename: '[name].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
};