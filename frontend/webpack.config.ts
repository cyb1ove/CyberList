import path from 'path';
import { Configuration } from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

const config: Configuration = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(ttf)/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4001,
  },
  devtool: 'source-map',
};

export default config;
