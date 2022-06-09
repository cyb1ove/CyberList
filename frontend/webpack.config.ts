import path from "path";
import { Configuration } from "webpack";
import * as webpackDevServer from 'webpack-dev-server';
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
  //   new ForkTsCheckerWebpackPlugin(),
    // new HTMLWebpackPlugin({
    //   template: "./build/index.html",
    // })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
};

export default config;
