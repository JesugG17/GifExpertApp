const { merge } = require('lodash');
const common    = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        open: true,
    },
    target: "web",
    devtool: "eval-source-map",
    // module: {
    //     rules: [
    //         {
    //             test: /.(css|sass|scss)$/,
    //             use: ['style-loader', 'css-loader', 'sass-loader'],
    //         },
    //     ]
    // }
}

module.exports = merge(common, devConfig);