module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [{
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }]
    },
  };