const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    output: {
        filename: '[name].[hash].[id].js',
        chunkFilename: '[name].[chunkhash].[id].js', //非入口 chunk 的名称
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/template.index.html'),
            title: "HomePage",
            inject: true
        })
    ]
};