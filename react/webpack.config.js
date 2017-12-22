var webpack = require('webpack');
var uglify_js_plugin = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false,
  },
});

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

  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
      return [
        new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify('production') },
        }),

        // force webpack's -p to use uglify (and that's the default behaviour) removing comments
        uglify_js_plugin,
      ];
    }
    return [
      uglify_js_plugin,
    ];
  })()
};
