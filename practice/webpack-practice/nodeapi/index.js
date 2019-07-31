var webpack = require('webpack');
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

webpack([{
    mode: 'development',
    entry: './entry1.js?entry',
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[id].[name].[query].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}, {
    entry: './entry2.js',
    output: {
        // filename: '[name].js',
        path: path.resolve(__dirname, 'output')
    },
}], (err, stats) => { // Stats Object
    console.log(stats.toString() + '\n');
    // process.stdout.write(stats.toString() + '\n');
})