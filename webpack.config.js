const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: [
			"react-hot-loader/patch",
			path.resolve(__dirname, "src", "index.jsx")
		]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'js/bundle.js',
		publicPath: "dist",
	},
	devtool: 'source-map',
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		inline: true
	},
	module: {
		loaders: [
			{
				test: /(\.js|.jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("css-loader!sass-loader")
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "css/bundle.css",
			disable: false,
			allChunks: true
		})
	]
}
