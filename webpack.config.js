'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const projectEntryPoints = {
    main: path.resolve(__dirname, './assets/scripts/app.js'),
};

const resolvedExtensions = ['.js', '.vue', '.json', '.scss', '.sass'];

const resolvedAliases = {
    styles: path.resolve(__dirname, './assets/styles'),
    pages: path.resolve(__dirname, './assets/scripts/pages'),
    components: path.resolve(__dirname, './assets/scripts/components')
};

const staticAssetsToCopy = [
    {
        from: path.resolve(__dirname, './assets/fonts'),
        to: path.resolve(__dirname, './public/assets/fonts')
    },
    {
        from: path.resolve(__dirname, './assets/images'),
        to: path.resolve(__dirname, './public/assets/images')
    },
];

module.exports = (env, argv) => ({
    entry: projectEntryPoints,
    mode: argv.mode === 'development' ? 'development' : 'production',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                loader: 'vue-loader',
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [['@babel/preset-env']],
                    plugins: [
                        require('@babel/plugin-proposal-object-rest-spread'),
                        require('@babel/plugin-proposal-class-properties'),
                    ],
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: [
                                new Autoprefixer({
                                    overrideBrowserslist: ['last 10 versions']
                                }),
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    optimization: {
        minimizer:
            argv.mode === 'development'
                ? []
                : [
                    new UglifyJSPlugin({
                        sourceMap: false,
                        uglifyOptions: {
                            compress: {
                                inline: true,
                            },
                        },
                    }),
                    new webpack.optimize.AggressiveMergingPlugin(),
                    new CompressionPlugin(),
                    new OptimizeCssAssetsPlugin({}),
                ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new Visualizer({
            filename: './statistics.html',
        }),
        new MiniCssExtractPlugin({
            filename: '/styles/[name].css',
        }),
        new CopyWebpackPlugin(staticAssetsToCopy),
    ],
    output: {
        path: path.resolve(__dirname, './public/assets/'),
        filename: 'scripts/[name].js',
    },
    resolve: {
        extensions: resolvedExtensions,
        alias: resolvedAliases,
    },
});
