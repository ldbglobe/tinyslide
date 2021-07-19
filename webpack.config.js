const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	//mode: 'production',
	mode: 'development',
	entry: {
		tinyslide:'./src/index.js',
		demo:'./src/demo.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			minify:false,
			template: 'src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ca]?ss$/i,
				use: ['style-loader', 'css-loader', "sass-loader",],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};