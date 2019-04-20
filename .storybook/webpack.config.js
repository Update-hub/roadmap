const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './assets/css/lib/_variables.scss',
                './assets/css/lib/_mixins.scss',
                './assets/css/style.scss'
              ]
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          }
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            },
          }
        ],
      }
    ]
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, '../assets/'),
      '~': path.resolve(__dirname, '../')
    }
  }
};
