const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';

    return {
        entry: [
            'babel-polyfill',
            'focus-visible',
            './src/index.jsx'
        ],
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'dist')
        },

        devtool: devMode ? 'cheap-eval-source-map' : false,
        devServer: {
            historyApiFallback: true,
            port: 2000
        },
        optimization: {
            nodeEnv: argv.mode,
            minimizer: [
                new UglifyJsPlugin({}),
                new OptimizeCssAssetsPlugin({})
            ],
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'initial'
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: [/node_modules/, /lib/],
                    use: ['eslint-loader', 'babel-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: devMode,
                                modules: true,
                                importLoaders: 3,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        // 'resolve-url-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: 'last 2 versions',
                                        grid: true
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: ['./src/stylesheets']
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|otf)$/,
                    include: [
                        path.resolve(__dirname, 'assets/fonts')
                    ],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components/')
            },
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new CleanWebpackPlugin(['./dist']),
            new CopyWebpackPlugin(['./lib/**']),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'main.[hash].css'
            }),
            new FaviconsWebpackPlugin({
                logo: './assets/poolparty-icon.png',
                inject: true,
                title: 'PoolParty',
                icons: {
                    android: true,
                    appleIcon: true,
                    favicons: true
                }
            }),
            // new CompressionPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false
            })
        ]
    }
};
