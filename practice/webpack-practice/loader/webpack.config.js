var webpack = require('webpack');
const path = require('path');

webpack([{
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    // 去哪些目录下寻找 Loader，有先后顺序之分
    modules: ['node_modules', path.resolve(__dirname, './')],
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['replace-loader'],
    }]
  }
}], (err, stats) => { // Stats Object
  console.log(stats.toString() + '\n');
  // process.stdout.write(stats.toString() + '\n');
})