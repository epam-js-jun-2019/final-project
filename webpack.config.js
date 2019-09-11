const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            pokemons: path.resolve(__dirname,'/pokemons')
        },
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/ ,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
        ]
            }
        ]
    },
    devServer :{
        historyApiFallback: true,
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            path: path.resolve(__dirname, '/dist'),
        }),
    ]
}