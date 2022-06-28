const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    style: './src/scss/style.scss',
    example: './src/scss/example.scss'
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
      chunkFilename:'css/[id].min.css',
    }),
  ],
};
