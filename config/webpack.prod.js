const { merge }            = require('lodash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common               = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [new MiniCssExtractPlugin()],
    // module: {
    //     rules: [
    //         {
    //             test: /.(css|sass|scss)$/,
    //             use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    //         },
    //     ]
    // }
}

module.exports = merge(common, prodConfig);