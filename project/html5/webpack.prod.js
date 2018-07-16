const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const {
    SplitChunksPlugin
} = require('webpack').optimize;

let splitChunksOptions = function () {
    console.log("issplitChunksOptions", true);
    return {
        chunks: "async",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            },
            default: {
                minChunks: 2,
                name: "commons",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
};

module.exports = merge(common, {
    devtool: '',
    // devtool: 'source-map',
    plugins: [
        new SplitChunksPlugin(splitChunksOptions()),
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap: false
        })
    ]
});