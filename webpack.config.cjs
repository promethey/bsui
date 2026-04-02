const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    library: "BootstrapUIReact",
    libraryTarget: "umd",
    globalObject: "this",
    clean: true,
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      constants: path.resolve(__dirname, "src/constants"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
