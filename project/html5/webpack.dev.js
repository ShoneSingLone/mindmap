const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {
    NamedModulesPlugin,
    HotModuleReplacementPlugin
} = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
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
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "postcss-loader",
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    },
    plugins: [
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
    ]
});