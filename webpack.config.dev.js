const { VueLoaderPlugin } = require('vue-loader')

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
     }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
