var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}]
	},
	resolve: {
		root: [path.resolve('./src')],
		extensions: ['', '.jsx', '.js']
	}
};
