const path = require('path');
module.exports = {
	entry: {
		index:'./src/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ca]?ss$/i,
				use: ['style-loader', 'css-loader', "sass-loader",],
			},
		],
	},
};