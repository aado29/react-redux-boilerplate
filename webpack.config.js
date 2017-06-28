const path = require("path");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "src", "index.jsx")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "public",
		sourceMapFilename: "bundle.map"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		inline: true
	},
	module: {
		loaders: [{
			test: /(\.js|.jsx)$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			query: {
				presets: ["es2015", "react"]
			}
		}]
	}
}
