var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
  	javascript: './app.js',
  },
  
  output: {
    filename: 'bundle.js',
    path: __dirname + "/../public/react_dist",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
