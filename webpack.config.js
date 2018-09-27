const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, './src/scss/index.scss'),
    output: {
        filename: 'bundle.webinjaz-sass.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {loader: MiniCssExtractPlugin.loader},
                {loader: 'css-loader'},
                {loader: 'resolve-url-loader'},
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sourceMapContents: false
                    }
                }
            ]
        }, {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            use: [{
                loader: "file-loader"
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "webinjaz-css.css",
            chunkFilename: "wi-css.css"
        })
    ]
};