/* webpack.config.js */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry tells webpack to begin building its dependency graph from this App.js file.
  entry: path.join(__dirname, 'src', 'components', 'App.js'),
  // puts the output in the `build` directory
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        //This tells Webpack that any files with the js or jsx extensions should be parsed with Babel, excluding the npm packages since most of them are already pre-transpiled anyway
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        //same but scss, chains translators
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          //Same but with images! Only tiny ones tho. Inline if smaller than 10 KB, otherwise load as a file. Dunno why file loading needs to be redefined but ohwell.
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        //Loads files?????!?!?!?
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
}
