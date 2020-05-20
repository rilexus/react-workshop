const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = (...args) => {
  console.log(`WEBPACK ARGS: ${args}`)
  return {
    entry: resolveAppPath('src'),
    mode: 'development',
    output: {
      // Development filename output
      filename: 'static/js/bundle.js',
    },
    devServer:{
      contentBase: resolveAppPath('public'),
      host,
      // Public path is root of content base
      publicPath: '/',
      hot: true,
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['dist/*', '!static-files*'],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveAppPath('public/index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    }
  }
};