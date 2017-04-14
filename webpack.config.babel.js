const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/app.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      presets: ['babel-preset-react-hmre'].map(require.resolve),
    }],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  target: 'web', // Make web variables accessible to webpack, e.g. window
};
