const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const plugins = []
// plugins.push(new CopyWebpackPlugin([{
//     context: './src/assets',
//     from: '**/*',
//     to: 'assets'
// }]))

var projectRootPath = path.resolve(__dirname, './')
plugins.push(new CopyWebpackPlugin([{
    from: './vendor',
    to: './vendor',
    ignore: ['.*']
}]))
plugins.push(new webpack.DllReferencePlugin({
    context: __dirname,
    manifest:  require('./vendor/vendor.manifest.json'),
}))

plugins.push(new ExtractTextPlugin('[name].css'))

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['ttk-component'],
    filename: 'ttk-component.min.js',
    minChunks: Infinity
}))

plugins.push(new HtmlWebpackPlugin({
    title: 'ttk组件', //标题
    filename: 'index.html', //生成的html存放路径，相对于 path
    template: 'index.html', //html模板路径
    hash: false,
    inject: 'body', //允许插件修改哪些内容，包括head与body`
    minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
        removeAttributeQuotes: true
    }
}))
module.exports = {
    entry: {
        index: './src/index.js',
        "ttk-component": './src/ttk-component.js',
        'sumstyle': './src/style/index.less',
        'codemirrorcode': 'codemirror/mode/javascript/javascript',
        'codemirror': 'codemirror/lib/codemirror.css',
        'codemirrormaterial': 'codemirror/theme/material.css',
        "icon": './src/assets/style/iconset.less'
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
            'ttk-component': path.resolve(projectRootPath, './src/ttk-component.js')
        }
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.(css|less)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "less-loader"
                    }]
                })
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