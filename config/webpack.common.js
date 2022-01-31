const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path              = require('path');


/** @type {import('webpack').Configuration} */
module.exports = {

    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../docs'),
        filename: '[name].[contenthash].js',
        publicPath: "",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.(css|sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
           filename: '[name].[contenthash].css',
        })
    ]

}