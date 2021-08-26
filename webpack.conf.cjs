const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: [
		"./lib/index.js",
		"./src/less/index.less"
	],
	output: {
		path: __dirname + "/dist",
		filename: "./photon.js"
	},
	module: {
		rules: [ {
			test: /\.js$/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.css/i,
			use: [ { loader: MiniCssExtractPlugin.loader, options: { publicPath: "./" } }, "css-loader" ]
		}, {
			test: /\.less/i,
			use: [ { loader: MiniCssExtractPlugin.loader, options: { publicPath: "./" } }, "css-loader", {
				loader: "less-loader",
				options: {
				    lessOptions: {
						plugins: [
							require("less-plugin-glob")
						]
				    }
				}
			} ]
		}, {
			test: /\.(txt|md|pem|raw)$/,
			use: [ "raw-loader" ]
		} ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "photon.css"
		})
	]
};
