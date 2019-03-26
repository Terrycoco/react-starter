const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { resolve } = require('path');


module.exports = merge(common, {
	devtool: "inline-source-map",
	mode: 'development',
	devServer: {
		contentBase: './dist',
		host: 'localhost',
		port: 3000,
		open: true
	}
});