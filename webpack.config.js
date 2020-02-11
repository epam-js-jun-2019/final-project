const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        resolve: {
          extensions: ['.jsx', '.js']
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css/,
        resolve: {
          extensions: ['.css', '.scss', '.sass']
        },
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './assets/static/favicon.svg'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
      path: path.resolve(__dirname, '/dist')
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/images',
        to: `${path.join(__dirname, '/dist')}/assets/images`
      },
      {
        from: 'assets/fonts',
        to: `${path.join(__dirname, '/dist')}/assets/fonts`
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    progress: true,
    port: 3002,
    open: true,
    historyApiFallback: true,
    stats: 'minimal'
  }
};
