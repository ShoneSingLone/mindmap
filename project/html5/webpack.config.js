const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')




module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            include: path.resolve("node_modules", "lodash"),
            sideEffects: false
        }, {
            test: /\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "postcss-loader"
            ]
        }, {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "postcss-loader",
                "sass-loader" // compiles Sass to CSS
            ]
        }, {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/template.index.html'),
            title: "HomePage",
            inject: true
        })
    ],
};