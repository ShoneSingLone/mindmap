const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const {
    SplitChunksPlugin
} = require('webpack').optimize;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let splitChunksOptions = {
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
};

module.exports = merge(common, {
    devtool: '',
    // devtool: 'source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "postcss-loader",
            ]
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader", // creates style nodes from JS strings
                use: ["css-loader", // translates CSS into CommonJS
                    "postcss-loader",
                    "sass-loader" // compiles Sass to CSS
                ]
            })
        }]
        /* 
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader", // creates style nodes from JS strings
                use: ["css-loader", // translates CSS into CommonJS
                    "postcss-loader",
                ]
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader", // creates style nodes from JS strings
                use: ["css-loader", // translates CSS into CommonJS
                    "postcss-loader",
                    "sass-loader" // compiles Sass to CSS
                ]
            })
        }] */
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new SplitChunksPlugin(splitChunksOptions),
        new CleanWebpackPlugin(['dist']),
        // new UglifyJSPlugin({ sourceMap: false }),
        // new BundleAnalyzerPlugin()
    ]
});