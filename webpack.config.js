const path = require('path');
const { resolve } = path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
        filename: '[name].[contenthash:8].js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        //minimizer: true, // [new UglifyJsPlugin({...})]
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.ts[x]?/,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?/,
                include: [
                    resolve(__dirname, './index.tsx'),
                    resolve(__dirname, './src'),
                    resolve(__dirname, './node_modules/tsx-control-statements'),
                ],
                loader: 'babel-loader',
                options: {
                    plugins: [['@babel/plugin-transform-typescript', { allowNamespaces: true }]],
                },
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new FriendlyErrorsWebpackPlugin(),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        stats: 'errors-only',
    },
    stats: 'errors-only',
};
