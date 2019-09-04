const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-loader'
        },{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },

            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract(
                {
                  fallback: 'style-loader',
                  use: ['css-loader']
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, 
                      disable: true, 
                    },
                  },
                ],
              }
        ]
    },
    plugins: [ 
        new ExtractTextPlugin(
          {filename: 'style.css'}
        ),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: './public/index.html',
          filename: 'index.html',
          favicon: './public/favicon.ico'
        })
      ]
}
