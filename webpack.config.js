const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = {
  entry: path.resolve(__dirname, 'source/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          },
        }
      }
    ],
  }
};

module.exports = webpackConfig;