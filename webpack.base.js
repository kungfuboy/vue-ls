const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = config = {
    context: __dirname + '/src',
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{　　　　　　
            test: /\.html$/,
            use: 'html-withimg-loader'
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.vue']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html',
            filename: './index.html',
            chunks: ['index']
        })
    ]
};
