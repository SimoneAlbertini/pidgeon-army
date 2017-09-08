module.exports = {
  context: __dirname + "/src",
  entry: {
  	javascript: './app.js',
  },
  
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
    ],
  },
};
