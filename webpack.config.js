const path = require('path'); // можно почитать больше в доке https://nodejs.org/api/path.html
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlExtractPlugin = require('html-webpack-plugin');
// https://webpack.js.org/guides/ - ссылка на гайды
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
	 // описываем правила, которые определяют, что мы будем применять к модулями
    rules: [
      {
		// регулярка, по которой мы будем определять к какому файлу, какое правило применить
        test: /\.js/,
		// есть возможность исключить какие-то файлы
        exclude: /(node_modules)/,
		// перечисляем лоадеры, которые будем применять https://webpack.js.org/concepts/#loaders
        use: 'babel-loader',
      },
      {
        test: /\.s?css/,
        use: [
   //       'style-loader',
     //     MiniCssExtractPlugin.loader,
       //   'css-loader',
         // 'sass-loader',
        ]
      }
    ]
  },
  // https://webpack.js.org/concepts/plugins/
  plugins: [
	// этот плагин генерирует index.html и добавляет тег скрипт
    new HtmlExtractPlugin({
      template: './src/index.html',
    })/*,
	// А этот плагин экстрактит стили из бандла
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
      path: path.resolve(__dirname, 'dist'),
    }),*/
  ],
}