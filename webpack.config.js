const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const plugins = []
// plugins.push(new CopyWebpackPlugin([{
//     context: './src/assets',
//     from: '**/*',
//     to: 'assets'
// }]))

var projectRootPath = path.resolve(__dirname, './')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js"],
        alias: {
            'edf-app-loader': path.resolve(projectRootPath, './app-loader/index.js'),
            'edf-meta-engine': path.resolve(projectRootPath, './meta-engine/index.js'),
            'edf-utils': path.resolve(projectRootPath, './utils/index.js'),
            'echarts': path.resolve(projectRootPath, './vendor/echarts.min.js'),
            'zrender': path.resolve(projectRootPath, './vendor/zrender.min.js'),
            'ttk-component': path.resolve(projectRootPath, './src/ttk-component.js')
        }
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.css$/,
                //exclude: /node_modules/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },{
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:8].[ext]',
                        limit: 8192
                    }
                }
            }, {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ]
    },
    plugins: plugins
}