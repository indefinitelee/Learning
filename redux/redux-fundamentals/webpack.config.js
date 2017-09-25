module.exports = {
  entry: {
    javascript: './app/app.js',
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: './app.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?' +
            JSON.stringify({
              presets: ['react', 'es2015'],
              plugins: [
                'syntax-class-properties',
                'syntax-decorators',
                'syntax-object-rest-spread',

                'transform-class-properties',
                'transform-object-rest-spread'
              ]
            })
        ]
      }
    ]
  }
};
