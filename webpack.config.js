module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            publicPath: './node_modules/nour-emam-button-ts/dist/components/images',
          },
        },
      ],
    },
  };



