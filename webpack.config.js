//  webpack.config.js
module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
      loaders: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/}
      ]
    }
};
