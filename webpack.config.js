module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve:{
    extensions: ['./js', '.jsx'],
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    hot: true,
    overlay: true,
    writeToDisk: true,
  },
};

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), // 결과물 경로
    filename: 'bundle.js', // 결과물 파일명
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jfif$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
};



const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

