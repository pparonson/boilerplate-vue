const { VueLoaderPlugin } = require('vue-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  mode: 'development',
  // entry: [
  //   './src/index.js'
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
       test: /\.vue$/,
       loader: 'vue-loader'
     },
     {
       // test: This tells Webpack that we want to handle css files.
       // loader: this tells Webpack *how* to handle css files.
       test: /\.css$/,
       loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]
}
