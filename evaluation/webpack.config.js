const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"

    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
            }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader?name=[name].[ext]",
        }, {
            test:
            /\.css$/,
            loader: [{
                loader:
                'style-loader'
            },
            {
                loader: 'css-loader'
            }
            ]
        }
        ]
    },
    devServer: {
        contentBase: '/dist',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.join(__dirname, 'src', 'index.html')
        }),
    ]
};