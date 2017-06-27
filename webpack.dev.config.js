var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var publicPath = 'http://localhost:3002/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';


module.exports = {
    entry: {
        main: ['./app/main.js', hotMiddlewareScript],
        login: ['./app/login.js', hotMiddlewareScript],
        common: ["jquery", 'react', 'react-dom']
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "./js/bundle_[name].js",
        chunkFilename: "[name]_chunk.min.js",
        publicPath: publicPath
    },
    //devtool: 'eval-source-map',
    resolve: {
        extentions: ["", "js", "jsx"],
        alias: {
            // 'react': path.resolve(PATHS.node_modules, 'react/dist/react.js'),
            // 'react-dom': path.resolve(PATHS.node_modules, 'react-dom/dist/react-dom.js'),
            //'react-redux': path.resolve(PATHS.node_modules, 'react-redux/dist/react-redux.js'),
            //'react-router': path.resolve(PATHS.node_modules, 'react-router/lib/index.js'),
            //'redux': path.resolve(PATHS.node_modules, 'redux/dist/redux.js')
        }
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style!css')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css!less')
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=./images/[name].[ext]'
        }],
        postLoaders: [{
            test: /\.(js|jsx)?$/,
            loaders: ['es3ify-loader']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "./js/common.js"),
        new ExtractTextPlugin('./css/css_[name].css'), //单独使用style标签加载css并设置其路径
        new webpack.ProvidePlugin({ //加载jq
            $: 'jquery'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};