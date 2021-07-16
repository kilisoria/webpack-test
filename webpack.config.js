const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Webpack App',
        header: 'Webpack Title',
        metaDesc: 'Webpack Example Description',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })
  ],
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 4444
  }
};