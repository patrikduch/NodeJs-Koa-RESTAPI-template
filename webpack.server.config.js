const webpack = require("webpack");

const TerserWebpackPlugin = require("terser-webpack-plugin");

// Module export via CommonJS style
module.exports = (env) => {
  const config = {
    target: "node", // Target environment (Node Js).

    mode: env.NODE_ENV,

    entry: {
      // Entry point of the application.
      server: "./src/App.ts",
    },

    output: {
      filename: "[name].js",
      publicPath: "/",
    },

    // Files extension that will be processed.
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },

    // Tell webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: ["ts-loader", "eslint-loader"],
        },
      ],
    },

    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            keep_fnames: true,
          },
        }),
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          // Additional variables that are passed into compilation.
          NODE_ENV: JSON.stringify(env.NODE_ENV),
        },
      }),
    ],
  };

  return config;
};
