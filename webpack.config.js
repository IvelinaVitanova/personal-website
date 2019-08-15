const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  entry: {
    main: "./javascript/entry.js",
    styles: "./scss/styles.scss",
    html: "./html/_all.html.js",
    img: "./img/_all.img.js"
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: "/static/html/index.html"
        },
        {
          from: /^.*$/,
          to: function(context) {
            return "/static/html/" + context.parsedUrl.pathname + ".html";
          }
        }
      ]
    }
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build"),
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /html/, /img/],
        use: [
          "eslint-loader"
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: { name: "[path][name].[ext]" }
        }],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: { name: "[path][name].[ext]" }
        },
        {
          loader: "nunjucks-html-loader",
          options: { searchPaths: path.resolve(__dirname, "html") }
        }]
      }
    ],
  }
};
