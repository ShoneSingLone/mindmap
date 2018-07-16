const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
        rules: [
            /* {        include: path.resolve("node_modules", "lodash"),
                        sideEffects: false
                    }, */
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", // translates CSS into CommonJS
                        "postcss-loader"
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        "postcss-loader",
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new SplitChunksPlugin(splitChunksOptions),
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap: false
        }),
    ]
});