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
    plugins: [
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
    ]
});