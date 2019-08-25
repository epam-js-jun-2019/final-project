const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  public: path.join(__dirname, '../public'),
  assets: 'assets/'
};

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: ['@babel/polyfill', `${PATHS.src}/index.js`],
  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}js/bundle.[hash].js`,
    publicPath: '/'
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
          { loader: 'sass-loader', options: { sourceMap: true } },
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
    extensions: ['.js', '.jsx'],
    alias: {
      Assets: path.resolve(__dirname, '../src/assets/'),
      Components: path.resolve(__dirname, '../src/components/'),
      FetchAPI: path.resolve(__dirname, '../src/fetchapi/'),
      Pages: path.resolve(__dirname, '../src/pages/'),
      Redux: path.resolve(__dirname, '../src/redux/'),
      Sass: path.resolve(__dirname, '../src/sass/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.public}/index.html`,
      filename: './index.html',
      favicon: './src/assets/static/favicon.svg'
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/bundle.[hash].css`
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/assets/images`,
        to: `${PATHS.assets}images`
      },
      {
        from: `${PATHS.src}/assets/fonts`,
        to: `${PATHS.assets}/fonts`
      },
      {
        from: `${PATHS.src}/assets/static`,
        to: ''
      }
    ])
  ]
};
