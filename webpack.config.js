const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Public URL path of the output directory
  },
  resolve: {
    // Configuration options for resolving module requests
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  module: {
    // Rules for transforming source files
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use preset env and react
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
        type: 'asset/resource', // Use asset/resource for handling images
      },
    ],
  },
  devServer: {
    contentBase: './dist', // Serve content from the dist directory
    historyApiFallback: true, // Enable HTML5 History API fallback
  },
};
