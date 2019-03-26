const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/index.js',
  output: {
      filename: 'bundle.js', //name of bundled file
      //chunkFilename: '[name].js', //name of non-entry chunk files
      path: resolve(__dirname, 'dist'),  //where to put the bundles
      publicPath: "/" // This is used to generate URLs to e.g. images
  },
	module: {
		rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
			{
				test: /\.js$/,
				exclude: [resolve(__dirname, 'node_modules')],
				use: [{ loader: 'babel-loader'}]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
	    },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
      }
	  ]
	},
	resolve: {
		  extensions: [".js", "jsx"],
      alias: {
        assets:      resolve(__dirname, 'assets'),
      	actions:     resolve(__dirname, 'src', 'actions'),
        components:  resolve(__dirname, 'src', 'components'),
        lib:         resolve(__dirname, 'src', 'lib'),
        routes: 	   resolve(__dirname, 'src', 'routes'),
        store:       resolve(__dirname, 'src', 'store'),
				styles:      resolve(__dirname, 'src', 'styles'),
        test:        resolve(__dirname, 'src', 'test'),
      },
      modules: [
        resolve(__dirname, 'node_modules'),
        resolve(__dirname, 'src')
      ]
  },
	plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       template: 'src/template.html'
     })
	   
	]
}